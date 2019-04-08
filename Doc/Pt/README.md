# Projeto do VFO e BFO com Si5351A e Arduino


# Summário

1. [Introdução](/Doc/Pt#introdução)
2. [Operação do VFO e BFO](/Doc/Pt#operação-do-vfo-e-bfo)
3. [Tabela de divisão de Bandas utilizadas no Projeto](/Doc/Pt#tabela-de-divisão-de-bandas-utilizadas-no-projeto)
4. [Esquema Elétrico](/Doc/Pt#esquema-elétrico)
  *  [Si5351A](/Doc/Pt#si5351a)
	* [OLED Display SSD1306 - 128 x 64/0.96](/Doc/Pt#oled-display-ssd1306---128-x-64096)
	* [Endoder](/Doc/Pt#encoder)
5. [Sobre o programa Arduino](/Doc/Pt#sobre-o-esquema-e-conexões)
  * [Calibração do Si5351A](/Doc/Pt#calibração-do-si5351a)
	* [Informações sobre a configuração do VFO e BFO](/Doc/Pt#informações-sobre-a-configuração-do--vfo-e-bfo)
	* [Pinos do Arduino para os botões Encoder, Band, Step e Switch VFO/BFO](/Doc/Pt#pinos-do-arduino-para-os-botões-encoder-band-step-e-switch-vfobfo)
	* [Interrupções externas](/Doc/Pt#interrupções-externas)
6. [Considerações finais](/Doc/Pt#considerações-finais)
7. [Referências](/Doc/Pt#considerações-finais)
8. [Vídeos](/Doc/Pt#v%C3%ADdeos)


## Introdução

O Si5351A é um gerador de sinal configurável excelente para experimentações em radioamadorismo. Ele possui três saídas de sinal que podem ser configuradas de forma  independente. Isto é, cada saída pode oscilar em uma frequência distinta da outra. Esta característica permite, por exemplo, a construção de um VFO e um BFO no mesmo ambiente, simplificando circuitos em receptores e  transmissores. 

O Si5351A permite operações com alta frequência. Assim, o VFO deste projeto pode oscilar entre 535KHz e 160MHz. Esta  extensa faixa de frequencia foi dividida em 27 bandas que podem ser mudadas via o pressionamento de um botão (veja tabela a seguir). Um encoder permite que você mude a frequência dentro de uma banda. Quanto ao  BFO, foi projetado para oscilar entre 452KHz e 458KHz.  Um outro botão alterna o controle entre o VFO e o BFO. A frequência do BFO pode ser alterada pelo encoder.  O <B>programa em Arduino  está disponível</B> na pasta <B>source</B> deste repositório ou diretamente por este [link](/source/si5351_vfobfo.ino) e poderá ser adaptado conforme a sua necessidade.  A documentação do código fonte foi escrita no idioma Inglês, porém, não creio que isso será um problema para a maioria dos desenvolvedores. Qualquer dúvida ou problema poderá ser postado via a <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a> .


## Operação do VFO e BFO

O usuário poderá controlar o VFO e o BFO por três botões e um Encoder

- O	botão **Band** muda a faixa de freqência. Este projeto divide o VFO em 27 faixas. Veja a tabela de bandas a seguir;
- O botão **VFO/BFO** alterna o controle entre o VFO e o BFO.
- O botão **Step** muda o passo de incremento e decremento. Pode ser 50Hz, 100Hz, 500Hz, 1KHz, 2.5KHz, 5KHz, 10KHz, 100KHz e 500KHz;
- O **Encoder** é utilizado para controlar a frequência do VFO ou BFO.


## Tabela de divisão de Bandas utilizadas no Projeto

O VFO está dividido em 27 bandas. A primeira banda varia entre 100KHz até 1.7MHz e a última banda varia entre 135MHz até 160MHz. É possível que você queira reduzir o número de bandas ou mesmo alterar as frequências em cada banda. Para tanto, consulte a adiante ["Sobre o programa Arduino"](/Doc/Pt#sobre-o-esquema-e-conexões).

<table cellspacing="0" border="0">
	<colgroup width="37"></colgroup>
	<colgroup width="91"></colgroup>
	<colgroup width="106"></colgroup>
	<colgroup width="111"></colgroup>
	<tr>
		<td height="23" align="left">N#</td>
		<td align="left">Band</td>
		<td align="left">From</td>
		<td align="left">to</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="1" sdnum="1046;">1</td>
		<td align="left">AM   </td>
		<td align="left"> 535 KHz</td>
		<td align="left"> 1.7 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="2" sdnum="1046;">2</td>
		<td align="left">SW1  </td>
		<td align="left"> 1.7 MHz</td>
		<td align="left"> 3.5 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="3" sdnum="1046;">3</td>
		<td align="left">SW2  </td>
		<td align="left"> 3.5 MHz</td>
		<td align="left"> 4.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="4" sdnum="1046;">4</td>
		<td align="left">SW3  </td>
		<td align="left"> 4.0 MHz</td>
		<td align="left"> 7.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="5" sdnum="1046;">5</td>
		<td align="left">SW4  </td>
		<td align="left"> 7.0 MHz</td>
		<td align="left"> 7.3 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="6" sdnum="1046;">6</td>
		<td align="left">SW5  </td>
		<td align="left"> 7.3 MHz</td>
		<td align="left"> 9.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="7" sdnum="1046;">7</td>
		<td align="left">SW6  </td>
		<td align="left"> 9.0 MHz</td>
		<td align="left"> 10.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="8" sdnum="1046;">8</td>
		<td align="left">SW7  </td>
		<td align="left"> 10.0 MHz</td>
		<td align="left"> 11.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="9" sdnum="1046;">9</td>
		<td align="left">SW8  </td>
		<td align="left"> 11.0 MHz</td>
		<td align="left"> 14.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="10" sdnum="1046;">10</td>
		<td align="left">SW9  </td>
		<td align="left"> 14.0 Mhz</td>
		<td align="left"> 15.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="11" sdnum="1046;">11</td>
		<td align="left">SW10 </td>
		<td align="left"> 15.0 MHz</td>
		<td align="left"> 17.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="12" sdnum="1046;">12</td>
		<td align="left">SW11 </td>
		<td align="left"> 17.0 MHz</td>
		<td align="left"> 18.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="13" sdnum="1046;">13</td>
		<td align="left">SW12 </td>
		<td align="left"> 18.0 MHz</td>
		<td align="left"> 20.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="14" sdnum="1046;">14</td>
		<td align="left">SW13 </td>
		<td align="left"> 20.0 MHz</td>
		<td align="left"> 21.35 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="15" sdnum="1046;">15</td>
		<td align="left">SW14 </td>
		<td align="left"> 21.35 MHz</td>
		<td align="left">22.00 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="16" sdnum="1046;">16</td>
		<td align="left">SW15 </td>
		<td align="left"> 22.0 MHz</td>
		<td align="left"> 24.88 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="17" sdnum="1046;">17</td>
		<td align="left">SW16 </td>
		<td align="left"> 24.88 MHz</td>
		<td align="left"> 24.99 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="18" sdnum="1046;">18</td>
		<td align="left">SW17 </td>
		<td align="left"> 24.99 MHz</td>
		<td align="left"> 26.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="19" sdnum="1046;">19</td>
		<td align="left">SW18 </td>
		<td align="left"> 26.0 MHz</td>
		<td align="left"> 28.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="20" sdnum="1046;">20</td>
		<td align="left">SW19 </td>
		<td align="left"> 28.0 MHz</td>
		<td align="left"> 30.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="21" sdnum="1046;">21</td>
		<td align="left">VHF1 </td>
		<td align="left"> 30.0 MHz</td>
		<td align="left"> 50.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="22" sdnum="1046;">22</td>
		<td align="left">VHF2 </td>
		<td align="left"> 50.0 MHz</td>
		<td align="left"> 54.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="23" sdnum="1046;">23</td>
		<td align="left">VHF3 </td>
		<td align="left"> 54.0 MHz</td>
		<td align="left"> 86.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="24" sdnum="1046;">24</td>
		<td align="left">FM   </td>
		<td align="left"> 86.0 MHz</td>
		<td align="left"> 108.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="25" sdnum="1046;">25</td>
		<td align="left">VHF4 </td>
		<td align="left"> 108.0 MHz</td>
		<td align="left"> 120.0 MHz </td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="26" sdnum="1046;">26</td>
		<td align="left">VHF5 </td>
		<td align="left"> 120.0 MHz</td>
		<td align="left"> 135.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="27" sdnum="1046;">27</td>
		<td align="left">VHF6 </td>
		<td align="left"> 135.0 MHz</td>
		<td align="left"> 160.0 MHz</td>
	</tr>
</table>




## Esquema Elétrico

<P> A figura a seguir ilustra o esquema elétrico envolvendo os componentes utilizados no projeto. </P>

 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="Esquema do Projeto VFO e BFO com Arduino">




### Sobre o esquema e conexões

Para este projeto foi utilizado o Arduino Micro, baseado no Atmega32u4. A principal razão pela escolha desta versão do Arduino foi pelo fato dele possibilitar o uso de até 5 interrupções externas (pinos 0, 1, 2, 3, 7). Este recurso foi utilizado para implementar o funcionamento dos botões Band, Setp e switch VFO / BFO. No entanto, com poucos ajustes no projeto, é possível adaptá-lo para um Arduino UNO ou similar. 

#### Si5351A
O dispositivo Si5351A é ligado nos pinos D2 e D3 do Arduino (MICRO ou compatível). Você deve ficar atendo às descrições SDA (pin D2) e SCL (pin D3). A inversão dessas conexões fará com que o dispositivo não funcione. 

#### OLED Display SSD1306 - 128 x 64/0.96
OLED Display também é ligado aos pinos D2 e D3 do Arduino Micro obedecendo as mesmas orientações do Si5351A. 

### Encoder
O encoder é conectado ao Arduino Micro da seguinte forma: terminal A no pino D8 e terminal B no pino D9.
É recomendado a utilizacao de um filtro RC, implementado no esquema acima por dois capacitores de 10nF e dois resistores de 10K. Esta técnica permite que sinais indesejados causados pelos contatos metálicos do encoder durante a sua rotação sejam enviados para os pinos do Arduino.

#### Botão de Banda (Band)

O Push Button Band é conectado ao pino D0/Rx conforme mostra a figura anterior. Este botão permite a seleção de 27 bandas.

#### Botão de Passo (Step)

O Push Button Step é conectado ao pino D1/TX. 
Este botão permite a seleção do passo de incremento e decremento da frequência quando o encoder for girado. 

#### Botão switch VFO/BFO

O Push Button VFO/BFO é conectado ao pino D7. 
Este botão alterna o controle da frequência do VFO para BFO e vice-versa.

É importante ter em mente que, no caso do Arduino Micro, os pinos D2 e D3 são os que implementam o SDA e o SCL respectivamente. Outras versões de Arduino utilizam outros pinos para essas funções. 



## Sobre o programa Arduino

O programa (sketch) Arduino <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">disponível neste projeto</a>, pode ser livremente baixado, modificado e utilizado por qualquer um que tenha interesse em desenvolver um projeto similar.  

Para controlar o Si53551A via Arduino foi utilizado a <a href="https://github.com/etherkit/Si5351Arduino">biblioteca Etherkit (Si5351 Library for Arduino)</a> desenvolvida pelo radioamador NTS7. Esta biblioteca oferece uma documentação muito rica e com várias facilidades se comparadas a outras bibliotecas para o Si5351. 

Ainda em relação a biblioteca da Etherkit, é importante observar o mecanismo de __calibração__ do Si5351. 
Existe um exemplo (si5351_calibration) que vem com a biblioteca da Etherkit que permite a calibração do Si5351. Este procedimento melhora a precisão da frequência de saída do sinal gerado pelo SI5351. Publiquei um vídeo no Youtube que mostrar como calibrar o Si5351 se necessário. Clique <a href="https://youtu.be/BJ83uvDcfIo">aqui</a> para assistir ao vídeo.


### Calibração do Si5351A

No <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">Sketch</a> deste projeto, você encontrará algumas linhas de código que se referem à correção do Si5351 necessária para melhorar a sua precisão. Caso necessário, [este vídeo](https://youtu.be/BJ83uvDcfIo) ilustra como fazer a Calibração do Si5351. O código a seguir ilustra a utilização do fator de correção encontrado no processo de calibração. 


```cpp

#define CORRECTION_FACTOR 80000 // See how to calibrate your Si5351A (0 if you do not want).
.
.
.
void setup()
{
  .
  .
  si5351.init(SI5351_CRYSTAL_LOAD_8PF, 0, 0);
  // Adjusting the frequency (see how to calibrate the Si5351 - example si5351_calibration.ino)
  si5351.set_correction(CORRECTION_FACTOR, SI5351_PLL_INPUT_XO);
  .
  .

}
.
````

Note no código anterior que a constante definida __CORRECTION_FACTOR__ tem o valor 80000. Este valor foi encontrado na execução do Sketch si5351_correction (ver exemplo no IDE do arduino).
Note também que após instanciar e iniciar o Si5351, a função si5351.set_correction(CORRECTION_FACTOR, SI5351_PLL_INPUT_XO) é executada. Este chamada permite fazer a correção da frequência do gerador de sinal.

__Importante:__ Se você não executou o processo de calibração do seu Si5351 e não pretende fazer isto, ajuste a constante definida CORRECTION_FACTOR para 0 como mostrado a seguir:


```cpp
#define CORRECTION_FACTOR 0 
```


### Informações sobre a configuração do  VFO e BFO 

Alguns parâmetros utilizados no código-fonte podem ser alterados para atender alguma demanda específica quanto à pinagem do Arduino, bandas e frequências  utilizadas pelo VFO, bem como os limites e a frequência para o BFO.

#### Para modificar a faixa de frequência do BFO de 455KHz para 10MHz

Originalmente o BFO deste projeto está configurado para operar em 455KHz conforme apresentado no código a seguir: 

```cpp
#define MAX_BFO     50000000LU    // BFO max. frequency
#define CENTER_BFO  45500000LU    // BFO center frequency
#define MIN_BFO     40000000LU    // BFO min. frequency
````

O código a seguir modifica o BFO para operar em 10MHz

```cpp
#define MAX_BFO      990000000LU    // BFO max. frequency
#define CENTER_BFO  1000000000LU    // BFO center frequency
#define MIN_BFO     1100000000LU    // BFO min. frequency 
```
O código anterior altera o BFO para oscilar entre 9.9MHZ e 10.1MHz. Lembrando que a unidade utilizada pela biblioteca si5351.h é 0.01Hz (um centésimo de Hertz).


#### Tabela de faixas e frequência e passos (Step)

Este projeto definiu 27 bandas (faixas de frequência) que cobrem de 535KHz a 160MHz. A quantidade de bandas, bem como os limites inferiores e superiores de cada banda podem ser alteradas na estrutura apresentada no código a seguir:


```cpp
// Band database. You can change the band ranges if you need.
// The unit of frequency here is 0.01Hz (1/100 Hz). See Etherkit Library at https://github.com/etherkit/Si5351Arduino
Band band[] = {
    {"LWMW ", 53500000LLU, 170000000LLU},     // 100KHz to 1700KHz
    {"SW1  ", 170000000LLU, 350000000LLU},
    {"SW2  ", 350000000LLU, 400000001LLU},
    {"SW3  ", 400000000LLU, 700000000LLU},
    {"SW4  ", 700000000LLU, 730000000LLU},    // 7MHz to 7.3 MHz  (Amateur 40m)
    {"SW5  ", 730000000LLU, 900000000LLU},    // 41m
    {"SW6  ", 900000000LLU, 1000000000LLU},   // 31m
    {"SW7  ", 1000000000LLU, 1100000000LLU},  // 10 MHz to 11 MHz (Amateur 30m)
    {"SW8  ", 1100000000LLU, 1400000000LLU},  // 25 and 22 meters
    {"SW9  ", 1400000000LLU, 1500000000LLU},  // 14MHz to 15Mhz (Amateur 20m)
    {"SW10 ", 1500000000LLU, 1700000000LLU},  // 19m
    {"SW11 ", 1700000000LLU, 1800000000LLU},  // 16m
    {"SW12 ", 1800000000LLU, 2000000000LLU}, // 18MHz to 20Mhz (Amateur and comercial 15m)
    {"SW13 ", 2000000000LLU, 2135000000LLU}, // 20MHz to 22Mhz (Amateur and comercial 15m/13m)
    {"SW14 ", 2135000000LLU, 2200000000LLU},
    {"SW15 ", 2235000000LLU, 2498000000LLU},
    {"SW16 ", 2488000000LLU, 2499000000LLU}, // 24.88MHz to 24.99MHz (Amateur 12m)
    {"SW17 ", 2499000000LLU, 2600000000LLU},
    {"SW18 ", 2600000000LLU, 2800000000LLU},
    {"SW19 ", 2800000000LLU, 3000000000LLU}, // 28MHz to 30MHz (Amateur 10M)
    {"VHF1 ", 3000000000LLU, 5000000000LLU},
    {"VHF2 ", 5000000000LLU, 5400000000LLU},
    {"VHF3 ", 5400000000LLU, 8600000000LLU},
    {"FM   ", 8600000000LLU, 10800000000LLU},  // Comercial FM
    {"VHF4 ", 10800000000LLU, 12000000000LLU}, // 108MHz to 160MHz
    {"VHF5 ", 12000000000LLU, 13500000000LLU}, // Air band
    {"VHF6 ", 13500000000LLU, 16000000000LLU}}; 

// Calculate the last element position (index) of the array band 
const int lastBand = (sizeof band / sizeof(Band)) - 1; // For this case will be 26.
volatile int currentBand = 0; // First band. For this case, AM is the current band.
```

Os valores do passo de incremento e decremento, bem como as faixas utilizadas podem ser modificadas alterando o trecho de código a seguir: 

```cpp
// Steps database. You can change the Steps and numbers of steps here if you need.
Step step[] = {
    {"50Hz  ", 5000},         // VFO and BFO min. increment / decrement 
    {"100Hz ", 10000},
    {"500Hz ", 50000},
    {"1KHz  ", 100000},       // BFO max. increment / decrement
    {"2.5KHz", 250000},
    {"5KHz  ", 500000},
    {"10KHz ", 1000000},
    {"100KHz", 10000000},
    {"500KHz", 50000000}};    // VFO max. increment / decrement
// Calculate the index of last position of step[] array (in this case will be 8)
const int lastStepVFO = (sizeof step / sizeof(Step)) - 1; // index for max increment / decrement for VFO
volatile int lastStepBFO = 3;   // index for max. increment / decrement for BFO. In this case will be is 1KHz
volatile long currentStep = 0;  // it stores the current step index (50Hz in this case)
```


### Pinos do Arduino para os botões Encoder, Band, Step e Switch VFO/BFO

Da mesma forma, os Botões, o Encoder e o LED, podem ser instalados em outros pinos do Arduino que não os utilizados neste projeto. Para tanto, basta modificar os valores para as constantes definidas no código a seguir. Contudo, é importante que os botões devem estar conectados aos pinos do Arduino ou similar com suporte à interrupções externas.  

```cpp
#define ENCODER_PIN_A 8 // Arduino  D8
#define ENCODER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO
```



### Interrupções externas

Este projeto implementa os três botões (Band, Step e Switch VFO/BFO) usando o recurso interrupções externas do Arduino. No caso do Atmega32u4, os pinos 0,1,2,3 e 7 podem ser utilizados para esta finalidade. Desta forma, quando um dos botões for pressionado, o Arduido interroperá o fluxo de execução normal para executar o códio conectado a interrupção.  Entenda mais sobre Interrupções no Arduino clicando [aqui](https://www.arduino.cc/reference/pt/language/functions/external-interrupts/attachinterrupt/).

O uso de interrupção para executar as ações dos botões é especialmente útil neste projeto porque facilita a execução imediata da função desejada no momento do pressionamento do botão. Obviamente é possível implementar as ações dos botões Band, Step e switch VFO/BFO na função loop do Arduino usando a abordagem tradicional. No entanto, esta abordagem pode causar algumas imprecisões quanto à resposta do sistema no momento do pressionamento do botão.  Infelizmente, dada a pouca quantidade de pinos no Arduino baseado no Atmega32u4 que implementa interrupções externas, não foi possível usar o mesmo recursos para o Encoder. Neste caso, a função do Encoder foi implementada na função __loop__ principal do Arduino. 

O código a seguir conecta os botões Band, Step e Switch VFO/BFO às respectivas funções de tratamento (changeStep(), changeBand() e  switchVFOBFO()) 

```cpp
  // Will stop what Arduino is doing and call changeStep(), changeBand() or switchVFOBFO 
  attachInterrupt(digitalPinToInterrupt(BUTTON_STEP), changeStep, RISING);      // whenever the BUTTON_STEP goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_BAND), changeBand, RISING);      // whenever the BUTTON_BAND goes from LOW to HIGH
  attachInterrupt(digitalPinToInterrupt(BUTTON_VFO_BFO), switchVFOBFO, RISING); // whenever the BUTTON_VFO_BFO goes from LOW to HIGH
  // wait for 1/2 second and the system will be ready.
```

O código a seguir implementa de fato a função de cada botão. Observe também no código que a ação do botão só será executada se tiver decorrido um tempo mínimo após o último pressionamento (veja no programa a constante definida MIN_ELAPSED_TIME). Este artifício é utilizado porque o botão (Push Button) pode, em um único pressionamento, alterar mais de uma vez o status do pino que ele está conectado. Isso ocorre porque os contatos metálicos do botão não se comportam de forma tão precisa como aparentam. Diante disso, para que um único pressionamento do botão não seja entendido pelo sistema como vários, este recurso de medir o tempo decorrido após o último pressionamento, é utilizado. 

```cpp
// Change frequency increment rate
void changeStep()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                            // nothing to do if the time less than MIN_ELAPSED_TIME milisecounds
  noInterrupts();                                                      //// disable global interrupts:
  if (currentClock == 0)                                               // Is VFO
    currentStep = (currentStep < lastStepVFO) ? (currentStep + 1) : 0; // Increment the step or go back to the first
  else                                                                 // Is BFO
    currentStep = (currentStep < lastStepBFO) ? (currentStep + 1) : 0;
  isFreqChanged = true;
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}

// Change band
void changeBand()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;                                                       // nothing to do if the time less than 11 milisecounds
  noInterrupts();                                                 //  disable global interrupts:
  currentBand = (currentBand < lastBand) ? (currentBand + 1) : 0; // Is the last band? If so, go to the first band (AM). Else. Else, next band.
  vfoFreq = band[currentBand].minFreq;
  isFreqChanged = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}

// Switch the Encoder control from VFO to BFO and virse versa.
void switchVFOBFO()
{
  if ((millis() - elapsedTimeInterrupt) < MIN_ELAPSED_TIME)
    return;       // nothing to do if the time less than 11 milisecounds
  noInterrupts(); //  disable global interrupts:
  currentClock = !currentClock;
  currentStep = 0; // go back to first Step (100Hz)
  clearDisplay = true;
  elapsedTimeInterrupt = millis();
  interrupts(); // enable interrupts
}
```


## Considerações finais

O <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">código-fonte </a> deste projeto está com uma documentação bem rica que busca dirimir dúvidas quanto ao uso e configuração do Si5351, OLED Display, botões, Encoder e LED. A <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a>, logo acima desta página, poderá ser utilizado para a publicação de dúvidas ou defeitos encontrados neste projeto.    


**Observação:** Este projeto ainda está em processo de refinamentos e o conteúdo deste repositório está em  mudanças constantes.  



## Referências

[Arduino](https://www.arduino.cc)

[Silicon Labs Si5351A/B/C-B](https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf)

[Si5351 Library for Arduino](https://github.com/etherkit/Si5351Arduino)

[All About Arduino Libraries](http://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use)

[Arduino Wire Library](https://www.arduino.cc/en/Reference/Wire) 

[Arduino - Usando Interrupções](https://www.arduino.cc/reference/pt/language/functions/external-interrupts/attachinterrupt/)


[Tutorial: Arduino and the I2C bus – Part One](https://tronixstuff.com/2010/10/20/tutorial-arduino-and-the-i2c-bus/)

[Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz](https://www.adafruit.com/product/2045)

[Arduino Frequency Synthesiser Using 160MHz Si5351, lingib](https://www.instructables.com/id/Arduino-Frequency-Synthesiser-Using-160MHz-Si5351/)

[SI5351 Signal Generator](https://kk9jef.wordpress.com/2017/07/10/si5351-signal-generator/)

[Arduino – Si5351 Powered Signal Generator, kk9jef](https://nt7s.com/2018/01/arduino-si5351-powered-signal-generator/) 

[Text only Arduino Library for SSD1306 OLED displays](https://github.com/greiman/SSD1306Ascii)


### Vídeos

[VFO and BFO with Si5351A controlled by Arduino, PU2CLR](https://youtu.be/pFDvcIk5EAk)

[VFO e BFO com Si5351A e Arduino - Calibração do Si5351, PU2CLR](https://youtu.be/BJ83uvDcfIo)

[VFO e BFO com o Si5351 e OLED controlado por Arduino - (Portuguese), PU2CLR](https://youtu.be/0sGL2KpOJH4)

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













