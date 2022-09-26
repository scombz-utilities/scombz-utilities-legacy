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
        //  バッジを更新
        case "updateBadgeText":
            updateBadgeText();
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

function getMergedTaskList(utilsStorageData){
    //  /js/addSubTimetable.jsから引用

    const tasklistObj = JSON.parse(decodeURIComponent(utilsStorageData.tasklistData));
    const surveyListObj = JSON.parse(decodeURIComponent(utilsStorageData.surveyListData));

    //アンケート一覧と課題一覧を統合する
    for(const survey of surveyListObj){
        if(Number(Date.parse(survey.deadline)) < Number(Date.now())){
            continue;
        }
        for(let i=0;;i++){
            //tasklistを読み切ったら最後に挿入して終了
            if(!tasklistObj[i]){
                tasklistObj.push(survey);
                break;
            }
            //tasklist内に挿入位置を発見したらそこに挿入して終了
            if( Number(Date.parse(survey.deadline)) < Number(Date.parse(tasklistObj[i].deadline)) ){
                console.log("SPLICED:"+i);
                tasklistObj.splice(i,0,survey);
                break;
            }
        }
        
    }

    //自作課題一覧を統合する
    for(const manTask of utilsStorageData.manualTasklist){
        if(Number(Date.parse(manTask.deadline)) < Number(Date.now())){
            continue;
        }
        for(let i=0;;i++){
            //tasklistを読み切ったら最後に挿入して終了
            if(!tasklistObj[i]){
                tasklistObj.push(manTask);
                break;
            }
            //tasklist内に挿入位置を発見したらそこに挿入して終了
            if( Number(Date.parse(manTask.deadline)) < Number(Date.parse(tasklistObj[i].deadline)) ){
                console.log("SPLICED:"+i);
                tasklistObj.splice(i,0,manTask);
                break;
            }
        }
    }

    return tasklistObj;
}

function removeHiddenTasks(tasklist, utilsStorageData){
    let result = [];

    tasklist.forEach(item => {
        if(!utilsStorageData.hiddenTasks.includes(item.id) && item.data !== null) result.push(item);
    });

    return result;
}

function updateBadgeText() {
    chrome.storage.local.get({
        tasklistData: [],
        surveyListData: [],
        manualTasklist: [],
        hiddenTasks: [],
    }, function(items) {
        let c = removeHiddenTasks(getMergedTaskList(items), items).length;
        chrome.action.setBadgeText({ text: c >= 1 ? c.toString() : "" });
    });
}
