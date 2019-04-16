# VFO and BFO project with a inexpencive radio based on CD2003GP 

## Table of contents




## Introduction

This folder has an example of using the VFO and BFO project with a inexpencive radio based on CD2003GP chip. A $6 comercial radio was modified to be tuned by the VFO with si5351 controlled by Arduino. 



### 

#### Photo one
![Photo One](/images/BFO_01.png)

#### Photo two
![Photo Two](/images/BFO_02.png)

#### Photo three
![Photo Three](/images/BFO_03.png)



## Components

- AZDelivery 1 x OLED Display Arduino 128 x 64 Pixels White 0.96 Inch I2C IIC Module for Arduino. This project uses the [Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii) Arduino library.
- Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz. This project uses the [Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino).
- One regular encoder.
- Three regular Push Button.
- Two 10nF ceramic capacitor
- Six 10K resistor
- One 1K resistor  
- Arduino Micro ([Atmega32u4](https://www.microchip.com/wwwproducts/en/ATmega32u4))

## BFO interface

The user can control the BFO  by using tow buttons and an encoder. 

- The __Step button__ changes the increment and decrement step. It can be 10Hz, 50Hz or 100Hz. The BFO can oscilate from 452KHz to 458KHz. You can change this range and frequency if necessary. 
- The __Reset VFO button__ sets the  BFO to central frequency (455KHz);
- The __Turn On/Off BFO button__  turns on or off the BFO. If it is pressed, alternates On and off. BFO off means no output signal.   

## Schematic

The schematic was built by using [Fritzing](http://fritzing.org/home/) Software, an open-source software tools to design circuits. See folder [schematic](https://github.com/pu2clr/BFO/tree/master/schematic).

 <img src="https://github.com/pu2clr/BFO/blob/master/schematic/bfo_schematic.png" alt="BFO schematic">


## Arduino pins and  Encoder, Step, Reset BFO and Turn On or Off commands

This section shows some aspects of the BFO [Arduino sketch](https://github.com/pu2clr/BFO/blob/master/source/si5351_bfo.ino) implementation. 

The pins for encoder and push buttons are defined bellow. If you need to change some push button pin, you should be aware that the push buttons are connected to  pins with external interrupts support. On Atmega32u4 you can use the pins 0,1,2,3 and 7, on 328-based (Nano, Mini, Uno) you can use the pins 2 and 3.

The short code below is part of the [Arduino sketch](https://github.com/pu2clr/BFO/blob/master/source/si5351_bfo.ino) and shows the enconder and push buttons setup.

```cpp
#define ENCODER_PIN_A 8 // Arduino  D8
#define ENCODER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0   // Control the frequency increment and decrement
#define BUTTON_RST 1    // Set the frequency to central position
#define BUTTON_ON_OFF 7 // Turn BFO ON or OFF
```


The short code below shows the BFO frequency setup.

```cpp
// BFO range for this project is 4520KHz to 458KHz. The central frequency is 455KHz. 
#define MAX_BFO     45800000LU    // BFO max. frequency
#define CENTER_BFO  45500000LU    // BFO center frequency
#define MIN_BFO     45200000LU    // BFO min. frequency
```

The unit of frequency is 0.01Hz (1/100 Hz). See [Etherkit Library](https://github.com/etherkit/Si5351Arduino). 

You might need a different BFO frequency. If you want to modify the central frequency of BFO to 10MHz (for example), just change the lines below.

```cpp
#define MAX_BFO     1100000000LU   // BFO max. frequency (11MHz)
#define CENTER_BFO  1000000000LU   // BFO center frequency (10MHz)
#define MIN_BFO      990000000LU   // BFO min. frequency (9MHz)
```

The buttons were implemented by using Arduino interrupts resource. The code bellow shows it. 

```cpp
// Will stop what Arduino is doing call the function associated to the button
attachInterrupt(digitalPinToInterrupt(BUTTON_STEP), changeStep, RISING); // whenever the BUTTON_STEP is pressed call changeStep
attachInterrupt(digitalPinToInterrupt(BUTTON_RST), resetBfo, RISING);    // whenever the BUTTON_RST is pressed  call resetBfo
attachInterrupt(digitalPinToInterrupt(BUTTON_ON_OFF), bfoOnOff, RISING); // whenever the BUTTON_ON_OFF is pressed  call bfoOnOff
```

## SI5351 Calibration

You might need calibrate your si5351 to get more precision during signal generation. To do that you can use the si5351_calibration.ino sketch that comes with [the Si5351 library for Arduino](https://github.com/etherkit/Si5351Arduino). Click [here](https://github.com/etherkit/Si5351Arduino#calibration) to see more about si5351 calibration. You can also try watch [this Portuguese video](https://youtu.be/BJ83uvDcfIo) that show how to calibrate the si5351. Another video about si5351 calibration can be watch [here (Homebrew 80/40m SSB/CW Rig - #7a Si5351 Calibration)](https://youtu.be/fJ_3z2IAjKg).

The line code bellow shows the correction factor found during this project. 

```cpp
// Change this value bellow  (CORRECTION_FACTOR) to 0 if you do not know the correction factor of your Si5351A.
#define CORRECTION_FACTOR 80000 // See how to calibrate your Si5351A (0 if you do not want).
```

if you do not want calibrate, set CORRECTION_FACTOR to 0 as shown bellow. 

```cpp
#define CORRECTION_FACTOR 0 
```



## References

- [Arduino](https://www.arduino.cc)
- [Arduino Micro Pinout](http://pinoutguide.com/Electronics/arduino_micro_pinout.shtml)
- [Atmega32u4](https://www.microchip.com/wwwproducts/en/ATmega32u4)
- [Arduino Interrupts](https://www.arduino.cc/reference/en/language/functions/interrupts/interrupts/)
- [Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii)
- [Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino)
- [Si5351 calibration](https://github.com/etherkit/Si5351Arduino#calibration)
- [Fritzing](http://fritzing.org/home/)
- [My ham radio Facebook](https://www.facebook.com/PU2CLR)
- [QRZ - Biografy and my ham radio page](https://www.qrz.com/db/PU2CLR)



## Videos about this project

- [BFO with SI5351 and Arduino test with REDSUN RP2100](https://youtu.be/AG9XZ8bdaNM)
- [VFO and BFO with Si5351A controlled by Arduino](https://youtu.be/pFDvcIk5EAk)
- [VFO e BFO com Si5351A e Arduino - Calibração do Si5351](https://youtu.be/BJ83uvDcfIo)
- [VFO e BFO com o Si5351 e OLED controlado por Arduino - (Portuguese)](https://youtu.be/0sGL2KpOJH4)
- [Homebrew 80/40m SSB/CW Rig - #7a Si5351 Calibration](https://youtu.be/fJ_3z2IAjKg).


