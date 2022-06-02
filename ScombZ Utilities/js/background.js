/* ScombZ Utilities */
/* background.js */
//オプションページを開く
chrome.runtime.onMessage.addListener(function(message) {
    switch (message.action) {
        case "openOptionsPage":
            openOptionsPage();
            break;
        default:
            break;
    }
});

function openOptionsPage(){
    chrome.runtime.openOptionsPage();
}
//インストール時
chrome.runtime.onInstalled.addListener(({reason}) => {
    chrome.tabs.create({url: `https://yudai1204.github.io/ScombZ-Utilities/?mode=${reason}`});
});