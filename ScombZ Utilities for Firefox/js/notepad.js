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
function displayNotepad(){
    chrome.storage.local.get({
        notepadData:[],
        addSubTimetable: true,
        tasklistTranslate: 0,
        specialSubj: 0,
        styleSidemenu: true
    },function(items){
        if(items.styleSidemenu !== true){
            return;
        }
        console.log("メモ表示を開始します");
        let newNotepadData = items.notepadData;
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
            document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <style>
            .noteInput{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:102;
                background:#fff;
                visibility:hidden;
                right:20vw;
                top:20vh;
            }
            .noteInput.inputmode{
                width:60vw;
                height:60vh;
                position:fixed;
                z-index:101;
                background:#fff;
                visibility:visible;
                right:20vw;
                top:20vh;
                border-radius:5px;
            }
            .noteInputLayer{
                width:100%;
                height:100%;
                margin:0;
                padding:0;
                z-index:101;
                background:#0009;
                position:fixed;
                top:0;
                left:0;
                visibility:hidden;
            }
            .noteInputLayer.inputmode{
                visibility:visible;
            }
            .noteInputTitle{
                width:80%;
                height:80px;
                margin:0 auto;
                display:block;
            }
            .noteInputIndex{
                width:80%;
                height:calc(100% - 220px);
                margin:0 auto;
                display:block;
            }
            .noteInput h4{
                margin:0;
            }
            .noteInput h1{
                margin:0;
                text-align:center;
                margin-top:10px
            }
            .noteInput input[type="text"]{
                width:100%;
                height:28px;
                font-size:16px;
            }
            .noteInput textarea{
                width:100%;
                height:calc(100% - 16px);
                font-size:14px;
            }
            div.noteSaveBtn{
                width:100%;
                text-align:center;
                margin-top:3.5%;
            }
            input[type="button"]#noteSaveBtn{
                width:50%;
                height:4vh;
                min-width:120px;
                min-height:20px;
                min-height:40px;
            }
            .in-note-link{
                color:#00F;
            }
            </style>
            <div id="noteInputLayer" class="noteInputLayer notelayer"></div>
            <div class="noteInput notelayer">
            <h1>メモを追加</h1>
            <div class="noteInputTitle"><h4>タイトル</h4><input type="text" id="noteInputTitle" value="新規メモ"></div>
            <div class="noteInputIndex"><h4>本文</h4><textarea id="noteInputIndex">リンクを作れます 例:[[https://google.co.jp]]</textarea></div>
            <div class="noteSaveBtn"><input type="button" value="保存する" id="noteSaveBtn"></div>
            </div>
            `);
            const notelayers = document.getElementsByClassName("notelayer");
            const noteInputlayer = document.getElementById("noteInputLayer");
            const noteSaveBtn = document.getElementById('noteSaveBtn');
            //保存ボタンをクリックしたとき
            if(noteSaveBtn){
                noteSaveBtn.addEventListener('click',function(){
                    function escapeNotepad(input){
                        let data = input.replace(/"|<|>/g,' ').replace("\n","<br>");
                        while( data.includes("[[") && data.includes("]]") ){
                            const url = data.slice(data.indexOf("[[")+2 , data.indexOf("]]") );
                            data = data.replace("[[",`<a href="${url}" target="_blank" rel="noopener noreferrer" class="in-note-link">`).replace("]]","</a>");
                        }
                        return data;
                    };
                    let noteInputTitleDataEsc = escapeNotepad(document.getElementById("noteInputTitle").value);
                    let noteInputIndexDataEsc = escapeNotepad(document.getElementById("noteInputIndex").value);
                    const newNote = {
                        title: noteInputTitleDataEsc,
                        index: noteInputIndexDataEsc
                    };
                    //追加したメモを保存する
                    newNotepadData.push(newNote);
                    chrome.storage.local.set({
                        notepadData : newNotepadData
                        },function(){
                            console.log("新規メモを保存しました");
                    });
                    //新規メモを閉じる
                    noteInputlayer.click();
                    //追加したメモを表示する
                    const noteLine = document.getElementsByClassName("note-line");
                    if(noteLine[0]){
                        //すでにメモがあるとき
                        noteLine[noteLine.length-1].insertAdjacentHTML("afterEnd",`
                            <div class="note-line">
                            <div class="note-title">${noteInputTitleDataEsc}</div>
                            <div class="note-index">${noteInputIndexDataEsc}</div>
                            <div class="note-kara"></div>
                            </div>
                        `);
                    }else{
                        //メモが一個もないとき
                        document.getElementsByClassName("note-head")[0].insertAdjacentHTML("afterEnd",`
                            <div class="note-line">
                            <div class="note-title">${noteInputTitleDataEsc}</div>
                            <div class="note-index">${noteInputIndexDataEsc}</div>
                            <div class="note-kara"></div>
                            </div>
                        `);
                    }
                    //入力欄を初期化
                    document.getElementById("noteInputTitle").value = "新規メモ";
                    document.getElementById("noteInputIndex").value = "";
                });
            }
            //グレーレイヤークリック時に入力モードを閉じる
            noteInputlayer.addEventListener("click",function(){
                for(const notelayer of notelayers){
                    notelayer.classList.remove("inputmode");
                }
            });
            document.getElementById("memoAdd").addEventListener("click",function(){
                //メモ追加時
                for(const notelayer of notelayers){
                    notelayer.classList.add("inputmode");
                }
                //Ctrl+SとCtrl+Enterで保存する
                $(window).bind('keydown', function(e) {
                    if (e.ctrlKey || e.metaKey) {
                        if(e.keyCode == 13 || e.keyCode == 83){
                            if(document.querySelector(".noteInput").classList.contains("inputmode")){
                                e.preventDefault();
                                document.getElementById("noteSaveBtn").click();
                                console.log("SAVED");
                            }
                        }
                    }
                });
            });
            const memoList = document.getElementsByClassName("memoRemove");
            for(let i = 0; i < memoList.length; i++){
                memoList[i].addEventListener("click",function(){
                    //メモ削除時
                    //非表示にする
                    memoList[i].parentNode.style.display = "none";
                    //chromeのデータを削除する
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