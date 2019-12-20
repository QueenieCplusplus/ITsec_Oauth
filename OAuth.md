# OAuth2.0

https://pattyappier.blog/2019/02/25/oauth-open-authentication-公開認證技術/

# SAML, 安全主張-標記語言

  plz wait... 

# Server-side as Content Provider

  https://developers.google.com/identity/protocols/OAuth2WebServer

 Lan:

      Node.js
      PHP
      Java
      Go
      Python 
      .NET
      Ruby
      
  steps:
  
    1. download the client_secret.json file from the API Console. 
    2. setup scope of retrieving res to user.
    3. server retrieves tokens user granted making API requests from user.
   https://developers.google.com/identity/protocols/googlescopes
    
* Server-side

      <!-- /*That object uses information from servers client_secret.json file 
      to identify serverside application. 
      (See creating authorization credentials for more about that file.) 
      The object also identifies the scopes that server application 
      is requesting permission to access and the URL to application's auth endpoint, 
      which will handle the response from Google's OAuth 2.0 server. 
      Finally, the code sets the optional access_type and include_granted_scopes parameters.
      */ -->

        $client = new Google_Client();
        $client->setAuthConfig('client_secret.json');
        $client->addScope(Google_Service_Drive::DRIVE_METADATA_READONLY);
        $client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . '/oauth2callback.php');
        $client->setAccessType('offline');        // offline access
        $client->setIncludeGrantedScopes(true);   // incremental auth

* Server Side - Auth API

    <!-- // server redirect user to Oauth2.0 API -->
    
        $auth_url = $client->createAuthUrl();
        header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
        
         https://accounts.google.com/o/oauth2/v2/auth?
         scope=email%20profile&
         response_type=code&
         state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/token&
         redirect_uri=com.example.app:/oauth2redirect&
         client_id=client_id

* User Side - Auth API

      //code generator:
      //S256	The code is the Base64URL (with no padding) encoded SHA256 hash of the verifier.
    
        code_challenge = BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))

* Server Side - Auth API

    <!-- // exchange auth code for refresh & access tokens -->
    
        $client->authenticate($_GET['code']);
        $access_token = $client->getAccessToken();
       
        POST /oauth2/v4/token HTTP/1.1
        POST /oauth2/v4/token HTTP/1.1
        Host: www.googleapis.com
        Content-Type: application/x-www-form-urlencoded

        code=4/P7q7W91a-oMsCeLvIaQm6bTrgtp7&
        client_id=your_client_id&
        client_secret=your_client_secret&
        redirect_uri=https://oauth2.example.com/code&
        grant_type=authorization_code
        
        {
          "access_token":"1/fFAGRNJru1FTz70BzhT3Zg",
          "expires_in":3920,
          "token_type":"Bearer",
          "refresh_token":"1/xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI"
        }

* Server Side - Auth API - User side

    <!-- // server retrieves tokens user granted making API requests from user.
    // this is a Google Drive Example -->
    
        $client->setAccessToken($access_token);
        $drive = new Google_Service_Drive($client);
        $files = $drive->files->listFiles(array())->getItems();
        
        GET /drive/v2/files HTTP/1.1
        Authorization: Bearer <access_token>
        Host: www.googleapis.com/


# MobileApp-Client-side as End-User

  https://developers.google.com/identity/protocols/OAuth2InstalledApp
  
    This authorization flow is similar to the server applications. 
    
    The main difference is that installed apps must open the system browser and supply a local redirect URI to handle responses from Google's authorization server.
    
step:
    
    1. Set the app type to Android for Android/iOS.
       Also set the package name/ bundle ID 
       to the custom URI scheme that you will use in the redirect
       (e.g. com.example.app). 
       Additionally, you can use the reverse DNS notion of the client ID as the custom URI scheme 
       (e.g. com.googleusercontent.apps.123).
       
     2. This redirect method returns the auth code in the HTML page
        The user must then manually copy and paste the code into client app.
        
   https://github.com/QuinoaPy/OAuth2.0/blob/master/auth-code.png
   
   
      3. HTTP GET call
      
      GET https://www.googleapis.com/drive/v2/files?access_token=<access_token>

# Cross-Client ID

  https://developers.google.com/identity/protocols/CrossClientAuth

# Cross-Account Protection to protect user account

  https://developers.google.com/identity/risc
