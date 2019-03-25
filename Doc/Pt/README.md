<H1>Sobre o Projeto do VFO e BFO com Si5351A e Arduino</H1>

<P>
O Si5351A é um gerador de sinal configurável excelente para experimentações em radioamadorismo. Ele possui três saídas de sinal que podem ser configuradas de forma  independente. Isto é, cada saída pode oscilar em uma frequência distinta da outra. Esta característica permite, por exemplo, a construção de um VFO e um VFO no mesmo ambiente, simplificando circuitos em receptores e  transmissores. 
</P>

<P>
O Si5351A permite operações com alta frequência. Assim, o VFO deste projeto pode oscilar entre 535KHz até 160MHz dividido em 27 bandas que podem ser mudadas via o pressionamento de um botão (veja tabela a seguir). Um enconder permite que você mude a frequência dentro de uma banda. Quanto ao  BFO, foi projetado para oscilar entre 400KHz e 500KHz.  Um outro botão alterna o controle entre o VFO e o BFO. A frequência do BFO pode ser alterada pelo encoder.  O <B>programa em Arduino  está disponível</B> na pasta <B>source</B> deste repositório ou diretamente por este <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">link</a> e poderá ser adaptado conforme a sua necessidade.  A documentação do código fonte foi escrita no idioma Inglês, porém, não creio que isso será um problema para a maioria dos desenvolvedores. Qualquer dúvida ou problema poderá ser postado via a aba <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a> .
</P>



<P>
O operador poderá controlar o Si5351A por três botões e um encoder
<ul>
	<li><p><span style="font-variant: normal"> </span><span lang="en-US">O
	botão <B>Band</B> muda a faixa de freqência. Este projeto divide o VFO em 27 faixas. Veja a tabela de bandas a seguir.</span>
	</p>
	<li><p><span style="font-variant: normal"> </span><span lang="en-US">O
	botão <B>Step</B> muda o passo de incremento e decremento. Pode ser 50Hz, 100Hz, 500Hz, 1KHz, 2.5KHz, 5KHz, 10KHz, 100KHz e 500KHz; </span>
	</p>
	<li><p><span lang="en-US">O botão <B>VFO/BFO</B>
	alterna o controle entre o VFO e o BFO.</span></p>
	<li><p><span lang="en-US">O encoder é utilizado para controlar a frequência do VFO ou BFO.</span></p>
</ul>
</P>

<H2>Tabela de divisão de Bandas Utilizadas no Projeto</H2>
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




<H2>Esquema Elétrico</H2>

<P> A figura a seguir ilustra o esquema elétrico envolvendo os componentes utilizados no projeto. </P>

 <img src="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/schematic/vfobfo_schematic_fritzing_image.jpg" alt="Esquema do Projeto VFO e BFO com Arduino">




<H3>Sobre o esquema e conexões</H3>
<P>
Para este projeto foi utilizado o Arduino Micro, baseado no Atmega32u4. A principal razão pela escolha desta versão do Arduino foi pelo fato dele possibilitar o uso de até 5 interrupções externas (pinos 0, 1, 2, 3, 7). Este recurso foi utilizado para implementar o funcionamento dos botões Band, Setp e switch VFO / BFO. No entanto, com poucos ajustes no projeto, é possível adaptá-lo para um Arduino UNO ou similar. 
</P>
<H4>Si5351A</H4>
<P>O dispositivo Si5351A é ligado nos pinos D2 e D3. Você deve ficar atendo às descrições SDA (pin D2) e SCL (pin D3). A inversão dessas conexões fará com que o dispositivo não funcione. </P>

<H4>OLED Display SSD1306 - 128 x 64/0.96</H4>
<P>OLED Display também é ligado aos pinos D2 e D3 obedecendo as mesmas orientações do Si5351A.</P>  

<H4>Encoder</H4>
<P>O encoder é conectado ao Arduino Micro da seguinte forma: terminal A no pino D8 e terminal B no pino D9.</P> 

<H4>Botão de Banda (Band)</H4>
<P>
O Push Button Band é conectado ao pino D0/Rx conforme mostra a figura anterior. Este botão permite a seleção de 27 bandas.</P> 

<H4>Botão de Passo (Step)</H4>
<P>
O Push Button Step é conectado ao pino D1/TX. 
Este botão permite a seleção do passo de incremento e decremento da frequência quando o encoder for girado. </P>

<H4>Botão VFO/BFO</H4>
<P>
O Push Button VFO/BFO é conectado ao pino D7. 
Este botão alterna o controle da frequência do VFO para BFO e vice-versa. </P>

<BR>
<BR>
<P>
<B>
É importante ter em mente que, no caso do Arduino Micro, os pinos D2 e D3 são os que implementam o SDA e o SCL respectivamente. Outras versões de Arduino utilizam outros pinos para essas funções. 
</B>
</P>

<BR>
<BR>
<H2>Sobre o programa Arduino</H2>

<P>
Para controlar o Si53551A via Arduino foi utilizado a <a href="https://github.com/etherkit/Si5351Arduino">biblioteca Etherkit (Si5351 Library for Arduino)</a> desenvolvida pelo radioamador NTS7. Esta biblioteca oferece uma documentação muito rica e  várias facilidades se comparadas a outras bibliotecas para o Si5351. 
</P>

<P>
O programa Arduino <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">disponível neste projeto</a>, pode ser baixado, modificado e utilizado por qualquer um que tenha interesse em desenvolver um projeto similar.  
</P>
<P>
Alguns parâmetros utilizados no código-fonte podem ser alterados para atender alguma demanda específica quanto à pinagem do Arduino, bandas utilizadas pelo VFO  e faixa de freqência para o BFO, oor exemplo.</P> 
<BR>
<P>
Para modificar a faixa de frequência do BFO de 455KHz para 10MHz, basta alterar as constantes definidas:
</P>
<BR>
```C
#define MAX_BFO      990000000LU    // BFO max. frequency
#define CENTER_BFO  1000000000LU    // BFO center frequency
#define MIN_BFO     1100000000LU    // BFO min. frequency 
```
<BR>
<P>
O código anterior altera o BFO para oscilar entre 9.9MHZ e 10.1. Lembrando que a unidade utilizada pela biblioteca si5351.h é 0.01Hz (um centésimo de Hertz).
</P> 
<BR>
<P>
Da mesma forma, os Botões, o Encoder e o LED, podem ser instalados em outros pinos do arduino que não os utilizado neste projeto. Para tanto, basta modificar os valores para as constantes definidas a seguir: 
</P>
<B>
```C
#define ENCONDER_PIN_A 8 // Arduino  D8
#define ENCONDER_PIN_B 9 // Arduino  D9

#define BUTTON_STEP 0    // Control the frequency increment and decrement
#define BUTTON_BAND 1    // Controls the band
#define BUTTON_VFO_BFO 7 // Switch VFO to BFO
```

<P>
Os valores do passo de incremento e decremento, bem como as faixas utilizadas podem ser modificadas alterando os trechos de código a seguir: 
</P>

```C
// Band database:  More information see  https://en.wikipedia.org/wiki/Radio_spectrum
Band band[] = {
    {"AM   ", 53500000LLU, 170000000LLU},     // 535KHz to 1700KHz
    {"SW1  ", 170000001LLU, 350000000LLU},
	.
	.
	.
    {"VHF6 ", 13500000000LLU, 16000000000LLU}};

// Last element position of the array band
volatile int lastBand = 26;   // (sizeof band / sizeof(Band));	

Step step[] = {
   {"50Hz  ", 5000},         // VFO and BFO min. increment / decrement 
   {"100Hz ", 10000},
	.
	.
	{"500KHz", 50000000}};    // VFO max. increment / decrement

volatile int lastStepVFO = 8;   // index for max increment / decrement for VFO
volatile int lastStepBFO = 3;   // index for max. increment / decrement for BFO is 1KHz
```C

</B>
<BR>
<BR>
<P>
O <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/blob/master/source/si5351_vfobfo.ino">código-fonte </a> deste projeto está com uma documentação bem rica que busca dirimir dúvidas quanto ao uso e configuração do Si5351, OLED Display, botões, Encoder e LED. A <a href="https://github.com/pu2clr/VFO_BFO_OLED_ARDUINO/issues">aba Issues</a>, logo acima desta página, poderá ser utilizado para a publicação de dúvidas ou defeitos encontrados neste projeto.    
</P>

<P>
<B>
Observação: Este projeto ainda está em processo de refinamentos e o conteúdo deste repositório está em  mudanças constantes.  
</B>
</P>

