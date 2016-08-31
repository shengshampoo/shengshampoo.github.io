---
published: true
title: RASPBERRY PI/2/3 AUDIO OS - MOODE 及播放設定
layout: post
tags: [Headphone, RaspberryPI]
categories: [Headphone]
---
<font color="red"><b>2016.08.30 修改增添部分篇幅。</b></font>    
    
幾天前，    
Moode 的作者發佈新版的v2.7，    
更新幾個核心套件到最新版本，    
如：Linux kernel 4.4.19，MPD version 0.19.19 等。   

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Hi, Moode 2.7 is available at <a href="https://t.co/dYraMqaUSE">https://t.co/dYraMqaUSE</a> Details at diyAudio <a href="https://t.co/M9jcG8T6cM">https://t.co/M9jcG8T6cM</a> Enjoy :-) <a href="https://t.co/E85iQEHaOa">pic.twitter.com/E85iQEHaOa</a></p>— Moode Audio (@MoodeAudio) <a href="https://twitter.com/MoodeAudio/status/770008057824866304">August 28, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

此外，對岸老肖新浪博客的Moode + RPi3 的文章，   
[树莓派Pi3和moOdeAudio][4]    
對照Volumio/Runeaudio 差異的心得，    
值得翻閱。    

-----------------------------------------


**Raspberry Pi/2/3 audio  OS - MoOde 及播放設定**   
  
### <font color="red">基本介紹：MoOde</font>    
    
MoOde：[官方網址][1]。    
專用於 Raspberry Pi/2/3 平臺的另一個，    
類 Volumio/Runeaudio 播放音樂 OS，    
預設即可開啟選項支援 I2S dac 輸出。   
    
沒有成立自家的官方討論區，    
安裝教學文件是一個[簡明的文字txt檔][5]。    
完全由 Tim Curtis 一人，    
獨立開發並改良修改至 Volumio/Runeaudio 的作品。   
單就找到的資料及討論度來講，    
畢竟 和volumio/runeaudio 相比有些差距，   
但是我想還是有它值得一用的幾點：    

 * 幾乎月月更新 MoOde 版本釋出，    
    核心套件如Linux kernel/MPD 幾乎跟隨軟件官網腳步，   
    更新到最新最近的版本。    
 * 作者非常活躍頻繁地在官方 Twitter 及相關領域論壇，    
    發佈文章，解答使用者的問題，提出個人見解。    
    真的是能者多勞，軟件技術建置兼差客服諮詢。    
 * 作者似乎愛好 web radio 收聽電台音樂，    
    內建全球各地高傳真解析音樂電臺清單，    
    首頁預設播放清單也正是節錄幾個著名音樂電臺。    

現有獲知即時訊息並且加以討論議題的管道，    
一個是 官方moode 的 Twitter，   
刊載軟件版本更新，dac 的 支援度，   
及操作介面的簡單使用說明等。    
從刊登時間及前後間隔來說，    
作者的 Twitter 訊息更新迅速且蠻勤快的。   
    
另一個地方，    
則是作者有在 [diyaudio/Computer Audiophile/AudioKarma 等論壇][2]，    
開設 MoOde 話題，   
發佈完整Moode 更新訊息及播放相關軟硬體討論。    
    
國外音響媒體網站，    
Confessions of a Part-Time Audiophile 一篇報導：    
[Review: Raspberry Pi 2 as Music Streamer][3]。   
其中一個段落提到，    
MoOde 取自於Debian系統，    
而操作 UI 是偏向 Runeaudio UI 的客製版。    

----------

### <font color="red">Raspbery Pi2 + I2S DAC 播放設定</font>    
  
#### <font color="red">Moode + I2S DAC 播放設定</font>    
    
我自己使用的I2S DAC，   
是在淘寶網購買的PiFi+ DAC ( BB PCM5122)     
Moode 開機可以偵測到這個聲卡，    
就直接 Web-UI 設定I2S audio device 選 **Audiophonics PCM5122 DAC**，   
重開機後確認Audio device 為 **I2S audio device**，    
就可以播放音樂了。    

![img01][img01]

![img02][img02]

    
細部的進階修改MPD 設定部分，    
就透過 SSH 遠端連線登入Raspberry Pi2，        
Moode 有不同的名稱及密碼。    
  
* 登入帳號    
```ssh pi@[Raspberry Pi2 IP]```   
Password：raspberry   

![img03][img03]

* 指令：
```mpd -V```   
查詢MPD 版本    

```bash
pi@moode:~ $ mpd -V |grep Daemon
Music Player Daemon 0.19.19
```
    
![img04][img04]


[1]: http://moodeaudio.org/
[2]: http://moodeaudio.org/docs/forum.html
[3]: http://parttimeaudiophile.com/2015/05/23/review-raspberry-pi-2-as-music-streamer/
[4]: http://blog.sina.cn/dpool/blog/s/blog_5372b4a00102whpz.html
[5]: http://moodeaudio.org/docs/readme.txt
[img01]: https://res.cloudinary.com/shengshampoo/image/upload/s--61E9ZnSW--/v1472553839/Screenshot_from_2016-08-30_18-39-41-fs8_tgy5jt.png
[img02]: https://res.cloudinary.com/shengshampoo/image/upload/s--dhXqJ1XB--/v1472553839/Screenshot_from_2016-08-30_18-40-40-fs8_uti36c.png
[img03]: https://res.cloudinary.com/shengshampoo/image/upload/s--qsgx8fUe--/v1472554425/Screenshot_from_2016-08-30_18-52-131-fs8_nrk4lb.png
[img04]: https://res.cloudinary.com/shengshampoo/image/upload/s--K5YB_Da7--/v1472622863/Screenshot_2016-08-31-13-48-371-fs8_liz0rj.png
