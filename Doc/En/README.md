# VFO and BFO with Si5351A and Arduino project


## Table of contents

1. [Introduction](/Doc/En#introduction) 
1. [Arduino ATmega32U4](/Doc/En#arduino-atmega32u4)
1. [BFO interface](/Doc/En#vfo-and-bfo-interface)
1. [Band table for the VFO](/Doc/En#band-table-for-the-VFO)
1. [Schematic](/Doc/En#schematic)
1. [Components](/Doc/En#components)
1. [Arduino sketch](/Doc/En#arduino-sketch)
1. [Photos](/Doc/En#photos)
1. [References](/Doc/En#references)
1. [Videos](/Doc/En#videos)


## Introduction 

The Si5351 is an I2C configurable clock generator that is very appropriate for receivers and transceivers projects in amateur radio applications. It is also suited for replacing crystal oscillators. It has three outputs that you can get three distinct frequencies at the same time. A great feature of the Si5351A is the possibility of using it with a microcontroller or platform like Arduino, PIC family and others. See more on [Silicon Labs documentation](https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf)

 **This project is about a VFO and BFO that you can control two clock outputs of the Si5351A by using the Arduino Micro (Atmega32u4).  The VFO (CLK0) can oscillate from 100KHz to 160MHz and the second (CLK1) can oscillate from 452KHz to 458KHz**. 


The <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino"> Arduino program </a> has being documented in English lenguage and you can get more details about the Si5351A controls by reading the <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">si5351_vfobfo.ino file</a>. 


## Arduino ATmega32U4

This project uses the Arduino ATmega32U4 (Known as Arduino Micro) with a built-in USB.  The ATmega32U4 has 5 pins (0,1,2, 3 and 7) that allow the developer to use for handling external interrupts. This feature is very useful in this project. See more about Arduino Micro (ATmega32U4) <a href="https://store.arduino.cc/usa/arduino-micro">here</a>.



## VFO and BFO interface

The user can control the VFO and BFO  by using tow buttons and an encoder. 


- The button __Band__ changes the range of frequency. This project divides the VFO range (from 535KHz to 160MHz) in 27 bands. See band table below;  
- The button __Step__ changes the increment and decrement step. It can be 50Hz, 100Hz, 500Hz, 1KHz, 2.5KHz, 5KHz, 10KHz, 100KHz and 500KHz;
- The button __VFO/BFO__ switches from VFO to BFO and vice-versa. It allows the user to control the VFO or BFO by using the same __Encoder__;
- The __Encoder__ is used to increment or decrement the current frequency by using the step value as a
	reference.


## Band table for the VFO

The VFO is separated into 27 bands. It first band oscilates from 100KHz to 1700 KHz and the last band oscilates from 135MHz to 160MHz. You might need to change this configuration. The [Arduino sketch section below](/Doc/En#arduino-sketch) shows how you can change the band configuration. 


<table cellspacing="0" border="0">
	<colgroup width="37"></colgroup>
	<colgroup width="91"></colgroup>
	<colgroup width="106"></colgroup>
	<colgroup width="111"></colgroup>
	<colgroup width="115"></colgroup>
	<tr>
		<td height="23" align="left">N#</td>
		<td align="left">Band</td>
		<td align="left">From</td>
		<td align="left">to</td>
		<td align="left">Description</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="1" sdnum="1046;">1</td>
		<td align="left">LW/MW </td>
		<td align="left"> 100 KHz</td>
		<td align="left"> 1.7 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="2" sdnum="1046;">2</td>
		<td align="left">SW1  </td>
		<td align="left"> 1.7 MHz</td>
		<td align="left"> 3.5 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="3" sdnum="1046;">3</td>
		<td align="left">SW2  </td>
		<td align="left"> 3.5 MHz</td>
		<td align="left"> 4.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="4" sdnum="1046;">4</td>
		<td align="left">SW3  </td>
		<td align="left"> 4.0 MHz</td>
		<td align="left"> 7.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="5" sdnum="1046;">5</td>
		<td align="left">SW4  </td>
		<td align="left"> 7.0 MHz</td>
		<td align="left"> 7.3 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="6" sdnum="1046;">6</td>
		<td align="left">SW5  </td>
		<td align="left"> 7.3 MHz</td>
		<td align="left"> 9.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="7" sdnum="1046;">7</td>
		<td align="left">SW6  </td>
		<td align="left"> 9.0 MHz</td>
		<td align="left"> 10.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="8" sdnum="1046;">8</td>
		<td align="left">SW7  </td>
		<td align="left"> 10.0 MHz</td>
		<td align="left"> 11.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="9" sdnum="1046;">9</td>
		<td align="left">SW8  </td>
		<td align="left"> 11.0 MHz</td>
		<td align="left"> 14.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="10" sdnum="1046;">10</td>
		<td align="left">SW9  </td>
		<td align="left"> 14.0 Mhz</td>
		<td align="left"> 15.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="11" sdnum="1046;">11</td>
		<td align="left">SW10 </td>
		<td align="left"> 15.0 MHz</td>
		<td align="left"> 17.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="12" sdnum="1046;">12</td>
		<td align="left">SW11 </td>
		<td align="left"> 17.0 MHz</td>
		<td align="left"> 18.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="13" sdnum="1046;">13</td>
		<td align="left">SW12 </td>
		<td align="left"> 18.0 MHz</td>
		<td align="left"> 20.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="14" sdnum="1046;">14</td>
		<td align="left">SW13 </td>
		<td align="left"> 20.0 MHz</td>
		<td align="left"> 21.35 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="15" sdnum="1046;">15</td>
		<td align="left">SW14 </td>
		<td align="left"> 21.35 MHz</td>
		<td align="left">22.00 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="16" sdnum="1046;">16</td>
		<td align="left">SW15 </td>
		<td align="left"> 22.0 MHz</td>
		<td align="left"> 24.88 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="17" sdnum="1046;">17</td>
		<td align="left">SW16 </td>
		<td align="left"> 24.88 MHz</td>
		<td align="left"> 24.99 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="18" sdnum="1046;">18</td>
		<td align="left">SW17 </td>
		<td align="left"> 24.99 MHz</td>
		<td align="left"> 26.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="19" sdnum="1046;">19</td>
		<td align="left">SW18 </td>
		<td align="left"> 26.0 MHz</td>
		<td align="left"> 28.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="20" sdnum="1046;">20</td>
		<td align="left">SW19 </td>
		<td align="left"> 28.0 MHz</td>
		<td align="left"> 30.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="21" sdnum="1046;">21</td>
		<td align="left">VHF1 </td>
		<td align="left"> 30.0 MHz</td>
		<td align="left"> 50.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="22" sdnum="1046;">22</td>
		<td align="left">VHF2 </td>
		<td align="left"> 50.0 MHz</td>
		<td align="left"> 54.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="23" sdnum="1046;">23</td>
		<td align="left">VHF3 </td>
		<td align="left"> 54.0 MHz</td>
		<td align="left"> 86.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="24" sdnum="1046;">24</td>
		<td align="left">FM   </td>
		<td align="left"> 86.0 MHz</td>
		<td align="left"> 108.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="25" sdnum="1046;">25</td>
		<td align="left">VHF4 </td>
		<td align="left"> 108.0 MHz</td>
		<td align="left"> 120.0 MHz </td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="26" sdnum="1046;">26</td>
		<td align="left">VHF5 </td>
		<td align="left"> 120.0 MHz</td>
		<td align="left"> 135.0 MHz</td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="27" sdnum="1046;">27</td>
		<td align="left">VHF6 </td>
		<td align="left"> 135.0 MHz</td>
		<td align="left"> 160.0 MHz</td>
		<td align="left"><br></td>
	</tr>
</table> 


## Schematic

The schematic was built by using [Fritzing](http://fritzing.org/home/) Software, an open-source software tools to design circuits. The schematic below shows the Arduino and components wire up.

 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="Esquema do Projeto VFO e BFO com Arduino">


## Components

- AZDelivery 1 x OLED Display Arduino 128 x 64 Pixels White 0.96 Inch I2C IIC Module for Arduino. This project uses the [Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii) Arduino library.
- Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz. This project uses the [Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino).
- One regular encoder.
- Three regular Push Button.
- Two 10nF ceramic capacitor
- Six 10K resistor
- One 1K resistor  
- Arduino Micro ([Atmega32u4](https://www.microchip.com/wwwproducts/en/ATmega32u4))

### About schematic and connections

This project uses the Arduino Atmega32u4 compatible (Micro). With this kind of Arduino, we can use up to 5 external interrupts (pins 0,1,2,3 and 7). Then pins 0,1 and 7 were used to implement the buttons command (Step, Band and switch VFO/BFO).

#### Si5351A

The device Si5351A is connected to pins D2 (SDA) and D3 (SCL).  

#### OLED Display SSD1306 - 128 x 64/0.96

The OLED Display is also connected to D2(SDA) and D3 (SCL).  

#### Encoder
The Encoder is connected to Arduino on pins D8 and D9. Connect the lead A to pin D8 and lead B to pin D9. 

#### Band push button

The Band push button is connected to pin D0/Rx (see schematic). Use this button to select one of 27 bands available.   

#### Step push button

The Step push button is connected to the pin D1/Tx. Use this button to select the increment and decrement frequency steps.   


#### VFO/BFO switch

The VFO/BFO switch push button is connected to the pin D7.   This button changes the Encoder control from VFO to BFO and vice versa.  


## Arduino sketch 

The main Arduino library used on this project to control the Si5351A was developed by NTS7. You can see more about this Library <a href="https://github.com/etherkit/Si5351Arduino">here</a>. 


If you want to modify the frequency of BFO to 10MHz (for example), just change the lines below. 

```cpp
#define MAX_BFO     1100000000LU   // BFO max. frequency 
#define CENTER_BFO  1000000000LU   // BFO center frequency
#define MIN_BFO      990000000LU   // BFO min. frequency 
```

If you need to change the Arduino pins and devices connections, you can modify the line codes below. 

```cpp
#define ENCONDER_PIN_A 8 // Arduino  D8
#define ENCONDER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO
```

The bands and ranges can be changed here. You can remove band and change frequencies modifying the array band[]. See code below. 

```cpp
// Band database. You can change the band ranges if you need.
Band band[] = {
    {"LW/MW ", 10000000LLU, 170000000LLU},     // 100KHz to 1700KHz
    {"SW1  ", 170000000LLU, 350000000LLU},
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
// Calculate the last element position (index) of the array band 
const int lastBand = (sizeof band / sizeof(Band)) - 1; // For this case will be 26.
volatile int currentBand = 0; // First band. For this case, AM is the current band.	
```


The increment and decrement steps can be changed here.

```cpp
// Steps database. You can change the Steps and numbers of steps here if you need.
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
// Calculate the index of last position of step[] array (in this case will be 8)
const int lastStepVFO = (sizeof step / sizeof(Step)) - 1; // index for max increment / decrement for VFO
volatile int lastStepBFO = 3;   // index for max. increment / decrement for BFO. In this case will be is 1KHz
volatile long currentStep = 0;  // it stores the current step index (50Hz in this case)
```

### Arduino pins and  Encoder, Band, Step and Switch VFO/BFO

The pins for encoder and push buttons are defined below. If you need to change some push button pin, you should be aware that the push buttons are connected to  pins with support to external interrupts. On Atmega32u4 you can use the pins 0,1,2,3 and 7.


```cpp
#define ENCODER_PIN_A 8 // Arduino  D8
#define ENCODER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO
```


### External interrupts


The Band, Step and Switch VFO/BFO buttons are implemented by using external interrupt resource. 
[See more about Using Interrupts on Arduino.](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/)


```cpp
  // Will stop what Arduino is doing and call changeStep(), changeBand() or switchVFOBFO 
  attachInterrupt(digitalPinToInterrupt(BUTTON_STEP), changeStep, RISING);      // whenever the BUTTON_STEP goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_BAND), changeBand, RISING);      // whenever the BUTTON_BAND goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_VFO_BFO), switchVFOBFO, RISING); // whenever the BUTTON_VFO_BFO goes from LOW to HIGH
  // wait for 1/2 second and the system will be ready.
```

The changeStep(), changeBand() and switchVFOBFO() functions implementation are shown below. 

```cpp
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
```


## SI5351 Calibration

You might need calibrate your si5351 to get more precision during signal generation. To do that you can use the si5351_calibration.ino sketch that comes with [the Si5351 library for Arduino](https://github.com/etherkit/Si5351Arduino). Click [here](https://github.com/etherkit/Si5351Arduino#calibration) to see more about si5351 calibration. You can also try watch [this Portuguese video](https://youtu.be/BJ83uvDcfIo) that show how to calibrate the si5351. Another video about si5351 calibration can be watch [here (Homebrew 80/40m SSB/CW Rig - #7a Si5351 Calibration)](https://youtu.be/fJ_3z2IAjKg).

The line code below shows the correction factor found during this project. 

```cpp
// Change this value below  (CORRECTION_FACTOR) to 0 if you do not know the correction factor of your Si5351A.
#define CORRECTION_FACTOR 80000 // See how to calibrate your Si5351A (0 if you do not want).
```

if you do not want calibrate, set CORRECTION_FACTOR to 0 as shown below. 

```cpp
#define CORRECTION_FACTOR 0 
```


## Photos

#### Photo 01
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_01.jpg" alt="Prototype01">

#### Photo 02
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_02.jpg" alt="Prototype02">

#### Photo 03
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_03.jpg" alt="Prototype03">



## References

- [BFO Controlled by Arduino](https://github.com/pu2clr/BFO)
- [Arduino](https://www.arduino.cc)
- [Arduino Micro Pinout](http://pinoutguide.com/Electronics/arduino_micro_pinout.shtml)
- [Atmega32u4](https://www.microchip.com/wwwproducts/en/ATmega32u4)
- [Arduino Interrupts](https://www.arduino.cc/reference/en/language/functions/interrupts/interrupts/)
- [All About Arduino Libraries](http://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use)
- [Tutorial: Arduino and the I2C bus – Part One](https://tronixstuff.com/2010/10/20/tutorial-arduino-and-the-i2c-bus/)
- [Arduino Frequency Synthesiser Using 160MHz Si5351, lingib](https://www.instructables.com/id/Arduino-Frequency-Synthesiser-Using-160MHz-Si5351/)
- [Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii)
- [Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino)
- [Si5351 calibration](https://github.com/etherkit/Si5351Arduino#calibration)
- [Silicon Labs Si5351A/B/C-B](https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf)
- [Fritzing](http://fritzing.org/home/)
- [My ham radio Facebook](https://www.facebook.com/PU2CLR)
- [QRZ - Biografy and my ham radio page](https://www.qrz.com/db/PU2CLR)



## Videos

- [BFO with SI5351 and Arduino test with REDSUN RP2100](https://youtu.be/AG9XZ8bdaNM)
- [VFO and BFO with Si5351A controlled by Arduino](https://youtu.be/pFDvcIk5EAk)
- [VFO e BFO com Si5351A e Arduino - Calibração do Si5351](https://youtu.be/BJ83uvDcfIo)
- [VFO e BFO com o Si5351 e OLED controlado por Arduino - (Portuguese)](https://youtu.be/0sGL2KpOJH4)
- [Homebrew 80/40m SSB/CW Rig - #7a Si5351 Calibration](https://youtu.be/fJ_3z2IAjKg)
- [Arduino Signal Generator](https://www.youtube.com/watch?v=7M6ghR9tuTk)
- [Arduino Tutorial: OLED 0.96" I2C/SPI Display](https://www.youtube.com/watch?v=PrIAnDZ9dp8)
- [Tutorial on I2C OLED Display with Arduino/NodeMCU](https://www.youtube.com/watch?v=_e_0HJY0uIo)





