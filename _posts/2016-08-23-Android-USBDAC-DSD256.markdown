---
published: true
title: Android 手機直輸USB DAC 播放 DSD256可行性
layout: post
tags: [Headphone]
categories: [Headphone]
---
**Android 手機直輸USB DAC (針對XMOS) 播放 DSD256可行性**    

日前，USB Audio Player PRO 於推特發佈：   

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">USB Audio Player PRO 3.0.9 released with support for native DSD (next to DoP). Requires a USB DAC that supports it like iFi and Sony.</p>— Audio Evolution (@AudioEvolution5) <a href="https://twitter.com/AudioEvolution5/status/766990770326806528">August 20, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>   
    
新版的 ver 3.0.9，    
針對DSD 音樂格式播放的模式，    
增加了 **DSD Native** 的播放方式。    
 
若是有付費購買USB Audio Player PRO 的APP，    
更新到 ver 3.0.9 ，   
首次開啟會跳出列舉更新修改項目的對話框。    
而 ver 3.0.9 的第一項也是提到：   

![img01][img01]

若是外接的USB DAC 支援Native DSD 模式，   
可以嘗試用用看。    
這個功能輸出品質不遜於 DOP，    
但是除了可以減少CPU 使用量及降低USB 傳輸頻寬，    
還能夠允許播放更高DSD 採樣格式的 11.2MHz DSD256。   
官方目前只測試 iFi nano 和 Sony PHA-2 可用。    
    
翻閱 Soomal 的開箱文，    
[iFi nano iDSD 主元件為 XMOS + BB DSD1796 ][1]，    
而  [Sony PHA-2   主元件則是XMOS + BB DSD1795][2]。   
    
然後再根據對岸老肖新浪博客的一篇文章：    
[XMOS USB AUDIO方案支持DSD256(512)了][3]。    

<blockquote><p lang="zh-Hans">采用XMOS标准方案，USB AUDIO DSD DoP方案最高只能支持DSD128，有了USB ASIO native传输方式，就可以支持DSD256甚至DSD512。</p></blockquote>


XMOS 官方 Native DSD Mode 說明文件：    
[Enabling DSD256 in the USB Audio 2.0 Device Reference Design Software - Xmos][4]   

Page 3 的表格:

![img02][img02]

DSD 64fs/128fs/256fs  的傳輸量，    
透過 DOP 封裝及 原生 Native DSD 的資訊量，    
換算等效的 PCM 資訊量。   
可以發現 DSD128   的DOP 等於 DSD256 的 Native DSD 。    
(增加2倍的資訊量)   
而現有的 XMOS USB Audio 2.0 軟體設計規範局限，    
目前無法處理運算超過大於 384KHz 的等效PCM資訊量，   
我想這就是不能透過DOP 播放 DSD256格式音樂檔的原因。   


[1]:  http://www.soomal.com/doc/20100004912.htm
[2]:  http://www.soomal.com/doc/20100004936.htm
[3]:  http://blog.sina.cn/dpool/blog/s/blog_5372b4a00101cvpn.html
[4]:  https://www.xmos.com/published/an00103-enabling-dsd256-in-the-usb-audio-2.0-device-reference-design-software?version=latest
[img01]: https://res.cloudinary.com/shengshampoo/image/upload/s--djK9dFqh--/v1471945664/Screenshot_2016-08-21-14-25-121-fs8_i6epqg.png
[img02]: https://res.cloudinary.com/shengshampoo/image/upload/s--L7yz76Z1--/v1471945664/Screenshot_from_2016-08-23_17-44-171-fs8_yxj6fz.png
