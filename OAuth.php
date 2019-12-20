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


<!-- // server redirect user to Oauth2.0 API -->
$auth_url = $client->createAuthUrl();
header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));

<!-- // exchange auth code for refresh & access tokens -->
$client->authenticate($_GET['code']);
$access_token = $client->getAccessToken();

<!-- // server retrieves tokens user granted making API requests from user.
// this is a Google Drive Example -->
$client->setAccessToken($access_token);
$drive = new Google_Service_Drive($client);
$files = $drive->files->listFiles(array())->getItems();
