# Testando o VO e BFO em um rádio barato baseado no chip CD2003GP 

Por PU2CLR - Ricardo
April, 2019

## Sumário

1. [Introdução](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#introdução)
2. [Apresentação do Display](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#apresentação-do-display)
3. [Esquema para Arduino baseado no Atmega328 (UNO, Pro Mini, Nano etc)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#esquema-para-arduino-baseado-no-atmega328-uno-pro-mini-nano-etc)
4. [Esquema para Arduino baseado ATmega32U4 (Micro)](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#esquema-para-arduino-baseado-atmega32u4-micro)
5. [O Rádio baseado no CD2003GP utilizado no teste](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#o-rádio-baseado-no-cd2003gp-utilizado-no-teste)
   1. [Diagrama de Bloco do CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#diagrama-de-bloco-do-cd2003gp)
   2. [Circúito de Aplicação](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#circúito-de-aplicação)
   3. [Foto do Rádio](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#foto-do-rádio)
   4. [Modificação no estágio de FM](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#modificação-no-estágio-de-fm)
   5. [Acoplamento do si5351 no pino 13 do CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#acomplamento-do-si5251-no-pino-13-do-si5351)
   6. [Sugestões para acoplamento](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#sugestões-para-acoplamento)
6. [Arduino Sketch](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#arduino-sketch)
   1. [Tabela de Bandas](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/tree/master/Experiments/VFO_RADIO_CD2003GP/Docs#band-table)
   2. [Tabela de passos]()
7. [Vídeos]()



## Introdução

Este teste modifica o sketch do Arduino original e apresenta duas versões. Uma para Arduino baseado no Atmega328 e outra para o Atmega32U4. 
O rádio utilizado neste teste é um CMik KK9, baseado no chip CD2003GP ou TA2003. Este rádio foi escolhido pela baixo custo de aquisição ( aproximadamente R$30,00). Trata-se de um receptor de Ondas Médias, Ondas Curtas e FM. Em MW e SW o rádio tem péssima seletividade. Contudo, a escuta de estações locais de AM é possível. Em FM o rádio se comporta um pouco melhor. 


Principais mudanças no sketch do Arduino

- Apresentação do Display 
- Quantidade reduzida de Bandas. Veja a [Tabela de Bandas a seguir]()
- Cada banda tem um comportamento diferente. Passos mais apropriados ee ações podem ser diferentes para bandas diferentes. 
- That is, frequency unit shown on the display and steps more suitable for the specific band. 

## Apresentação do Display


| Layout |  Layout |
| ------ |  ------ |
| ![Displau photo 1](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_01.png)| ![Displau photo 2](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_02.png) |
| ![Displau photo 3](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_03.png)| ![Displau photo 4](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/OLED_04.png) |


## Esquema para Arduino baseado no Atmega328 (UNO, Pro Mini, Nano etc)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/vfobfo_ir_schematic_atemega328.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega328/si5351_vfoCD2003GP_atmega328.ino) to see the sketch used on Arduino Atmega328 (schematic above).__



## Esquema para Arduino baseado ATmega32U4 (Micro)

![Schematic used with Arduino Atmega328](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/bfo_schematic.png)

__Click [here](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/source/si5351_vfoCD2003GP_atmega32u4/si5351_vfoCD2003GP_atmega32u4.ino) to see the sketch used on Arduino ATmega32U4 (schematic above).__ 


## O Rádio baseado no CD2003GP utilizado no teste

### Diagrama de Bloco do CD2003GP 

![Photo 1 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_block_diagram_01.png)

[Source - CD2003GP Datasheet](http://www.datasheetcafe.com/cd2003gp-datasheet-pdf/)

### Circúito de Aplicação

![Photo 2 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_application_circuit.png)

[Source - CD2003GP Datasheet](http://www.datasheetcafe.com/cd2003gp-datasheet-pdf/)


### Foto do Rádio
![Photo 3 - Inexpensive commercial radio](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_01.jpg)



### Modificação no estágio de FM

Este experimento foi baseado 

No primeiro teste foi isolado o pino 13 do chip CD2003GP e injetado o sinal da saída 0 do si5351 (CLK0). Para conectar essa saída no pino 13 foi utilizado o próprio capacitor de 15Pf que acopla o oscilador do próprio rádio. 



![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_02.jpg)



#### Acomplamento do si5251 no pino 13 do si5351 


![Photo 2 - CD2003GP](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/CD2003GP_application_circuit_modification.png)


![Photo 3 - Motification ](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/images/inexpensive_receiver_03.jpg)



#### Sugestões para acoplamento

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

Implementação da Tabela de Bandas

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



### Tabela de Bandas

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

__amBroadcast__ and __fmBroadcast__ are functions (callback) that will do something when the band is selected. 
When callback function is NULL, there is nothing to do. 


### Tabela de Passos

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



## Funções callback

As tabelas anteriores buscam oferecer dados sobre cada banda de tal forma que o processamento levará em consideração esses dados para realizar ações pertinentes a banda em uso. No entanto, para desempenhar ações de mais baixo nível, optou-se por utilizar funções no estilo "callback". Uma chamada callback  é um recurso muito utilizado onde uma função é passada como argumento para outra função poder executá-la. No nosso exemplo, as funções no estilo "callback" não são enviadas como parâmetros. Na realidade, a tabela de bandas possui referências para funções que deverá ser chamada para complementar alguma ação específica para a banda em uso.  Por exemplo, para acionar AM no rádio baseado no CD2003GP, é necessaário que colocar o pino 14 do chip em nível lógico baixo. Em contrapartida, para acionar FM no rádio, é necessário que o pino 14 do CD2003GP esteja em nível lógico alto. 
Quando uma banda não precisa de função no estilo "callback", há um valo nulo para indicar esta informação. 


O código a seguir ilustra a utilização da funções no estilo "callback".

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


