/* ScombZ Utilities */
/* background.js */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("message");
    switch (message.action) {
        //オプションページを開く
        case "openOptionsPage":
            openOptionsPage();
            break;
        //jsonをgetで取得
        case "getJson":
            getJson(message,sender,sendResponse);
            break;
        //postを送信
        case "postGas":
            postGas(message,sender,sendResponse);
            break;
        default:
            break;
    }
    return true;
});

function openOptionsPage(){
    chrome.runtime.openOptionsPage();
}
//インストール時
chrome.runtime.onInstalled.addListener(({reason}) => {
    if(reason === 'install' || reason === 'update'){
        chrome.tabs.create({url: `https://yudai1204.github.io/ScombZ-Utilities/?mode=${reason}&version=${chrome.runtime.getManifest().version}`});
    }
});
//getJson
function getJson(message,sender,sendResponse){
    fetch(message.endpoint, {
        'method': 'GET',
        'cache': 'no-store'
    })
    .then(function (res) {
        return res.json(); // フェッチしたデータを JSON 形式に変換
    })
    .then(function (jsonData) {
        sendResponse(jsonData); // JSON へ変換されたデータを返す
        console.log("get done.");
    })
    .catch(error => {
        console.log('エラーが発生しました');
        sendResponse({
            "title":"connection failed",
            "reason":error,
            "error":true
        });
    });
}

//fetch gas
function postGas(message,sender,sendResponse){
    console.log("gas");
    const postparam =
    {
        "method": "POST",
        "Content-Type": "application/json",
        "body": JSON.stringify(message.sendData)
    };
    fetch(message.url, postparam)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => {
            // レスポンス json の処理
            console.log("OK");
            console.log(json);
            sendResponse(json);
        })
}