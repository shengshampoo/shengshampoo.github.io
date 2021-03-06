---
published: true
title: VAExposed 搭配網易雲音樂的個人簡單心得
layout: post
tags: [Android]
categories: [Android]
---

### <font color="red">VAExposed 搭配網易雲音樂的個人簡單心得</font> 

承接前一篇：    
[免Root套用Xposed模組的系統模擬器- VAExposed][1]   
    
自從有了 VAExposed 以後，    
現在我自己的做法，   
同一個手機，    
會安裝兩個網易雲音樂app。    
一個是正常在手機原有空間，   
安裝酷安應用商店的最新上架的版本，   
另一個則是在VAExposed 容器裡，    
安裝Apkpure應用商店的稍舊版本，   
搭配音量調節 Xposed 模組。   
    
會折騰複雜地雙開兩個網易雲音樂，    
不是因為有兩個不同的賬號。   
這兩個網易雲音樂，   
都是登入同一個賬號。    

主要的原因有幾個：   
1. 是正常在手機原有空間的版本，   
   都會自行更新到最新版本。   
   而VAExposed 容器裡的版本，   
   非必要不會亂更新版本。    
    
   官方會更新版本，   
   多少是為了錯誤修正，   
   增加穩定等因素。   
   可是壞心的部分，   
   是順道把解鎖屏蔽的bug修好，    
   音量調節 Xposed 模組失效，    
   不能發揮作用。    
   所以我會維持兩個版本。    

   而在地的酷安應用商店上架的版號，   
   基本上是即時跟上官方發布的時間，   
   不會落差太大，    
   而國外的 Apkpure 應用商店，    
   時效性就好像沒那麼到位，   
   可是它的優點是，   
   保留以往到現在的所有新舊版號可供下載。    
   所以可以多次嘗試那個時間較近的版號，     
   放到容器內和模組搭配運作正常。    

2. 只要申請登入會員帳號，    
   即可免費播放最高 320kbps 音質，   
   網易雲音樂庫裡大量的串流歌曲。    
   除了部分最新上榜大咖專輯，    
   需要額外付費購買，    
   或是無損高解析音質需要付費訂閱會員。   
   付費方式基本會綁定支付寶，    
   或是微信支付等。   
   我多少也會掏錢付費購買數位專輯，   
   自然也會使用微信支付或支付寶支付。    
   只不過一旦涉及到金流交易，    
   就要比較謹慎留意。    
   綁定帳號密碼和戶頭交易等機敏訊息，    
   自然也不會放在虛擬容器內執行。    
   直接在手機原有空間的官方正常版本作業。    
    
最後，   
就當作避嫌的推究理由，   
當作網路找到的。    
草率匆促地用[ScreenRecorder][2] 螢幕錄製工具錄製，    
省掉後製的兩個短片，    
放在[Streamable][3] 短片分享平台。    
    
一個是正常在手機原有空間的版本，    
受限於官方制約的所在地版權歸屬，    
無法正常在海外播放專輯的音樂。   
<br>
<iframe src="https://streamable.com/s/lq8eb/jbwwqc" width="300" height="534" frameborder="0" allowfullscreen></iframe>
<br>
另一個是VAExposed 容器裡的版本，       
得益於網路牛人不錯的工具，       
可以規避繞過官方制約限制。       
<br>
<iframe src="https://streamable.com/s/mlngp/inxofm" width="300" height="534" frameborder="0" allowfullscreen></iframe>
<br>

[1]: https://shengshampoo.github.io/android/2018/01/29/my-opinion-about-vaexposed.html
[2]: https://github.com/vijai1996/screenrecorder
[3]: https://streamable.com
