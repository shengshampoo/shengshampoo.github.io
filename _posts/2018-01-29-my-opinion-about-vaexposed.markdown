---
published: true
title: 免Root套用Xposed模組的系統模擬器- VAExposed，和個人簡單實測體驗
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
    
[VAExposed 的 Github 官網][2]    
[VAExposed apk 的 Github 下載鏈接][3]


------

### <font color="red">個人簡單實測體驗</font>


最後，
對岸中國大陸有很多優質的 Android 工具APP，
如 綠色守護Greenify，黑域等
當然也和對岸奇特的互相喚醒APP耗電耗資源有關吧。

[1]: http://weishu.me/2017/12/02/non-root-xposed/
[2]: https://github.com/android-hacker/VAExposed
[3]: https://github.com/android-hacker/VAExposed/releases
[4]:
