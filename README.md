# VFO and BFO with Si5351A, OLED and Arduino

## By PU2CLR - Ricardo Lima Caratti - March 18th, 2019

__Português:__ Gerador de Sinal com Si5341, OLED e Arduino. Este projeto é sobre a construção de um VFO (530KHz to 160MHz) e um BFO (400KHz to 500KHz). Para mais detalhes consulte a <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/Pt">documentação em Português</a>. 

__English:__ Signal Generetor with Si5351, OLED and Arduino. This project is about a construction of a VFO (530KHz to 160MHz) and a BFO (400KHz to 500KHz or another range). See <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/En">documentation here</a>.

## Video

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

The source code of this project are available 
<a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">here</a>.


### SCHEMATIC
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="Esquema do Projeto VFO e BFO com Arduino">

#### Photo 01
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_01.jpg" alt="Prototype01">

#### Photo 02
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_02.jpg" alt="Prototype02">

#### Photo 03
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/images/prototype_photo_03.jpg" alt="Prototype03">
 

## References

[Arduino](https://www.arduino.cc)

[Silicon Labs Si5351A/B/C-B](https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf)

[Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino)

[All About Arduino Libraries](http://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use)

[Arduino Wire Library](https://www.arduino.cc/en/Reference/Wire) 

[Arduino - Using Interrupts](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/)

[Tutorial: Arduino and the I2C bus – Part One](https://tronixstuff.com/2010/10/20/tutorial-arduino-and-the-i2c-bus/)

[Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz](https://www.adafruit.com/product/2045)

[Arduino Frequency Synthesiser Using 160MHz Si5351, lingib](https://www.instructables.com/id/Arduino-Frequency-Synthesiser-Using-160MHz-Si5351/)

[SI5351 Signal Generator](https://kk9jef.wordpress.com/2017/07/10/si5351-signal-generator/)

[Arduino – Si5351 Powered Signal Generator, kk9jef](https://nt7s.com/2018/01/arduino-si5351-powered-signal-generator/) 

[Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii)


### Videos

[NT7S Adafruit si5351 VFO/BFO](https://www.youtube.com/watch?v=791NupCbiWU)

[Vídeo: Arduino Nano + Si5351 Three outputs HF VHF VFO](https://www.youtube.com/watch?v=xD6tLSOjSsw)

[Simple vfo+bfo with s-meter using si5351 and arduino/avr](https://www.youtube.com/watch?v=s82TBVt3VG4&feature=youtu.be)

[Homebrew HF transceiver with SI5351A](https://www.youtube.com/watch?v=JJ8-VEZk_28)

[Arduino Signal Generator](https://www.youtube.com/watch?v=7M6ghR9tuTk)

[Homebrew 80/40m SSB/CW Rig - #7a Si5351 Calibration](https://www.youtube.com/watch?v=fJ_3z2IAjKg)

[Si5351 VFO/BFO Software: Part 1 Hardware overview](https://www.youtube.com/watch?v=58G5atwBX2M)

[Bitx40 With an OLED Display and the Si5351](https://www.youtube.com/watch?v=VSPEC144A00&list=PLx2fI1IGczHx-p6aEuci4ETU4VM419cm_)

[Arduino Tutorial: OLED 0.96" I2C/SPI Display](https://www.youtube.com/watch?v=PrIAnDZ9dp8)

[Tutorial on I2C OLED Display with Arduino/NodeMCU](https://www.youtube.com/watch?v=_e_0HJY0uIo)

[Arduino Tutorial: 0.96' 128x64 I2C OLED Display from banggood.com tutorial with review and drivers](https://www.youtube.com/watch?v=A9EwJ7M7OsI)

[OLED Display I2C 128x64 With Arduino - Tutorial](https://www.youtube.com/watch?v=Iq9HHct6b9o)



