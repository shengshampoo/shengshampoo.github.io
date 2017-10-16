---
published: true
title: BT 付費代抓網站sonicSeedbox 使用FTP mode批次下載多個資料夾檔案技巧
layout: post
tags: [Cloud_Torrenting]
categories: [Cloud_Torrenting]
---

### <font color="red">BT 付費代抓網站sonicSeedbox 使用FTP mode批次下載多個資料夾檔案技巧</font>   
        
承接：   
[簡述BT線上代抓付費網站心得-sonic.Seedbox][1]   
    
接續補充幾個心得：   
BT 付費代抓網站-sonicSeedbox  
付費開通相關進階功能以後，   
上下傳幾個超熱門BT檔案，   
偶爾也會碰到這個速度：   

不過這一個多月以來，    
也只巧遇到這一次。   
之前在家用固網網路環境，    
說真的還不太能想像的到的。   
    
另外，   
雖然購買會員等級是basic 100GB 的空間，   
不過有發生過幾次略超過空間上限，    
系統還是受理繼續維持正常運行。   
不清楚是系統的bug，   
還是後台設定空間限額，   
多少可容許超出些許額定值。   
    
至於上傳BT種子的部分，    
系統界面僅設計成網頁一個一個上傳。      
BT種子數量一多，       
真的不知道如何有效率的執行，      
只能繁瑣重复性的，   
手動一個BT種子成功，   
再重复接續上傳另一個。   
有時候沒注意到容量空間上限。    
連續上傳太多的種子，    
鏈接的檔案計算超出空間餘額過多，    
還會觸發錯誤提示而上傳失敗。    
    
至於完檔後檔案下載的手段，   
就比較完善進步省事點。   
    
同樣的網頁界面，    
針對單一BT項目，   
開啟詳細信息一個一個檔案下載。   
也提供其他方式，    
如系統自帶打包zip壓縮包下載，    
以及轉移備份至第三方雲端空間儲存。   
    
此外，   
若是在FTP 界面下載檔案，    
系統似乎是根據BT種子上傳時間，    
分批存放於日期為命名的目錄裡，   
當天上傳幾個BT種子，   
目錄裡面就存在幾個下載項目。    
    
或許可以透過FTP 工具的佇列下載，    
把之前已完檔項目的日期目錄，    
一併拖拉到下載區排序下載。   
如：Filezilla 和 Cuteftp 等。    
海芋小站的 Filezilla教學文：   
[FileZilla 3.28.0 中文可攜版 四、 處理佇列中的檔案][2]   
    
而我自己家用桌面電腦，   
作業系統已經改用Ubuntu Linux，   
所以選擇以終端機文字列畫面，    
指令輸入 wget工具下載FTP 網址。                

網路相關問答社群和官方wget手冊：              

* [How to recursively download a folder via FTP on Linux [closed]][3]   
* [Using wget to recursively download whole FTP directories][4]
* [GNU Wget 1.18 Manual][5]

wget 相較於其他工具，           
如curl ，aria2等，          
批次下載會比較得心應手，            
主要是wget 支援遞歸相關參數，               
可抓取主資料夾完整樹狀檔案清單，               
依序按目錄結構逐一下載。            
所以可借重其功能，               
單一指令搭配相關附屬參數，           
批次下載目錄裡所有檔案。            
                
當然直接在個人主目錄下，            
一併下載所有時間點的日期目錄，         
也是行得通。          

wget 指令：
```
wget --user=username --password='password' -m -nH -np ftp://xxxxx.sonicseedbox.com/date2017/
```
```-m```：映射參數，原封不動把FTP 下載目錄映射至本地電腦。    
```-nH```：新建目錄資料夾排除預設FTP 網域為檔名。    
```-np```：不遞歸抓取上層資料夾清單。    

比如說，    
在10/12的目錄我有3個下載項目，    
輸入一次指令一次完整無漏下載全部檔案，   
就直接打入指令一次下載即可。    


[1]: https://shengshampoo.github.io/cloud_torrenting/2017/10/12/cloud-torrenting-sonicseedbox-review.html
[2]: https://www.inote.tw/filezilla-download/4
[3]: https://stackoverflow.com/a/5567776
[4]: https://serverfault.com/a/708122
[5]: https://www.gnu.org/software/wget/manual/wget.html#Recursive-Retrieval-Options
