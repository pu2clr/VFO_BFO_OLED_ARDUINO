
/*
  Program to control the "Adafruit Si5351A Clock Generator" or similar via Arduino.
  This program control the frequencies of two clocks (CLK) output of the Si5351A
  The CLK 0 can be used as a VFO (2MHz to 150MHz)
  The CLK 1 can be used as a BFO (440KHz to 460KHz)
  See on https://github.com/etherkit/Si5351Arduino  and know how to calibrate your Si5351
  See also the example Etherkit/si5251_calibration
  Author: Ricardo Lima Caratti (PU2CLR) -   2019/03/07
*/

#include <si5351.h>
#include <Wire.h>
#include "SSD1306Ascii.h"
#include "SSD1306AsciiAvrI2c.h"

// Enconder PINs
#define ENCONDER_PIN_A 14 // Arduino  D14
#define ENCONDER_PIN_B 16 // Arduino  D16

// OLED Diaplay constants
#define I2C_ADDRESS 0x3C
#define RST_PIN -1 // Define proper RST_PIN if required.

// Change this value below  (CORRECTION_FACTOR) to 0 if you do not know the correction factor of your Si5351A.
#define CORRECTION_FACTOR 80000 // See how to calibrate your Si5351A (0 if you do not want).

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO

#define MAX_BFO     50000000LU    // BFO max. frequency
#define CENTER_BFO  45500000LU    // BFO center frequency
#define MIN_BFO     40000000LU    // BFO min. frequency

#define STATUS_LED 10 // Arduino status LED Pin 10
#define STATUSLED(ON_OFF) digitalWrite(STATUS_LED, ON_OFF)
#define MIN_ELAPSED_TIME 300

// OLED - Declaration for a SSD1306 display connected to I2C (SDA, SCL pins)
SSD1306AsciiAvrI2c display;

// I'm using in this project the Adafruit Si5351A
Si5351 si5351;

// Structure for Bands database
typedef struct
{
  char *name;
  uint64_t minFreq; // Min. frequency value for the band (unit 0.01Hz)
  uint64_t maxFreq; // Max. frequency value for the band (unit 0.01Hz)
} Band;

// Band database:  More information see  https://en.wikipedia.org/wiki/Radio_spectrum
Band band[] = {
    {"AM   ", 53500000LLU, 170000000LLU},     // 535KHz to 1700KHz
    {"SW1  ", 170000001LLU, 350000000LLU},
    {"SW2  ", 350000000LLU, 400000001LLU},
    {"SW3  ", 400000000LLU, 700000000LLU},
    {"SW4  ", 700000000LLU, 730000000LLU},    // 7MHz to 7.3 MHz  (Amateur 40m)
    {"SW5  ", 730000000LLU, 900000000LLU},    // 41m
    {"SW6  ", 900000000LLU, 1000000000LLU},   // 31m
    {"SW7  ", 1000000000LLU, 1100000000LLU},  // 10 MHz to 11 MHz (Amateur 30m)
    {"SW8  ", 1100000000LLU, 1400000000LLU},  // 25 and 22 meters
    {"SW9  ", 1400000000LLU, 1500000000LLU},  // 14MHz to 15Mhz (Amateur 20m)
    {"SW10 ", 1500000000LLU, 1700000000LLU},  // 19m
    {"SW11 ", 1700000000LLU, 1800000000LLU},  // 16m
    {"SW12 ", 1800000000LLU, 2000000000LLU}, // 18MHz to 20Mhz (Amateur and comercial 15m)
    {"SW13 ", 2000000000LLU, 2135000000LLU}, // 20MHz to 22Mhz (Amateur and comercial 15m/13m)
    {"SW14 ", 2135000000LLU, 2200000000LLU},
    {"SW15 ", 2235000000LLU, 2498000000LLU},
    {"SW16 ", 2488000000LLU, 2499000000LLU}, // 24.88MHz to 24.99MHz (Amateur 12m)
    {"SW17 ", 2499000000LLU, 2600000000LLU},
    {"SW18 ", 2600000000LLU, 2800000000LLU},
    {"SW19 ", 2800000000LLU, 3000000000LLU}, // 28MHz to 30MHz (Amateur 10M)
    {"VHF1 ", 3000000000LLU, 5000000000LLU},
    {"VHF2 ", 5000000000LLU, 5400000000LLU},
    {"VHF3 ", 5400000000LLU, 8600000000LLU},
    {"FM   ", 8600000000LLU, 10800000000LLU},  // Comercial FM
    {"VHF4 ", 10800000000LLU, 12000000000LLU}, // 108MHz to 160MHz
    {"VHF5 ", 12000000000LLU, 13500000000LLU},
    {"VHF6 ", 13500000000LLU, 16000000000LLU}};

// Last element position of the array band
volatile int lastBand = 26;   //sizeof band / sizeof(Band);
volatile int currentBand = 0; // AM is the current band

// Struct for step database
typedef struct
{
  char *name; // step label: 50Hz, 100Hz, 500Hz, 1KHz, 5KHz, 10KHz and 500KHz
  long value; // Frequency value (unit 0.01Hz See documentation) to increment or decrement
} Step;

Step step[] = {
    {"50Hz  ", 5000},         // VFO and BFO min. increment / decrement 
    {"100Hz ", 10000},
    {"500Hz ", 50000},
    {"1KHz  ", 100000},       // BFO max. increment / decrement
    {"2.5KHz", 250000},
    {"5KHz  ", 500000},
    {"10KHz ", 1000000},
    {"100KHz", 10000000},
    {"500KHz", 50000000}};    // VFO max. increment / decrement

volatile int lastStepVFO = 8;   // index for max increment / decrement for VFO
volatile int lastStepBFO = 3;   // index for max. increment / decrement for BFO is 1KHz
volatile long currentStep = 0;  // it stores the current step index

volatile boolean isFreqChanged = false;
volatile boolean clearDisplay = false;

// AM is the default band
volatile uint64_t vfoFreq = band[currentBand].minFreq; // VFO starts on AM
volatile uint64_t bfoFreq = 45500000LU;                // 455 KHz -  BFO

// VFO is the Si5351A CLK0 
// BFO is the Si5351A CLK1
volatile int currentClock = 0; // If 0, then VFO will be controlled else the BFO will be

long volatile elapsedTimeInterrupt = millis(); // will control the minimum time to process an interrupt action
long elapsedTimeEncoder = millis();

// Encoder variable control
unsigned char encoder_pin_a;
unsigned char encoder_prev = 0;
unsigned char encoder_pin_b;

void setup()
{
  // LED Pin
  pinMode(STATUS_LED, OUTPUT);
  // Encoder pins
  pinMode(ENCONDER_PIN_A, INPUT);
  pinMode(ENCONDER_PIN_B, INPUT);
  // Si5351 contrtolers pins
  pinMode(BUTTON_BAND, INPUT);
  pinMode(BUTTON_STEP, INPUT);
  pinMode(BUTTON_VFO_BFO, INPUT);
  // The sistem is alive
  blinkLed(STATUS_LED, 100);
  STATUSLED(LOW);
  // Initiating the OLED Display
  display.begin(&Adafruit128x64, I2C_ADDRESS);
  display.setFont(Adafruit5x7);
  display.set2X();
  display.clear();
  display.print("\n PU2CLR");
  delay(3000);
  display.clear();
  displayDial();
  // Initiating the Signal Generator (si5351)
  si5351.init(SI5351_CRYSTAL_LOAD_8PF, 0, 0);
  // Adjusting the frequency (see how to calibrate the Si5351 - example si5351_calibration.ino)
  si5351.set_correction(CORRECTION_FACTOR, SI5351_PLL_INPUT_XO);
  si5351.set_pll(SI5351_PLL_FIXED, SI5351_PLLA);
  si5351.set_freq(vfoFreq, SI5351_CLK0);          // Start CLK0 (VFO)
  si5351.set_freq(bfoFreq, SI5351_CLK1);          // Start CLK1 (BFO)
  si5351.update_status();
  // Show the initial system information
  delay(500);
  // Will stop what Arduino is doing and call changeStep(), changeBand() or switchVFOBFO 
  attachInterrupt(digitalPinToInterrupt(BUTTON_STEP), changeStep, RISING);      // whenever the BUTTON_STEP goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_BAND), changeBand, RISING);      // whenever the BUTTON_BAND goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_VFO_BFO), switchVFOBFO, RISING); // whenever the BUTTON_VFO_BFO goes from LOW to HIGH
  // wait for 4 seconds and the system will be ready.
  delay(500);
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

// Show Signal Generator Information
// Verificar setCursor() em https://github.com/greiman/SSD1306Ascii/issues/53
void displayDial()
{
  double vfo = vfoFreq / 100000.0;
  double bfo = bfoFreq / 100000.0;

  // display.setCursor(0,0)
  // display.clear();
  display.set2X();
  display.setCursor(0, 0);
  display.print(" ");
  display.print(vfo);
  display.print(" ");

  display.set1X();
  display.print("\n\n\nBFO.: ");
  display.print(bfo);

  display.print("\nBand: ");
  display.print(band[currentBand].name);

  display.print("\nStep: ");
  display.print(step[currentStep].name);

  display.print("\n\nCtrl: ");
  display.print((currentClock) ? "BFO" : "VFO");
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
    if (bfoFreq > MAX_BFO || bfoFreq < MIN_BFO) // BFO goes to center if it is out of the limits
      bfoFreq = CENTER_BFO;
  }
  isFreqChanged = true;
}

// Change frequency increment rate
void changeStep()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                            // nothing to do if the time less than MIN_ELAPSED_TIME milisecounds
  noInterrupts();                                                      //// disable global interrupts:
  if (currentClock == 0)                                               // Is VFO
    currentStep = (currentStep < lastStepVFO) ? (currentStep + 1) : 0; // Increment the step or go back to the first
  else                                                                 // Is BFO
    currentStep = (currentStep < lastStepBFO) ? (currentStep + 1) : 0;
  isFreqChanged = true;
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}

// Change band
void changeBand()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                       // nothing to do if the time less than 11 milisecounds
  noInterrupts();                                                 //  disable global interrupts:
  currentBand = (currentBand < lastBand) ? (currentBand + 1) : 0; // Is the last band? If so, go to the first band (AM). Else. Else, next band.
  vfoFreq = band[currentBand].minFreq;
  isFreqChanged = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}

// Switch the Encoder control from VFO to BFO and virse versa.
void switchVFOBFO()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;       // nothing to do if the time less than 11 milisecounds
  noInterrupts(); //  disable global interrupts:
  currentClock = !currentClock;
  currentStep = 0; // go back to first Step (100Hz)
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}

// main loop
void loop()
{
  // Enconder action can be processed after 5 milisecounds 
  if ( (millis() - elapsedTimeEncoder) > 5) {
    encoder_pin_a = digitalRead(ENCONDER_PIN_A); 
    encoder_pin_b = digitalRead(ENCONDER_PIN_B);
    if ((!encoder_pin_a) && (encoder_prev)) // has ENCONDER_PIN_A gone from high to low?
    { // if so,  check ENCONDER_PIN_B. It is high then clockwise (1) else counter-clockwise (-1)
      changeFreq( ((encoder_pin_b)? 1:-1) );
    }
    encoder_prev = encoder_pin_a;
    elapsedTimeEncoder = millis(); // keep elapsedTimeEncoder updated
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
  }
  else if (clearDisplay)
  {
    display.clear();
    displayDial();
    clearDisplay = false;
  }
}