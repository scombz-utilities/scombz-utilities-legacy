/* ScombZ Utilities */
/* addSubTimetable.js */

//LMS取得&表示
function subTimetable($timetableDisplay,$tasklistDisplay,$$version,$$reacquisitionMin){
    'use strict';
    if(document.getElementById('pageMain') === null){
        return;
    }
    if($timetableDisplay === true){
        if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
            getSubTimetable();
        }
        console.log('グレーレイヤー&時間割を追加します');
        displaySubTimetable($$version);
        console.log('グレーレイヤー&時間割を追加しました');
    }else{
        console.log('グレーレイヤーを追加します');
        displayGrayLayer($$version);
        console.log('グレーレイヤーを追加しました');
    }
    if( $tasklistDisplay === true ){
        console.log('メニュー課題表示を開始します');
        chrome.storage.local.get({
            TaskGetTime: 0
        },function(items){
            if(Number(Date.now()) > Number(items.TaskGetTime) + $$reacquisitionMin * 1000 * 60  || (location.href == "https://scombz.shibaura-it.ac.jp/lms/course/report/submission" &&  document.querySelector(".contents-detail.contents-complete")) || (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/examination/take?complete")&&  document.querySelector(".contents-detail.contents-complete")) ){
                setTimeout(function(){
                    console.log("遅延表示設定");
                    displayTaskListsOnGrayLayer();
                },1500);
            }else{
            displayTaskListsOnGrayLayer();
            }
            console.log('メニュー横に課題を表示しました');
        });
    }
    return;
}

//------------LMS情報取得------------
//全角数字→半角数字にする関数
function han2Zenkaku($str) {
    return $str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
//LMSから情報を取得してJSON化する関数
function getSubTimetable(){
    //時間割じゃなくてスケジュールだったら取得できないので取得しない
    if(!document.getElementById('displayMode1') || !document.getElementById('displayMode1').checked) {
        return;
    }
    //取得する
    console.log('LMSを取得開始します');
    const $courseList = document.querySelectorAll('.timetable-course-top-btn');
    if($courseList[0]){
        //JSON生成
        const $timetableData = [];
        let futei = 0;
        for(const $course of $courseList) {
            const $timetableClassData={};
            for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                    $timetableClassData.day = $yobicolNum,
                    $timetableClassData.time = Number(jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML));
                    if(!$timetableClassData.time){
                        $timetableClassData.time = Number($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML.slice(-1));
                    }
                    break;
                }
                if($yobicolNum == 6){
                    $timetableClassData.day = -1;
                    $timetableClassData.time = -1; // 曜日時限不定履修
                    futei++;
                }
            }
            $timetableClassData.id = $course.getAttribute("id");
            $timetableClassData.name = $course.innerHTML;
            $timetableClassData.classroom = $course.nextElementSibling.firstElementChild.getAttribute("title");
            const $courseTeacherList = $course.nextElementSibling.firstElementChild.querySelectorAll("span");
            const $courseTeachers =[];
            for(const $teacher of $courseTeacherList){
                if(!($teacher.hasAttribute("class"))){
                    $courseTeachers.push($teacher.innerHTML.replace(",  ",""));
                }
            }
            $timetableClassData.teacher= $courseTeachers;
            $timetableData.push($timetableClassData);
        } 
        $timetableData.push({
            day:-2,
            time:-2,
            name:"授業は存在しません"
        });
        $timetableData.push({
            termYear: Number(String(document.getElementById("nendo").querySelector("[selected]").value)),
            termPhase: (document.getElementById("kikanCd").querySelector("[selected]").value === '10')?1:2
        });
        console.log('LMSを取得しました\n\n'+JSON.stringify($timetableData));
        chrome.storage.local.set({
            timetableData : encodeURIComponent(JSON.stringify($timetableData)),
            specialSubj : futei
        },function(){
            console.log('ChromeLocalStorageに保存しました');
            }
        );
        //JSON生成完了
    }
    return;
}

//------------LMS情報表示------------
function displaySubTimetable($$version){
    'use strict';
    chrome.storage.local.get({
        timetableData : null
    },function(item){
        if(item.timetableData == null){
            console.log('時間割情報が存在しません');
            displayGrayLayer($$version);
        }else{
            const $timetableDataStr = decodeURIComponent(item.timetableData);
            console.log('ChromeLocalStrageのアクセスに成功しました\nJSONファイルにparseします');
            const $timetableData = JSON.parse($timetableDataStr);
            console.log('JSONファイルを読み込みました'+$timetableDataStr);
            let $subTimetable =`
            <style type="text/css">
                .SubTimetable {
                    text-align:center;
                    decolation:none;
                    font-size:100%;
                }
                @media(max-width:1281px){
                    .SubTimetable {
                        font-size:90%;
                    }
                }
                td.SubTimetable , th.SubTimetable {
                    width:calc((100vw - 300px)/7);
                    height:4vh;
                    background:#EDF3F7;
                }
                td.SubTimetable:nth-child(1) , th.SubTimetable:nth-child(1) {
                    width:30px;
                    background:#ec9c93;
                }
                th.SubTimetable{
                    background:#bea87b;
                    height:30px;
                }
                a.SubTimetable{
                    display:block;
                    width:100%;
                    height:100%;
                    min-height:40px;
                }
                a.SubTimetable:hover{
                    background:rgba(206, 213, 217,0.5);
                }
                .subtimetableBodyCulm{
                    background:rgba(255,255,255,0.5);
                }
            </style>
            <div class="subtimetableBody">
            <div class="subtimetableBodyCulm">
            <table  id = "subTimetable" class="SubTimetable">
                <thead>
                    <tr>
                        <th class="SubTimetable"></th>
                        <th class="SubTimetable">月</th>
                        <th class="SubTimetable">火</th>
                        <th class="SubTimetable">水</th>
                        <th class="SubTimetable">木</th>
                        <th class="SubTimetable">金</th>
                        <th class="SubTimetable">土</th>
                    </tr>
                </thead>
                <tbody>`;
            console.log('LMSを表示します');
            let num=0;
            //通常授業
            for(let i=0; i<7; i++){ //i=時限
                $subTimetable+='<tr>';
                for(let j=0; j<7; j++){ //j=曜日
                    let $subjData = (j==0) ? i+1 : '';
                    if( $timetableData[num].day == j && $timetableData[num].time == i+1 ){
                        //2Q、4Qのことを考える
                        if( $timetableData[num+1].day == j && $timetableData[num+1].time == i+1 ){
                            console.log('クォーター制授業を検出しました 曜日:'+j+' 時間:'+i);
                            $subjData = `
                            <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num].name}</span></a>
                            <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num+1].id}" class="SubTimetable" style="color:#000000;text-decoration:none;margin-top:1px;border-top:1px solid #ccc; white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num+1].name}</span></a>`;
                            num++;
                        }else{//2Q,4Qが存在しないとき
                            console.log('通常授業を検出しました 曜日:'+j+' 時間:'+i);
                            $subjData = `<a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a>`;
                        }
                        num++;
                    }            
                    $subTimetable+=`<td class="SubTimetable">${$subjData}</td>`;
                }
                $subTimetable+='</tr>';
            }
            $subTimetable += `</tbody></table></div>`;
            //曜日時間不定授業
            if($timetableData[num].day != -1){
                console.log('読み取り完了 課外授業なし day:'+$timetableData[num].day);
            }else{
                console.log('曜日時間不定授業・集中講座を検出しました');
                $subTimetable+= `
                <div class="subtimetableBodyCulm"><table class="SubTimetable" style="margin-top:10px;">
                <tr class="SubTimetable">
                    <th class="SubTimetable">その他の授業</th>
                </tr>`;
                for(;$timetableData[num].day == -1;num++){
                $subTimetable+=`
                    <tr>
                        <td class="SubTimetable" style="background:#EDF3F7;width:calc((100vw - 300px)/5);height:4vh;"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a></td>
                    </tr>`;
                }
                $subTimetable+=`</table></div>`;
                console.log('読み取り完了 課外授業あり day:'+$timetableData[num].day);
            }
            $subTimetable+=`</div>`;
            console.log('時間割の生成に成功しました\nコマ数:'+num);

            document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities ver.${$$version}<br><a style="color:#000000;" href="https://github.com/yudai1204/ScombZ-Utilities" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            `+$subTimetable);
        }
    });
    return;
}
//時間割のないグレーレイヤーの表示関数
function displayGrayLayer($$version){
    'use strict';
    document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities ver.${$$version}<br><a style="color:#000000;" href="https://github.com/yudai1204/ScombZ-Utilities" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            `);
    return;
}
//課題一覧の表示
function displayTaskListsOnGrayLayer(){
    chrome.storage.local.get({
        TaskGetTime: 1,
        tasklistData: [],
        surveyListData: [],
        manualTasklist: [],
        specialSubj: 0,
        tasklistTranslate: 0,
        deadlinemode: 'absolute-relative',
        maxTaskDisplay: 16,
        hiddenTasks: [],
        undisplayFutureTaskDays: 365,
        highlightDeadline : true
    },function(items){
        if(items.TaskGetTime && items.tasklistData){
            console.log("ChromeLocalStorageを読み込みました\n課題一覧を表示します");
            //JSONファイル展開
            console.log(decodeURIComponent(items.tasklistData));
            const $tasklistObj = JSON.parse(decodeURIComponent(items.tasklistData));
            console.log(decodeURIComponent(items.surveyListData));
            const $surveyListObj = JSON.parse(decodeURIComponent(items.surveyListData));
            //JSONから表示高さ生成
            const $subTimetable = document.getElementsByClassName("subtimetableBody");
            let timetableHeight = 5;
            let timetableminHeight = 0;
            if($subTimetable[0]){
                timetableHeight = 40;
                timetableminHeight = 350;
                if(Number(items.specialSubj) > 0){
                    timetableHeight += 10*Number(items.specialSubj);
                    timetableminHeight += 60*Number(items.specialSubj);
                }
            }
            //メイン生成部分
            let kadaiListHTML=``;
            //アンケート一覧と課題一覧を統合する
            for(const $survey of $surveyListObj){
                if(Number(Date.parse($survey.deadline)) < Number(Date.now())){
                    continue;
                }
                for(let i=0;;i++){
                    //tasklistを読み切ったら最後に挿入して終了
                    if(!$tasklistObj[i]){
                        $tasklistObj.push($survey);
                        break;
                    }
                    //tasklist内に挿入位置を発見したらそこに挿入して終了
                    if( Number(Date.parse($survey.deadline)) < Number(Date.parse($tasklistObj[i].deadline)) ){
                        console.log("SPLICED:"+i);
                        $tasklistObj.splice(i,0,$survey);
                        break;
                    }
                }
                
            }
            //自作課題一覧を統合する
            for(const $manTask of items.manualTasklist){
                if(Number(Date.parse($manTask.deadline)) < Number(Date.now())){
                    continue;
                }
                for(let i=0;;i++){
                    //tasklistを読み切ったら最後に挿入して終了
                    if(!$tasklistObj[i]){
                        $tasklistObj.push($manTask);
                        break;
                    }
                    //tasklist内に挿入位置を発見したらそこに挿入して終了
                    if( Number(Date.parse($manTask.deadline)) < Number(Date.parse($tasklistObj[i].deadline)) ){
                        console.log("SPLICED:"+i);
                        $tasklistObj.splice(i,0,$manTask);
                        break;
                    }
                }
            }
            //課題・テスト・アンケート一覧
            let deadline='XXXX/XX/XX XX:XX:XX';
            if(!$tasklistObj[0]){
                kadaiListHTML +=`<div class="subk-line">未提出課題は存在しないか、取得できません。</div>`;
            }else{
                const nowUnix = Date.now();
                for(let i=0,j=0; $tasklistObj[i] && i<items.maxTaskDisplay+1 -j; i++){
                    //先の課題は表示しない
                    if((Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000 > 60*24*(1+items.undisplayFutureTaskDays)){
                        break;
                    }
                    //非表示に設定されているものはスキップ
                    if(items.hiddenTasks.includes($tasklistObj[i].id)){
                        j++;
                        continue;
                    }
                    if($tasklistObj[i].data === null && !$tasklistObj[i+1]){
                        kadaiListHTML+=`<div class="subk-line">未提出課題は存在しません。</div>`;
                        break;
                    }
                    if($tasklistObj[i].data === null)continue;
                    //絶対表示
                    deadline = ($tasklistObj[i].deadline.length > 17) ? $tasklistObj[i].deadline : $tasklistObj[i].deadline+":00";
                    if(items.deadlinemode.includes('absoluteShort'))
                        deadline = $tasklistObj[i].deadline.slice(6,-3);
                    //相対表示
                    if(items.deadlinemode.includes('relative') && $tasklistObj[i].deadline != "" ){
                        if(items.deadlinemode == 'relative'){
                            const nowUnix = Date.now();
                            const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                            if(relativeDeadline < 0){
                                deadline = "期限切れ";
                            }else if(relativeDeadline < 180){
                                deadline = '残り約'+Math.floor(relativeDeadline)+'分';
                            }else if(relativeDeadline < 60*24){
                                deadline = '残り約'+Math.floor(relativeDeadline/60)+'時間';
                            }else{
                                deadline = '残り約'+Math.floor(relativeDeadline/(60*24))+'日';
                            }
                        }else{
                            const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                            if(relativeDeadline < 0){
                                deadline = "期限切れ";
                            }else if(relativeDeadline < 180){
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline)+'分</span>'+deadline;
                            }else if(relativeDeadline < 60*24){
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline/60)+'時間</span>'+deadline;
                            }else{
                                deadline = '<span class="relative-deadline-time">残約'+Math.floor(relativeDeadline/(60*24))+'日</span>'+deadline;
                            }
                        }
                    }
                    //近い時間の課題を目立たせる
                    let highlightMark = "";
                    if(items.highlightDeadline === true){
                        highlightMark = "highlightMark";
                        const relativeDeadline = (Number(Date.parse($tasklistObj[i].deadline)) - Number(nowUnix))/60000;
                        if(relativeDeadline < 60*12){
                            highlightMark = 'today shorttime highlightMark';
                        }else if(relativeDeadline < 60*24){
                            highlightMark = 'today highlightMark';
                        }else if(relativeDeadline < 60*24*3){
                            highlightMark = 'a-few-days highlightMark';
                        }else if(relativeDeadline < 60*24*7){
                            highlightMark = 'a-week highlightMark';
                        }
                    }
                    //link生成
                    let subjlink = "",tasklink = "";
                    if($tasklistObj[i].id.includes("manual")){
                        subjlink = ($tasklistObj[i].subjlink.includes("http")) ? $tasklistObj[i].subjlink : "https://"+$tasklistObj[i].subjlink;
                        tasklink = ($tasklistObj[i].tasklink.includes("http")) ? $tasklistObj[i].tasklink : "https://"+$tasklistObj[i].tasklink;
                    }else{
                        subjlink = $tasklistObj[i].link;
                        tasklink = $tasklistObj[i].link;
                        if(subjlink === undefined) {
                            subjlink = $tasklistObj[i].url;
                            tasklink = subjlink+"#questionnaire";
                        }else{
                            subjlink = String((subjlink.includes("/report/"))?subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&reportId')):subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&examinationId')));
                            subjlink = "https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+subjlink;
                        }
                    }
                    kadaiListHTML += `
                    <div class="subk-line ${highlightMark}">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="${subjlink}">${$tasklistObj[i].course}</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link" href="${tasklink}"><span class="subk-link">${$tasklistObj[i].title}</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time">${deadline}</div><a class="subk-remove-btn" data-value="${$tasklistObj[i].id}" href="javascript:void(0);"></a></div>
                    </div>`;
                }
            }
            const lastgettime =  `${new Date(items.TaskGetTime).toLocaleDateString('ja-JP')} ${new Date(items.TaskGetTime).toLocaleTimeString('ja-JP').slice(0,-3)}`;
            //合体させてHTMLをつくる
            let kadaiHTML =`
            <style>
                #subTaskList{
                    top: max(${timetableHeight}vh,${timetableminHeight}px);
                    transform: translateY(${items.tasklistTranslate}px);
                    background: rgba(255,255,255,0.5);
                    width: 60vw;
                    min-width: 550px;
                    padding: 2px;
                }
                #add-task-manual{
                    display:inline-block;
                    font-weight: bold;
                    font-size:90%;
                    text-decoration:underline;
                    color:#222;
                    margin-left:10px;
                }
                #add-task-manual:hover{
                    background-color:#7773;
                }
                .task-get-time{
                    display:inline-block;
                    font-weight: normal;
                    font-size: 80%;
                    text-decoration:none;
                    color:#222;
                }
                .subk-head-right-contents{
                    display: inline-block;
                    float:right;
                    margin-top:-2px;
                }
                .subk-box{
                    margin:0;
                }
                .subk-head{
                    margin:0;
                    padding:4px;
                    background:#fff;
                    border-bottom:2px solid #ccc;
                    font-size:15px;
                    padding-left:10px;
                    font-weight:bold;
                    height:23px;
                }
                .subk-line{
                    height:25px;
                    padding:2px;
                    margin:0;
                    background:#fff;
                    border-bottom:1px solid #ccc;
                }
                .subk-line:nth-child(2n){
                    background:#FFFAF0;
                }
                .subk-subjname{
                    font-size:12px;
                    padding:2px;
                    width:100%;
                    white-space: nowrap; 
                    overflow: hidden; 
                    text-overflow: ellipsis;
                }
                div.subk-link{
                    padding:2px 2px 0px 2px;
                    font-size:14px;
                    margin-left:10px;
                    max-width:100%;
                    white-space: nowrap; 
                    overflow: hidden;
                    text-overflow: ellipsis; 
                }
                a.subk-link{
                    display: inline-block;
                    min-width:80%;
                    height:100%;
                    color: #111;
                }
                a.subk-link:hover span.subk-link{
                    background:rgba(0,0,100,0.1);
                }
                .subk-deadline{
                    margin-top:2px;
                    margin-right:4px;
                    font-size:14px;
                    float:right;
                }
                .subk-column{
                    margin:0;
                    padding:0;
                    float:left
                }
                .subk-column:nth-child(3n+1){
                    width:30%;
                    float:left;
                }
                .subk-column:nth-child(3n+2){
                    min-width:160px;
                    width:calc(70% - 270px);
                }
                .relative-deadline-time{
                    font-size:80%;
                    margin-right:20px;
                    color:#f00;
                }
                .highlightMark .relative-deadline-time{
                    color:#999;
                }
                .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
                    color:#f00;
                    font-weight:bold;
                    font-size: 91%;
                }
                .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
                    background-color:#faa;
                }
                .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
                    color:#f22;
                }
                .a-week.highlightMark .relative-deadline-time{
                    color:#333;
                }
                .subk-subjname-link{
                    color: #000;
                    text-decoration: none;
                }
                .subk-subjname-link:hover{
                    color: #222;
                    text-decoration: underline;
                }
                .subk-remove-btn{
                    display: inline-block;
                    float:right;
                    width:15px;
                    height:15px;
                    margin-left:5px;
                    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%22512%2C52.535%20459.467%2C0.002%20256.002%2C203.462%2052.538%2C0.002%200%2C52.535%20203.47%2C256.005%200%2C459.465%20%0A%09%0952.533%2C511.998%20256.002%2C308.527%20459.467%2C511.998%20512%2C459.475%20308.536%2C256.005%20%09%22%20style%3D%22fill%3A%20rgb(24%2C%2024%2C%2024)%3B%22%3E%3C%2Fpolygon%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
                    background-size:8px;
                    background-repeat:no-repeat;
                    background-position: center center;
                    background-color:#faa6;
                    background-blend-mode:lighten;
                    visibility: hidden;
                    border-radius:100px;
                }
                div.subk-line:hover .subk-remove-btn{
                    visibility:visible;
                }
                .subk-remove-btn:hover{
                    background-color:#f776;
                }
                .subk-deadline-time{
                    display: inline-block;
                }
                @media(max-width:1080px){
                    .relative-deadline-time{
                        display:none;
                    }
                    .subk-column:nth-child(3n+2){
                        width:calc(70% - 160px);
                    }
                    .subk-remove-btn{
                        display:none;
                    }
                }
            </style>
            <div class="subtimetableBody" id="subTaskList">
            <div class="subk-box">
                <div class="subk-head">
                課題一覧
                    <div class="subk-head-right-contents">
                        <a class="task-get-time" id="reloadTasks" href="javascript:void(0);">最終更新:${lastgettime}</a>
                        <a id="add-task-manual" href="javascript:void(0);">追加</a>
                    </div>
                </div>
                ${kadaiListHTML}
            </div>
            </div>
            `;
            const manualAddTaskLayerHTML=`
            <style>
                #manAddtaskSelectBackground{
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    z-index: 120;
                    background: #0007;
                    top: 0;
                    left: 0;
                    display:none;
                }
                #manAddtaskSelectLayer{
                    position: fixed;
                    width: 80%;
                    height: 70vh;
                    background-color:#fff;
                    top: 50%;
                    left: 50%;
                    transform: translateY(-50%) translateX(-50%);
                    z-index: 125;
                    text-align:center;
                    padding:30px;
                    display:none;
                }
                .manadd-column{
                    box-shadow: 0 0 3px #777;
                    border-radius: 10px;
                    padding:10px;
                    margin:10px;
                    text-align:left;
                }
                .manadd-column > div{
                    display: block;
                    margin:10px;
                }
                .manadd-column > div > input[type="text"]{
                    width:100%;
                }
                .manadd-column-name{
                    margin-right:10px;
                    display:inline-block;
                    width:120px;
                }
                
            </style>
            <div id="manAddtaskSelectBackground"></div>
            <div id="manAddtaskSelectLayer">
                <h1>課題手動追加</h1>
                <form onsubmit="return false;">
                <div class="manadd-column">
                    <div><span class="manadd-column-name">科目名</span><input type="text" id="manAddtaskSubjname" required></div>
                    <div><span class="manadd-column-name">科目リンク</span><input type="text" id="manAddtaskSubjlink" required></div>
                </div>
                <div class="manadd-column">
                    <div><span class="manadd-column-name">課題タイトル</span><input type="text" id="manAddtaskTaskname" required></div>
                    <div><span class="manadd-column-name">課題リンク</span><input type="text" id="manAddtaskTasklink" required></div>
                </div>
                <div class="manadd-column">
                    <span class="manadd-column-name">締め切り</span>
                    <input type="date" id="manAddtaskDeadlineDate" required>
                    <input type="time" id="manAddtaskDeadlineTime" required>
                </div>
                <div>
                    <button id="manAddtaskConfirm" type="submit">追加する</button>
                    <button onclick="javascript:document.getElementById('manAddtaskSelectBackground').click();">キャンセル</button>
                </div>
                </form>
            </div>
            </div>
            `;
            if(document.getElementById('pageMain')){
                document.getElementById('pageMain').insertAdjacentHTML('beforeend',kadaiHTML+manualAddTaskLayerHTML);
            }
            //手動追加
            document.getElementById("add-task-manual").addEventListener("click",function(){
                document.getElementById("manAddtaskSelectBackground").style.display = "block";
                document.getElementById("manAddtaskSelectLayer").style.display = "block";
            });
            document.getElementById("manAddtaskSelectBackground").addEventListener("click",function(){
                document.getElementById("manAddtaskSelectBackground").style.display = "none";
                document.getElementById("manAddtaskSelectLayer").style.display = "none";
            });
            document.getElementById("manAddtaskConfirm").addEventListener("click",function(){
                const manSubjname = document.getElementById("manAddtaskSubjname").value;
                const manSubjlink = document.getElementById("manAddtaskSubjlink").value;
                const manTaskname = document.getElementById("manAddtaskTaskname").value;
                const manTasklink = document.getElementById("manAddtaskTasklink").value;
                const manTaskdate = document.getElementById("manAddtaskDeadlineDate").value.replace(/-/g,"/");
                const manTasktime = document.getElementById("manAddtaskDeadlineTime").value;
                if(manSubjname && manSubjlink && manTaskname && manTasklink && manTaskdate && manTasktime){
                    chrome.storage.local.get({
                        manualTasklist: []
                    },function(items){
                        const manualTasklist = items.manualTasklist;
                        const nowTasklist = {
                            "course": manSubjname,
                            "title": manTaskname,
                            "tasklink": manTasklink,
                            "subjlink": manSubjlink,
                            "id": "manual"+String(Date.now()),
                            "deadline": `${manTaskdate} ${manTasktime}`
                        };
                        manualTasklist.push(nowTasklist);
                        chrome.storage.local.set({
                            manualTasklist: manualTasklist
                        },function(){
                            window.confirm("保存成功しました。\n更新結果を表示するにはページをリロードしてください。");
                            document.getElementById('manAddtaskSelectBackground').click();
                            //FireFoxのみ(?)バグが発生するので対策
                            if(window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1){
                                console.log("FIREFOX BUGFIX");
                                setTimeout(function(){
                                    const widgetlayer = document.querySelector(".ui-widget-overlay");
                                    const widgetcontent = document.querySelector(".ui-widget-content");
                                    if(widgetlayer && widgetcontent){
                                        console.log("widget true");
                                        widgetlayer.remove();
                                        widgetcontent.remove();
                                    }
                                },100);
                            }
                        });
                    });
                }
            });
            //課題一覧のリロード
            document.getElementById('reloadTasks').addEventListener("click",function(){
                getTaskLists(0);
                alert("更新結果を表示するにはページをリロードしてください");
            });
            //削除ボタン
            const rmBtns = document.getElementsByClassName("subk-remove-btn");
            console.log(rmBtns.length);
            for(const rmBtn of rmBtns){
                rmBtn.addEventListener("click",function(){
                    console.log("clicked");
                    if(window.confirm("この項目を削除しますか？\n削除した項目は設定から復元できます")){
                        chrome.storage.local.get({
                            hiddenTasks: []
                        },function(rmitem){
                            const hiddenTasks = rmitem.hiddenTasks;
                            hiddenTasks.push(rmBtn.getAttribute("data-value"));
                            chrome.storage.local.set({hiddenTasks: hiddenTasks},
                                function(){
                                    rmBtn.parentNode.parentNode.remove();
                            });
                        });
                    }
                });
            }
            console.log(items.hiddenTasks);
            //一定以上期間が過ぎた自作課題を削除
            {
                const removedManualTasklist = [];
                for(const manTask of items.manualTasklist){
                    if( Number(Date.parse(manTask.deadline)) >= Number(Date.now()) ){
                        removedManualTasklist.push(manTask);
                    }
                }
                chrome.storage.local.set({
                    manualTasklist: removedManualTasklist
                },function(){
                    if(removedManualTasklist.length != items.manualTasklist.length)
                    console.log("=========manual list has updated.=========");
                });
            }
        }
    });
}