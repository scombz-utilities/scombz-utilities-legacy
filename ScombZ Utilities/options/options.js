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
    const hideCompletedReports = document.getElementById(
        'hideCompletedReports'
    ).checked;
    const changeLogout = document.getElementById('changeLogout').checked;
    const setMaxWidth = document.getElementById('setMaxWidth').checked;
    const pageTopBtn = document.getElementById('pageTopBtn').checked;
    const mouseDown = document.getElementById('mouseDown').checked;
    const tasklistDisplay = document.getElementById('tasklistDisplay').checked;
    const styleNowPeriod = document.getElementById('styleNowPeriod').checked;
    const displayName = document.getElementById('displayName').checked;
    const subjWidth = document.getElementById('subjWidth').value;
    const lmsWidth = document.getElementById('lmsWidth').value;
    const layoutHome = document.getElementById('layoutHome').checked;
    const nickname = document.getElementById('nickname').value;
    const timesBtnValue = document.getElementById('timesBtnValue').value;
    const sliderBarMax = document.getElementById('sliderBarMax').value;
    const tasklistTranslate = document.getElementById('tasklistTranslate').value;
    const fixHeadShadow = document.getElementById('fixHeadShadow').checked;
    const deadlinemode = document.getElementById('deadlinemode').value;
    chrome.storage.local.set(
        {
            year: year,
            fac: fac,
            clickLoginBtn: login_auto,
            adfsSkip: adfs_auto,
            exitSidemenu: menu_exit_auto,
            styleSidemenu: submenu,
            styleExamBtn: examBtn,
            styleExamImg: examImg,
            addSubTimetable: additional_lms,
            changeReportBtn: changeReportBtn,
            styleDialog: styleDialog,
            hideCompletedReports: hideCompletedReports,
            syllBtn: syllBtn,
            changeLogout: changeLogout,
            setMaxWidth: setMaxWidth,
            pageTopBtn: pageTopBtn,
            mouseDown: mouseDown,
            tasklistDisplay: tasklistDisplay,
            styleNowPeriod: styleNowPeriod,
            displayName: displayName,
            layoutHome: layoutHome,
            nickname: nickname,
            timesBtnValue: timesBtnValue,
            sliderBarMax: sliderBarMax,
            tasklistTranslate: tasklistTranslate,
            fixHeadShadow: fixHeadShadow,
            deadlinemode: deadlinemode,
            maxWidthPx: {
                subj: subjWidth,
                lms: lmsWidth
            }
        },
        function () {
            // Update status to let user know options were saved.
            console.log('settings changed');
        }
    );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get(
        {
            year: 'null',
            fac: 'null',
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
            pageTopBtn: true,
            mouseDown: true,
            tasklistDisplay: true,
            styleNowPeriod: true,
            displayName: false,
            layoutHome: true,
            nickname: '',
            timesBtnValue: 'mode1',
            sliderBarMax: 600,
            tasklistTranslate: 0,
            fixHeadShadow: true,
            deadlinemode: 'relative-absoluteLong',
            maxWidthPx: {
                subj: 1280,
                lms: 1280
            }
        },
        function (items) {
            document.getElementById('year').value = items.year;
            document.getElementById('fac').value = items.fac;
            document.getElementById('login_auto').checked = items.clickLoginBtn;
            document.getElementById('adfs_auto').checked = items.adfsSkip;
            document.getElementById('menu_exit_auto').checked =
                items.exitSidemenu;
            document.getElementById('submenu').checked = items.styleSidemenu;
            document.getElementById('exam_img').checked = items.styleExamImg;
            document.getElementById('exam_btn').checked = items.styleExamBtn;
            document.getElementById('additional_lms').checked =
                items.addSubTimetable;
            document.getElementById('changeReportBtn').checked =
                items.changeReportBtn;
            document.getElementById('styleDialog').checked = items.styleDialog;
            document.getElementById('hideCompletedReports').checked =
                items.hideCompletedReports;
            document.getElementById('syll_btn').checked = items.syllBtn;
            document.getElementById('changeLogout').checked =
                items.changeLogout;
            document.getElementById('setMaxWidth').checked = items.setMaxWidth;
            document.getElementById('pageTopBtn').checked = items.pageTopBtn;
            document.getElementById('mouseDown').checked = items.mouseDown;
            document.getElementById('tasklistDisplay').checked =
                items.tasklistDisplay;
            document.getElementById('styleNowPeriod').checked =
                items.styleNowPeriod;
            document.getElementById('subjWidth').value = items.maxWidthPx.subj;
            document.getElementById('lmsWidth').value = items.maxWidthPx.lms;
            document.getElementById('displayName').checked = items.displayName;
            document.getElementById('layoutHome').checked = items.layoutHome;
            document.getElementById('nickname').value = items.nickname;
            document.getElementById('timesBtnValue').value =
                items.timesBtnValue;
            document.getElementById('sliderBarMax').value = items.sliderBarMax;
            document.getElementById('tasklistTranslate').value =
                items.tasklistTranslate;
            document.getElementById('fixHeadShadow').checked =
                items.fixHeadShadow;
            document.getElementById('deadlinemode').value = items.deadlinemode;
        }
    );
}
document.addEventListener('DOMContentLoaded', restore_options);
// チェックボックスが更新されたら保存
const $checkboxList = document.querySelectorAll("input[type='checkbox']");
for (const $checkbox of $checkboxList) {
    $checkbox.addEventListener('change', save_options);
}
// プルダウンメニューが更新されたら保存
const $menuList = document.querySelectorAll('select');
for (const $menu of $menuList) {
    $menu.addEventListener('change', save_options);
}
// 保存ボタンが押されたら保存
const $saveBtnList = document.querySelectorAll('.saveBtn');
for (const $saveBtn of $saveBtnList) {
    $saveBtn.addEventListener('click', function () {
        save_options();
        $saveBtn.insertAdjacentHTML(
            'afterEnd',
            `
                <div class="savelog">保存されました</div>
            `
        );
        setTimeout(function () {
            document.getElementsByClassName('savelog')[0].remove();
        }, 1000);
    });
}
