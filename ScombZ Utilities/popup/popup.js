//設定ページへ
document.querySelector('#go-to-options').addEventListener('click', function() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

/* -------- ポップアップ時間割 -------- */
const terms = [
    '9:00~10:40',
    '10:50~12:30',
    '13:20~15:00',
    '15:10~16:50',
    '17:00~18:40',
    '18:50~20:30'
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
        timetableData: null
    }, function(item){
        if(item.timetableData === null){
            console.log('時間割情報が存在しません');
            return;
        }
        const timetableData = JSON.parse(decodeURIComponent(item.timetableData));
        renderWeekTimetable(timetableData, (new Date()).getDay());
    });
    return;
}

function renderWeekTimetable(timetableData, weekday){
    if(weekday < 1 || 6 < weekday){
        return renderWeekTimetable(timetableData, 1);
    }

    const target = document.getElementById('timetable');
    target.innerHTML = '';

    let weekdayTabsContainer = document.createElement('div');
    weekdayTabsContainer.id = 'weekdayTabsContainer';
    for(let i = 1; i < 7; i++){
        let weekdayTabElement = document.createElement('div');
        weekdayTabElement.innerText = weekdays[i - 1];
        if(i === weekday){
            weekdayTabElement.classList = 'weekday-tab active';
        }else{
            weekdayTabElement.classList = 'weekday-tab';
            weekdayTabElement.addEventListener('click', function(){
                renderWeekTimetable(timetableData, i);
            });
        }
        weekdayTabsContainer.appendChild(weekdayTabElement);
    }
    target.appendChild(weekdayTabsContainer)

    let weekTimetableData = [[], [], [], [], [], []];
    let intensiveSubjectsData = [];
    for(let i = 0; i < timetableData.length; i++){
        if(timetableData[i].day === weekday){
            weekTimetableData[timetableData[i].time - 1].push(timetableData[i]);
        }else if(timetableData[i].day === -1){
            intensiveSubjectsData.push(timetableData[i]);
        }
    }

    let timetableElement = document.createElement('div');
    timetableElement.classList = 'timetable-body';
    for(let i = 0; i < 6; i++){
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
                subjectDataElement.innerHTML = `<div class='subject-name'><a href='https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${subject.id}' target='_blank' rel='noopener noreferrer'>${escapeHtml(subject.name)}</div>`
                subjectsContainerElement.appendChild(subjectDataElement);
            }
        }
        rowElement.appendChild(subjectsContainerElement);

        timetableElement.appendChild(rowElement);
    }

    target.appendChild(timetableElement);
    return;
}

initPopupTimetable();
