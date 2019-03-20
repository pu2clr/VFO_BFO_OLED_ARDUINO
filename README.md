<H1>VFO and BFO with Si5351, OLED and Arduino</H1>

<H2>By PU2CLR - Ricardo Lima Caratti - March 18th, 2019</H2>

<P><B>English:</B> Signal Generetor with Si5351, OLED and Arduino. This project is about a construction of a VFO (530KHz to 160MHz) and a BFO (400KHz to 500KHz). See <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/En">Doc/En</a> folder for English documentation.</P> 

<P><B>Português:</B> Gerador de Sinal com Si5341, OLED e Arduino. Este projeto é sobre a construção de um VFO (530KHz to 160MHz) e um BFO (400KHz to 500KHz). Veja a pasta <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Doc/Pt">Doc/Pt</a> para documentação em Português.</P>

<H2>About the Arduino that I'm using in this project</H2>

I'm using the Arduino ATmega32U4 (Known as Arduino Micro) with a built-in USB.  The ATmega32U4 has 5 pins (0,1,2, 3 and 7) that allow the developer to use for handling external interrupts. This feature is very useful in this project. See more about Arduino Micro (ATmega32U4) <a href="https://store.arduino.cc/usa/arduino-micro">here</a>.</P>


<H2>About Si5351</H2>

<H3>Description</H3>
<P> "The Si5351 is an I2C configurable clock generator that is ideally suited for replacing crystals, crystal oscillators, VCXOs, phase-locked loops (PLLs), and fanout buffers in cost-sensitive applications. Based on a PLL/VCXO + high resolution MultiSynth fractional divider architecture, the Si5351 can generate any frequency up to 200 MHz on each of its outputs with 0 ppm error. Three versions of the Si5351 are available to meet a wide variety of applications. The Si5351A generates up to 8 free-running clocks using an internal oscillator for replacing crystals and crystal oscillators. The Si5351B adds an internal VCXO and provides the flexibility to replace both free-running clocks and synchronous clocks.....". See more on Silicon Labs documentation <a href="https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf">here</a>.</P>


<H3>Applications</H3>

<P>XO replacement HDTV, DVD/Blu-ray, set-top box Audio/video equipment, gaming Printers, scanners, projectors Handheld Instrumentation Residential gateways Networking/communication Servers, storage
More information Silicon Labs  <a href="https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf">here</a></P>


<H3>Sellers</H3>
<P>
Adafruit: https://www.adafruit.com/product/2045 Etherkit: https://www.etherkit.com/rf-modules/si5351a-breakout-board.html You can find it on eBay, Aliepress and Amazon.</P>

<H3>Arduino source code</H3>
<P>
<a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">Arduino source here</a>.
</P>
