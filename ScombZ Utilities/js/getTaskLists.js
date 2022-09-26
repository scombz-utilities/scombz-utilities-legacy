/* ScombZ Utilities */
/* getTaskLists.js */
function getTaskLists($$reacquisitionMin){
    'use strict';
    //科目ページにアンケートのボタン挿入
    insertSurveyBtnOnSubj();
    //課題取得
    if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/task'){
        getTasksOnTaskpage();
    }else{
        getTasksByAdjax($$reacquisitionMin);
    }
    chrome.runtime.sendMessage({"action": "updateBadgeText"});

    return;
}
function getTasksOnTaskpage(){
    'use strict';
    console.log('課題一覧ページを検出しました');
    const $taskList = document.getElementById("taskList");
    if($taskList){
        const $taskListsObj = [];
        $taskListsObj.push({
            data: null
        });
        const $tasks = $taskList.querySelectorAll(".result_list_line");
        for(const $task of $tasks){
            const $taskObj = {};
            $taskObj.course   = $task.querySelector(".course").innerHTML;
            $taskObj.title    = $task.querySelector(".tasklist-title a:nth-child(1)").innerHTML;
            $taskObj.link     = $task.querySelector(".tasklist-title a:nth-child(1)").href;
            $taskObj.deadline = $task.querySelector(".tasklist-deadline .deadline").innerHTML;
            $taskObj.id       =  $taskObj.link.includes('idnumber=') && $taskObj.link.slice($taskObj.link.indexOf('idnumber=')+9).replace(/&|Id=/g,'');
            if(!$taskObj.link.includes("https://scombz.shibaura-it.ac.jp")){
                $taskObj.link = "https://scombz.shibaura-it.ac.jp" + $taskObj.link;
            }
            $taskListsObj.push($taskObj);
        }
        console.log('課題一覧を取得しました:\n'+JSON.stringify($taskListsObj));
        chrome.storage.local.set({
            tasklistData : encodeURIComponent(JSON.stringify($taskListsObj))
        },function(){
            console.log('課題一覧をChromeLocalStorageに保存しました');
            }
        );
    }
    return;
}
function getTasksByAdjax($$reacquisitionMin){
    'use strict';
    //現在時刻と前回取得日時を取得して比較
    const $nowUnix = Date.now();
    chrome.storage.local.get({
        TaskGetTime : 0
    },function(item){
        if(Number(item.TaskGetTime) + $$reacquisitionMin*1000*60 > Number($nowUnix) || location.href.includes("https://scombz.shibaura-it.ac.jp/login")){
            console.log(`前回日時: ${new Date(item.TaskGetTime).toLocaleString()}\n現在日時: ${new Date($nowUnix).toLocaleString()}\n${$$reacquisitionMin}分経過していないため、再取得をスキップします`);
        }else{
            console.log(`前回日時: ${new Date(item.TaskGetTime).toLocaleString()}\n現在日時: ${new Date($nowUnix).toLocaleString()}`);
            console.log("課題取得を開始します");
            adjustTasklistPos();
            setTimeout(function(){
            //Ajax通信
            //jQueryを使って実装
                $(function() {
                    console.log("Getting Tasks Data By Ajax");
                    $.ajax({
                        type: "GET",
                        url: "https://scombz.shibaura-it.ac.jp/lms/task",
                        dataType:"html"
                    })
                    .then(
                        //通信成功時
                        function(data) {
                            console.log("課題一覧ページAjax読み込み成功");
                            const $taskListsObj = [];
                            
                            for (let i = 0 ; $(data).find(".result_list_line .course").eq(i).html() ; i++){
                                const $taskObj = {};
                                $taskObj.course   =  $(data).find(".result_list_line .course").eq(i).html();
                                $taskObj.title    =  $(data).find(".result_list_line .tasklist-title a").eq(i*2).html();
                                $taskObj.link     =  $(data).find(".result_list_line .tasklist-title a").eq(i*2).attr('href');
                                $taskObj.id       =  $taskObj.link.includes('idnumber=') && $taskObj.link.slice($taskObj.link.indexOf('idnumber=')+9).replace(/&|Id=/g,'');
                                $taskObj.deadline =  $(data).find(".result_list_line .tasklist-deadline .deadline").eq(i).html();
                                if(!$taskObj.link.includes("https://scombz.shibaura-it.ac.jp")){
                                    $taskObj.link = "https://scombz.shibaura-it.ac.jp" + $taskObj.link;
                                }
                                $taskListsObj.push($taskObj);
                            }
                            if(!$taskListsObj[0]){
                                //課題完了か確認
                                if($(data).find(".no-data").eq(0).html()){
                                    $taskListsObj.push({
                                        data: null
                                    });
                                }else{
                                //エラー時
                                    $taskListsObj.push({
                                        course: "取得ERROR",
                                        title: "課題一覧ページ",
                                        link: "https://scombz.shibaura-it.ac.jp/lms/task",
                                        deadline: ""
                                    });
                                }
                            }
                            console.log("課題一覧をAjaxで取得しました: \n"+JSON.stringify($taskListsObj));
                            chrome.storage.local.set({
                                TaskGetTime: $nowUnix,
                                tasklistData : encodeURIComponent(JSON.stringify($taskListsObj))
                            },function(){
                                console.log('課題一覧と現在時刻をChromeLocalStorageに保存しました');
                                }
                            );
                        },
                        //通信失敗時
                        function(){
                            console.log("課題一覧ページ読み込み失敗");
                        }
                    );
                });
                //アンケート取得
                getSurveysByAjax();
            },100);
        }
    });
    return;
}

//アンケートを取得するかどうかの設定を科目別ページに挿入
function insertSurveyBtnOnSubj(){
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        const $courseTitle = document.querySelector('.course-title-txt');
        if($courseTitle && !document.getElementById("noticeSurvey")){
            console.log('授業別ページを検出しました\nアンケート取得是非を挿入します');
            const $nameInt = $courseTitle.innerHTML.indexOf(' ', $courseTitle.innerHTML.indexOf(' ') + 2);
            const $courseName = $courseTitle.innerHTML.slice($nameInt+1);
            console.log("科目name:"+$courseName);
            setTimeout(function(){
                //const courseTopForm = document.getElementById("courseTopForm");
                $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`
                <style>
                .ItemBox-CheckBox-Input {
                    display: none;
                    /* inputタグは非表示にする */
                }
                .ItemBox-CheckBox-Label {
                    display: inline-block;
                    position: relative;
                    margin: 4px;
                    width: 56px;
                    height: 24px;
                    border-radius: 80px;
                    background: #d0d2d9;
                    /* チェックされていない時の背景色 */
                    cursor: pointer;
                    transition: .2s ease;
                    /* 円が動くスピードを指定 */
                }
                
                .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label {
                    background: #416bc9;
                    /* チェックされた時の背景色 */
                }
                
                .ItemBox-CheckBox-Label:before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    border-radius: 80px;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    transition: .2s ease;
                    /* 円が動くスピードを指定 */
                }
                
                .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label:before {
                    left: 33px;
                }
                .noticeSurveyBox{
                    margin-left: 42px;
                }
                .noticeSurveyBox > span{
                    position: relative;
                    top:-12px;
                    margin-right: 5px;
                }
                </style>
                <div class="noticeSurveyBox">
                    
                    <input class="ItemBox-CheckBox-Input" type="checkbox" id="noticeSurvey"><label class="ItemBox-CheckBox-Label" for="noticeSurvey"></label>
                    <span>この科目のアンケートを課題一覧に表示する</span>
                </div>
                    `);
                const pageurl = location.href;
                chrome.storage.local.get({
                    noticeSurvey : [
                        {
                            name: $courseName,
                            value: false,
                            url: pageurl
                        }
                    ]
                },function(items){
                    let newNoticeSurvey = items.noticeSurvey;
                    let subscipt = items.noticeSurvey.findIndex( (element) => element.name == $courseName);
                    //もし保存されたデータの中に該当科目の情報が存在しなかったら追加する
                    //subscipt: 添え字
                    if(subscipt === -1) {
                        newNoticeSurvey.push({
                            name: $courseName,
                            value: false,
                            url: pageurl
                        });
                        subscipt = newNoticeSurvey.findIndex( (element) => element.name == $courseName);
                    }
                    //chrome.storageに保存されたオンオフ情報を復元
                    document.getElementById('noticeSurvey').checked = newNoticeSurvey[subscipt].value;
                    //値の変更時にchrome.storageに保存する
                    document.getElementById('noticeSurvey').addEventListener("change",function(){
                        newNoticeSurvey[subscipt].value = document.getElementById('noticeSurvey').checked;
                        chrome.storage.local.set({
                            noticeSurvey : newNoticeSurvey
                        },function(){
                            console.log("値を変更しました");
                            console.log(newNoticeSurvey);
                        });
                    });
                });
                
            },200);
        }
    }
}

//アンケートAjax取得
function getSurveysByAjax(){
    console.log("アンケート取得を開始します");
    setTimeout(function(){
        //Ajax通信
        //jQueryを使って実装
            $(function() {
                console.log("Getting Surveys Data By Ajax");
                $.ajax({
                    type: "GET",
                    url: "https://scombz.shibaura-it.ac.jp/portal/surveys/list",
                    dataType:"html"
                })
                .then(
                    //通信成功時
                    function(data) {
                        console.log("アンケート一覧ページAjax読み込み成功");
                        const $taskListsObj = [];
                        const $pastSurveyList = [];
                        for (let i = 0 ; $(data).find("#portalSurveysForm .result-list").eq(i).html() ; i++){
                            if($(data).find("#portalSurveysForm .result-list .survey-list-title").eq(i).find(".portal-surveys-status-end-color").length > 0){
                                console.log("SKIPPED->"+$(data).find("#portalSurveysForm .result-list .survey-list-title").eq(i).find(".template-name").html());
                                continue;
                            }
                            const $taskObj = {};
                            $taskObj.title    =  $(data).find("#portalSurveysForm .result-list .survey-list-title .template-name").eq(i).html();
                            $taskObj.course   =  $(data).find("#portalSurveysForm .result-list .survey-list-address span").eq(i).html();
                            $taskObj.startline=  $(data).find("#portalSurveysForm .result-list .survey-list-update").eq(i).find("span").eq(0).html();
                            $taskObj.deadline =  $(data).find("#portalSurveysForm .result-list .survey-list-update").eq(i).find("span").eq(2).html();
                            $taskObj.id       =  'survey' + $(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val();
                            if(Number($(data).find("#portalSurveysForm .result-list #listIdnumber").eq(i).val().length) > 3){
                                $taskObj.suvurl   =  `https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?surveyId=${$(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val()}${"&idnumber="+$(data).find("#portalSurveysForm .result-list #listIdnumber").eq(i).val()}`;
                            }else{
                                $taskObj.suvurl   =  `https://scombz.shibaura-it.ac.jp/portal/surveys/take?surveyId=${$(data).find("#portalSurveysForm .result-list #listSurveyId").eq(i).val()}`;
                            }
                            $taskListsObj.push($taskObj);
                            $pastSurveyList.push($taskObj);
                        }
                        console.log("アンケート一覧をAjaxで取得しました: \n"+JSON.stringify($taskListsObj));
                        //アンケート取得設定でオンになっているもののみに絞り込む
                        chrome.storage.local.get({
                            pastSurveyList: [],
                            noticeSurvey:[
                                {
                                    name : "ScombZ Utilities",
                                    value : true,
                                    url : "https://scombz.shibaura-it.ac.jp"
                                }
                            ]
                        },function(items){
                            //過去のデータ
                            const oldPastSurveyList = items.pastSurveyList;
                            for(const $taskObj of $taskListsObj){
                                if(!oldPastSurveyList[0]){
                                    oldPastSurveyList.push($taskObj);
                                    continue;
                                }
                                let flag = false;
                                for(const oldPastSurvey of oldPastSurveyList){
                                    if(oldPastSurvey.id == $taskObj.id){
                                        flag = true;
                                        break;
                                    }
                                }
                                if(flag === false){
                                    oldPastSurveyList.push($taskObj);
                                }
                            }
                            while(oldPastSurveyList.length > 100){   //100件を超えた過去のデータは破棄
                                oldPastSurveyList.shift();
                            }
                            //readableSubjectsにオンになっている科目名をいれる
                            const readableSubjects = [];
                            const $surveyList = [];
                            for(const subjects of items.noticeSurvey){
                                if(subjects.value === true){
                                    readableSubjects.push({
                                        name: subjects.name,
                                        url: subjects.url
                                    });
                                }
                            }
                            console.log("オンになっている科目一覧");
                            console.log(readableSubjects);
                            //readableSubjectsに含まれていたらstorageに保存する配列に追加
                            for(const subjects of $taskListsObj){
                                if (readableSubjects.findIndex( (element) => element.name === subjects.course) !== -1){
                                    subjects.url = readableSubjects[readableSubjects.findIndex( (element) => element.name === subjects.course)].url;
                                    $surveyList.push(subjects);
                                }
                            }
                            //chrome.storageに保存
                            console.log("アンケート一覧から取得した、オンになっている科目のアンケート");
                            console.log(JSON.stringify($surveyList));
                            console.log($surveyList);
                            chrome.storage.local.set({
                                surveyListData : encodeURIComponent(JSON.stringify($surveyList)),
                                pastSurveyList : oldPastSurveyList
                            },function(){
                                console.log('アンケート一覧をChromeLocalStorageに保存しました');
                                }
                            );
                        });
                    },
                    //通信失敗時
                    function(){
                        console.log("読み込み失敗");
                    }
                );
            });
        },100);
}