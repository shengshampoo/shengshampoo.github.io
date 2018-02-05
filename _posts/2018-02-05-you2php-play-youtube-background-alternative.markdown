---
published: true
title: 私人架設You2PHP 服務主機可以背景播放和下載YouTube影片
layout: post
tags: [Android, Browser]
categories: [Android]
---

### <font color="red">私人架設You2PHP 服務主機可以背景播放和下載YouTube影片</font> 

源自於逗比博格的一篇教學文：    
[<span lang="zh-Hans">只需 海外PHP虚拟主机 完全免费搭建 YouTube私人镜像站，不翻墙看油管！</span>][1]   
    
內容主要是提供教程步驟，    
如何使用海外虛擬主機，   
網路域名和SSL證書，   
結合 You2PHP 的服務，   
搭設一個 YouTube 鏡像網站。    
    
預設為360P解析格式，    
由於某些技術限制，   
最高只能播放720P 。    
    
透過 You2PHP 服務架設的網站，   
一樣可以播放YouTube上所提供的影片。   
    
雖然說文章開頭介紹是鏡像服務，   
版主提到這個機制原理，   
不是反向代理/鏡像整個YouTube網站，   
比較精確的說法是，   
透過Google Youtube 的公眾免費API，    
抓取Youtube 影片資源。   
也就是訪問You2PHP架設網站，   
播放影片時，    
網站程式會透過API提取影片給終端設備，    
相當於流量中轉的手段。   
畢竟是多一個路徑，   
間接讀取Youtube影片。    
播放讀取影片的流暢度變數，   
決定於虛擬主機網路連外頻寬。    
所以You2PHP 中轉服務，   
不太可能會比直接在YouTube官網，   
有更好的播放體驗。   
    
既然如此，   
為何還要透過 You2PHP 播放YouTube？   
原文作者提到一個關鍵，   
就是結合CF代理緩衝機制，   
把閒置擋在牆外的VPS，    
轉提供給牆內用戶，    
順利看到YouTube的資源。   
    
----

然後在[Telegram Sock5群組看到的訊息][3]，   
已經有無私群友，    
無償提供You2PHP 網站：   
[FFY2B][4]

先感謝群友的分享，   
畢竟是私人架設，    
不敢說穩定持續上線。    
有可能哪天突然關閉而網址失效。   
    
而實際操作上，   
還多了YouTube官網所沒有的優點，   
就是本文標題所提到的：   
**<font color="red">背景播放和下載 720P以下影片**</font>。   
    
就背景播放的部分，   
就我自己的Android手機上，    
Firefox 完全沒有問題，   
縮小瀏覽器返回首頁，    
或是關閉螢幕，   
聲音持續播放都沒有斷掉。    
    
不過 Chrome 就不是這樣，    
翻閱舊文：   
[Android Chrome 54 Beta 可以背景播放影音，含Youtube][2]   
從兩年前的 Rev 54 beta版，   
到現在已經升版到 Rev 6x，    
還是沒有要改善，    
需要多個步驟在狀態列手動播放，   
才能算是真正的背景播放功能。    

[1]: https://doub.io/wlzy-40/
[2]: https://shengshampoo.github.io/android/2016/09/29/android-chrome-rev54-background-playback.html
[3]: https://t.me/socks5list
[4]: https://mianfei2.ml/
