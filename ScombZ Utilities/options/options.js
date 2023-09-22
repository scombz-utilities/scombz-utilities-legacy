const defaultOptions = {
    year : null,
    fac : null,
    clickLoginBtn: true,
    adfsSkip: true,
    exitSidemenu: true,
    styleSidemenu: true,
    styleExamBtn: true,
    styleExamImg: false,
    addSubTimetable: true,
    changeReportBtn: true,
    styleDialog: true,
    hideCompletedReports: true,
    syllBtn: true,
    changeLogout: true,
    setMaxWidth: true,
    pageTopBtn : true,
    mouseDown: true,
    tasklistDisplay: true,
    styleNowPeriod: true,
    displayName: false,
    layoutHome:true,
    nickname: '',
    timesBtnValue:'mode1',
    sliderBarMax: 600,
    tasklistTranslate: 0,
    fixHeadShadow: true,
    deadlinemode: 'relative-absoluteLong',
    notepadMode: true,
    ddSubmission: false,
    updateClear: false,
    maxTaskDisplay: 15,
    darkmode : 'relative',
    headLinkTo: "/portal/home",
    dadbugFix: true,
    defaultInputName: 'AA00000_山田太郎',
    undisplayFutureTaskDays: 365,
    exportIcs: true,
    attendance: 'none',
    pastSurvey: true,
    addSurveyListButton: true,
    highlightDeadline: true,
    adjustTimetableData : {
        eraseSat : false,
        erase6: false,
        erase7: false,
        dispClassroom : false,
        timetableCentering : false
    },
    remomveDirectLink : true,
    popupOverflowMode: 'hidden',
    popupBadge: true,
    popupTasksTab: true,
    popupTasksLinks: true,
    popupUncountFutureTaskDays: 365,
    popupDarkenUncountedTasks: true,
    maxWidthPx:{
        subj: 1280,
        lms: 1280,
        task: 1280
    },
    subjectList : "12345678",
    materialTop : false,
    materialHide : true,
    reportHide : false,
    testHide : false,
    modifyCoursePageTitle: true,
    materialTopDetail : 'first',
    materialHideDetail : 'none',
    reportHideDetail : 'all',
    testHideDetail : 'all',
    addTaskInPage : true,
    autoTaskInput : true,
    addTaskTimeButton : false,
    addTaskTime : [true,false,false,false,false,true,false,true,false],
    addTaskDate :[true,false,false,false,false,false,false,true,true],
    enterAttendance : true,
    gasURL: "",
    gasCal: false,
    gasTodo: true,
    urlToLink: true,
    downloadFileBundle: true,
    displaySubtimetableWhileExam: true
};
// Saves options to chrome.storage
function save_options() {
    const year = document.getElementById('year').value;
    const fac = document.getElementById('fac').value;
    const login_auto = document.getElementById('login_auto').checked;
    const adfs_auto = document.getElementById('adfs_auto').checked;
    const menu_exit_auto = document.getElementById('menu_exit_auto').checked;
    const submenu = document.getElementById('submenu').checked;
    const examBtn = document.getElementById('exam_btn').checked;
    const examImg = document.getElementById('exam_img').checked;
    const additional_lms = document.getElementById('additional_lms').checked;
    const changeReportBtn = document.getElementById('changeReportBtn').checked;
    const styleDialog = document.getElementById('styleDialog').checked;
    const syllBtn = document.getElementById('syll_btn').checked;
    const hideCompletedReports = document.getElementById('hideCompletedReports').checked;
    const changeLogout = document.getElementById('changeLogout').checked;
    const setMaxWidth = document.getElementById('setMaxWidth').checked;
    const pageTopBtn = document.getElementById('pageTopBtn').checked;
    const mouseDown = document.getElementById('mouseDown').checked;
    const tasklistDisplay = document.getElementById('tasklistDisplay').checked;
    const styleNowPeriod = document.getElementById('styleNowPeriod').checked;
    const displayName = document.getElementById('displayName').checked;
    const subjWidth = document.getElementById('subjWidth').value;
    const lmsWidth = document.getElementById('lmsWidth').value;
    const taskWidth = document.getElementById('taskWidth').value;
    const layoutHome = document.getElementById('layoutHome').checked;
    const nickname = document.getElementById('nickname').value;
    const timesBtnValue = document.getElementById('timesBtnValue').value;
    const sliderBarMax = document.getElementById('sliderBarMax').value;
    const tasklistTranslate = document.getElementById('tasklistTranslate').value;
    const fixHeadShadow = document.getElementById('fixHeadShadow').checked;
    const deadlinemode = document.getElementById('deadlinemode').value;
    const notepadMode = document.getElementById('notepadMode').checked;
    const ddSubmission = document.getElementById('ddSubmission').checked;
    const updateClear = document.getElementById('updateClear').checked;
    const maxTaskDisplay = document.getElementById('maxTaskDisplay').value;
    const darkmode = document.getElementById('darkmode').value;
    const eraseSat = document.getElementById('eraseSat').checked;
    const erase6 = document.getElementById('erase6').checked;
    const erase7 = document.getElementById('erase7').checked;
    const dispClassroom = document.getElementById('dispClassroom').checked;
    const timetableCentering = document.getElementById('timetableCentering').checked;
    const remomveDirectLink = document.getElementById('remomveDirectLink').checked;
    const headLinkTo = document.getElementById('headLinkTo').value;
    const dadbugFix = document.getElementById('dadbugFix').checked;
    const attendance = document.getElementById('attendance').value;
    const defaultInputName = document.getElementById('defaultInputName').value;
    const undisplayFutureTaskDays = document.getElementById('undisplayFutureTaskDays').value;
    const exportIcs = document.getElementById('exportIcs').checked;
    const highlightDeadline = document.getElementById('highlightDeadline').checked;
    const pastSurvey = document.getElementById('pastSurvey').checked;
    const addSurveyListButton = document.getElementById('addSurveyListButton').checked;
    const subjectList = document.getElementById('subjectListNum').textContent;
    const materialTop = document.getElementById('materialTop').checked;
    const materialHide = document.getElementById('materialHide').checked;
    const reportHide = document.getElementById('reportHide').checked;
    const testHide = document.getElementById('testHide').checked;
    const modifyCoursePageTitle = document.getElementById('modifyCoursePageTitle').checked;
    const materialTopDetail = document.getElementById('materialTopDetail').value;
    const materialHideDetail = document.getElementById('materialHideDetail').value;
    const reportHideDetail = document.getElementById('reportHideDetail').value;
    const testHideDetail = document.getElementById('testHideDetail').value;
    const popupOverflowMode = document.getElementById('popupOverflowMode').value;
    const popupBadge = document.getElementById('popupBadge').checked;
    const popupTasksTab = document.getElementById('popupTasksTab').checked;
    const popupTasksLinks = document.getElementById('popupTasksLinks').checked;
    const popupUncountFutureTaskDays = document.getElementById('popupUncountFutureTaskDays').value;
    const popupDarkenUncountedTasks = document.getElementById('popupDarkenUncountedTasks').checked;
    const addTaskInPage = document.getElementById('addTaskInPage').checked;
    const autoTaskInput = document.getElementById('autoTaskInput').checked;
    const addTaskTimeButton = document.getElementById('addTaskTimeButton').checked;
    const addTaskTime = [...Array(9)].map((_, i) =>document.getElementById('addTask-time'+(i+1)).checked);
    const addTaskDate = [...Array(9)].map((_, i) =>document.getElementById('addTask-date'+(i+1)).checked);
    const enterAttendance = document.getElementById('enterAttendance').checked;
    const gasURL = document.getElementById('gasURL').value;
    const gasCal = document.getElementById('gasCal').checked;
    const gasTodo = document.getElementById('gasTodo').checked;
    const urlToLink = document.getElementById('urlToLink').checked;
    const downloadFileBundle = document.getElementById('downloadFileBundle').checked;
    const displaySubtimetableWhileExam = document.getElementById('displaySubtimetableWhileExam').checked;
    chrome.storage.local.set({
        year : year ,
        fac : fac ,
        clickLoginBtn : login_auto,
        adfsSkip : adfs_auto,
        exitSidemenu : menu_exit_auto,
        styleSidemenu : submenu,
        styleExamBtn : examBtn,
        styleExamImg : examImg,
        addSubTimetable : additional_lms,
        changeReportBtn : changeReportBtn,
        styleDialog : styleDialog,
        hideCompletedReports : hideCompletedReports,
        syllBtn : syllBtn,
        changeLogout : changeLogout,
        setMaxWidth : setMaxWidth,
        pageTopBtn : pageTopBtn,
        mouseDown : mouseDown,
        tasklistDisplay : tasklistDisplay,
        styleNowPeriod : styleNowPeriod,
        displayName : displayName,
        layoutHome : layoutHome,
        nickname : nickname,
        timesBtnValue : timesBtnValue,
        sliderBarMax : sliderBarMax,
        tasklistTranslate : tasklistTranslate,
        fixHeadShadow : fixHeadShadow,
        deadlinemode : deadlinemode,
        notepadMode : notepadMode,
        ddSubmission : ddSubmission,
        updateClear : updateClear,
        maxTaskDisplay : maxTaskDisplay,
        darkmode : darkmode,
        headLinkTo : headLinkTo,
        dadbugFix : dadbugFix,
        attendance : attendance,
        defaultInputName : defaultInputName,
        undisplayFutureTaskDays : undisplayFutureTaskDays,
        exportIcs : exportIcs,
        highlightDeadline : highlightDeadline,
        pastSurvey : pastSurvey,
        addSurveyListButton : addSurveyListButton,
        adjustTimetableData : {
            eraseSat : eraseSat,
            erase6 : erase6,
            erase7 : erase7,
            dispClassroom : dispClassroom,
            timetableCentering : timetableCentering
        },
        remomveDirectLink : remomveDirectLink,
        popupOverflowMode : popupOverflowMode,
        popupBadge : popupBadge,
        popupTasksTab : popupTasksTab,
        popupTasksLinks : popupTasksLinks,
        popupUncountFutureTaskDays : popupUncountFutureTaskDays,
        popupDarkenUncountedTasks : popupDarkenUncountedTasks,
        maxWidthPx:{
            subj: subjWidth,
            lms: lmsWidth,
            task: taskWidth
        },
        subjectList : subjectList,
        materialTop : materialTop,
        materialHide : materialHide,
        reportHide : reportHide,
        testHide : testHide,
        modifyCoursePageTitle: modifyCoursePageTitle,
        materialTopDetail : materialTopDetail,
        materialHideDetail : materialHideDetail,
        reportHideDetail : reportHideDetail,
        testHideDetail : testHideDetail,
        addTaskInPage : addTaskInPage,
        autoTaskInput : autoTaskInput,
        addTaskTimeButton : addTaskTimeButton,
        addTaskDate : addTaskDate,
        addTaskTime : addTaskTime,
        enterAttendance : enterAttendance,
        gasURL: gasURL,
        gasCal: gasCal,
        gasTodo : gasTodo,
        urlToLink : urlToLink,
        downloadFileBundle: downloadFileBundle,
        displaySubtimetableWhileExam: displaySubtimetableWhileExam
    }, function() {
        // Update status to let user know options were saved.
        console.log("settings changed");
    });
    }

    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get(defaultOptions, function(items) {
        document.getElementById('year').value = items.year;
        document.getElementById('fac').value = items.fac;
        document.getElementById('login_auto').checked = items.clickLoginBtn;
        document.getElementById('adfs_auto').checked = items.adfsSkip;
        document.getElementById('menu_exit_auto').checked = items.exitSidemenu;
        document.getElementById('submenu').checked = items.styleSidemenu;
        document.getElementById('exam_img').checked = items.styleExamImg;
        document.getElementById('exam_btn').checked = items.styleExamBtn;
        document.getElementById('additional_lms').checked = items.addSubTimetable;
        document.getElementById('changeReportBtn').checked = items.changeReportBtn;
        document.getElementById('styleDialog').checked = items.styleDialog;
        document.getElementById('hideCompletedReports').checked = items.hideCompletedReports;
        document.getElementById('syll_btn').checked = items.syllBtn;
        document.getElementById('changeLogout').checked = items.changeLogout;
        document.getElementById('setMaxWidth').checked = items.setMaxWidth;
        document.getElementById('pageTopBtn').checked = items.pageTopBtn;
        document.getElementById('mouseDown').checked = items.mouseDown;
        document.getElementById('tasklistDisplay').checked = items.tasklistDisplay;
        document.getElementById('styleNowPeriod').checked = items.styleNowPeriod;
        document.getElementById('subjWidth').value = items.maxWidthPx.subj;
        document.getElementById('lmsWidth').value = items.maxWidthPx.lms;
        document.getElementById('taskWidth').value = items.maxWidthPx.task;
        document.getElementById('displayName').checked = items.displayName;
        document.getElementById('layoutHome').checked = items.layoutHome;
        document.getElementById('nickname').value = items.nickname;
        document.getElementById('timesBtnValue').value = items.timesBtnValue;
        document.getElementById('sliderBarMax').value = items.sliderBarMax;
        document.getElementById('tasklistTranslate').value = items.tasklistTranslate;
        document.getElementById('fixHeadShadow').checked = items.fixHeadShadow;
        document.getElementById('deadlinemode').value = items.deadlinemode;
        document.getElementById('notepadMode').checked = items.notepadMode;
        document.getElementById('ddSubmission').checked = items.ddSubmission;
        document.getElementById('updateClear').checked = items.updateClear;
        document.getElementById('maxTaskDisplay').value = items.maxTaskDisplay;
        document.getElementById('darkmode').value = items.darkmode;
        document.getElementById('eraseSat').checked = items.adjustTimetableData.eraseSat;
        document.getElementById('erase6').checked = items.adjustTimetableData.erase6;
        document.getElementById('erase7').checked = items.adjustTimetableData.erase7;
        document.getElementById('dispClassroom').checked = items.adjustTimetableData.dispClassroom;
        document.getElementById('timetableCentering').checked = items.adjustTimetableData.timetableCentering;
        document.getElementById('remomveDirectLink').checked = items.remomveDirectLink;
        document.getElementById('headLinkTo').value = items.headLinkTo;
        document.getElementById('dadbugFix').checked = items.dadbugFix;
        document.getElementById('attendance').value = items.attendance;
        document.getElementById('defaultInputName').value = items.defaultInputName;
        document.getElementById('undisplayFutureTaskDays').value = items.undisplayFutureTaskDays;
        document.getElementById('exportIcs').checked = items.exportIcs;
        document.getElementById('highlightDeadline').checked = items.highlightDeadline;
        document.getElementById('pastSurvey').checked = items.pastSurvey;
        document.getElementById('addSurveyListButton').checked = items.addSurveyListButton;
        document.getElementById('subjectListNum').textContent = items.subjectList;
        document.getElementById('materialTop').checked = items.materialTop;
        document.getElementById('materialHide').checked = items.materialHide;
        document.getElementById('reportHide').checked = items.reportHide;
        document.getElementById('testHide').checked = items.testHide;
        document.getElementById('modifyCoursePageTitle').checked = items.modifyCoursePageTitle;
        document.getElementById('materialTopDetail').value = items.materialTopDetail;
        document.getElementById('materialHideDetail').value = items.materialHideDetail;
        document.getElementById('reportHideDetail').value = items.reportHideDetail;
        document.getElementById('testHideDetail').value = items.testHideDetail;
        document.getElementById('popupOverflowMode').value = items.popupOverflowMode;
        document.getElementById('popupBadge').checked = items.popupBadge;
        document.getElementById('popupTasksTab').checked = items.popupTasksTab;
        document.getElementById('popupTasksLinks').checked = items.popupTasksLinks;
        document.getElementById('popupUncountFutureTaskDays').value = items.popupUncountFutureTaskDays;
        document.getElementById('popupDarkenUncountedTasks').checked = items.popupDarkenUncountedTasks;
        document.getElementById('addTaskInPage').checked = items.addTaskInPage;
        document.getElementById('autoTaskInput').checked = items.autoTaskInput;
        document.getElementById('addTaskTimeButton').checked = items.addTaskTimeButton;
        [...Array(9)].forEach((_, i) => document.getElementById('addTask-time'+(i+1)).checked = items.addTaskTime[i]);
        [...Array(9)].forEach((_, i) => document.getElementById('addTask-date'+(i+1)).checked = items.addTaskDate[i]);
        document.getElementById('enterAttendance').checked = items.enterAttendance;
        document.getElementById('gasURL').value = items.gasURL;
        document.getElementById('gasCal').checked = items.gasCal;
        document.getElementById('gasTodo').checked = items.gasTodo;
        document.getElementById('urlToLink').checked = items.urlToLink;
        document.getElementById('downloadFileBundle').checked = items.downloadFileBundle;
        document.getElementById('displaySubtimetableWhileExam').checked = items.displaySubtimetableWhileExam;
        restoreSubject(items.subjectList);
    });

    }
    document.addEventListener('DOMContentLoaded', restore_options);
    //チェックボックスが更新されたら保存
    const $checkboxList= document.querySelectorAll("input[type='checkbox']");
    for(const $checkbox of $checkboxList){
        $checkbox.addEventListener('change', save_options);
    }
    //プルダウンメニューが更新されたら保存
    const $menuList= document.querySelectorAll("select");
    for(const $menu of $menuList){
        $menu.addEventListener('change', save_options);
    }
    //保存ボタンが押されたら保存
    const $saveBtnList = document.querySelectorAll(".saveBtn");
    for(const $saveBtn of $saveBtnList){
        $saveBtn.addEventListener('click', function(){
            save_options();
            $saveBtn.insertAdjacentHTML("afterEnd",`
                <div class="savelog">保存されました</div>
            `);
            setTimeout(function(){
            document.getElementsByClassName("savelog")[0].remove();
            },1000);
        });
    }
    //バージョンの挿入
        document.getElementById("version").insertAdjacentHTML("beforeEnd",` ver${chrome.runtime.getManifest().version}`);
    //デモ時間割
    document.getElementById("erase7").addEventListener("change", function(){
        ttErase7();
    });
    document.getElementById("erase6").addEventListener("change", function(){
        ttErase6();
    });
    document.getElementById("eraseSat").addEventListener("change", function(){
        ttEraseSat();
    });
    ttErase7();
    ttErase6();
    ttEraseSat();
    //functions
    function ttErase7(){
        if(document.getElementById("erase7").checked){
            document.getElementsByClassName("tttr")[6].classList.add("hiddens");
        }else{
            document.getElementsByClassName("tttr")[6].classList.remove("hiddens");
        }
    }
    function ttErase6(){
        if(document.getElementById("erase6").checked){
            document.getElementsByClassName("tttr")[5].classList.add("hiddens");
        }else{
            document.getElementsByClassName("tttr")[5].classList.remove("hiddens");
        }
    }
    function ttEraseSat(){
        if(document.getElementById("eraseSat").checked){
            for(const ttSat of document.getElementsByClassName("ttSat")){
                ttSat.classList.add("hiddens");
            }
        }else{
            for(const ttSat of document.getElementsByClassName("ttSat")){
                ttSat.classList.remove("hiddens");
            }
        }
    }
    //初期化
    document.getElementById("init").addEventListener("click", function(){
        if(window.confirm("本当に初期化しますか？\nこの操作は元に戻せません")){
            chrome.storage.local.set(
                defaultOptions,function(){
                    chrome.storage.local.clear();
                    window.alert("初期化しました");
                    location.reload();
                }
            )
        }
    });
    //課題非表示リセット
    document.getElementById("resetHiddenTasks").addEventListener("click",function(){
        chrome.storage.local.remove('hiddenTasks',function(){
            window.alert("非表示の課題をリセットしました");
        });
    });
    //科目ページの要素並び替え
    function restoreSubject(items) {
        let subjects = [
        `<li id="subjectElement1" draggable="true"><div class="list-radius">1.担当教員へのメッセージ</div></li>`,
        `<li id="subjectElement2" draggable="true"><div class="list-radius">2.お知らせ</div></li>`,
        `<li id="subjectElement3" draggable="true"><div class="list-radius">3.課題</div></li>`,
        `<li id="subjectElement4" draggable="true"><div class="list-radius">4.教材</div></li>`,
        `<li id="subjectElement5" draggable="true"><div class="list-radius">5.テスト</div></li>`,
        `<li id="subjectElement6" draggable="true"><div class="list-radius">6.アンケート</div></li>`,
        `<li id="subjectElement7" draggable="true"><div class="list-radius">7.ディスカッション</div></li>`,
        `<li id="subjectElement8" draggable="true"><div class="list-radius">8.出席</div></li>`
        ];
        let subjectsEnd = `<li style="display: none;"></li>`;
        let numbers = [...items];
        let targetul = document.getElementById("subjectList");
        for (const number of numbers){
            targetul.insertAdjacentHTML('beforeend',subjects[Number(number)-1]);
        }
        targetul.insertAdjacentHTML('beforeend',subjectsEnd);

        document.querySelectorAll('#subjectList li').forEach (elm => {
            elm.ondragstart = function () {
                event.dataTransfer.setData('text/plain', event.target.id);
            };
            elm.ondragover = function () {
                event.preventDefault();
                let rect = this.getBoundingClientRect();
                if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
                    this.style.borderTop = '2px solid blue';
                    this.style.borderBottom = '';
                } else {
                    this.style.borderTop = '';
                    this.style.borderBottom = '2px solid blue';
                }
            };
            elm.ondragleave = function () {
                this.style.borderTop = '';
                this.style.borderBottom = '';
            };
            elm.ondrop = function () {
                event.preventDefault();
                let id = event.dataTransfer.getData('text/plain');
                let elm_drag = document.getElementById(id);

                let rect = this.getBoundingClientRect();
                if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
                    this.parentNode.insertBefore(elm_drag, this);
                } else {
                    this.parentNode.insertBefore(elm_drag, this.nextSibling);
                }
                this.style.borderTop = '';
                this.style.borderBottom = '';
                let li = document.querySelectorAll("#subjectList li");
                let num = document.querySelector("#subjectListNum");
                num.textContent = "";
                for (const textdiv of li){
                    num.textContent+=textdiv.id.replace("subjectElement","");
                }
                save_options();
            };
        });
    }

    //
    const IOOption = {...defaultOptions};
    IOOption["mdNotepadData"] = [];
    //設定エクスポート
    document.getElementById("export-json").addEventListener("click",function(){
        chrome.storage.local.get(IOOption,function(items){
            console.log(items);
                //ファイル名の指定
                const now = new Date();
                let file_name   = `ScombZ_Utilities_${now.getMonth()+1}_${now.getDate()}_${now.getHours()}_${now.getMinutes()}.json`;

                //CSVのバイナリデータを作る
                let blob        = new Blob([JSON.stringify(items,null,"\t")], {type: "text/json"});
                let uri         = URL.createObjectURL(blob);

                //リンクタグを作る
                let link        = document.createElement("a");
                link.download   = file_name;
                link.href       = uri;

                //作ったリンクタグをクリックさせる
                document.body.appendChild(link);
                link.click();

                //クリックしたら即リンクタグを消す
                document.body.removeChild(link);
                link = null;

        })
    });
    //設定インポート
    {
        let fileInput = document.getElementById('import-json');
        let fileReader = new FileReader();

        // ファイル変更時イベント
        fileInput.onchange =  () => {
            let file = fileInput.files[0];
            fileReader.readAsText(file, "UTF-8");
        };
        // ファイル読み込み時
        fileReader.onload = () => {
            if(confirm("外部設定ファイルを読み込みますか？")){
                try {
                    console.log(fileReader.result);
                    const readData = JSON.parse(fileReader.result);
                    console.log(readData);
                    chrome.storage.local.get(IOOption,function(items){
                        const result = deepmerge(readData,items);
                        console.log(result);
                        chrome.storage.local.set(result,function(){
                            alert("読み込みました。");
                            location.reload();
                        })
                    });
                } catch (e) {
                    return false;
                }
            }
            return true;
        }
    }

    //自作課題の非表示を削除する
    //addSubTimetable.jsの処理をパクってます
    {
        chrome.storage.local.get({
            hiddenTasks:[],             //非表示の課題
            manualTasklist:[],      //自作課題
            maxTaskDisplay:15,          //課題の最大表示数
            specialSubj:0,
            quarterCount:0,
            deadlinemode:"absolute-relative",

        },function(items){
            const $tasklistObj = items.manualTasklist;

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
                if(items.quarterCount > 0){
                    timetableHeight += 2*items.quarterCount;
                    timetableminHeight += 30*items.quarterCount;
                }
            }

            let kadaiListHTML = "";
            if(!$tasklistObj[0]){
                kadaiListHTML +=`<div class="subk-line">非表示にした自作課題は存在しないか、取得できません。</div>`;
            }else{
                for(let i=0,j=0; $tasklistObj[i] && i<items.maxTaskDisplay +j; i++){
                    //非表示ではないものをスキップ
                    if(!items.hiddenTasks.includes($tasklistObj[i].id)){
                        j++;
                        continue;
                    }

                    kadaiListHTML += `
                    <div class="subk-line" title="${$tasklistObj[i].title}">
                        <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link">${$tasklistObj[i].course}</a></div></div>
                        <div class="subk-column"><div class="subk-link"><a class="subk-link"><span class="subk-link">${$tasklistObj[i].title}</span></a></div></div>
                        <div class="subk-deadline"><div class="subk-deadline-time"></div><a class="subk-complete-remove-btn subk-remove-btn" data-value="${$tasklistObj[i].id}"></a></div>
                    </div>`;
                }
            }

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
                非表示にした自作課題一覧
                </div>
                ${kadaiListHTML}
            </div>
            </div>
            `;

            if(document.getElementById('delete-Task')){
                document.getElementById('delete-Task').insertAdjacentHTML('beforeend',kadaiHTML);
            }

            //削除ボタン
            const rmBtns = document.getElementsByClassName("subk-complete-remove-btn");
            console.log(rmBtns.length);
            for(const rmBtn of rmBtns){
                rmBtn.addEventListener("click",function(){
                    console.log("clicked");
                    if(window.confirm("この項目を完全に削除しますか？")){
                        chrome.storage.local.get({
                            hiddenTasks: [],
                            manualTasklist: []
                        },function(rmitem){
                            const hiddenTasks = rmitem.hiddenTasks;
                            const manualTasklist = rmitem.manualTasklist;
                            const newhiddenTasks = hiddenTasks.filter(n => n !== rmBtn.getAttribute("data-value"));
                            const newmanualTasklist = manualTasklist.filter(n => n.id !== rmBtn.getAttribute("data-value"));
                            chrome.storage.local.set({
                                hiddenTasks: newhiddenTasks,
                                manualTasklist: newmanualTasklist
                            },
                                function(){
                                    rmBtn.parentNode.parentNode.remove();
                            });
                        });
                    }
                });
            }

        });
    }
