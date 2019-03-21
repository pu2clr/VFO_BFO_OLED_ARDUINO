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
		<td align="left">SW2A </td>
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
		<td align="left">SW4A </td>
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
		<td align="left">SW7A </td>
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
		<td align="left">SW9A </td>
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
		<td align="left">SW12A</td>
		<td align="left"> 18.0 MHz</td>
		<td align="left"> 20.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="14" sdnum="1046;">14</td>
		<td align="left">SW13A</td>
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
		<td align="left">SW16A</td>
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
		<td align="left">SW18C</td>
		<td align="left"> 26.0 MHz</td>
		<td align="left"> 28.0 MHz</td>
	</tr>
	<tr>
		<td height="23" align="right" sdval="20" sdnum="1046;">20</td>
		<td align="left">SW19A</td>
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
		<td align="left">VHF2A</td>
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

<P>
<B>
Observação: Este projeto ainda está em processo de refinamentos e o conteúdo deste repositório está em  mudanças constantes.  
</B>
...
</P>