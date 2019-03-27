# Sobre o Projeto do VFO e BFO com Si5351A e Arduino


O Si5351A é um gerador de sinal configurável excelente para experimentações em radioamadorismo. Ele possui três saídas de sinal que podem ser configuradas de forma  independente. Isto é, cada saída pode oscilar em uma frequência distinta da outra. Esta característica permite, por exemplo, a construção de um VFO e um VFO no mesmo ambiente, simplificando circuitos em receptores e  transmissores. 

O Si5351A permite operações com alta frequência. Assim, o VFO deste projeto pode oscilar entre 535KHz até 160MHz dividido em 27 bandas que podem ser mudadas via o pressionamento de um botão (veja tabela a seguir). Um encoder permite que você mude a frequência dentro de uma banda. Quanto ao  BFO, foi projetado para oscilar entre 400KHz e 500KHz.  Um outro botão alterna o controle entre o VFO e o BFO. A frequência do BFO pode ser alterada pelo encoder.  O <B>programa em Arduino  está disponível</B> na pasta <B>source</B> deste repositório ou diretamente por este <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">link</a> e poderá ser adaptado conforme a sua necessidade.  A documentação do código fonte foi escrita no idioma Inglês, porém, não creio que isso será um problema para a maioria dos desenvolvedores. Qualquer dúvida ou problema poderá ser postado via a <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a> .


O usuário poderá controlar o VFO e o BFO por três botões e um Encoder

- O	botão **Band** muda a faixa de freqência. Este projeto divide o VFO em 27 faixas. Veja a tabela de bandas a seguir;
- O botão **VFO/BFO** alterna o controle entre o VFO e o BFO.
- O botão **Step** muda o passo de incremento e decremento. Pode ser 50Hz, 100Hz, 500Hz, 1KHz, 2.5KHz, 5KHz, 10KHz, 100KHz e 500KHz;
- O **Encoder** é utilizado para controlar a frequência do VFO ou BFO.


## Tabela de divisão de Bandas Utilizadas no Projeto
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
O dispositivo Si5351A é ligado nos pinos D2 e D3. Você deve ficar atendo às descrições SDA (pin D2) e SCL (pin D3). A inversão dessas conexões fará com que o dispositivo não funcione. 

#### OLED Display SSD1306 - 128 x 64/0.96
OLED Display também é ligado aos pinos D2 e D3 obedecendo as mesmas orientações do Si5351A. 

### Encoder
O encoder é conectado ao Arduino Micro da seguinte forma: terminal A no pino D8 e terminal B no pino D9.

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

Para controlar o Si53551A via Arduino foi utilizado a <a href="https://github.com/etherkit/Si5351Arduino">biblioteca Etherkit (Si5351 Library for Arduino)</a> desenvolvida pelo radioamador NTS7. Esta biblioteca oferece uma documentação muito rica e  várias facilidades se comparadas a outras bibliotecas para o Si5351. 

Ainda em relação a biblioteca da Etherkit, é importante observar o mecanismo de __calibração__ do Si5351. 
Existe um exemplo (si5351_calibration) que vem com a biblioteca da Etherkit que permite a calibração do Si5351. Este procedimento melhora a precisão da frequência de saída do sinal gerado pelo SI5351. Publiquei um vídeo no Youtube que mostrar como calibrar o Si5351 se necessário. Clique <a href="https://youtu.be/BJ83uvDcfIo">aqui</a> para assistir ao vídeo.

No Sketch deste projeto, você encontrará as seguntes linhas de código que se referem à correção encontrada no processo de calibração: 

```cpp

#define CORRECTION_FACTOR 80000 // See how to calibrate your Si5351A (0 if you do not want).
.
.
.
void setup()
{
	.
	.
	.
  si5351.init(SI5351_CRYSTAL_LOAD_8PF, 0, 0);
  // Adjusting the frequency (see how to calibrate the Si5351 - example si5351_calibration.ino)
  si5351.set_correction(CORRECTION_FACTOR, SI5351_PLL_INPUT_XO);
  .
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


O programa Arduino <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">disponível neste projeto</a>, pode ser baixado, modificado e utilizado por qualquer um que tenha interesse em desenvolver um projeto similar.  


Alguns parâmetros utilizados no código-fonte podem ser alterados para atender alguma demanda específica quanto à pinagem do Arduino, bandas utilizadas pelo VFO  e faixa de frequência para o BFO, por exemplo.

Para modificar a faixa de frequência do BFO de 455KHz para 10MHz, basta alterar as constantes definidas:


```cpp
#define MAX_BFO      990000000LU    // BFO max. frequency
#define CENTER_BFO  1000000000LU    // BFO center frequency
#define MIN_BFO     1100000000LU    // BFO min. frequency 
```

O código anterior altera o BFO para oscilar entre 9.9MHZ e 10.1. Lembrando que a unidade utilizada pela biblioteca si5351.h é 0.01Hz (um centésimo de Hertz).

Da mesma forma, os Botões, o Encoder e o LED, podem ser instalados em outros pinos do arduino que não os utilizados neste projeto. Para tanto, basta modificar os valores para as constantes definidas a seguir: 


```cpp
#define ENCODER_PIN_A 8 // Arduino  D8
#define ENCODER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO
```

Os valores do passo de incremento e decremento, bem como as faixas utilizadas podem ser modificadas alterando os trechos de código a seguir: 

```cpp
// Band database:  More information see  https://en.wikipedia.org/wiki/Radio_spectrum
Band band[] = {
    {"AM   ", 53500000LLU, 170000000LLU},     // 535KHz to 1700KHz
    {"SW1  ", 170000001LLU, 350000000LLU},
	.
	.
	.
    {"VHF6 ", 13500000000LLU, 16000000000LLU}};

// Calculate the last element position (index) of the array band 
const int lastBand = (sizeof band / sizeof(Band)) - 1; // For this case will be 26.
volatile int currentBand = 0; // First band. For this case, AM is the current band.

Step step[] = {
   {"50Hz  ", 5000},         // VFO and BFO min. increment / decrement 
   {"100Hz ", 10000},
	.
	.
	{"500KHz", 50000000}};    // VFO max. increment / decrement

// Calculate the index of last position of step[] array (in this case will be 8)
const int lastStepVFO = (sizeof step / sizeof(Step)) - 1; // index for max increment / decrement for VFO
volatile int lastStepBFO = 3;   // index for max. increment / decrement for BFO. In this case will be is 1KHz
volatile long currentStep = 0;  // it stores the current step index (50Hz in this case)
```

O <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">código-fonte </a> deste projeto está com uma documentação bem rica que busca dirimir dúvidas quanto ao uso e configuração do Si5351, OLED Display, botões, Encoder e LED. A <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a>, logo acima desta página, poderá ser utilizado para a publicação de dúvidas ou defeitos encontrados neste projeto.    

**Observação:** Este projeto ainda está em processo de refinamentos e o conteúdo deste repositório está em  mudanças constantes.  
