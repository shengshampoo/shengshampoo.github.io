---
published: true
title: ---
published: true
title: ---
published: true
title: 簡單抒寫行動網路對限速的看法
layout: post
tags: [APTG_Moble_4G]
categories: [APTG_Moble_4G]
---

### <font color="red">簡單抒寫行動網路對限速的看法</font>   
    
主要是以國外相關議題的兩篇文章：    
* [How to stop and bypass bandwidth throttling with a VPN][1]    
* [What Is ISP Peering? Why Your High-Speed Internet Is Slow][2]    

引導推論我自己對行動網路限速的想法，      
我是用戶，對網路技術只是讀者略懂略懂。   
也許引述不盡然正確。    
    
先講我的結論：   
限速的原因有好幾個因素：    
其中一個是業者自己刻意透過網路技術，    
如TP等方式人為限速用戶頻寬，   
但是也有一個理由或許是外在因素，    
也就是**IP peering**。    
市佔率越小的 ISP 用戶 較容易碰到這問題。   

理解五家電信業者都被點名，   
各自都有忠實黑粉反推薦，    
抱怨訴苦網路體驗差的狀況。   
好比網速過慢，塞車，    
刻意限速，連外頻寬不足等問題。   
    
而我目前是亞太4G的月租用戶，   
綁約前也爬文，   
知曉一些網友對亞太4G使用的不愉快和客訴。   
如SpeedTest 測速數據漂亮，    
可是實際網路使用落差太大，   
YouTube 頻繁緩衝中，    
Google Play App下載網速低落等。   
而我當初申請七天試用沒有遇到，   
綁約頭一個月使用整體也還好。    
至於以後的事不好說太滿，    
怕話說太早而事後被打臉。    
    
也許是我不理性的偏見，   
國內外所有的ISP和電信業者，   
都會刻意限速，   
差別只是力道大或小，    
手段只是高明隱匿或直白。    
方式有針對某些網路行為限速，    
如特定視頻串流，P2P/Torrent 等大流量應用。   
或者的是針對某些高用量用戶造冊限速。    
不管家用固網，   
還是行動網路吃到飽，    
人人都有機會貼上標籤中獎。   
至於ISP的限速小動作是否合法，    
第一篇文章提到國外ISP的限速政策，    
美國是ISP 和FCC/Netflix內容商角力中，    
明的暗的手段都來。   
加拿大是直白的檢測用戶行為，    
對不允許的用途限速 。   
歐洲可能會好一些。   
    
台灣這裡依本地鄉民民情，    
我想猜想電信業者多少會暗地偷限，    
但是被抓包或許有機會平反申訴，   
單一個案解套。   
    
除了 ISP 自家網路人為限速手段，    
翻閱開頭[第二個網址的文章][2]，       
還有一點外在因素，   
也會出現高速網路環境，   
可是上網慢的情況- <b>“ISP peering”</b>。   
中文稱作網路互連，   
相關說明解釋，   
可以參考Dada's Blog的文章：   
[畸形的台灣網路環境 (IP Peering)][3]。    

而國外那篇文章   
的"How ISP Peering Can Affect You"段落   
提到三個案例，   
都是視頻網站讀取異常，停頓，開不了。    

如：美國當地Verizon用戶存取 Netflix網速低落，    
法國某一ISP 無法讀取YouTube，    
歐洲用戶連線Twitch live 持續緩衝無法正常播放等，    
都是 ISP peering 影響所致。    
    
而在台灣這裡，   
Dada's Blog的文章也提到，    
過去台灣類似的狀況。    
也是起源於中華電信一家獨大全台的歷史共業。   
    
只是對行動網路的用戶來說，   
我不知道同一個網路應用，    
尤其是國內相關網路應用，    
如KKBOX，LiTV，國內手游等，    
(也不確定他們是否把內容存放在中華機房？)   
假設網速都差不多在一個水平，    
為因為中華電信的用戶，   
會比其他四家有明顯的網速差異嗎？    
(不清楚這樣理解對不對？)   
而境外國家的外國影音服務，   
就涉及連外出海口頻寬的互連深度廣度，    
那明顯的前三大的電信三雄能給予相較較好的網速。   

[1]: https://www.comparitech.com/blog/vpn-privacy/stop-bandwidth-throttling-with-vpn/
[2]: http://www.makeuseof.com/tag/isp-peering-high-speed-internet-slow/
[3]: https://dada.tw/2009/03/24/197/
