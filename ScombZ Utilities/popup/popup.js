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

function initPopupTimetable(){
    chrome.storage.local.get({
        timetableData: null,
        adjustTimetableData: {},
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
    if(weekday < 1 || 6 < weekday){
        return renderWeekTimetable(utilsStorageData, 1);
    }

    const target = document.getElementById('timetable');
    target.innerHTML = '';

    target.appendChild(_createWeekdayTabsElement(utilsStorageData, weekday));
    target.appendChild(_createTimetableElement(utilsStorageData, weekday));

    return;
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
    taskTabElement.classList = 'weekday-tab task-tab';

    let taskBadgeElement = document.createElement('span');
    taskBadgeElement.innerText = '0';   //  TODO: 課題の個数を代入するようにする
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
/* --------------------------------- */

initPopupTimetable();
