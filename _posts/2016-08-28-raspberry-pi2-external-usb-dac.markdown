---
published: true
title: 粗略整理Raspberry PI2 + 外接USB DAC 播放筆記
layout: post
tags: [Headphone, RaspberryPI]
categories: [Headphone]
---
### <font color="red">簡述外接USB DAC 播放的硬體平台及播放習慣</font>   

我的Raspberry PI2 和 外接USB DAC，    
全在對岸淘寶網購買，透過集貨寄來這裡。    
    
#### <font color="red">硬體清單：</font>   

<div class="rslides_container">
<ul id="slides1" class="rslides">
  <li><img src="https://dl.dropboxusercontent.com/s/63laoqvvaf6l5wl/DSC02747a.JPG" alt="">
   <p class="caption">Raspberry Pi2+ X-HDA1 組合配置_1</p></li>
  <li><img src="https://dl.dropboxusercontent.com/s/armngfqhzyubxhw/DSC02736a.JPG" alt=""><p class="caption">Raspberry Pi2+ X-HDA1 組合配置_2</p></li>
  <li><img src="https://dl.dropboxusercontent.com/s/8l2skhy3dre9h5q/DSC02741a.JPG" alt=""><p class="caption">Raspberry Pi2</p></li>
  <li><img src="https://dl.dropboxusercontent.com/s/fqvc369eea08u78/DSC02731a.JPG" alt=""><p class="caption">X-HDA1 USB DAC</p></li>
  <li><img src="https://dl.dropboxusercontent.com/s/4w6erpekehuzzfo/DSC027381a.JPG" alt=""><p class="caption">供電：18650鋰電行動電源</p></li>
  </ul>
</div>

---------------

 * **Raspberry Pi2**：接上I2S PiFi+  DAC ( BB PCM5122) 及  USB 無線網卡 Edimax EW-7811Un。   
 * **[X-HDA1][1]**：USB DAC 裸板。    
IC 組合為BRAVO-HD SA9227(USB IC) + CS4398 (DAC) + 耳放IC。    
可以解碼播放最高PCM 24bit/192kHz 和 DSD64/128/256。     
解碼 PCM 及 DSD64，卡上指示燈會亮綠燈，   
解碼 DSD128/256，卡上指示燈會同時亮綠燈及藍燈。   

作業系統：**Volumio 2 RC2(0.979)** 及 **Runeaudio v0.3-bata**。   
至於另一款OS：Moode，似乎與USB DAC 水土不服，   
播放出來的聲音都夾雜大量吵雜噪音，原因不明，所以暫時擱置。    
輸出聲卡可以切換I2S DAC 和 USB DAC 擇一選用。   
    
店家賣場提到這張 USB DAC支援DSD256 播放，   
但是我個人實測在Android 手機USB OTG外接，   
以及Raspberry PI2 外接此DAC，    
目前為止還沒辦法播放DSD256格式的音樂，    
播出聲音只發出嗞嗞噪音。    
我想或許僅可在Windows平台掛載官方封閉源碼驅動程式，   
並且特別設定才可順利播放吧。    
不過我個人家用電腦作業系統，    
早已改用Ubuntu Linux 處理生活日常事務，   
而且聆聽音樂，個人比較偏好的播放器材：    

* 一是Android 手機安裝Usb audio player pro，    
或是海貝音樂APP，USB OTG外接 DAC 。   
* 另一個則是 Raspberry Pi2 + USB DAC，    
安裝Volumio 或是 Runeaudio。    

所以以上我慣用的幾個操作系統也只能乾瞪眼了。    
不過，PCM 24bit/192kHz 及DSD128格式的高解析音樂，   
倒是可以在Raspberry Pi2 及Android 手機正常運作。    
    
高解析音樂檔案則是儲存在 Ubuntu Linux 硬碟空間，    
設定 samba 網路芳鄰並啟動服務。   
手機及Raspberry Pi 透過WI-FI 區網連線遠端電腦，   
存取高解析音樂檔案播放音樂，    
或是輸入網路電台網址連線收聽廣播音樂。    

### <font color="red">Raspberry Pi2 + USB DAC 組合：</font>    
    
另外選用一條USB Y 型線材附加輔助供電線，    
及USB B-Type 轉接頭，   
提供 USB DAC 額外穩定電源。   
在 Raspberry Pi2 開機之前，   
先將USB DAC 的輔助供電線通電，    
接下來才把 Raspberry Pi2 通電開機，   
這樣開機後系統才會自動偵測DAC 裝置。    
而Raspberry Pi2 和 USB DAC 的供應電源，   
都是接上行動電源。    
    
------------------------------    
    
### <font color="red">Raspbery Pi2 + USB DAC 播放設定</font>    
    
#### <font color="red">Volumio + USB DAC 播放設定</font>    
      
Volumio 開機可以偵測到USB DAC，   
但是在 Web-UI 的output device卻沒有列出USB DAC的項目。    

![img04][img04]

所以我也只能在透過 SSH 遠端連線登入Raspberry Pi2，     
輸入命令列指令修改設定檔。    
    
* 登入帳號    
```ssh volumio@[Raspberry Pi2 IP]```    
Password：volumio   

![img01][img01]

* 指令：```aplay -l```
列出系統的聲卡和音頻設備等，    
確認到有偵測到這張USB DAC，及對應的device ID。    

```bash
volumio@volumio:~$ aplay -l |grep SA9227
card 5: Audio [SA9227 USB Audio], device 0: USB Audio [USB Audio]   
card 5: Audio [SA9227 USB Audio], device 1: USB Audio [USB Audio #1]   
```

* device ID 注意的字樣是 card 後面的 **5**，以及device後面的 **0**,   
MPD設定檔手動修改輸出裝置就填入"5,0" 字樣。   

* 指令：```alsamixer```   
圖形化的amixer工具，調整USB DAC 的音量。    

![img02][img02]

* 指令：```nano /etc/mpd.conf```    
系統預裝nano 編輯器修改MPD 服務的設定檔 mpd.conf，   
將輸出聲音裝置修改成USB DAC 的device ID。   
我的例子是audio_output 裡device 原本的"hw:1,0" 改成"hw:5,0"，   
Ctrl+O 覆寫存檔原檔，Ctrl+X  離開 nano 編輯程式。       

![img03][img03]

* 重啟MPD 或是重新開機，使修改生效。    
但是建議重新開機會比較妥當。    
指令：```sudo /etc/init.d/mpd restart```   
重啟MPD 服務。    

* 指令：```mpd -V```  查詢MPD 版本   

```bash
volumio@volumio:~$ mpd -V |grep Daemon
Music Player Daemon 0.19.9
```
可惜的是Volumio 定制編譯的MPD 套件，    
沒有另外加入 DSD 的修補代碼。   
播放DSD128 格式，   
即便開啟DoP 選項仍舊無法順利播出音樂。    
USB DAC 指示燈僅亮綠燈。    

* 播放 PCM 24bit/192kHz flac 主畫面：   

![img08][img08]

--------------------------------

#### <font color="red">Runeaudio+ USB DAC 播放設定</font>   
    
Runeaudio 開機可以偵測到 USB DAC，    
Web-UI 的Audio output 也能正常列出 SA9227 USB 裝置的項目。 

![img10][img10]
  
此外，Runeaudio 定制編譯的MPD 套件，    
有另外加入 DSD 的修補代碼。   

```bash
[root@runeaudio ~]# mpd -V |grep Daemon
Music Player Daemon 0.19.13-dsd
```
    
開啟DoP 選項可以順利播出DSD128格式的音樂。    
USB DAC 指示燈綠燈及藍燈都有亮。    
雖然無線網卡Edimax EW-7811Un 只有 802.11n 1T1R，    
最佳網速至多40-50Mbps 附近，    
不過區網播放DSD128 高流量格式反倒沒有明顯延遲，   
可以完整停頓地播完一首歌曲。    
    
至於 SSH 遠端連線登入Raspberry Pi2，   
Runeaudio 有不同的名稱及密碼。
    
* 登入帳號
```ssh root@[Raspberry Pi2 IP]```   
Password：rune    

![img05][img05]

* 其他聲卡設定與Volumio 雷同。    

```
[root@runeaudio ~]# aplay -l |grep SA9227
card 1: Audio [SA9227 USB Audio], device 0: USB Audio [USB Audio]
card 1: Audio [SA9227 USB Audio], device 1: USB Audio [USB Audio #1]
```

![img06][img06]
![img07][img07]
![img09][img09]

[1]: https://item.taobao.com/item.htm?id=520314851231
[img01]: https://res.cloudinary.com/shengshampoo/image/upload/s--Xrw2Qz8r--/v1472381608/Screenshot_from_2016-08-28_17-37-141-fs8_q7tnew.png
[img02]: https://res.cloudinary.com/shengshampoo/image/upload/s--V5FWmuB2--/v1472381611/Screenshot_from_2016-08-28_17-44-241-fs8_lr0g5p.png
[img03]: https://res.cloudinary.com/shengshampoo/image/upload/s--z57b5oSE--/v1472381615/Screenshot_from_2016-08-28_17-45-581-fs8_surow8.png
[img04]: https://res.cloudinary.com/shengshampoo/image/upload/s--A841d4-X--/v1472381619/Screenshot_from_2016-08-28_18-04-201-fs8_umg4qx.png
[img05]: https://res.cloudinary.com/shengshampoo/image/upload/s--HzVYK0Jz--/v1472382977/Screenshot_from_2016-08-28_19-05-041-fs8_kgxqwb.png
[img06]: https://res.cloudinary.com/shengshampoo/image/upload/s--WWKTYoIy--/v1472382980/Screenshot_from_2016-08-28_19-10-261-fs8_ga7wpc.png
[img07]: https://res.cloudinary.com/shengshampoo/image/upload/s--aaT3pypN--/v1472382983/Screenshot_from_2016-08-28_19-12-341-fs8_gs65i3.png
[img08]: https://res.cloudinary.com/shengshampoo/image/upload/s--9HcyaGoZ--/v1472386780/Screenshot_2016-08-28-18-42-501-fs8_mjlxlq.png
[img09]: https://res.cloudinary.com/shengshampoo/image/upload/s--cWeyS4om--/v1472468088/Screenshot_2016-08-29-18-07-001-fs8_p7oikx.png
[img10]: https://res.cloudinary.com/shengshampoo/image/upload/s--ULClUjhT--/v1472464488/Screenshot_from_2016-08-29_17-52-06-fs8_thbbqs.png
