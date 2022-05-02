// Saves options to chrome.storage
function save_options() {
    var year = document.getElementById('year').value;
    var fac = document.getElementById('fac').value;
    var login_auto = document.getElementById('login_auto').checked;
    var adfs_auto = document.getElementById('adfs_auto').checked;
    var menu_exit_auto = document.getElementById('menu_exit_auto').checked;
    var submenu = document.getElementById('submenu').checked;
    var exam = document.getElementById('exam').checked;
    var additional_lms = document.getElementById('additional_lms').checked;
    var changeReportBtn = document.getElementById('changeReportBtn').checked;
    var styleDialog = document.getElementById('styleDialog').checked;
    var syllBtn = document.getElementById('syll_btn').checked;
    var hideCompletedReports = document.getElementById('hideCompletedReports').checked;
    var changeLogout = document.getElementById('changeLogout').checked;
    var setMaxWidth = document.getElementById('setMaxWidth').checked;
    var pageTopBtn = document.getElementById('pageTopBtn').checked;
    chrome.storage.local.set({
        year : year ,
        fac : fac ,
        clickLoginBtn : login_auto,
        adfsSkip : adfs_auto,
        exitSidemenu : menu_exit_auto,
        styleSidemenu : submenu,
        styleExam : exam,
        addSubTimetable : additional_lms,
        changeReportBtn : changeReportBtn,
        styleDialog : styleDialog,
        hideCompletedReports : hideCompletedReports,
        syllBtn : syllBtn,
        changeLogout : changeLogout,
        setMaxWidth : setMaxWidth,
        pageTopBtn : pageTopBtn
    }, function() {
        // Update status to let user know options were saved.
        console.log("settings changed");
    });
    }
    
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get({
        year : '2021',
        fac : 'ko1',
        clickLoginBtn: true,
        adfsSkip: true,
        exitSidemenu: true,
        styleSidemenu: true,
        styleExam: true,
        addSubTimetable: true,
        changeReportBtn: true,
        styleDialog: true,
        hideCompletedReports: true,
        syllBtn: true,
        changeLogout: true,
        setMaxWidth: true,
        pageTopBtn : true
    }, function(items) {
        document.getElementById('year').value = items.year;
        document.getElementById('fac').value = items.fac;
        document.getElementById('login_auto').checked = items.clickLoginBtn;
        document.getElementById('adfs_auto').checked = items.adfsSkip;
        document.getElementById('menu_exit_auto').checked = items.exitSidemenu;
        document.getElementById('submenu').checked = items.styleSidemenu;
        document.getElementById('exam').checked = items.styleExam;
        document.getElementById('additional_lms').checked = items.addSubTimetable;
        document.getElementById('changeReportBtn').checked = items.changeReportBtn;
        document.getElementById('styleDialog').checked = items.styleDialog;
        document.getElementById('hideCompletedReports').checked = items.hideCompletedReports;
        document.getElementById('syll_btn').checked = items.syllBtn;
        document.getElementById('changeLogout').checked = items.changeLogout;
        document.getElementById('setMaxWidth').checked = items.setMaxWidth;
        document.getElementById('pageTopBtn').checked = items.pageTopBtn;
    });
    }
    document.addEventListener('DOMContentLoaded', restore_options);
    //チェックボックスが更新されたら保存
    const $checkboxList= document.querySelectorAll("input[type='checkbox']");
    for(let $checkbox of $checkboxList){
        $checkbox.addEventListener('change', save_options);
    }
    //プルダウンメニューが更新されたら保存
    const $menuList= document.querySelectorAll("select");
    for(let $menu of $menuList){
        $menu.addEventListener('change', save_options);
    }