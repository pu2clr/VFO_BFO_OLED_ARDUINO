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
    {"SW3  ", 2000000000LLU, 2000000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 6, 3},
    {"VHF1 ", 3000000000LLU, 7600000000LLU, 45500000LU, " KHz", 100000.0f, 2, 2, 7, 3},
    {"FM   ", 7600000000LLU, 10800000000LLU, 1075000000LLU, " MHz",  100000000.0f, 1, 6, 8, 7},
    {"AIR  ", 10800000000LLU, 13500000000LLU, 1075000000LLU, " MHz", 100000000.0f, 2, 2, 7, 5},
    {"VFH2 ", 13500000000LLU, 16000000000LLU, 1075000000LLU, " MHz", 100000000.0f, 2, 2, 7, 5}};
```


   | Band name | Initial Freq. (1/100 Hz) | Final Freq (1/100Hz) | offset (1/100Hz) | Initial Step Index | final Step Index | start Step Index | 
    | --------- | ------------------------ | -------------------- | ---------------- | ------------------ | ---------------- | ---------------- |  
    | MW   | 50000000LL | 170000000LL | 45500000L |  KHz| 100000.0f | 2 | 3 | 6 | 5 |
    | SW1  | 170000000LL | 1000000000LL | 45500000L  | KHz| 100000.0f | 2 | 2 | 6 | 3 |
    | SW2  | 1000000000LL | 2000000000LL | 45500000L  | KHz| 100000.0f | 2 | 2 | 6 | 3 |
    | SW3  | 2000000000LL | 2000000000LL | 45500000L  | KHz| 100000.0f | 2 | 2 | 6 | 3 |
    | VHF1 | 3000000000LL | 7600000000LL | 45500000L  | KHz| 100000.0f | 2 | 2 | 7 | 3 |
    | FM   | 7600000000LL | 10800000000LL | 1075000000LL  | MHz|  100000000.0f | 1 | 6 | 8 | 7 |
    | AIR  | 10800000000LL | 13500000000LL | 1075000000LL  | MHz| 100000000.0f | 2 | 2 | 7 | 5 |
    | VFH2 | 13500000000LL | 16000000000LL | 1075000000LL  | MHz| 100000000.0f | 2 | 2 | 7| 5 |



