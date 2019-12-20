# Auth By FB

https://developers.facebook.com/docs/facebook-login/access-tokens/

# Open Auth, 第三平台帳號驗證

對於需要真正身份而非機器人的應用程式來說，讓使用者輸入一堆資料是影響使用者感受與體驗的。另外，從使用者角度來說，初次使用陌生的 app，如要輸入真實資料，是非常沒安全感的事情。

利用整合已經在國際性大規模平台設置的帳號，則可以大幅改善上述問題。

    Content Provider     OAuth        (account for content)            Client App
                   

                                        <-----1. connect 

                      2. generate Token ------>

                                        <-----3. sendback Token 

                      4. receive token  ------>

         <------------------------------------5. send Request

    6. send Content  -----------------------------------------------------> 
    
# Token, 存取權杖 

https://github.com/QuinoaPy/AuthByFB/blob/master/FB.png

# OAuth 2.0 

https://developers.google.com/identity/protocols/OAuth2

# Extension

  支持自定帳號
  
  支持匿名存取
