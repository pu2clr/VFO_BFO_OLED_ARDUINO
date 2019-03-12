
/*
  Program to control the "Adafruit Si5351A Clock Generator" or similar via Arduino.
  This program control the frequencies os two clocks (CLK) output of the Si5351A

  The CLK 0 can be used as a VFO (2MHz to 150MHz)
  The CLK 1 can be used as a BFO (440KHz to 460KHz)

  See on https://github.com/etherkit/Si5351Arduino  and know how to calibrate your Si5351
  See also the example Etherkit/si5251_calibration

  Author: Ricardo Lima Caratti (PU2CLR)
  2019/03/07
*/

// #include <SPI.h>
#include <Encoder.h>
#include <si5351.h>
#include <Wire.h>
#include "SSD1306Ascii.h"
#include "SSD1306AsciiAvrI2c.h"

// Enconder constants
#define ENCONDER_PIN_A 5 // Arduino  D5
#define ENCONDER_PIN_B 6 // Arduino  D6

// OLED Diaplay constants
// 0X3C+SA0 - 0x3C or 0x3D
#define I2C_ADDRESS 0x3C
// Define proper RST_PIN if required.
#define RST_PIN -1

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
SSD1306AsciiAvrI2c display;

// Local constants
#define CORRECTION_FACTOR -180000 // See how to calibrate your si5351 (0 if you do not want)

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO

#define STATUS_LED 10 // Arduino status LED
#define STATUSLED(ON_OFF) digitalWrite(STATUS_LED, ON_OFF)
#define MIN_ELAPSED_TIME 20

Si5351 si5351;

Encoder rotaryEncoder(ENCONDER_PIN_A, ENCONDER_PIN_B);

typedef struct
{
  char *name;
  uint64_t minFreq;
  uint64_t maxFreq;
} Band;

// Band information: See  https://en.wikipedia.org/wiki/Radio_spectrum
Band band[] = {
    {"AM ", 53500000LU, 170000000LU},
    {"SW1", 170000001LU, 400000000LU},
    {"SW2", 400000001LU, 900000000LU},
    {"SW3", 900000001LU, 1300000000LU},
    {"SW4", 1300000001LU, 2000000000LU},
    {"SW5", 2100000001LU, 3000000000LU}
    // {"VHF", 3000000001LU, 15000000000LU}
};

// Calculate the last element position of the array band
volatile int lastBand = 5;    //sizeof band / sizeof(Band);
volatile int currentBand = 0; // AM is the current band

typedef struct
{
  char *name; // step name: 100Hz, 500Hz, 1KHz, 5KHz
  long value; // Frequency to increment or decrement
} Step;

Step step[] = {
    {"100Hz ", 10000},
    {"500Hz ", 50000},
    {"1KHz  ", 100000},
    {"2.5KHz", 250000},
    {"5KHz  ", 500000},
    {"10KHz ", 1000000}};

volatile int lastStep = 5;
volatile long currentStep = 0;

volatile boolean isFreqChanged = false;
volatile boolean clearDisplay  = false;

// AM is the default band
volatile uint64_t vfoFreq = band[currentBand].minFreq; // VFO starts on AM
volatile uint64_t bfoFreq = 45500000LU;                // 455 KHz -  BFO

volatile int currentClock = 0; // If 0, the clock 0 (VFO) will be controlled else the clock 1 (BFO) will be

long volatile elapsedTimeInterrupt = millis(); // will control the minimum time to process an interrupt action
long elapsedTimeEncoder = millis();

int enconderCurrentPosition = 0;
int enconderPosition = 0;

void setup()
{

  Serial.begin(9600);

  pinMode(STATUS_LED, OUTPUT);

  blinkLed(STATUS_LED, 100);
  STATUSLED(LOW);

  // ***** Initiating the OLED Display
  display.begin(&Adafruit128x64, I2C_ADDRESS);

  display.setFont(Adafruit5x7);
  display.set2X();
  display.clear();
  display.println("PU2CLR");
  delay(3000);
  display.clear();

  displayDial();

  // ***** Initiating the Signal Generator (si5351)
  si5351.init(SI5351_CRYSTAL_LOAD_8PF, 0, 0);
  //Adjusting the frequency (see how to calibrate the Si5351
  si5351.set_correction(CORRECTION_FACTOR, SI5351_PLL_INPUT_XO);

  si5351.set_pll(SI5351_PLL_FIXED, SI5351_PLLA);

  si5351.set_freq(vfoFreq, SI5351_CLK0);
  si5351.set_freq(bfoFreq, SI5351_CLK1);

  si5351.update_status();

  // Stop what Arduino is doing and call changeStep() whenever the pin state (BUTTON_STEP) goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_STEP), changeStep, RISING);
  // Same idea before. In this case, call changeBand() whenever BUTTON_BAND is pressed
  attachInterrupt(digitalPinToInterrupt(BUTTON_BAND), changeBand, RISING);
  // Same idea before. In this case, call switchVFOBFO() whenever BUTTON_VFO_BFO is pressed
  attachInterrupt(digitalPinToInterrupt(BUTTON_VFO_BFO), switchVFOBFO, RISING);

  // delay(1000);
}

// Blink the STATUS LED
void blinkLed(int pinLed, int blinkDelay)
{
  for (int i = 0; i < 5; i++)
  {
    STATUSLED(HIGH);
    delay(blinkDelay);
    STATUSLED(LOW);
    delay(blinkDelay);
  }
}

// Considere utilizar este código para limpar o OLED mais rápido
// ref: https://github.com/greiman/SSD1306Ascii/issues/38
void fastClear()
{
  for (uint8_t r = 0; r < 8; r++)
  {
    // set row to clear
    display.setCursor(0, r);
    // Wire has 32 byte buffer so send 8 packets of 17 bytes.
    for (uint8_t b = 0; b < 8; b++)
    {
      Wire.beginTransmission(I2C_ADDRESS);
      Wire.write(0X40);
      for (uint8_t i = 0; i < 16; i++)
      {
        Wire.write(0);
      }
      Wire.endTransmission();
    }
  }
  display.setCursor(0, 0);
}

// Show Signal Generator Information
// Verificar setCursor() em https://github.com/greiman/SSD1306Ascii/issues/53
//
void displayDial()
{
  unsigned long vfo = vfoFreq / 10000;
  unsigned long bfo = bfoFreq / 10000;

  // display.setCursor(0,0)
  // display.clear();
  display.set2X();
  display.setCursor(0, 0);
  display.print("VFO:");
  display.print(vfo);

   display.print("\nBFO:");
  display.print(bfo);

  display.set1X();

  display.print("\n\n\nBand: ");
  display.print(band[currentBand].name);

   display.print("\nStep: ");
  display.print(step[currentStep].name);


  display.print("\n\nCtrl: ");
  display.print( (currentClock)? "BFO": "VFO");


}

// Change the frequency (increment or decrement)
// direction parameter is 1 (clockwise) or -1 (counter-clockwise)
void changeFreq(int direction)
{
  if (currentClock == 0)
  { // Check who will be chenged (VFO or BFO)
    vfoFreq += step[currentStep].value * direction;
    // Check the VFO limits
    if (vfoFreq > band[currentBand].maxFreq) // Max. VFO frequency for the current band
      vfoFreq = band[currentBand].minFreq;
    else if (vfoFreq < band[currentBand].minFreq) // Min. VFO frequency for the band
      vfoFreq = band[currentBand].maxFreq;
  }
  else
  {
    bfoFreq += step[currentStep].value * direction; // currentStep * direction;

    // Check the BFO limits
    if (bfoFreq > 56000000LU) // Max. BFO: 560KHz
      bfoFreq = 35000000LU;
    else if (bfoFreq < 35000000LU) // Min. BFO: 350KHz
      bfoFreq = 56000000LU;
  }
  isFreqChanged = true;
}

// Change frequency increment rate
void changeStep()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                       // nothing to do if the time less than MIN_ELAPSED_TIME milisecounds
  cli();                                                          // disable global interrupts:
  currentStep = (currentStep < lastStep) ? (currentStep + 1) : 0; // Increment the step or go back to the first
  isFreqChanged = true;
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  sei(); // enable interrupts
}

// Change band
void changeBand()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                       // nothing to do if the time less than 11 milisecounds
  cli();                                                          //  disable global interrupts:
  currentBand = (currentBand < lastBand) ? (currentBand + 1) : 0; // Is the last band? If so, go to the first band (AM). Else. Else, next band.
  vfoFreq = band[currentBand].minFreq;
  isFreqChanged = true;
  elapsedTimeInterrupt = millis();
  sei(); // enable interrupts
}

// Switch the Encoder control from VFO to BFO and virse versa.
void switchVFOBFO()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return; // nothing to do if the time less than 11 milisecounds
  cli();    //  disable global interrupts:
  currentClock = !currentClock;
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  sei(); // enable interrupts
}

// main loop
void loop()
{
  // Read the Encoder
  // Next Enconder action can be processed after 5 milisecounds
  if (1) //(millis() - elapsedTimeEncoder) > 5)
  {
    enconderCurrentPosition = rotaryEncoder.read();
    if (enconderCurrentPosition != enconderPosition)
    {
      // change the frequency - clockwise (1) or counter-clockwise (-1)
      changeFreq((enconderCurrentPosition < enconderPosition) ? -1 : 1);
      enconderPosition = enconderCurrentPosition;
    }
    elapsedTimeEncoder = millis();  // keep elapsedTimeEncoder updated
  }
  // check if some action changed the frequency
  if (isFreqChanged)  
  {
    if (currentClock == 0)
    {
      si5351.set_freq(vfoFreq, SI5351_CLK0);
    }
    else
    {
      si5351.set_freq(bfoFreq, SI5351_CLK1);
    }
    isFreqChanged = false;
    displayDial();
  } else if ( clearDisplay ) {
    display.clear();
    displayDial();
    clearDisplay = false;
  }
}
