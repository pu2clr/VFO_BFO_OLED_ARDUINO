# The Arduino sketch of the BFO and VFO without use of interruptions

If you have an Arduino UNO, Nano, Mini or other based on Atmega328, you might want to use this sketch instead the original.

The main modifications are: 

- No __valitile__ variable was declared;
- No external interrupt was used; 
- All Buttons devices are controlled on main loop.

__IMPORTANT__:
This sketch will not be updated. I mean, this system may not have the same functionality as the original sketch. The intent here is only to show you how to implement button controls without external interrupts resource.





