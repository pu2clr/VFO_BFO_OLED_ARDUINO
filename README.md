# VFO and BFO with Si5351A, OLED and Arduino

## By PU2CLR - Ricardo Lima Caratti - March 18th, 2019

__Português:__ Gerador de Sinal com Si5341, OLED e Arduino. Este projeto é sobre a construção de um VFO (530KHz to 160MHz) e um BFO (400KHz to 500KHz). Para mais detalhes consulte a <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/Pt">documentação em Português</a>. 

__English:__ Signal Generetor with Si5351, OLED and Arduino. This project is about a construction of a VFO (530KHz to 160MHz) and a BFO (400KHz to 500KHz or another range). See <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/En">documentation here</a>.


## Video about this project

There is a video about this project on my Youtube Channel (PU2CLR).
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_01.jpg" alt="Prototype01" height="414" width="520">

Click <a href="https://youtu.be/pFDvcIk5EAk"  target="_blank"> here </a> to see the video.

## About the Arduino that I'm using in this project

I'm using the Arduino ATmega32U4 (Known as Arduino Micro) with a built-in USB.  The ATmega32U4 has 5 pins (0,1,2, 3 and 7) that allow the developer to use for handling external interrupts. This feature is very useful in this project. See more about Arduino Micro (ATmega32U4) <a href="https://store.arduino.cc/usa/arduino-micro">here</a>.


## About Si5351

### Description

"The Si5351 is an I2C configurable clock generator that is ideally suited for replacing crystals, crystal oscillators, VCXOs, phase-locked loops (PLLs), and fanout buffers in cost-sensitive applications. Based on a PLL/VCXO + high resolution MultiSynth fractional divider architecture, the Si5351 can generate any frequency up to 200 MHz on each of its outputs with 0 ppm error. Three versions of the Si5351 are available to meet a wide variety of applications. The Si5351A generates up to 8 free-running clocks using an internal oscillator for replacing crystals and crystal oscillators. The Si5351B adds an internal VCXO and provides the flexibility to replace both free-running clocks and synchronous clocks.....". See more on Silicon Labs documentation <a href="https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf">here</a>.


### Applications 

"XO replacement HDTV, DVD/Blu-ray, set-top box Audio/video equipment, gaming Printers, scanners, projectors Handheld Instrumentation Residential gateways Networking/communication Servers, storage..." 
More information on Silicon Labs <a href="https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf">here</a>


### Sellers

- Adafruit: https://www.adafruit.com/product/2045 
- Etherkit: https://www.etherkit.com/rf-modules/si5351a-breakout-board.html 
- You can also find it on eBay, Aliepress and Amazon.


### Arduino source code

The source code of this project is available [here]()(/source/si5351_vfobfo.ino).


### SCHEMATIC
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="Esquema do Projeto VFO e BFO com Arduino">

#### Photo 01
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_01.jpg" alt="Prototype01">

#### Photo 02
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_02.jpg" alt="Prototype02">

#### Photo 03
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_03.jpg" alt="Prototype03">
 

## About the author 

I studied for four years Electrical Engineering at the University of Fortaleza, Ceará, Brazil, but I ended up majoring in IT area at UPIS, Brasília, Brazil. From 1985 to 1998, I worked as a Developer using C/C++, FORTRAN and ALGOL Programming Languages at Federal University of Ceara (Universidade Federal do Ceará). From 1998 to 2010 I worked as a database administrator in several companies. Currently working as an independent consultant in the field of Information Technology. In 2007 I got post-graduate degree in Distributed Systems at University of Brasilia (UNB); In 2009 I wrote the book "Joomla! Avançado" (translated to English could be Advanced Joomla!); In 2012, after almost 30 years far from electronics, I returned to my old hobby and also got my amateur radio license. 




