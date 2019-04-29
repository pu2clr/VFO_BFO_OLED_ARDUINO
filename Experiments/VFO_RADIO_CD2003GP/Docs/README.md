# Testando o VO e BFO em um rádio barato baseado no chip CD2003GP 

__Importante: Documentação ainda em construção__

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
7. [Explicando o uso de sizeof]()
8. [Explicando as estruturas Band e Step]()
9. [Explicando como o Encoder está codificado]()
10. [Vídeos]()



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

No primeiro teste, a perna do capacitor de 15Pf que acopla o oscilador local ao pino 13 do CD2003GP foi dessolada, ficando o capacitor e o pino 13 isolado do rádio.  Assim, a perna dessoldada foi conectada à  ao VFO (saída do si5351 - CLK0). 


![Coupling 01](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_01.png)


![Coupling 02](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_02.png)


![Coupling 03](https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/Experiments/VFO_RADIO_CD2003GP/schematic/coupling_03.png)



## Arduino Sketch 


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


O código a seguir implementa a tabela de banda para do BFO. 
O campo contendo __amBroadcast__, __fmBroadcast__ ou __NULL__ são referências para funções que executarão algumas ações específicas para a banda tão logo a banda seja selecionada. Quando a referência for __NULL__ para a banda, nenhuma função será executada. 


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

As tabelas anteriores buscam oferecer dados sobre cada banda de tal forma que o processamento levará em consideração esses dados para realizar ações pertinentes a banda em uso. No entanto, para desempenhar ações de mais baixo nível, optou-se por utilizar funções no estilo "callback". Uma chamada callback é um recurso muito utilizado onde uma função é passada como argumento para outra função poder executá-la. No nosso exemplo, as funções no estilo "callback" não são enviadas como parâmetros. Na realidade, a tabela de bandas possui referências para funções que deverá ser chamada para complementar alguma ação específica para a banda em uso. Por exemplo, para acionar AM no rádio baseado no CD2003GP, é necessário que colocar o pino 14 do chip em nível lógico baixo. Em contrapartida, para acionar FM no rádio, é necessário que o pino 14 do CD2003GP esteja em nível lógico alto. 
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
As funções declaradas anteriormente são referênciadas na estrutura de bandas (veja o array band[]).


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

Note no código a seguir que se a banda possuir uma função no estilo "callback" (diferente de nulo - band[currentBand].f != NULL), então a função é executada. 

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



## Explicando o uso de sizeof

o sizeof é um operador muito utilizado no C para obter o tamanho em bytes de estruturas de dados, array e tipos primitivos de dados (int, char, long etc). 
Por exemplo: 
long x =  1L;  
int tamanhoX = sizeof x; 

Na maioria das arquiteturas de hardware, é o mesmo que atribuir 4 à variável tamanhoX (explico o porquê do uso adiante).
 
Note no programa foi criado um tipo definido (typedef) para representar as informações de uma banda. Exemplo: 
 
```cpp
typedef struct
{
  char *name;
  uint64_t minFreq; // Min. frequency value for the band (unit 0.01Hz)
  uint64_t maxFreq  // Max. frequency value for the band (unit 0.01Hz)
} Band;
``` 
 
Que tamanho tem o tipo definido Band acima? 
 
Tamanho da variável Band é:  (o tamanho do ponteiro char para nome) + (o tamanho de minFreq) + (o tamanho de maxFreq) 
 
- o tamanho de uma ponteiro é normalmente 4 bytes (para a maioria das arquiteturas de hardware);
- o tamanho de minFreq é 8 bytes (64 bits); e
- o tamanho de maxFreq também é 8 bytes.  
 
Diante disso, o tamanho do tipo definido que foi criado seria: 4 + 8 + 8 = 20 bytes. 
 
### Por que usar o operador sizeof? 
 
Há várias razões.
 
1.     Dispensa o cálculo do tamanho em bytes da estrutura ou tipo de dados que você estiver usando. Em tempo de compilação, o compilador fará a conversão é trabalhará com o tamanho correto considerando a plataforma de hardware corrente.  
2.     Deixa o código mais fácil de manter. Por exemplo, imagine  que eu queira incluir mais um atributo na minha estrutura conforme mostrado a seguir
```cpp 
typedef struct
{
  char *name;
  uint64_t minFreq; // Min. frequency value for the band (unit 0.01Hz)
  uint64_t maxFreq; // Max. frequency value for the band (unit 0.01Hz)
  uint64_t offset;
} Band;
```

Observe no código acima a inclusão de __offset__. A mudança mostrada no código acima, não demanda a necessidade de recalcular o novo tamanho da estrutura se for usado sizeof. Isto é, sizeof agora retornará 28 bytes.  
 3.     Facilita a migração do código para outras plataformas de microcontroladores. Outros microcontroladores podem usar tamanho padrões de tipos primitivos diferentes do Arduino, por exemplo. Há plataformas que o tipo int é de 32 bits (4 bytes)  e não 16 bits (2 bytes) e há plataformas que usam diferentes tamanhos para ponteiros (dependendo como essas plataformas trabalham com endereçamento de memória).  Com o uso do sizeof, eu não preciso me preocupar com isso neste contexto (tamanho em bytes).
 
### Qual o objetivo do sizeof no sketch? 
 
A principal razão é a tabela de bandas. Veja o exemplo a seguir: 

```cpp 
// Band database. You can change the band ranges if you need.
// The unit of frequency here is 0.01Hz (1/100 Hz). See Etherkit Library at https://github.com/etherkit/Si5351Arduino
Band band[] = {
    {"MW   ", 50000000LLU, 170000000LLU, 45500000LU},
    {"SW1  ", 700000000LLU, 1000000000LLU, 45500000LU},
    {"SW1  ", 1000000000LLU, 2000000000LLU, 45500000LU},
    {"FM   ", 7600000000LLU, 10800000000LLU, 1075000000LLU},
    {"AIR  ", 10800000000LLU, 13500000000LLU, 1075000000LLU},
    {"VFH  ", 13500000000LLU, 16000000000LLU, 1075000000LLU}}; 
``` 
Note que o array band[] é do tipo Band (o tipo definido que foi criado). 
O  objetivo é saber quantos elementos tem esse array band[]. 
Você agora deve pensar: ora, é só contar. E se fizer isso encontrará 5. 
Naturalmente você poderia fazer isso: 
```cpp 
Band band[5] = {
    {"MW   ", 50000000LLU, 170000000LLU, 45500000LU},
    {"SW1  ", 700000000LLU, 1000000000LLU, 45500000LU},
    {"SW1  ", 1000000000LLU, 2000000000LLU, 45500000LU},
    {"FM   ", 7600000000LLU, 10800000000LLU, 1075000000LLU},
    {"AIR  ", 10800000000LLU, 13500000000LLU, 1075000000LLU},
    {"VFH  ", 13500000000LLU, 16000000000LLU, 1075000000LLU}}; 
```

Bom, isso não estaria errado e muitos programadores fazem assim. Porém, a cada vez que você mudar essa tabela (e isso normalmente ocorre várias vezes), você deverá alterar também a quantidade de elementos do array band e ainda considerar essa nova quantidade em todo o código onde você precisar usá-la.
 
Para evitar esse desconforto e preocupação eu uso a expressão a seguir: 

const int lastBand = (sizeof band / sizeof(Band)) - 1;
 
### O que ela faz? 
 
Calcula o número de elementos do array band[] e subtrai de 1 porque 4 é o último elemento do array (lembre-se que em C o primeiro elemento é o 0). 

(sizeof band / sizeof(Band)) => Considerando o primeiro exemplo do tipo Band seria: (20 + 20 + 20 + 20 + 20) / 20 = 100 / 20 = 5 ou
considerando o segundo exemplo do tipo definido  Band seria (28 + 28 + 28 + 28 +28) / 28 = 140 / 28 = 5. 

Note que mesmo mudando a estrutura do tipo Band, o resultado do tamanho continuou 5 elementos. Com isso, posso aumentar o número de linhas da tabela (inserir mais bandas), incluir novos atributos (variáveis) e não precisarei fazer nada no resto do código. Em princípio, isso pode parecer complicado, porém, na proporção que os requisitos do sistema ficam mais complexos, essa abordagem pode ajudar.
 
Só mais uma coisa que talvez possa gerar dúvida: 
 
As constantes “MW.  “, “SW1 “, “FM  “ etc.. NÃO fazem parte da estrutura implícita do array do tipo definido Band. A estrutura apenas armazena ponteiros para estas constantes. Em outras palavras, elas não são somadas ao tamanho em bytes da estrutura. Apenas os ponteiros para essas constantes são. 


## Explicando as estruturas Band e Step.

A ideia dessas estruturas é melhorar a manutenibilidade do código com a evolução do projeto. Essas estruturas foram projetadas para oferecer um comportamento distinto para cada banda. Ou seja,  para sintonizar estações de FM, por exemplo, só é necessário 1 dígito para casa decimal, passos entre 50KHz e 500KHz são mais apropriados que passos muito pequenos como 1KHz usado em SW. Já em AM, passos entre 500Hz e 50KHz,  bem como 2 dígitos após a vírgula, creio que funcionam bem . Em SW, é desejável uma precisão melhor, então o passo entre 100Hz e 50KHz, bem como duas casas após a vírgula pode ser mais interessante.  Então vamos a tabela para implementar comportamentos distintos por banda:



O código em C que implementa a tabela pode ser visto a seguir: 

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

Ainda em relação ao código anterior, lembre-se que band[] é do tipo definido Band, que é declarado como se segue: 

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

Vamos ao significado de cada variável do tipo definido Band: 

* char *name – É o nome da banda (ponteiro para a “string” que contém o nome da banda);
* uint64_t minFreq  - é a menor frequência possível para a banda;
* uint64_t maxFreq   - é a maior frequência possível para a banda;
* uint64_t offset -  o desconto que tenho que da FI 455KHz para AM e 10.75MHz para FM (e poderia ainda ser diferente para outras bandas que não MW/SW e FM. Creio que isso vai depender da arquitetura do rádio);
* char *unitFreq – É a unidade utilizada para apresentar no display (KHz ou MHz, mas poderia também ser Hz, dependendo do que você queira)
* float divider – É o divisor utilizado para acomodar a frequência no Display e alinhar com a unidade apresentada. Isto é, para os si5351 envio a frequência em uma unidade equivalente a 1/100Hz. Para o Display, ajusto esse valor dependendo da Unidade (KHz ou MHZ). O divisor na realidade converte a unidade exigida para o si5351 para uma unidade compatível com a banda utilizada (KHz ou MHz);
* short decimals – Número de casas decimais que devem ser apresentadas após a vírgula;
* short initialStepIndex – Menor passo de incremento/decremento permitido para a banda. O valor armazenado em initialStepIndex é o índice da tabela (array) step[]); 
* short finalStepIndex – Maior passo de incremento /. Decremento permitido para a banda. . O valor armazenado em finalStepIndex é o índice da tabela (array) step[])
* short starStepIndex – E o passo padrão da banda. Quando a banda for selecionada, o passo que será usando está definido em starStepIndex. Lambrando que o valor armazenado em starStepIndex é o índice da tabela (array) step[]) 
* void (*f)(void) - Ponteiro para uma função que será executada quando uma determinada banda for selecionada. 


Agora voltando a tabela band, observe as informações da primeira banda (índice 0, “MW”): 

{"MW  ", 50000000LLU, 170000000LLU, 45500000LU, "KHz", 100000.0f, 0, 3, 6, 5, amBroadcast},

* char *name – “MW   “;
* uint64_t minFreq  - 50000000LLU;
* uint64_t maxFreq   - 170000000LLU;
* uint64_t offset - 45500000LU;
* char *unitFreq – " KHz";
* long divider – 100000.0f;
* short decimals – 0
* short initialStepIndex – 3 -> (1KHz) Ver tabela step; 
* short finalStepIndex – 6 ->  (50KHz) Ver tabela step;
* short starStepIndex – 5 -> (10KHz) ver tabela step;
* void (*f)(void) - amBroadcast.


```cpp
// Steps database. You can change the Steps and numbers of steps here if you need.
Step step[] = {
    {"10Hz  ", 1000},     // index 0
    {"100Hz ", 10000},    // 1
    {"500Hz ", 50000},	// 2
    {"1KHz  ", 100000},	// 3
    {"5KHz  ", 500000},	// 4
    {"10KHz  ",1000000},	// 5
    {"50KHz ", 5000000},	// 6
    {"100KHz", 10000000},	// 7
    {"500KHz", 50000000}}; // 8
```

Vamos agora ao uso dessas tabelas/estruturas no programa: 

Quando a Banda é alterada: 

```cpp
  if (digitalRead(BUTTON_BAND) == HIGH && (millis() - elapsedButton) > MIN_ELAPSED_TIME)
  {
    currentBand = (currentBand < lastBand) ? (currentBand + 1) : 0; // Is the last band? If so, go to the first band (AM). Else. Else, next band.
    vfoFreq = band[currentBand].minFreq;
    currentStep = band[currentBand].starStepIndex;

    // Call callback function if exist something to do for the specific band
    if (band[currentBand].f != NULL)
      (band[currentBand].f)();

    isFreqChanged = true;
    elapsedButton = millis();
  }
```

Note o código
currentStep = band[currentBand].starStepIndex;

o código acima faz o step na informação guardada em startStepIndex.

Mudança do Step:

else if (digitalRead(BUTTON_STEP) == HIGH && (millis() - elapsedButton) > MIN_ELAPSED_TIME)
  {
   if (currentClock == 0)                                               // Is VFO
     currentStep = (currentStep < band[currentBand].finalStepIndex) ? (currentStep + 1) : band[currentBand].initialStepIndex; // Increment the step or go back to the first
    else                                                                 // Is BFO
    currentStep = (currentStep < lastStepBFO) ? (currentStep + 1) : 0;
    isFreqChanged = false;
    clearDisplay = true;
    elapsedButton = millis();
  }
 
Na mudança de step, verifico os limites permitidos para o step. Onserve o código
  currentStep = (currentStep < band[currentBand].finalStepIndex) ? (currentStep + 1) : band[currentBand].initialStepIndex; 

Neste código, testo se o passo corrente (currentStep) é menor que o máximo permitido para a banda “band[currentBand].finalStepIndex”. Caso afirmativo, incremento 1 para ir para o próximo passo (currentStep + 1); caso contrário, vou para o primeiro passo permitido para a banda “band[currentBand].initialStepIndex”.


Na função Display, também uso esta tabela. Observe: 

void displayDial()
{
  double vfo = (double)vfoFreq / band[currentBand].divider;
  double bfo = (double)bfoFreq / 100000.0f;
  String mainFreq;
  String secoundFreq;
  String staticFreq;
  String dinamicFreq;

 
  // Change the display behaviour depending on who is controlled, BFO or BFO.
  if (currentClock == 0)
  { // If the encoder is controlling the VFO
    mainFreq = String(vfo, band[currentBand].decimals);
    mainFreq.concat(band[currentBand].unitFreq);
    secoundFreq = String(bfo, 2);
    staticFreq = "BFO";
    dinamicFreq = "VFO";
  }
  else // encoder is controlling the VFO
  {
    mainFreq = String(bfo, 2);
    secoundFreq = String(vfo, band[currentBand].decimals);
    secoundFreq.concat(band[currentBand].unitFreq);
    staticFreq = "VFO";
    dinamicFreq = "BFO";
  }


...


No código
double vfo = (double)vfoFreq / band[currentBand].divider;

é feita a divisão pelo valor de band[currentBand].divider. 

Note também que se for o VFO a principal informação, uso o número de casas decimais adequadas para a banda. Veja o código: 

mainFreq = String(vfo, band[currentBand].decimals);

e também apresento a unidade de frequência selecionada para a banda. Veja: 

mainFreq.concat(band[currentBand].unitFreq);

obs: concat é um método da classe string que junta duas strings.  Dessa forma a frequência e a unidade ficarão na mesma string.

Bom, tentei apresentar os elementos do uso das tabelas band[] e step[]. Sei que devo ter deixado a solução um pouco mais complexa de entender no início. PORÉM imagine o seguinte: 

1)	Se eu tivesse que  implementar o comportamento de cada banda com IF e ELSE ou CASE no código. Como ficaria esse código? Mais legível? Para uma ou duas  Bandas provavelmente sim, para várias bandas, certamente não. 
2)	Se eu precisar retirar uma banda do meu sistema é só excluir a linha da tabela referente a banda. Não preciso fazer mais nada no código. Só compilar e aquela banda não fará mais parte do sistema. E como seria se você tivesse implementado a banda no código? Procuraria o IF, ELSE ou CASE relacionados e removeria o código. Mas será que isso não é mais trabalhoso e sujeito a incluir erros no código?   
3)	Na mesma analogia com o item anterior, se eu precisar adicionar mais uma banda (subdividindo as outras), tudo que é preciso fazer é adicionar mais uma linha com as informações da nova banda na tabela band[]. Como seria usando codificação com IF, ELSE ou CASE? Mais fácil?    


## Explicando como o Encoder está codificado 

Não há uso de interrupção nem uma biblioteca específica para trabalhar no encoder no código deste projeto. Simplesmente é feita a leitura nos pinos do encoder. 

O primeiro passo é informar ao Arduino que os pinos do Encoder são somente de ENTRADA (INPUT)   (Função setup() )

```cpp
pinMode(ENCODER_PIN_A, INPUT);
pinMode(ENCODER_PIN_B, INPUT);
```

Depois declaro as variáveis de controle do encoder (incluindo o tempo mínimo para a processar a próxima ação)

```cpp
long elapsedTimeEncoder = millis();

// Encoder variable control
unsigned char encoder_pin_a;
unsigned char encoder_prev = 0;
unsigned char encoder_pin_b;
```

O tipo unsigned char é na realidade um número inteiro, não sinalizado de 8 bits. Ele admite valores entre 0 e 255. No caso do encoder, terão valores 0 (nível lógico baixo) ou diferente de 0 (nível lógico alto). Poderia ser um int. A questão aqui é de economia de memória e de cíclo de máquina. 

A variável encoder_prev armazena a última ação do encoder. Dessa forma, na ação seguinte do encoder eu terei o valor da ação anterior para poder fazer comparação;

Na função  loop(), o processo inicia checando se já ocorreu mais de 5 milisegundos após a última ação do encoder.  Caso não tenha ocorrido mais de 5 milisegundos, não processa a ação do encoder (não leio os pinos). Isso é útil para eliminar efeitos indesejáveis causados pelo mal contato das placas metálicas do encoder (ver Debounce);

```cpp
if ((millis() - elapsedTimeEncoder) > 5)
{
encoder_pin_a = digitalRead(ENCODER_PIN_A);
encoder_pin_b = digitalRead(ENCODER_PIN_B);
if ((!encoder_pin_a) && (encoder_prev)) // has ENCODER_PIN_A gone from high to low?
{ // if so, check ENCODER_PIN_B. It is high then clockwise (1) else counter-clockwise (-1)
changeFreq(((encoder_pin_b) ? 1 : -1));
}
encoder_prev = encoder_pin_a;
elapsedTimeEncoder = millis(); // keep elapsedTimeEncoder updated
}
```

caso o tempo decorrido entre a última ação do encoder e o tempo atual for maior que 5 milissegundos, eu leio os dois pinos em que o encoder está conectado;

Se o PINO A (encoder_pin_a) estiver em nível lógico baixo (0) e o encoder_prev (ação anterior deste pino) estiver em nível lógico alto (1), então é porque houve mudança no status do encoder (houve giro);
Lemvrando que   __!encoder_pin_a__ poderá ter os seguintes resultados: se encoder_pin_a for 0, o resultado será 1 (verdadeiro); se  encoder_pin_a for 1, o resultado será 0 (falso); 

Se a expressão __if ((!encoder_pin_a) && (encoder_prev))__  for verdadeira (houve giro no encoder). Agora vamos determinar qual o sentido (horário ou anti-horário). Quem vai dizer isso é estado do encoder_pin_b.  
Se encoder_pin_b estiver em nível lógico alto (1), então é sentido horário. Caso contrário, nível lógico baixo (0), é anti-horário. 
A linguagem C permite uma atribuição condicional na forma apresentada no exemplo a seguir:  X = ( A > B)? 1:-1); Neste exemplo, X recebe 1 se A for maior que B; caso contrário, recebe -1;
Observe a expressão dentro da chamada da função changeFreq(): 
((encoder_pin_b) ? 1 : -1)
A função changeFreq() recebe dois possíveis valores como parâmero: 1 para incrementar (adicionar o step) a frequência (sentido horário do encoder); e -1 para decrementar (sentido anti-horário).  
se encoder_pin_b for 1 (ou qualquer valor diferente de 0), então changeFreq() será chamada com o valor 1 (equivalente à chamada changeFreq(1)). Caso contrário, encoder_pin_b for igual a 0 changeFreq() será chamada com o valor -1 (equivalente à chamada changeFreq(-1)).

Note que dentro do bloco atendida pela condição do encoder [if ((millis() - elapsedTimeEncoder) > 5)]  , eu armazeno a ação corrente na variável encoder_prev. E também atualizo o tempo em elapsedTimeEncoder. 
encoder_prev = encoder_pin_a;
elapsedTimeEncoder = millis(); // keep elapsedTimeEncoder updated
com isso, após 5 milissegundos, poderei ler os pinos do encoder novamente e verificar se ouve uma ação de giro. 





## Vídeos 

- [VFO and BFO project test with an inexpencive radio based on CD2003GP](https://youtu.be/_KgBc6vYWLg)


