---
published: false
title: Runeaudio 發佈針對raspberry pi 2/3 量身的 0.3 beta 版
layout: post
tags: [Headphone, RaspberryPI]
categories: [Headphone, ]
---
**Runeaudio 發佈針對raspberry pi 2/3 量身的 0.3 beta 版**

<font color="red">2015.06.21</font>

[“RUNEAUDIO RUNS ON RASPBERRY PI 2 AND CUBIETRUCK”][1]    

至於更新日誌有哪些項目，    
在官方論壇上，    
可以翻閱[Frank Friedmann (aka hondagx35)撰寫的內容。][2]   

**<font color="red">預設關閉 I2S 聲卡支援模組。</font>**    
若要開啟需參考論壇的如下說明：    
[How to let Pi 2 and Hifiberry DAC+ get work with RUNE ?][3]

SSH 登入，root 密碼是rune，   
nano 修改 /boot/config.txt，    
將下方字串前井字符號移除。    
    
> 
> device_tree_param=i2s=on      
> device_tree_overlay=hifiberry-dac   
> device_tree_overlay=hifiberry-dacplus      
>    
    
重開機後，在MPD 設定的audio output 選擇 HifiBerry DAC (I2S) 即可。     
![MPC config][img01]


------------------------------

<font color="red">2016.07.12</font>

然後，在今年2016 的 3月，   
[Runeaudio 也開始支援新版的 raspberry pi 3][4] ，   
釋出日期是2016.03.23。    

至於更新日誌有哪些項目，    
在官方論壇上，    
同樣翻閱參考由軟體技術團隊主力，    
[Frank Friedmann (aka hondagx35)操刀撰寫的內容][5]。    

因為升級新版的MPD 0.19.13-dsd，   
而且舊款的raspberry pi 2 也適用此版本，   
更建議raspberry pi 2 用戶換成這個新版。   


[1]: http://www.runeaudio.com/runeaudio-runs-on-raspberry-pi-2-and-cubietruck/
[2]: http://www.runeaudio.com/forum/the-new-4-core-raspberry-pi-t862-40.html#p5386
[3]: http://www.runeaudio.com/forum/how-to-let-pi-2-and-hifiberry-dac-get-work-with-rune-t990.html#p5941
[4]: http://www.runeaudio.com/runeaudio-runs-raspberry-pi-3-model-b/
[5]: http://www.runeaudio.com/forum/the-raspberry-pi-3-t3256-80.html#p12370
[img01]: https://res.cloudinary.com/shengshampoo/image/upload/v1468286829/cm1infz-fs8_dzst5j.png