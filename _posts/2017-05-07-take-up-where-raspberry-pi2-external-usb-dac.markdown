---
published: true
title: 粗略整理Raspberry PI2 + 外接USB DAC 播放筆記(續)
layout: post
tags: [Headphone, RaspberryPI]
categories: [Headphone]
---

### <font color="red">粗略整理Raspberry PI2 + 外接USB DAC 播放筆記(續)</font>  

承接去年整理的Raspberry Pi 外接USB DAC的設定筆記：  
[粗略整理Raspberry PI2 + 外接USB DAC 播放筆記][4]  

到了今年，  
Runeaudio 官網下載的Pi 2/3 版本，  
還維持在去年高掛的舊版本，  
整整一年都沒有更新換代，  
感覺上官方作業系統開發的進度有些停滯不前。  
雖然討論社區還是有版友不少近期刊登的討論文章，  
原有舊有系統OS其實完成度用，  
平日播放體驗也不錯。  
只是當系統內的相關核心元件，  
如MPD，Alsa 音頻驅動官方都有更新版本，  
舉例如新增外接播放器材支援，  
無損音樂格式的播放提升，  
解決軟體播放Bug等都有些進展。  
而現階段Runeaudio還是只能遷就使用原舊有版本。  
除非懂系統程式的，  
可以動手下載編譯除錯安裝新版本，  
不然老實說現在會比較選擇另外兩家OS。  
  
Moode Audio 目前應該是改版積極頻繁的，  
最新的rev 3.6 是今年4月底發布的。  
系統內的相關核心元件，  
如MPD，Alsa 音頻驅動基本上都會跟隨官方的最新，  
或是次要新版本。  
好比說 MPD 版本已經更新為0.20.4。  
殘念的是，從 rev 3.5開始，延續到現在的rev 3.6。  
必須要網絡付費 USD 10 取得壓縮包的解壓密碼，  
才可開啟作業系統的映像檔案。  
至於早前可以下載無需付費解壓的rev 3.1，  
也已經下架找不到了下載鏈結。  
  
作者獨立開發，頻繁更新維護提供軟體作品，  
且不吝在論壇發帖解惑版友使用上的問題，  
而且也有很長一段時期免費提供這些下載軟件。  
我想現在改成需要付費使用倒也是無可厚非，  
有償支持作者開發好的作品也算是理所當然的。  
金額不大，只是丟錢下去來說還是有些遲疑糾結的。  
  
Volumio 2 更新頻率也不差，  
[看起來有定期修正更新版本][1]，  
目前官網下載的Pi 2/3 版本是今年四月底發布的，  
相關核心元件，如MPD 的版本倒也不會太舊，  
而且 Volumio 2 主打操作界面直覺，簡單，上手，  
如掛載無線網路，網路芳鄰等手動設定。  
所以現在我自己在樹莓派播放音樂，  
會花時間在Volumio 2 和 Moode 安裝設定。  
  
去年原有的硬體配件，  
Raspberry Pi + USB DAC ( SA9227+CS4398)  
安裝Volumio 2 和 Moode 舊有版本播放 DSD128 格式，  
都有一些問題待解決。  

不過現在這兩個換成新版本，  
可能是更新修正bug 或是補足硬體或軟體支援性，  
目前來看播放DSD128 格式已經沒有懸念了。  
  
----

<font color="red">Volumio + USB DAC 播放設定</font>  

沒有變動，和去年寫的筆記沒有兩樣，  
只是照用原有做法在新版本系統，  
開啟DoP 選項，  
播放DSD128就一試成功，  
順利播出音樂。  
USB DAC 指示燈也正常亮藍燈。  
  
習慣成自然，  
偏好透過 SSH 遠端連線登入Raspberry Pi2，  
輸入命令列指令修改設定檔切換選用外接USB 裝置播放。  
  
查詢MPD 版本  
<pre class="prettyprint"><span class="desert">volumio@volumio:~$ mpd -V |grep Daemon
Music Player Daemon 0.19.19
</span></pre>

----

<font color="red">Moode + USB DAC 播放設定</font>  
  
參考另一篇筆記：  
[Raspberry Pi/2/3 audio OS - MoOde 及播放設定][5]   
  
我手上是針對舊版的 Moode rev3.1，  
所以 MPD 是稍舊版本-0.19.19，  
但是這個版本播放DSD128 也是OK，  
USB DAC 指示燈也正常亮藍燈。  
  
前一篇提到，  
Moode和似乎與USB DAC 水土不服，  
播放出來的聲音都夾雜大量吵雜噪音，原因不明，  
而國外有網友提問，  
而作者也適時回答可用的[兩個解決方案][2]：  

> 1. since u are using an external volume control, set MPD volume control in Moode to "disabled". This will result in 100% volume (0dB) output from Moode.
> 2. if after connecting the DAC and configuring Moode, playback produces white noise, [apply the UAC2 fix listed at moodeaudio.org under PLAYER FIXES button][3].

設定 MPD volume control 為"disabled"，  
改成外接裝置調整播放音量。  
然後，SSH 遠端連線登入Raspberry Pi2，  
輸入命令列指令修改設定檔 **cmdline.txt**。  

<pre class="prettyprint"><span class="desert">sudo nano /boot/cmdline.txt
</span></pre>

文件內容開頭新增如下字串：  
<pre class="prettyprint"><span class="desert">dwc_otg.fiq_fsm_mask=0x3 
</span></pre>

而這正可以消除播放中的大量吵雜噪音。  

播放 DSD128 樂曲  
<img class="responsively-lazy responsively-lazy-600" src="https://res.cloudinary.com/shengshampoo/image/upload/s--6W8JCrIi--/v1494125727/Screenshot-05072017-1014AM1-fs81_gzej53.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">  
播放 DSD128 樂曲封面局部  
<img class="responsively-lazy responsively-lazy-600" src="https://res.cloudinary.com/shengshampoo/image/upload/s--gwJ4ztoL--/v1494125727/Screenshot-05072017-1019AM1-fs81_x9btcq.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">

[1]: https://volumio.org/forum/changelog-t1575.html
[2]: http://www.diyaudio.com/forums/pc-based/271811-moode-audio-player-raspberry-pi-125.html#post4554933
[3]: http://moodeaudio.org/docs/fixes.html
[4]: https://shengshampoo.github.io/headphone/2016/08/28/raspberry-pi2-external-usb-dac.html
[5]: https://shengshampoo.github.io/headphone/2016/08/31/rpi123-moode-os-setting.html
