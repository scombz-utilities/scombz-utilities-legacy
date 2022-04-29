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
    var finished_report = document.getElementById('syll_btn').checked;
    chrome.storage.sync.set({
        year : year ,
        fac : fac ,
        login_auto : login_auto,
        adfs_auto : adfs_auto,
        menu_exit_auto : menu_exit_auto,
        submenu : submenu,
        exam : exam,
        additional_lms : additional_lms,
        finished_report : finished_report,
        syll_btn : syll_btn
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = '保存されました';
    });
    }
    
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        year : '2021',
        fac : 'ko1',
        login_auto: true,
        adfs_auto: true,
        menu_exit_auto: true,
        submenu: true,
        exam: true,
        additional_lms: true,
        finished_report: true,
        syll_btn: true
    }, function(items) {
        document.getElementById('year').value = items.year;
        document.getElementById('fac').value = items.fac;
        document.getElementById('login_auto').checked = items.login_auto;
        document.getElementById('adfs_auto').checked = items.adfs_auto;
        document.getElementById('menu_exit_auto').checked = items.menu_exit_auto;
        document.getElementById('submenu').checked = items.submenu;
        document.getElementById('exam').checked = items.exam;
        document.getElementById('additional_lms').checked = items.additional_lms;
        document.getElementById('finished_report').checked = items.finished_report;
        document.getElementById('syll_btn').checked = items.syll_btn;
    });
    }
    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('save').addEventListener('click',
        save_options);