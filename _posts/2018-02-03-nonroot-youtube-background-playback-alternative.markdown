---
published: true
title: 免 Root 背景播放YouTube的一些替代App 工具
layout: post
tags: [Android]
categories: [Android]
---

### <font color="red">免 Root 背景播放YouTube的一些替代App 工具</font> 

我自己的手機 - 小米 max2，   
官版無解鎖，無root，   
嘗試幾個替代方案，   
可以達成背景播放YouTube。    
也就是說即使關閉手機螢幕，   
聲音還是可以正常播送出來。   

1. **Non-Root iYTBP YouTube Vanced + modded microG for iYTBP Vanced 客製框架**    
   * [iYTBP][1]：        
    XDA 社區找到的第三方修改 YouTube app，   
    專門為背景播放 YouTube 量身訂做。      
    而 modded microG 客製框架，      
    則是僅供 iYTBP 登入G 帳號，     
    帶出個人播放清單，      
    和喜愛的訂閱頻道。              
   * [Non-Root iYTBP YouTube Vanced][2]：        
    針對沒有解鎖root的裝置，      
    也提供對應的安裝檔。      
    作者提供的下載鏈接：[AFH][3]，     
    先選擇首頁下載 microG_for_iYTBP_Vanced_vX.X.X.apk，     
    然後版本命名的資料夾往下 Non-Root 找適合手機Soc架構，       
    和偏好界面主色款的 iYTBP apk。        

<div id="lightgallery" class="owl-carousel owl-theme">
<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--I6xgvxv4--/v1517662360/Screenshot_2018-02-03-08-11-51-936_com.lara.android.youtube1-fs81_oriznu.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--uXhBXvQj--/v1517662360/Screenshot_2018-02-03-08-11-51-936_com.lara.android.youtube1-fs81_zpecbo.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--Jd6i9T7R--/v1517662360/Screenshot_2018-02-03-08-12-00-953_com.lara.android.youtube1-fs81_srr1qf.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--HT6kH0HP--/v1517662360/Screenshot_2018-02-03-08-12-00-953_com.lara.android.youtube1-fs81_fmfkxa.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
<picture>
<source type="image/webp" srcset="https://res.cloudinary.com/shengshampoo/image/upload/s--3icKi7Zb--/v1517662360/Screenshot_2018-02-03-08-12-11-235_com.mgoogle.android.gms1-fs81_jvyb8p.webp">
<img class="responsively-lazy responsively-lazy-300" src="https://res.cloudinary.com/shengshampoo/image/upload/s--d0da8E0f--/v1517662360/Screenshot_2018-02-03-08-12-11-235_com.mgoogle.android.gms1-fs81_apd9cp.png" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
</div>
                            
                            
                    
2. **VAExposed + MicroG 官方框架 + YouTube 官方無修改Apk + Xposed 背景播放模組**   
    * [VAExposed][5]：兼容Xposed 模組的虛擬容器。    
    * [MicroG 官方框架][6]：第三方類Google Play API 接口的框架。   
    * [YouTube 無修改官方Apk][7]：Apkpure 應用商店下載apk。    
    * [Xposed 背景播放模組][8]：XDA 社區找到的 Xposed 模組。   

    實測在VAExposed 容器裡，        
    搭配 YouTube 與此模組相容度佳，        
    背景播放功能正常。    
    可是一個問題點，     
    登入G 帳號時，   
    會停滯在初始畫面無法接續下去。    
   
    
安裝上述幾個替代YouTube的 App以後，   
原則上就會停用YouTube 官方App，   
關閉自動更新，   
也清掉程式的暫存快取，   
回到原本的初始版本。    
(沒Root 無法移除。)   

[1]: https://forum.xda-developers.com/android/apps-games/app-iytbp-injected-youtube-background-t3560900
[2]: https://forum.xda-developers.com/android/apps-games/app-iytbp-injected-youtube-background-t3560900/post71133073#post71133073
[3]: https://www.androidfilehost.com/?w=files&flid=170196
[5]: https://github.com/android-hacker/VAExposed/releases
[6]: https://microg.org/download.html
[7]: https://apkpure.com/youtube/com.google.android.youtube
[8]: https://forum.xda-developers.com/xposed/modules/module-youtube-background-playback-v2-0-t3656133
