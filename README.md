# VFO and BFO with Si5351A, OLED and Arduino

## By PU2CLR - Ricardo Lima Caratti - March 18th, 2019


__Português:__ Gerador de Sinal com Si5341, OLED e Arduino. Este projeto é sobre a construção de um VFO (530KHz to 160MHz) e um BFO (452KHz to 458KHz). Para mais detalhes consulte a [documentação em Português](/Doc/Pt). 

__English:__ Signal Generetor with Si5351, OLED and Arduino. This project is about a construction of a VFO (530KHz to 160MHz) and a BFO (452KHz to 458KHz or another range). See [documentation here](/Doc/En).

## Table of contents

1. [Introduction](/Doc/En#introduction) 
1. [Arduino ATmega32U4](/Doc/En#arduino-atmega32u4)
1. [BFO interface](/Doc/En#vfo-and-bfo-interface)
	1. [VFO and BFO and Dial information](/Doc/En#vfo-and-bfo-and-dial-information)
1. [Band table for the VFO](/Doc/En#band-table-for-the-VFO)
1. [Schematic](/Doc/En#schematic)
1. [Components](/Doc/En#components)
1. [Arduino sketch](/Doc/En#arduino-sketch)
	1. [BFO range](/Doc/En#bfo-range)
	1. [Arduino pins and  Encoder, Band, Step and Switch VFO/BFO](/Doc/En#arduino-pins-and--encoder-band-step-and-switch-vfobfo)
	1. [Bands and frequency ranges](/Doc/En#bands-and-frequency-ranges)
	1. [External interrupts](/Doc/En#external-interrupts)
	1. [Changing the kind of display device](/Doc/En#changing-the-kind-of-display-device)
	1. [SI5351 Calibration](/Doc/En#sI5351-calibration)
1. [Photos](/Doc/En#photos)
1. [Expetiments and Applications](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments)
   1. [The BFO and VFO impplemented on Atmega328 (without use of external interruptions)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/Atmega328)  
   2. [IR Remote Control Implemetation for the VFO and BFO (Atmega328)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/IRController)
   3. [VFO and BFO project with a inexpencive radio based on CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP)
2. [References](/Doc/En#references)
3. [Videos](/Doc/En#videos)

## Photo

 ![Photo about this project](/images/prototype_photo_01.jpg)

## Short links

- Click [here](https://youtu.be/pFDvcIk5EAk) to see the video about this project.
- Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/En) for documentation
- Click [here](/source/si5351_vfobfo.ino) to see Arduino Sketch

## About the author 

I studied for four years Electrical Engineering at the University of Fortaleza, Ceará, Brazil, but I ended up majoring in IT area at UPIS, Brasília, Brazil. In 2007 I got post-graduate degree in Distributed Systems at University of Brasilia (UNB). From 1985 to 1998, I worked as a Developer using C/C++, FORTRAN and ALGOL Programming Languages at Federal University of Ceara (Universidade Federal do Ceará). From 1998 to 2010 I worked as a database administrator in several companies. Currently working as an independent consultant in the field of Information Technology. In 2009 I wrote the book "Joomla! Avançado" (translated to English could be Advanced Joomla!); In 2012, after almost 30 years far from electronics, I returned to my old hobby and also got my amateur radio license. 







