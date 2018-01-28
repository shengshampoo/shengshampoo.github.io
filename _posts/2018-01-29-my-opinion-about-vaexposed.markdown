---
published: true
title: 免Root套用Xposed模組的系統模擬器- VAExposed
layout: post
tags: [Android]
categories: [Android]
---

### <font color="red">免Root套用Xposed模組的系統模擬器- VAExposed</font> 

免Root套用Xposed模組的系統模擬器：VAExposed   
來自對岸牛人的軟件作品。    
    
作者Blog 的文章:   
[<span lang="zh-Hans">无需Root也能使用Xposed！ Weishu's Notes</span>][1]   
提到開發這個App的理念，   
透過那些手段，   
達到不用root權限，   
也能夠套用Xposed模件，    
賦予系統層級的客制修改，    
應用在一些特定的需求。   
    
對代碼編程算門外漢，    
依照作者的介紹，    
我想是這個App的功能，    
是建立一個虛擬Android系統，   
或是一個容器。   
把別的App 放在這個容器裡執行運作。   
    
就等同雙開同程式的App，   
可以讓同一隻手機，   
安裝兩個同樣程式，   
其中一個安裝在雙開App裡建立的容器。   
    
不過 VAExposed 建立的容器，   
還多實作出 Xposed 相容環境。    
以掛載Xposed 模件。   
    
所以不需要Root，    
直接在VAExposed 裡，   
就可以讓 Xposed 模組的功能套用生效。    
    
VAExposed：
[Github 官網][2]，[下載鏈接][3]

------

### <font color="red">個人簡單實測心得</font>

我的手機是小米Max2，        
Android OS 為 7.1.1，     
沒有解鎖，沒有刷機，      
單純就用官方版本，       
系統版本更新也就只用OTA升級。        

<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--_aRrZM2O--/v1517165423/Screenshot_2018-01-28-20-19-22-792_io.va.exposed1-fs81_kupvjp.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--rDwDmSnN--/v1517165039/Screenshot_2018-01-28-20-19-22-792_io.va.exposed1-fs81_qcfews.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>  
        
安裝VAEXposed App，        
在容器裡面安裝使用Xposed 模組和我自己有在使用的App，     
會遇到蠻大的機率，       
會執行異常或是閃退的情形。          
        
比方說，   
Pitt 和 BePtt 等PTT瀏覽器，       
就是連線異常無法登錄進去 PTT。       
Chromium 核心客制網頁瀏覽器- Bromite，        
開啟直接閃退，原因不明。        
        
不過還是有幾個App，       
運作正常，       
也能透過Xposed 模組的附加功能，     
達到所要的目的。        

<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--GRneKeHM--/v1517165630/Screenshot_2018-01-28-20-19-09-483_io.va.exposed1-fs81_veevrv.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--_YLX0YYl--/v1517165039/Screenshot_2018-01-28-20-19-09-483_io.va.exposed1-fs81_ijvyvx.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--j_BQVfrF--/v1517165715/Screenshot_2018-01-28-20-19-35-772_io.va.exposed1-fs81_bndegc.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--h6auHSat--/v1517165039/Screenshot_2018-01-28-20-19-35-772_io.va.exposed1-fs81_b5ei9l.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
              
#### 網易雲音樂 + 音量調節:    

音量調節Xposed 模組:      
[Github 官網][4]，[下載鏈接][5]，[Issue 討論組][6]。      
        
網易雲音樂：    
基本上在 Apkpure 應用商店找[<span lang="zh-Hans">网易云音乐</span>][7]下載，     
各種新舊版本都可在裡面找到。      
        
在容器裡面執行，        
播放音樂正常，     
特定功能也能達成目的。    
    
#### Adblock reborn Xposed 模組：      

Adblock reborn Xposed：      
[Github 官網][8]，[酷安下載鏈接][9]。      

一開始原意是想透過這個模組，      
在容器裡面的所有執行的App的，        
全域封鎖擋掉廣告，       
包含Webview 內置網頁，     
App 掛載的內嵌推送廣告等。        
但是實際情況來說，           
在還沒套用擋掉功能前，     
先被容器和App 的相容度而頭疼。              
目前就只是安裝待命而已。            

#### MicroG 框架 + YouTube apk
        
承蒙 [PTT版友 Segal][10]的線索，        
容器裡的依賴Google Play框架的GApp，       
可以另外安裝類似兼容的 MicroG 框架，       
啟用 Google Service 識別功能，       
這樣開啟 YouTube 正常，        
播放影片也流暢順利了。     

MicroG:     
[官網][11]，[下載鏈接][12]。          

我自己是下載安裝前三個檔案，      
Services Core，Services Framework Proxy，Store (FakeStore release)，       
在 Services Core 選項開啟相關服務，        
再來同樣到 Apkpure 應用商店找[Youtube][13]下載 apk 即可。     

<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--yGSoiQqB--/v1517165771/Screenshot_2018-01-29-02-35-30-090_io.va.exposed1-fs81_ssftvu.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--2OpUozDr--/v1517165040/Screenshot_2018-01-29-02-35-30-090_io.va.exposed1-fs81_bo42sj.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
        
原則上，        
VAExposed 容器內非必要不會登入自己常用的帳號，        
尤其是 Google 帳戶，      
而且 Youtube 播放影片，        
也不強制要求登入帳號，     
登入帳號也只是帶入訂閱的頻道的喜愛的影片。       
還有觀察到，      
不清楚是否是 Adblock reborn 模組功能生效，       
或是我想太多了，        
播放影片似乎不太常碰見Youtube 強制性置入廣告。         
        
-----
        
最後，     
對岸中國大陸有很多優質的 Android 工具APP，     
如 綠色守護Greenify，黑域等      
當然也和對岸奇特的互相喚醒APP耗電耗資源有關吧。       

[1]: http://weishu.me/2017/12/02/non-root-xposed/
[2]: https://github.com/android-hacker/VAExposed
[3]: https://github.com/android-hacker/VAExposed/releases
[4]: https://github.com/bin456789/Unblock163MusicClient-Xposed
[5]: https://github.com/bin456789/Unblock163MusicClient-Xposed/releases
[6]: https://github.com/bin456789/Unblock163MusicClient-Xposed/issues
[7]: https://apkpure.com/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/com.netease.cloudmusic
[8]: https://github.com/AdBlocker-Reborn/AdBlocker_Reborn
[9]: http://coolapk.com/apk/com.aviraxp.adblocker.continued
[10]: https://www.ptt.cc/bbs/Android/M.1517075195.A.118.html
[11]: https://microg.org/
[12]: https://microg.org/download.html
[13]: https://apkpure.com/youtube/com.google.android.youtube
