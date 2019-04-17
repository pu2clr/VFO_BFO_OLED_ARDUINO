# The Arduino sketch of the BFO and VFO without use of interruptions

If you have an Arduino UNO, Nano, Mini or other based on Atmega328, you might want to use this sketch instead the original.

The main modifications are: 

- No __valatile__ variable was declared;
- No external interrupt was used; 
- All Buttons devices are controlled on main loop.

__IMPORTANT__:
This sketch will not be updated. I mean, this system may not have the same functionality as the original sketch. The intent here is only to show you how to implement button controls without external interrupts resource.



## Schematic (Atmega328)

Suggested schematic to work with si5351, oled and Arduino Atmega328

![Schematic VFO and BFO Si5351 Arduino Atmega 328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/Atmega328/schematic/vfobfo_atmega328_schematic.png)



