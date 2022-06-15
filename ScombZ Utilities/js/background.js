/* ScombZ Utilities */
/* background.js */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.action) {
        //オプションページを開く
        case "openOptionsPage":
            openOptionsPage();
            break;
        //jsonをgetで取得
        case "getJson":
            getJson(message,sender,sendResponse);
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