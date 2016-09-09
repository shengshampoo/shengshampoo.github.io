---
published: true
title: 構建 DLNA連線播放區網音樂伺服器 Minimserver 微筆記
layout: post
tags: [Headphone, RaspberryPI]
categories: [Headphone]
---

**構建DLNA連線播放區網音樂伺服器 Minimserver 微筆記**   
    
### <font color="red">構建 DLNA的三個組成</font>    
    
何謂 DLNA/UPnP？參考網路相關資料：    

* 電腦王 數位家庭前哨戰，看懂8大影音傳輸技術    
   [Page 1][1] 及 [Page 2][2]。   
* [維基百科 數位生活網路聯盟 ][3]。   
        
簡單來說，    
就是家用網路播放媒體的一套規範標準，    
其目的是透過區網串聯家裡的數位媒體裝置，    
彼此互相連結相通，    
其中一個裝置存放的影音檔案或是接通好的串流媒體服務，    
可以即時傳輸到區網內其他的裝置播放。    
而且不需要進行額外複雜的設定，    
如存放檔案的設備 IP 位址及登入帳號密碼。    
比起傳統的Samba 網路芳鄰，    
設定IP 位址，檔案權限，檔案路徑，   
登入帳號密碼，啟動服務等作業設定。    
DLNA 對新手而言，學習門檻較低，   
也比較輕鬆上手。    

構成一個DLNA 連線播放區網裝置的音樂檔案，   
至少需要 3 個部分：   

* **Media Server/媒體伺服器**：   
   常見於電腦或NAS 等內建大容量硬碟空間，   
   可以儲存管理多筆高解析音樂檔案。   
   或者是可連線網外串流媒體服務，   
   如網路音樂電台，線上串流音樂等的接收設備。   
   我個人家用電腦作業系統，   
   是選擇Ubuntu Linux 作業系統，    
   所以安裝的音樂伺服器軟體是Minimserver。    
   透過Minimserver建立DLNA 音樂檔案索引。   
* **Media Renderer 媒體渲染器**：   
  播放輸出任何由媒體伺服器所提供媒體檔案的裝置。    
  一般而言聆聽音樂，我個人比較偏好的播放器材：    
  
   *  一是Android 手機安裝Usb audio player pro，    
      或是海貝音樂APP，USB OTG外接 DAC 。   
   *  另一個則是 Raspberry Pi2 + USB/I2S DAC，    
      安裝Volumio/Runeaudio/MoOde。   

    以上兩個播放方式都可選用DLNA 連線。   
* **Controller/控制節點**：   
  選擇媒體檔案來源，建立播放清單，並指定播放輸出的裝置。    
  我自己是在Android 手機安裝BubbleUPnP，    
  透過這個app 建立播放清單，    
  指定播放音樂輸出裝置。    

-----------------

### <font color="red">安裝設定 Minimserver</font>     

Minimserver：[官網][4]。    
翻閱資料：    

* [<span lang="zh-Hans">Minimserver，CD文件分轨和DSF</span>][5]   
* [<span lang="zh-Hans">NanoPi M 手痒先做个DLNA服务器玩玩</span>][8]    

Minimserver 是UPnP AV/DLNA 網路音樂管理伺服器，   
可以讓區網終端播放設備存取音樂檔案。    
僅能當 DLNA Media Server，    
功能單一簡單，設置選項也不多，    
或許因此系統運行速度很快。    

我個人家用電腦作業系統，    
是選擇Ubuntu Linux 作業系統，     
因此以下安裝步驟是針對 Linux 環境執行，   
會比較偏向輸入命令列指令執行安裝動作。    

Minimserver 是使用Java 程式語言，   
撰寫編譯的網路應用程式，    
須預先安裝Java 相關程式套件，   
如Java Runtime Environment (JRE)。    
也正因為使用Java 跨平台語言的優點，   
Minimserver 能夠在 Windows/Linux 兩大系統安裝使用。   

我是直接在[Oracle Java JRE][6]及 [Minimserver][7] 官網，    
下載最新的版本，直接解壓縮，    
設定Java 程式執行必要環境變數，   
就開始執行Minimserver 指令依序設定相關選項。    

* 指令：```tar  -vxf  XXX.tar.gz```   
  解壓縮下載的Java/Minimserver GZ 程式壓縮檔。    
  
```bash   
tar -vxf jre-8u???-linux-x64.tar.gz     
tar -vxf MinimWatch-0.?.?-linux-x64.tar.gz      
```
    
* 撰寫Java 程式執行必要環境變數文本，   
  檔名取名 "exe_set_java_variable"，內容如下：    

```bash     
#file name:exe_set_java_variable        
export PATH=$PATH:$HOME/Downloads/jre1.8.0_???/bin      
export JAVA_HOME=$HOME/Downloads/jre1.8.0_???       
```     
    
* 撰寫Minimserver 程式執行啟動執行批次檔，     
  檔名取名 "exe_minimserver"，    
  為繼承套用 "exe_set_java_variable" 文本裡的Java 執行環境變數，    
  才能透過Java 執行 Minimserver。   
  解壓縮後，Minimserver 啟動檔路徑為：```/minimserver/bin/startc```。   
  
  exe_minimserver 文本內容如下：    

```bash
#file name:exe_minimserver      
source ./exe_set_java_variable      
export LD_LIBRARY_PATH=$JAVA_HOME/lib/amd64:$JAVA_HOME/lib/amd64/server     
$HOME/Downloads/minimserver/bin/startc      
```
        
* 命令列執行exe_minimserver 啟動設定Minimserver：       

```bash
???@???:~/Downloads$ ./exe*server       
Migrating autostart configuration       
Acquiring root privilege for system configuration update...     
MinimServer 0.8.4, Copyright (c) 2012-2016 Simon Nash. All rights reserved.     
autoUpdate: installed package 'minimserver-0.8-update-88'       
Enter command (? for help):     
autoUpdate: relaunching runtime     
>MinimServer 0.8.4 update 88, Copyright (c) 2012-2016 Simon Nash. All rights reserved.      
starting MinimServer[exton-os]      
Enter command (? for help):     
>Enter content directory, or null to continue:      
/media/live/my_music_folder     
MinimServer[exton-os] is running        
>       
```
   
  設定掛載音樂檔案的資料夾路徑後，即成功啟動Minimserver 服務。    

* 指令```?```，等同```help```，列出所有可用的指令。

```bash
>?      
Commands:       
rescan     restarts the media server and rescans the media library      
props      shows current properties for the media server        
prop n=v   sets media server property name n to value v     
about      shows version and status information for the media server        
stop       stops the media server without exiting the application       
restart    restarts the stopped or running media server     
exit       exits the media server application       
packages   shows installed packages (with status) and available packages        
install p  installs package p       
remove p   removes installed package p      
undo p     undoes a pending change to installed package p       
relaunch   relaunches the runtime and applies pending package changes       
modules    shows installed modules (with status)        
updates    shows available updates for installed packages       
sleep t    delays execution for t seconds (can be useful for scripting)     
help       (or ?) displays this information     
>       
```

* 指令```packages``` 列出已安裝和可用的minim套件。      

```bash
>packages       
The following packages are installed:       
minimserver-0.8-update-88  Active       
minimserver-0.8.4  Active+Original      
The following packages are available for installation:      
minimstreamer-0.5.25        
>       
```

* 指令```install minimstreamer-0.5.25``` 安裝minimstreamer。        
  完成後先關閉Minimserver 服務。        

* [Minimstreamer][9]：Minimserver 擴充套件，        
  用於傳輸串流音頻，及相關應用，如：轉碼，錄製等。      
  安裝的理由是傳輸DSD音頻，並封裝成DoP 的WAV 格式。     

* 修改/minimserver/data/minimserver.config 增加一行設定敘述。
```
stream.transcode=dsf:dopwav,dff:dopwav
```

  意思就是DSD格式的dsf/dff 轉碼為DoP 封裝的WAV 形式傳輸。       
  之後再執行啟動 Minimserver 服務。     

  ![img01][img01]

* 以上就差不多完成初步設定。        

-----------------

### <font color="red">個人 DLNA 網路配置</font>         

實際配置 DLNA 網路播放音樂 - 1：       
    
* Media Server：個人電腦 + Minimserver      
* Media Renderer：Raspberry Pi2 + Runeaudio 0.3bata       
* Controller：Android 手機 + BubbleuPnP         
* 執行Android 手機上的BubbleuPnP，      
  音樂來源為個人電腦上的Minimserver裡的一首DSD128 音樂檔，      
  播放音樂輸出至Raspberry Pi2 外接的Usb DAC。       
  不過比較疑惑的是，Usb DAC 可以順利啟動DoP DSD解碼，       
  BubbleuPnP 顯示播放的格式卻是 352kHz wav？        

<div id="lightgallery">
<a href="https://res.cloudinary.com/shengshampoo/image/upload/s--DaTX4HDk--/v1472899944/Screenshot_2016-09-03-08-42-311-fs8_jrfjld.png" data-sub-html="DLNA 配置"><img class="responsively-lazy" src="https://res.cloudinary.com/shengshampoo/image/upload/s--u2kO5Ip6--/v1472899944/Screenshot_2016-09-03-08-42-312-fs8_e51or4.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></a>
<a href="https://res.cloudinary.com/shengshampoo/image/upload/s--c_eEPOh9--/v1472899445/Screenshot_2016-09-03-08-44-151-fs8_tjllp0.png" data-sub-html="BubbleuPnP 播放介面"><img class="responsively-lazy" src="https://res.cloudinary.com/shengshampoo/image/upload/s--mh_SgiiX--/v1472899444/Screenshot_2016-09-03-08-44-152-fs8_dbcgnh.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></a>
</div>

實際配置 DLNA 網路播放音樂 - 2：       

* Media Server：個人電腦 + Minimserver      
* Media Renderer：Android 手機A + Usb Audio Player Pro。        
* Controller：Android 手機B + BubbleuPnP        
* Usb Audio Player Pro 和 BubbleuPnP 可以裝在同一隻Android 手機，       
  控制播放及輸出音樂全由這個Android 手機運作。      
  也可以分別裝在不同Android 手機，      
  個別用作控制播放和輸出音樂。      
  本例是裝在同一隻Android 手機，        
  OTG 外接 Usb DAC，        
  使用Usb Audio Player Pro 播放24bit/192kHz音樂。    

|DLNA 配置|BubbleuPnP 播放介面 |
|:---:|:---:|
|[![][img26]][img25]|[![][img28]][img27]|

|BubbleuPnP 播放介面|UAPP uPnP Renderer 播放介面|
|:---:|:---:|
|[![][img28]][img27]|[![][img30]][img29]|

[1]: http://www.techbang.com/posts/15545-digital-home-skirmish-read-8-a-v-transmission-technologies
[2]: http://www.techbang.com/posts/15545-digital-home-skirmish-read-8-a-v-transmission-technologies?page=2
[3]: https://zh.wikipedia.org/zh-tw/%E6%95%B8%E4%BD%8D%E7%94%9F%E6%B4%BB%E7%B6%B2%E8%B7%AF%E8%81%AF%E7%9B%9F
[4]: http://minimserver.com/
[5]: http://blog.sina.cn/dpool/blog/s/blog_5372b4a00102vp9o.html
[6]: http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html
[7]: http://minimserver.com/downloads/index.html
[8]: http://bbs.ickey.cn/community/forum.php?mod=viewthread&tid=63912
[9]: http://minimstreamer.com/userguide.html
[img01]: https://res.cloudinary.com/shengshampoo/image/upload/s--1U88ZnQM--/v1472898747/Screenshot_from_2016-09-03_15-53-261-fs8_r2k97w.png
[img25]: https://res.cloudinary.com/shengshampoo/image/upload/s--FXlXAFiV--/v1472972345/Screenshot_2016-09-04-14-50-451-fs8_zfphwr.png
[img26]: https://res.cloudinary.com/shengshampoo/image/upload/s--jcbXKrDQ--/v1472972345/Screenshot_2016-09-04-14-50-452-fs8_ry0y4y.png
[img27]: https://res.cloudinary.com/shengshampoo/image/upload/s--WpWdZMLH--/v1472972354/Screenshot_2016-09-04-14-51-021-fs8_sqwsn1.png
[img28]: https://res.cloudinary.com/shengshampoo/image/upload/s--iLMwftVw--/v1472972354/Screenshot_2016-09-04-14-51-022-fs8_fpr0hy.png
[img29]: https://res.cloudinary.com/shengshampoo/image/upload/s--JMIbDRQt--/v1472972768/Screenshot_2016-09-04-14-51-091-fs8_jzarfu.png
[img30]: https://res.cloudinary.com/shengshampoo/image/upload/s--VV0XI41P--/v1472972768/Screenshot_2016-09-04-14-51-092-fs8_hvj5re.png
