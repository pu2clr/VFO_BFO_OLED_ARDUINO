# VFO and BFO project test with an inexpencive radio based on CD2003GP 

## __Documentação em Português clique [aqui](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs).__

By PU2CLR - Ricardo
April, 2019

## Table of contents

1. [Introduction](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#introduction)
2. [Display layout](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#display-layout)
3. [Schematic used with Arduino Atmega328 (UNO, Pro Mini, Nano etc)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#schematic-used-with-arduino-atmega328-uno-pro-mini-nano-etc)
4. [Schematic used with Arduino ATmega32U4 (Micro)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#schematic-used-with-arduino-atmega32u4-micro)
5. [Radio based on CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#radio-based-on-cd2003gp)
6. [Arduino Sketch](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#arduino-sketch)
7. [Step Table](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#step-table)
8. [Source folder](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/source)
   1. [Arduino sketch for Atmega328 - si5351_vfoCD2003GP_atmega328.ino](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega328)
   2. [Arduino sketch for Atmega32U4 - si5351_vfoCD2003GP_atmega32u4.ino](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega32u4) 
   3. [Arduino sketch Atmega 328 and Bluetooth BLE-HM10 - si5351_vfo_ble_atmega328.ino](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfo_ble_atmega328)
   4. [Remote control Mobile Application for Android and iOS](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/source/vfoMobileApplication)
9. [Videos](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#v%C3%ADdeos)



## Introduction

This folder has an example of using the VFO and BFO project with an inexpencive radio based on CD2003GP chip. A $6 commercial radio for receiving AM/FM broadcast was modified to be tuned by the VFO with si5351 controlled by Arduino. This experiment uses just the FM feature of the radio. 


The original Arduino sketch was modified to make make this experiment easyest. See below.

- The layout of the OLED display was adjusted 
- The amount of bands was reduced from 27 to 8. See [Band table below](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#band-table)
- Each band has a different behavior. That is, frequency unit shown on the display and steps more suitable for the specific band. See [Band table below](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP#band-table)


### Display Layout


| Layout |  Layout |
| ------ |  ------ |
| ![Displau photo 1](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_01.png)| ![Displau photo 2](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_02.png) |
| ![Displau photo 3](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_03.png)| ![Displau photo 4](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_04.png) |


## Schematic used with Arduino Atmega328 (UNO, Pro Mini, Nano etc)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/vfobfo_ir_schematic_atemega328.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega328/si5351_vfoCD2003GP_atmega328.ino) to see the sketch used on Arduino Atmega328 (schematic above).__



## Schematic used with Arduino ATmega32U4 (Micro)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/bfo_schematic.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega32u4/si5351_vfoCD2003GP_atmega32u4.ino) to see the sketch used on Arduino ATmega32U4 (schematic above).__ 


## Radio based on CD2003GP

#### CD2003GP Block Diagram

![Photo 1 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_block_diagram_01.png)

[Source - CD2003GP Datasheet](http://www.datasheetcafe.com/cd2003gp-datasheet-pdf/)

#### Application Citcuit

![Photo 2 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_application_circuit.png)

[Source - CD2003GP Datasheet](http://www.datasheetcafe.com/cd2003gp-datasheet-pdf/)


#### Inexpensive Commercial Radio
![Photo 3 - Inexpensive commercial radio](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_01.jpg)



#### Radio Modification


This experiment was based on a FM/AM commercial radio for receiving AM/FM broadcast station. 
In my first test, I isolated the pin 13 of the CD2003GP (could be also TA2003) and injected the signal from the si5351 output (CLK0). To connect the oscillator to pin 13, used a 15pf capacitor. It is the same capacitor used by the radio oscillator.




![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_02.jpg)



#### Sugested Modification

__IMPORTANTE__: Do not do this if you do not feel safe in doing so.

![Photo 2 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_application_circuit_modification.png)


![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_03.jpg)



#### Coupling

In my first test, I isolated the pin 13 of the CD2003GP (could be also TA2003) from the radio board and injected the signal from the si5351 output (CLK0). To connect the oscillator to pin 13, used a 15pf capacitor. It is the same capacitor used by the radio oscillator. The AM section was disabled in the receiver for this test.


![Coupling 01](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_01.png)


![Coupling 02](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_02.png)


![Coupling 03](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_03.png)



## Arduino Sketch 

Some original features of the VFO and BFO project was modified to adapt it better to the radio based on CD2003GP. The main modification was the band behaviour. The VFO implemented on Arduino Sketch has the follow information:  

- __Band name__ - Band name that will show on display;
- __Initial Freq.__ -  Lowest band frequency (1/100 Hz);
- __Final Freq.__ - highest frequency band (1/100 Hz);
- __offset__ - Shows on the display the frequency of the station and makes the signal generator to oscillate considering the IF (1/100 Hz);
- __Freq Unit__ - Frequency unit that will be show on the display for the current band;
- __Divider__ - Divider used to reduce the number of digits in the display;
- __decimals__ - number of decimal places after the comma;
- __Initial Step Index__ - Lowest step index used for the band (see Step table)
- __Final Step Index__ - Highest step index used for the band (see Step table) 
- __Start Step Index__ - Default step index used for the band (see Step table)
- __callback function__ - point to the function that handles specific things for the band

The implementation of the band information

```cpp
// Structure for Bands database
typedef struct
{
  char *name;
  uint64_t minFreq; // Min. frequency value for the band (unit 0.01Hz)
  uint64_t maxFreq; // Max. frequency value for the band (unit 0.01Hz)
  long long offset;
  char *unitFreq;         // MHz or KHz
  float divider;          // value that will be the divider of current clock (just to present on display)
  short decimals;         // number of digits after the comma
  short initialStepIndex; // Index to the initial step of incrementing
  short finalStepIndex;   // Index to the final step of incrementing
  short starStepIndex;    // Index to start step of incrementing
  void (*f)(void);        // pointer to the function that handles specific things for the band
} Band;
```



### Band Table 

| Band name | Initial Freq.  | Final Freq. | offset | Freq Unit | Divider | Dec. | Initial Step Index | Final Step Index | Default |
| --------- | ----------------------- | -------------------- | ---------------- | -----------------| --------------- |------------------ | ---------------- | ---------------- | -----------|  
| MW   | 50000000 | 170000000 | 45500000 |  KHz | 100000 | 2 | 3 | 6 | 5 |
| SW1  | 170000000 | 1000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| SW2  | 1000000000 | 2000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| SW3  | 2000000000 | 3000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| VHF1 | 3000000000 | 7600000000 | 45500000  | KHz | 100000 | 2 | 2 | 7 | 3 |
| FM   | 7600000000 | 10800000000 | 1075000000  | MHz |  100000000 | 1 | 6 | 8 | 7 |
| AIR  | 10800000000 | 13700000000 | 1075000000  | MHz | 100000000 | 2 | 2 | 8 | 5 |
| VHF2 | 13700000000 | 14400000000 | 1075000000  | MHz | 100000000 | 2 | 2 | 8 | 5 |
| 2M  | 14400000000 | 15000000000 | 1075000000  | MHz | 100000000 | 2 | 2 | 8 | 5 |
| VFH3 | 15000000000 | 16000000000 | 1075000000  | MHz| 100000000 | 2 | 2 | 8| 5 |


The code below implements the band table of the VFO for the radio used here. 
The values amBroadcast, fmBroadcast and NULL are function that execute some specific actions for the band. When the value is NULL, no action will be executed.  

```cpp
// Band database. You can change the band ranges if you need.
// The unit of frequency here is 0.01Hz (1/100 Hz). See Etherkit Library at https://github.com/etherkit/Si5351Arduino
Band band[] = {
    {"MW  ", 50000000LLU, 170000000LLU, 45500000LU, "KHz", 100000.0f, 0, 3, 6, 5, amBroadcast},
    {"SW1 ", 170000000LLU, 1000000000LLU, 45500000LU, "KHz", 100000.0f, 2, 1, 6, 3, amBroadcast},
    {"SW2 ", 1000000000LLU, 2000000000LLU, 45500000LU, "KHz", 100000.0f, 2, 1, 6, 3, amBroadcast},
    {"SW3 ", 2000000000LLU, 3000000000LLU, 45500000LU, "KHz", 100000.0f, 2, 1, 6, 3, amBroadcast},
    {"VHF1", 3000000000LLU, 7600000000LLU, 45500000LU, "KHz", 100000.0f, 2, 1, 7, 3, NULL},
    {"FM  ", 7600000000LLU, 10800000000LLU, 1075000000LLU, "MHz", 100000000.0f, 2, 6, 8, 7, fmBroadcast},
    {"AIR ", 10800000000LLU, 13700000000LLU, 1075000000LLU, "MHz", 100000000.0f, 3, 2, 8, 5, NULL},
    {"VHF2", 13700000000LLU, 14400000000LLU, 1075000000LLU, "MHz", 100000000.0f, 3, 2, 8, 5, NULL},
    {"2M  ", 14400000000LLU, 15000000000LLU, 1075000000LLU, "MHz", 100000000.0f, 3, 2, 8, 5, NULL},
    {"VFH3", 15000000000LLU, 16000000000LLU, 1075000000LLU, "MHz", 100000000.0f, 3, 2, 8, 5, NULL}};
```



### Step Table 

The step table is implemented by the code below.  Each band uses a subset of the band table. This will depend on the characteristics of the band.


```cpp
// Struct for step database
typedef struct
{
  char *name; // step label: 50Hz, 100Hz, 500Hz, 1KHz, 5KHz, 10KHz and 500KHz
  long value; // Frequency value (unit 0.01Hz See documentation) to increment or decrement
} Step;
```


```cpp 
// Steps database. You can change the Steps and numbers of steps here if you need.
Step step[] = {
    {"10Hz  ", 1000},
    {"100Hz ", 10000},
    {"500Hz ", 50000},
    {"1KHz  ", 100000},
    {"5KHz  ", 500000},
    {"10KHz  ",1000000},
    {"50KHz ", 5000000},
    {"100KHz", 10000000},
    {"500KHz", 50000000}};
```



| Step Index | Step name | Step Value (1/100 Hz) |
| ---------- | --------- | --------------------- | 
| 0          | 10Hz      |     1000 |
| 1          | 100Hz     |    10000 |
| 2          | 500Hz     |    50000 |
| 3          | 1KHz      |   100000 |
| 4          | 5KHz      |   500000 |
| 5          | 10KHz     |  1000000 |
| 6          | 50KHz     |  5000000 |
| 7          | 100KHz    | 10000000 |
| 8          | 500KHz    | 50000000 |



## Callback functions

This sketch uses callback functions to complement specific actions for a specific band.
For example, you will need to set the PIN 14 of the CD2003GP to HIGH if you want to work with FM.
In contrast, you need to set the PIN 14 to LOW if you want to work with AM.

The code below shows the callback functions declaration

```cpp
// Callback functions declarations
// Depending on the selected band, you may want to perform specific actions
// The functions declared below will do something for AM and FM BAND. See implementation later.
// You can implement callback function for other bands
void amBroadcast(); // See implementation later.
void fmBroadcast(); // See implementation later.
```

The callback functions above are referenced in band database (see Band band[]) above.


```cpp
// Callback implementation

// Doing something spefict for AM
// Example: set Pin 14 of the CD2003GP to LOW; switch filter, turn AM LED on etc
void amBroadcast()
{
  // TO DO
  STATUSLED(HIGH); // Just testing if it is working - Turn LED ON
}

// Doing something spefict for FM
// Example: set Pin 14 of the CD2003GP to HIGH; turn FM LED on etc
void fmBroadcast()
{
  // TO DO
  STATUSLED(LOW); // Just testing if it is working - Turn LED OFF
}
```

The code below shows the use of callback function when the use changes the band

```cpp
 if (digitalRead(BUTTON_BAND) == HIGH && (millis() - elapsedButton) > MIN_ELAPSED_TIME)
  {
    currentBand = (currentBand < lastBand) ? (currentBand + 1) : 0; // Is the last band? If so, go to the first band (AM). Else. Else, next band.
    vfoFreq = band[currentBand].minFreq;
    currentStep = band[currentBand].starStepIndex;

    // Call callback function if exist something to do for the specific  band
    if (band[currentBand].f != NULL)
      (band[currentBand].f)();

    isFreqChanged = true;
    elapsedButton = millis();
  }
```  


## Vídeos 

- [VFO and BFO project test with an inexpencive radio based on CD2003GP](https://youtu.be/_KgBc6vYWLg)
- [Testing the VFO with a CD2003GM HOMEBREW FM RECEIVER](https://youtu.be/JfgRjDK8LTE)
- [VFO and BFO remote control with iPhone via Bluetooth](https://youtu.be/7gBRUmsrCus)


