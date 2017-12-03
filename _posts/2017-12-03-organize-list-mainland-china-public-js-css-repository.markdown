---
published: true
title: 轉載整理中國大陸外連的公用JS/CSS 資源庫
layout: post
tags: [Public_repository]
categories: [Public_repository]
---

### <font color="red">轉載整理中國大陸外連的公用JS/CSS 資源庫</font> 

單純轉載整理多篇網路相關文章，   
面向中國大陸的用戶，    
可以選用那些公用資源庫，    
多少提高中國網路連線的流暢程度。    
    
開頭先引用轉載freegroup 的文章：   
[網頁開發者適用的免費開放式 CDNs 列表 (Free Public CDNs)][1]。    
    
雖然是好幾年前的文章，   
部分公用庫目前已經關閉離線，    
無法提供服務，   
不過文章作者的分析和整理，   
是值得借鏡參考，    
簡單的方式就可以應用在自己Blog，    
提升網站開啟速度。   
    
架設個人部落格網站，    
為了某些應用場景和特效，    
常需要鏈接套用JS/CSS 文件。   
而套用的這些JS/CSS 文件，    
假如能見度高，廣泛通用，    
如jQuery插件等，   
就不用額外下載存放個人網址空間。    
直連公用庫提供的套件網址即可。   
    
可是面向中國大陸，   
基於某些特殊情況，   
國外常見的開放式 CDN 公用庫，   
不見得可以順利存取所用的套件。   
好比說Google，Cloudflare網域，   
連線品質常有隔閡阻礙，   
無法等同國外其他地方，   
流暢無阻抓取知名國外CDN的資源。   
    
因此，基於中國特色的互聯網環境，    
勢必需要更換到其他對中國連線友好，   
或是中國本地的公用資源庫。   
所以針對這個主題，   
找到對岸相關博客的兩篇整理文：   


分享整理一系列，    
中國國內外的CDN 公用資源庫，    
分析國內和國外的連線速度品質，   
https和http/2等連線協議支援性等。    
    
----

### <font color="red">Gooogle 思源黑體webfont</font>  
    
承接：   

坦白說我自己的Blog，    
雖然界面滿簡陋單調的，   
單純以文字書寫抒發我的想法。    
不過為了一些需求，   
需要鏈接套用JS/CSS 文檔。    
如 jQuery插件和圖片應用程序，    
作出圖片延遲載入，   
圖片輪轉燈箱展示等進階用途。    
    
此外，   
我的文章完全以繁體中文書寫，    
偶爾會引用對岸中國博客的文章，   
所以會有一小段篇幅，    
是用簡體中文字體。   
同理，零星轉載日本網站的文章標題，   
日本字體多少也是會用到。    
    
所以，   
鏈接套用CDN公用庫的另一個理由，   
就是引用Google的思源黑體webfont字體。   
思源黑體的優點之一，    
就是廣泛提供亞洲語言字體，   
含括簡繁體中文，日韓等亞洲字型。    
    
我的Blog預設使用思源黑體字體，   
但是用戶不需預先手動安裝對應字體，   
才能正常顯示思源字體樣貌。   
只要開啟網站過程當中，   
就會直接連線CDN公用庫下載字體。   
下載完成後即套用字體。   
同時也能解決字符缺字亂碼，   
字體風格迥異不合等編排問題。    
    
當然，   
引用Google的webfont字體，   
在這裡直接鏈接Google網域網址，    
連線速度和穩定無需疑慮。    
可是，在對岸就不是這麼一回事，   
雖然Google 前幾年，   
開通[北京雲端字體伺服服務，][5]   
面向中國用戶。   
但是在其他論壇看到網友發帖，    
中國IP偶爾被分發解析到Google國外節點，   
導致存取資源連線異常，   
套用字體緩慢不順。   
所以還是需要考量其他接地氣的選項。   
    
對於提供思源黑體webfont字體的第三方CDN 公用庫，   
簡單列表整理如下：   

**CSS.NET**
* HTTPS：支持
* HTTP2：支持
* 官網介紹：[前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务][2]
* 字體網域：fonts.cat.net

**LUG@USTC 中科大**
* HTTPS：支持
* HTTP2：支持
* 官網介紹：[LUG@USTC Google Fonts 加速服务][3]
* 字體網域：fonts.proxy.ustclug.org/

**极客族公共加速服务**
* HTTPS：支持
* HTTP2：支持
* 官網介紹：[极客族公共加速服务 加速资源][4]
* 字體網域：fonts.geekzu.org
    
比如說，    
Google webfont 思源黑體頁面，    
鏈接思源黑體繁體中文的CSS範例：   
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css); 
原本Google官方網域提供的網址為：
```//fonts.googleapis.com/```
替換成上面三個CDN服務提供的網域。    

相關webfont 範例，   
煩請翻閱Codepen的簡單測試網頁。   
鏈接LUG@USTC 中科大和極客族的字體網址，    
套用思源黑體webfont字型，    
含括簡繁體中文，日文和韓文字體，    
以維基百科文章剪輯拼湊，    
分別對應套用中日韓段落文章。    

https://codepen.io/qwzxc129/pen/dZNNaw

https://codepen.io/qwzxc129/pen/vWpYqL


[1]: https://free.com.tw/free-public-cdns/
[2]: https://sb.sb/css-cdn/
[3]: https://lug.ustc.edu.cn/wiki/lug/services/googlefonts
[4]: https://cdn.geekzu.org/cached.html
[5]: https://www.ziti163.com/Item/36.aspx
