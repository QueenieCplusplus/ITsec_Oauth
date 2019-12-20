# Auth By Telecom

  Autherize Accounts via Phone number by Telecom

# Auth Flow

     * check is virtual device (實體機), not Simulator (仿真機), not Emulator (模擬機), 防止機器人。

     * to retrieve the VerificationCode || VerificationID (驗證序號)

     * recieve ID from Service to User thru phoneNumber via TextMessage (請求驗證代碼)

     * input and sendback above ID by User (發送回驗證代碼)

     * Id for Device + Id from Service = Auth Cert

     * using Autherized Certificate （憑證)
     ///
 
 # Secuirty Benefit of Telecom, 電信號碼安全度優於信箱帳號
 
     手機門號由電信公司掌控，因為數量有限，且申請電話號碼是需要身份證健保卡雙證件的，所以安全辨識度比電子信箱高，而且機器人可以利用程式碼駭入電子信箱，但是電話號碼比較難以受到機器人侵害。
     ///
     
 # 適合涉及轉帳應用程式
 
 wechat
 
 line
 
 commerce platform
