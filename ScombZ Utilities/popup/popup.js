//設定ページへ
const optBtns = document.querySelectorAll('.go-to-options');
for(const optBtn of optBtns) {
    optBtn.addEventListener('click', function() {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('options.html'));
        }
});
}
/* -------- ポップアップ時間割 -------- */
const terms = [
    '9:00~10:40',
    '10:50~12:30',
    '13:20~15:00',
    '15:10~16:50',
    '17:00~18:40',
    '18:50~20:30',
    '20:40~22:20'
]

const weekdays = [
    '月',
    '火',
    '水',
    '木',
    '金',
    '土'
]

function escapeHtml(str){
    return str.replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/`/g, '&#x60;')
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

function initPopupTimetable(){
    chrome.storage.local.get({
        timetableData: null,
        adjustTimetableData: {},
        TaskGetTime: 1,
        tasklistData: [],
        surveyListData: [],
        manualTasklist: [],
        deadlinemode: 'absolute-relative',
        maxTaskDisplay: 15,
        hiddenTasks: [],
        undisplayFutureTaskDays: 365,
        highlightDeadline : true,
    }, function(item){
        if(item.timetableData === null){
            console.log('時間割情報が存在しません');
            return;
        }
        renderWeekTimetable(item, (new Date()).getDay());
    });
    return;
}

function renderWeekTimetable(utilsStorageData, weekday){
    const target = document.getElementById('timetable');
    target.innerHTML = '';

    if(1 <= weekday && weekday <= (utilsStorageData.adjustTimetableData.eraseSat ? 5 : 6)){
        target.appendChild(_createWeekdayTabsElement(utilsStorageData, weekday));
        target.appendChild(_createTimetableElement(utilsStorageData, weekday));
        return;
    }else{
        target.appendChild(_createWeekdayTabsElement(utilsStorageData, 0));
        target.appendChild(_createTaskListElement(utilsStorageData));
        return;       
    }
}

/* --- renderWeekTimetable()専用 --- */
function _createWeekdayTabsElement(utilsStorageData, weekday){
    const options = {
        eraseSat: utilsStorageData.adjustTimetableData.eraseSat,        
    }

    let weekdayTabsContainer = document.createElement('div');
    weekdayTabsContainer.id = 'weekdayTabsContainer';
    for(let i = 1; i < 7; i++){
        if (i === 6 && options.eraseSat) continue;

        let weekdayTabElement = document.createElement('div');
        weekdayTabElement.innerText = weekdays[i - 1];
        if(i === weekday){
            weekdayTabElement.classList = 'weekday-tab active';
        }else{
            weekdayTabElement.classList = 'weekday-tab';
            weekdayTabElement.addEventListener('click', function(){
                renderWeekTimetable(utilsStorageData, i);
            });
        }
        weekdayTabsContainer.appendChild(weekdayTabElement);
    }

    let taskTabElement = document.createElement('div');
    taskTabElement.innerText = '課題';
    taskTabElement.classList = weekday === 0 ? 'weekday-tab task-tab active' : 'weekday-tab task-tab';
    taskTabElement.addEventListener('click', function(){
        renderWeekTimetable(utilsStorageData, 0);
    });

    let taskBadgeElement = document.createElement('span');
    taskBadgeElement.innerText = removeHiddenTasks(getMergedTaskList(utilsStorageData), utilsStorageData).length;
    taskBadgeElement.classList = 'badge';

    taskTabElement.appendChild(taskBadgeElement);
    weekdayTabsContainer.appendChild(taskTabElement);

    return weekdayTabsContainer;
}

function _createTimetableElement(utilsStorageData, weekday){
    const timetableData = utilsStorageData.timetableData;
    const options = {
        erase6: utilsStorageData.adjustTimetableData.erase6,
        erase7: utilsStorageData.adjustTimetableData.erase7,
    }

    let weekTimetableData = [[], [], [], [], [], [], []];
    let intensiveSubjectsData = [];
    for(let i = 0; i < timetableData.length; i++){
        if(timetableData[i].day === weekday){
            weekTimetableData[timetableData[i].time - 1].push(timetableData[i]);
        }else if(timetableData[i].day === -1){
            intensiveSubjectsData.push(timetableData[i]);
        }
    }

    //  通常形態の科目
    let timetableElement = document.createElement('div');
    timetableElement.classList = 'timetable-body';
    for(let i = 0; i < 7; i++){
        if(i === 5 && options.erase6) continue;
        if(i === 6 && options.erase7) continue;

        let rowElement = document.createElement('div');
        rowElement.classList = 'timetable-row';
        
        let timeDataElement = document.createElement('div');
        timeDataElement.classList = 'timetable-time';
        timeDataElement.innerHTML = `<span class='time-number'>${i + 1}限</span><span class='time-term'>${terms[i]}</span>`;
        rowElement.appendChild(timeDataElement);
    
        let subjectsContainerElement = document.createElement('div');
        subjectsContainerElement.classList = 'subjects-container';
        if(weekTimetableData.length > 0){
            let isQuarter = (weekTimetableData[i].length === 2);

            for(let j = 0; j < weekTimetableData[i].length; j++){
                let subject = weekTimetableData[i][j];
                let subjectDataElement = document.createElement('div');
                subjectDataElement.classList = isQuarter ? 'subject quarter' : 'subject';
                subjectDataElement.innerHTML = `<div class='subject-name'><a href='https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${subject.id}' target='_blank' rel='noopener noreferrer'>${escapeHtml(subject.name)}</a><span class='subject-classroom'>${escapeHtml(subject.classroom ? ' - ' + subject.classroom : '')}</span></div>`;
                subjectsContainerElement.appendChild(subjectDataElement);
            }
        }
        rowElement.appendChild(subjectsContainerElement);

        timetableElement.appendChild(rowElement);
    }

    //  その他（曜日時間不定）の科目
    if(intensiveSubjectsData.length > 0){
        let rowElement = document.createElement('div');
        rowElement.classList = 'timetable-row intensive-subjects';

        let timeDataElement = document.createElement('div');
        timeDataElement.classList = 'timetable-time';
        timeDataElement.innerHTML = `<span class='time-number'>その他</span><span class='time-term'>曜日時限不定など</span>`;
        rowElement.appendChild(timeDataElement);

        let subjectsContainerElement = document.createElement('div');
        subjectsContainerElement.classList = 'subjects-container';
        intensiveSubjectsData.forEach(subject => {
            let subjectDataElement = document.createElement('div');
            subjectDataElement.classList ='subject';
            subjectDataElement.innerHTML = `<div class='subject-name'><a href='https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${subject.id}' target='_blank' rel='noopener noreferrer'>${escapeHtml(subject.name)}</a><span class='subject-classroom'>${escapeHtml(subject.classroom ? ' - ' + subject.classroom : '')}</span></div>`;
            subjectsContainerElement.appendChild(subjectDataElement);
        });
        rowElement.appendChild(subjectsContainerElement);

        timetableElement.appendChild(rowElement);
    }

    return timetableElement;
}

function _createTaskListElement(utilsStorageData){
    const taskList = getMergedTaskList(utilsStorageData);
    const nowUnix = Date.now();
    const lastgettime =  `${new Date(utilsStorageData.TaskGetTime).toLocaleDateString('ja-JP')} ${new Date(utilsStorageData.TaskGetTime).toLocaleTimeString('ja-JP').slice(0,-3)}`;

    let taskListElement = document.createElement('div');
    taskListElement.classList = 'tasklist-body';

    if(!taskList[0]){
        taskListElement.innerHTML = '<span class="tasklist-msg">未提出課題は存在しないか、取得できません。</span>';
        return taskListElement;
    }

    for(let i=0,j=0; taskList[i] && i<utilsStorageData.maxTaskDisplay -j; i++){
        //先の課題は表示しない
        if((Number(Date.parse(taskList[i].deadline)) - Number(nowUnix))/60000 > 60*24*(1+Number(utilsStorageData.undisplayFutureTaskDays))){
            break;
        }
        //非表示に設定されているものはスキップ
        if(utilsStorageData.hiddenTasks.includes(taskList[i].id)){
            j++;
            continue;
        }
        if(taskList[i].data === null && !taskList[i+1]){
            taskListElement.innerHTML = `<span class="tasklist-msg">未提出課題は存在しません。</span>`;
            break;
        }
        if(taskList[i].data === null)continue;
        //絶対表示
        deadline = (taskList[i].deadline.length > 17) ? taskList[i].deadline : taskList[i].deadline+":00";
        if(utilsStorageData.deadlinemode.includes('absoluteShort'))
            deadline = taskList[i].deadline.slice(6,-3);
        //相対表示
        if(utilsStorageData.deadlinemode.includes('relative') && taskList[i].deadline != "" ){
            if(utilsStorageData.deadlinemode == 'relative'){
                const nowUnix = Date.now();
                const relativeDeadline = (Number(Date.parse(taskList[i].deadline)) - Number(nowUnix))/60000;
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
                const relativeDeadline = (Number(Date.parse(taskList[i].deadline)) - Number(nowUnix))/60000;
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
        if(utilsStorageData.highlightDeadline === true){
            highlightMark = "highlightMark";
            const relativeDeadline = (Number(Date.parse(taskList[i].deadline)) - Number(nowUnix))/60000;
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
        if(taskList[i].id.includes("manual")){
            subjlink = (taskList[i].subjlink.includes("http")) ? taskList[i].subjlink : "https://"+taskList[i].subjlink;
            tasklink = (taskList[i].tasklink.includes("http")) ? taskList[i].tasklink : "https://"+taskList[i].tasklink;
        }else{
            subjlink = taskList[i].link;
            tasklink = taskList[i].link;
            if(subjlink === undefined) {
                subjlink = taskList[i].url;
                tasklink = taskList[i].suvurl || subjlink+"#questionnaire";
            }else{
                subjlink = String((subjlink.includes("/report/"))?subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&reportId')):subjlink.slice(subjlink.indexOf('idnumber=')+9,subjlink.indexOf('&examinationId')));
                subjlink = "https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+subjlink;
            }
        }

        let rowElement = document.createElement('div');
        rowElement.classList = 'task-row';
        rowElement.innerHTML = `
            <div class='task-data'>
                <a class="task-subject-name" href="${subjlink}" target="_blank" rel="noopener noreferrer">${taskList[i].course}</a>
                <a class="task-name" href="${tasklink}" target="_blank" rel="noopener noreferrer">${taskList[i].title}</a>
            </div>
            <div class='task-data'><span class='task-deadline'>${deadline}</span></div>

        `;

        taskListElement.appendChild(rowElement);

        // kadaiListHTML += `
        // <div class="subk-line ${highlightMark}">
        //     <div class="subk-column"><div class="subk-subjname"><a class="subk-subjname-link" href="${subjlink}">${taskList[i].course}</a></div></div>
        //     <div class="subk-column"><div class="subk-link"><a class="subk-link" href="${tasklink}"><span class="subk-link">${taskList[i].title}</span></a></div></div>
        //     <div class="subk-deadline"><div class="subk-deadline-time">${deadline}</div><a class="subk-remove-btn" data-value="${taskList[i].id}" href="javascript:void(0);"></a></div>
        // </div>`;
    }

    let taskListFooterElement = document.createElement('div');
    taskListFooterElement.classList = 'task-row task-footer';
    
    let taskLastGetTimeElement = document.createElement('a');
    taskLastGetTimeElement.classList = 'task-get-time';
    taskLastGetTimeElement.innerText = `最終更新:${lastgettime}`;
    taskLastGetTimeElement.href = '#';

    taskListFooterElement.appendChild(taskLastGetTimeElement);
    taskListElement.appendChild(taskListFooterElement);

    return taskListElement;
}
/* --------------------------------- */

initPopupTimetable();
