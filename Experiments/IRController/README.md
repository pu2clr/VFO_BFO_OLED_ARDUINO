# IR Remote Control Implemetation for the VFO and BFO


## CheckYourRemoteControl.ino

Use the sketch [CheckYourRemoteControl.ino](https://github.com/pu2clr/ATU-with-IR-and-Android-for-Magnetic-Loop/blob/master/source/CheckYourRemoteControl/CheckYourRemoteControl.ino) to get the code returned for each key.


## IR Remote Contrtol Examples


### Regular IR Remote Control 

![Photo IR Control 01](https://github.com/pu2clr/ATU-with-IR-and-Android-for-Magnetic-Loop/blob/master/Photos/photo_ir_01.png)

| Acation  Key| Returned value | Description |
| ------- | -------------- | ----------- |
| keep pressed | 4294967295 | Return this value if you keep any button pressed. |
| On/Off     | 16753245   |    |  
| MODE       | 16736925   |    |   
| MUTE       | 16769565   |    |    
| LEFT       | 16720605   |    |    
| RIGHT      | 16712445   |    |    
| PLAY/PAUSE | 16761405   |    |    
|     -      | 16769055   |    |    
|     +      | 16754775   |    |
|    EQ      | 16748655   |    |
|     0      | 16738455   |    |
|   100+     | 16750695   |    |
|   Return   | 16756815   |    |    
|     1      | 16724175   |    |
|     2      | 16718055   |    |
|     3      | 16743045   |    |
|     4      | 16716015   |    |    
|     5      | 16726215   |    |    
|     6      | 16734885   |    |  
|     7      | 16728765   |    |  
|     8      | 16730805   |    |  
|     9      | 16732845   |    |



### Small IR Remote Control 

The photo below shows another kind the controle tha can be used. 

![Photo IR Control 02](https://github.com/pu2clr/ATU-with-IR-and-Android-for-Magnetic-Loop/blob/master/Photos/photo_ir_02.png)

The table below shows the codes returned by each key. 

| Acation Key | One touch value | Keep Pressed |
| ------- | --------------  | -----------  |
| On/Off  |   12            | 2060         |                  
| Up      |   32        	| 2080         |              
| Down    |   33    		| 2081         |              
| MUTE    |   13    		| 2061         |              
| LEFT    |   17            | 2065         |                  
| RIGHT   |   16            | 2064         |                  
| AV/TV   |   11            | 2059         |     


