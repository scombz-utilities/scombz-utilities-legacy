/* ScombZ Utilities */
/* main.js */
(function(){
    'use strict';
    /*  定数  */
    const $$version = '3.1.1';
    /*  定数ここまで  */
    console.log(`Welcome to ScombZ Utilities ver.${$$version}`);
    
    /* 設定読み込み*/
    //初期状態（設定が保存されていない場合に適用される）
    let defaults = {
            year: null,                 //入学年度
            fac: null,                  //学部
            clickLoginBtn: true,        //ログインボタンクリック
            adfsSkip: true,             //adfsスキップ
            exitSidemenu: true,         //サイドメニューを閉じる
            styleSidemenu: true,        //サイドメニューのスタイル変更
            styleExam: true,            //テストのスタイル変更
            addSubTimetable: true,      //メニューを展開したときの時間割
            hideCompletedReports: true, //完了したレポートをカレンダーに表示しない
            styleDialog: true,          //ダイアログを大きくする
            changeReportBtn: true,      //レポート提出ボタンの変更
            syllBtn: true,              //シラバスリンクボタンを表示
            changeLogout: true,         //ログアウト画面変更
            setMaxWidth: true,          //科目ページに最大横幅を設定
            pageTopBtn: true,           //ページトップへ行くボタンを消すかどうか
            mouseDown: true             //ホイールクリックをできるようにする
        
    }
    /* ローディング画面 */
    onLoading();
    /* メイン処理 */
    document.addEventListener('DOMContentLoaded', function(){
        //chrome Storage API読み込み
        chrome.storage.local.get(defaults, (items) => {
            if(document.domain == "adfs.sic.shibaura-it.ac.jp"){
                console.log("adfs");
                //ADFSだったらadfs.jsに飛ばす
                adfsLoaded();
            }
            if(document.domain == "syllabus.sic.shibaura-it.ac.jp"){
                //シラバスだったらsyllabus.jsに飛ばす
                syllabusLoaded(items.year , items.fac);
            }
            if(document.domain == 'scombz.shibaura-it.ac.jp'){
                //デバッグ用 itemsをログ出力
                console.log(items);
                //非表示にしていたものを表示
                setTimeout(function(){
                    document.documentElement.style.visibility = '';
                },300);
                //ログインボタン自動クリック
                if(items.clickLoginBtn === true){
                    clickLoginBtn();
                }
                //サイドメニューを閉じる
                if(items.exitSidemenu === true){
                    exitSidemenu();
                }
                //サイドメニューのスタイル変更
                if(items.styleSidemenu === true){
                    styleSidemenu();
                //メニューを展開したときの時間割 (オフだった場合はグレーレイヤーだけ表示)
                    subTimetable(items.addSubTimetable , $$version);
                }
                //テストのスタイル変更
                if(items.styleExam === true){
                    styleExam();
                }
                //完了したレポートをカレンダーに表示しない
                if(items.hideCompletedReports === true){
                    hideCompletedReports();
                }
                //ダイアログを大きくする
                if(items.styleDialog === true){
                    styleDialog();
                }
                //レポート提出ボタンの変更
                if(items.changeReportBtn === true){
                    changeReportBtn();
                }
                //ログアウト画面の変更
                if(items.changeLogout === true){
                    changeLogout();
                }
                //画面横幅最大値の変更
                if(items.setMaxWidth === true){
                    maxWidthOnSubjPage();
                }
                //ページトップボタンの表示有無
                if(items.pageTopBtn === true){
                    remomvePageTop();
                }
                //ホイールクリックをできる機能
                if(items.mouseDown === true){
                mouseEvents();
                }
                //シラバスリンクボタンを表示
                if(items.syllBtn === true){
                    //学年、学部が未入力の時はエラー表示
                    if(items.year !== null && items.fac !== null){
                        displaySyllabus(items.year , items.fac);
                    }else{
                        displaySyllabusError();
                    }
                }
                console.log('すべての機能の実行が完了しました');
            }
        });
    });
})();
function onLoading(){
    'use strict';
    console.log('Loading');
    if(document.domain == "scombz.shibaura-it.ac.jp"){
        console.log("SCOMBZ");
        //一度非表示
        document.documentElement.style.visibility = 'hidden';
    }else{
        console.log("NOT SCOMBZ");
    }
    return;
}