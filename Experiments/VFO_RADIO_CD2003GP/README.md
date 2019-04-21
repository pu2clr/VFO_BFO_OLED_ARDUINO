# VFO and BFO project test with an inexpencive radio based on CD2003GP 

## Table of contents




## Introduction

This folder has an example of using the VFO and BFO project with an inexpencive radio based on CD2003GP chip. A $6 commercial radio was modified to be tuned by the VFO with si5351 controlled by Arduino. 


## Schematic used with Arduino Atmega328 (UNO, Pro Mini, Nano etc)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/vfobfo_ir_schematic_atemega328.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega328/si5351_vfoCD2003GP_atmega328.ino) to see the sketch used on Arduino Atmega328 (schematic above).__



## Schematic used with Arduino ATmega32U4 (Micro)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/bfo_schematic.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP/si5351_vfoCD2003GP.ino) to see the sketch used on Arduino ATmega32U4 (schematic above).__



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



![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_02.jpg)



#### Sugested Modification

__IMPORTANTE__: Do not do this if you do not feel safe in doing so.

![Photo 2 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_application_circuit_modification.png)


![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_03.jpg)




## Arduino Sketch 



```cpp
// Band database. You can change the band ranges if you need.
// The unit of frequency here is 0.01Hz (1/100 Hz). See Etherkit Library at https://github.com/etherkit/Si5351Arduino
Band band[] = {
    {"MW   ", 50000000LLU, 170000000LLU, 45500000LU, " KHz", 100000.0f, 2, 3, 6, 5},
    {"SW1  ", 170000000LLU, 1000000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 6, 3},
    {"SW2  ", 1000000000LLU, 2000000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 6, 3},
    {"SW3  ", 2000000000LLU, 3000000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 6, 3},
    {"VHF1 ", 3000000000LLU, 7600000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 7, 3},
    {"FM   ", 7600000000LLU, 10800000000LLU, 1075000000LLU, " MHz",  100000000.0f, 1, 6, 8, 7},
    {"AIR  ", 10800000000LLU, 13500000000LLU, 1075000000LLU, " MHz", 100000000.0f, 2, 2, 7, 5},
    {"VFH2 ", 13500000000LLU, 16000000000LLU, 1075000000LLU, " MHz", 100000000.0f, 2, 2, 7, 5}};
```

The table below has the following information:

- __Band name__ - Band name that will show on display;
- __Initial Freq.__ -  Lowest band frequency (1/100 Hz);
- __Final Freq.__ - highest frequency band (1/100 Hz);
- __offset__ - Shows on the display the frequency of the station and makes the signal generator to oscillate considering the IF (1/100 Hz);
- __Freq Unit__ - Frequency unit that will be show on the display for the current band;
- __Divider__ - Divider used to reduce the number of digits in the display;
- __Initial Step Index__ - Lowest step index used for the band (see Step table)
- __Final Step Index__ - Highest step index used for the band (see Step table) 
- __Start Step Index__ - Default step index used for the band (see Step table)


### Band Table 

| Band name | Initial Freq.  | Final Freq. | offset | Freq Unit | Divider | Initial Step Index | Final Step Index | Start Step Index |
| --------- | ----------------------- | -------------------- | ---------------- | -----------------| --------------- |------------------ | ---------------- | ---------------- |  
| MW   | 50000000 | 170000000 | 45500000 |  KHz | 100000 | 2 | 3 | 6 | 5 |
| SW1  | 170000000 | 1000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| SW2  | 1000000000 | 2000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| SW3  | 2000000000 | 3000000000 | 45500000  | KHz | 100000 | 2 | 2 | 6 | 3 |
| VHF1 | 3000000000 | 7600000000 | 45500000  | KHz | 100000 | 2 | 2 | 7 | 3 |
| FM   | 7600000000 | 10800000000 | 1075000000  | MHz |  100000000 | 1 | 6 | 8 | 7 |
| AIR  | 10800000000 | 13500000000 | 1075000000  | MHz | 100000000 | 2 | 2 | 7 | 5 |
| VFH2 | 13500000000 | 16000000000 | 1075000000  | MHz| 100000000 | 2 | 2 | 7| 5 |


### Step Table 

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






