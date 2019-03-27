# The Arduino and components wire up.

This schematic was made by using the <a href="http://fritzing.org/home/">Fritzing Software</a>.  

The  <a href="http://fritzing.org/home/">Fritzing file are available in this repository</a>. 

## Schematic
 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="VFO and BFO schematic">

### Si5351A

On __Arduino Micro__ use __Si5351A__ connected to D2 (SDA) and  D3 (SCL).

### OLED Display SSD1306 - 128 x 64/0.96

On Arduino Micro use the __OLED__ connected to D2 (SDA) and  D3 (SCL). Yes, the same Si5351A connections.

### Encoder

Connect Arduino __D8__ and __D9__ pins to the __Encoder__ pin __A__ and pin __B__ respectively.

### Push Button Band

Connect Arduino __D0/Rx__ pin to the __Band__ push button.

### Push Button Step

Connect Arduino __D1/Tx__ pin to the __Step__ push button. 

### Push Button VFO/BFO

Connect Arduino __D7__ pin to the __VFO/BFO__ push button.




