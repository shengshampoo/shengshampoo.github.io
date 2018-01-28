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
