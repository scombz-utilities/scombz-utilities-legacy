//設定を保存する関数
function save_options() {
    console.log("Saved");
    var year = document.getElementById('year').value;
    var fac = document.getElementById('fac').value;
    var clickLoginBtn = document.getElementById('clickLoginBtn').checked;
    var adfsSkip = document.getElementById('adfsSkip').checked;
    var exitSidemenu = document.getElementById('exitSidemenu').checked;
    var styleSidemenu = document.getElementById('styleSidemenu').checked;
    var styleExam = document.getElementById('styleExam').checked;
    var addSubTimetable = document.getElementById('addSubTimetable').checked;
    var hideCompletedTask = document.getElementById('hideCompletedTask').checked;
    var styleDialog = document.getElementById('styleDialog').checked;
    var changeReportBtn = document.getElementById('syllBtn').checked;
    chrome.storage.local.set( {
        year: year ,
        fac: fac ,
        clickLoginBtn: clickLoginBtn,
        adfsSkip: adfsSkip,
        exitSidemenu: exitSidemenu,
        styleSidemenu: styleSidemenu,
        styleExam: styleExam,
        addSubTimetable: addSubTimetable,
        hideCompletedTask: hideCompletedTask,
        styleDialog: styleDialog,
        changeReportBtn: changeReportBtn,
        syllBtn: syllBtn
    
}, function() {
        const $status = document.getElementById('status');
        const $now = new Date();
        $status.textContent = `done at ${$now.getHours}:${$now.getMinutes}:${$now.getSeconds}`;
    });
}
    //現状の設定の表示に戻す関数
function restore_options() {
    chrome.storage.local.get({
        year: '2021',               //入学年度
        fac: 'ko1',                 //学部
        clickLoginBtn: true,        //ログインボタンクリック
        adfsSkip: true,             //adfsスキップ
        exitSidemenu: true,         //サイドメニューを閉じる
        styleSidemenu: true,        //サイドメニューのスタイル変更
        styleExam: true,            //テストのスタイル変更
        addSubTimetable: true,      //メニューを展開したときの時間割
        hideCompletedTask: true,    //完了したレポートをカレンダーに表示しない
        styleDialog: true,          //ダイアログを大きくする
        changeReportBtn: true,      //レポート提出ボタンの変更
        syllBtn: true               //シラバスリンクボタンを表示
        
    }, function(items) {
        document.getElementById('year').value = items.year;
        document.getElementById('fac').value = items.fac;
        document.getElementById('clickLoginBtn').checked = items.clickLoginBtn;
        document.getElementById('adfsSkip').checked = items.adfsSkip;
        document.getElementById('exitSidemenu').checked = items.exitSidemenu;
        document.getElementById('styleSidemenu').checked = items.styleSidemenu;
        document.getElementById('styleExam').checked = items.styleExam;
        document.getElementById('addSubTimetable').checked = items.addSubTimetable;
        document.getElementById('hideCompletedTask').checked = items.hideCompletedTask;
        document.getElementById('styleDialog').checked = items.styleDialog;
        document.getElementById('changeReportBtn').checked = items.changeReportBtn;
        document.getElementById('syllBtn').checked = items.syllBtn;
    });
}
/* ここからメイン */

//ページ読み込み後にロード
document.addEventListener('DOMContentLoaded', function(){
    //入学年度としてありうる値を表示
    console.log('hey');
    const year = document.getElementById('year');
    const now = new Date();
    let yearlist = '';
    for( let i = now.getFullYear()-8 ; i < now.getFullYear()+1 ; i++){
        yearlist += `<option value="${i}">${i}年入学</option>\n`;
    }
    year.innerHTML = yearlist;
    //保存された設定を復元
    restore_options;

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
});