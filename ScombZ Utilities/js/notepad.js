/* ScombZ Utilities */
/* mouseEvent.js */

function notepad(tasklistDisplay){
    //メモを追加・削除する
    //メモを表示する
    //課題一覧表示がある場合
    if (tasklistDisplay === true){
        //課題一覧が追加されているかわからないため、setIntervalで待ってから追加する
        const existingTaskList = setInterval(function(){
            if(document.getElementById("subTaskList")){
                clearInterval(existingTaskList);
                displayNotepad();
            }
        },100);
    }else{
        displayNotepad();
    }
    return;
}
function addNotepad(){
    return;
}
function removeNotepad(){
    return;
}
function displayNotepad(){
    chrome.storage.local.get({
        notepadData:[
            {
                title: "テストメモ",
                index: "これはテストです。This is Test."
            },
            {
                title: "OSのミニッツペーパー",
                index:"提出する。"
            }
        ],
        addSubTimetable: true,
        tasklistTranslate: 0,
        specialSubj: 0
    },function(items){
        console.log("メモ表示を開始します");
        if(!document.getElementById("subTaskList")){
            //時間割も課題リストもないとき
            console.log("課題リストが見つかりません");
            let timetableHeight = 5;
            let timetableminHeight = 0;
            if(items.addSubTimetable){
            //時間割はあるが課題リストがないとき
                console.log("時間割が見つかりました");
                timetableHeight = 40;
                timetableminHeight = 350;
                if(Number(items.specialSubj) > 0){
                    timetableHeight += 10*Number(items.specialSubj);
                    timetableminHeight += 60*Number(items.specialSubj);
                }
            }
            //課題リストがないときは、先にsubTaskListを追加する
            if(document.getElementById('pageMain')){
                document.getElementById('pageMain').insertAdjacentHTML('beforeend',`<style>
                #subTaskList{
                    top: max(${timetableHeight}vh,${timetableminHeight}px);
                    transform: translateY(${items.tasklistTranslate}px);
                    background: rgba(255,255,255,0.5);
                    width: 60vw;
                    min-width: 500px;
                    padding: 2px;
                }
                </style>
                <div class="subtimetableBody" id="subTaskList"></div>`);
            }else{
                console.log("エラー: pageMainが見つかりません");
                return;
            }
        }
        //subTaskListノードにメモを追加
        const $subTaskList = document.getElementById("subTaskList");
        if($subTaskList){
            let memoHTML = '';
            for(const memoIndex of items.notepadData){
                memoHTML += `<div class="note-line">
                <div class="note-title">${memoIndex.title}</div>
                <div class="note-index">${memoIndex.index}</div>
                <a class="memoRemove" href="javascript:void(0);"><div class="memo-remove">削除</div></a>
                <div class="note-kara"></div>
                </div>
                `;
            }
            const notepadhtml = `
            <style>
            .note-line{
                padding:2px;
                margin:0;
                background:#fff;
                border-bottom:1px solid #ccc;
            }
            .note-line:nth-child(2n){
                background:#FFFAF0;
            }
            .note-head{
                font-size:15px;
                border-bottom: 2px solid #ccc;
                border-top: 1px solid #ccc;
                font-weight:bold;
                padding-left: 10px;
            }
            .note-title{
                display:block;
                width:calc(30% - 4px);
                font-size:15px;
                float:left;
                overflow:hidden;
                margin:0;
            }
            .note-index{
                display:block;
                font-size:14px;
                width:calc(69% - 30px);
                float:left;
                margin:0;
            }
            .memo-remove{
                width:30px;
                margin:0;
                float:left;
                font-weight:normal;
                color:#222;
                text-decoration: underline;
            }
            .note-kara{
                clear:left;
            }
            .memo-add{
                float:right;
                color:#222;
                text-decoration: underline; 
            }
            </style>
            <div class="note-line note-head">
                ユーザーメモ
                <a id="memoAdd" href="javascript:void(0);"><div class="memo-add">追加する</div></a>
            </div>
            ${memoHTML}
            `;
            $subTaskList.insertAdjacentHTML("beforeend",notepadhtml);
            document.getElementById("memoAdd").addEventListener("click",function(){
                //メモ追加時
                
            });
            const memoList = document.getElementsByClassName("memoRemove");
            for(let i = 0; i < memoList.length; i++){
                memoList[i].addEventListener("click",function(){
                    //メモ削除時
                    //非表示にする
                    memoList[i].parentNode.style.display = "none";
                    //chromeのデータを削除する
                    let newNotepadData = items.notepadData;
                    newNotepadData.splice(i,1);
                    chrome.storage.local.set({
                        notepadData : newNotepadData
                    },function(){
                        console.log("削除完了");
                    });
                });
            }
        }
    });
    return;
}