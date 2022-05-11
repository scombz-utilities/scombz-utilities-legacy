/* ScombZ Utilities */
/* main.js */
(function(){
    'use strict';
    /*  定数  */
    const $$version = '3.3.0';          //バージョン
    const $$reacquisitionMin = 15;      //再取得までの時間(分)
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
            styleExamBtn: true,        //テストのボタンスタイル変更
            styleExamImg: false,        //テストの画像スタイル変更
            addSubTimetable: true,      //メニューを展開したときの時間割
            hideCompletedReports: true, //完了したレポートをカレンダーに表示しない
            styleDialog: true,          //ダイアログを大きくする
            changeReportBtn: true,      //レポート提出ボタンの変更
            syllBtn: true,              //シラバスリンクボタンを表示
            changeLogout: true,         //ログアウト画面変更
            setMaxWidth: true,          //科目ページに最大横幅を設定
            pageTopBtn: true,           //ページトップへ行くボタンを消すかどうか
            mouseDown: true,            //ホイールクリックをできるようにする
            tasklistDisplay: true,      //メニュー横課題表示
            styleNowPeriod: true        //現在のコマを目立たせる
        
    }
    /* ローディング画面 */
    onLoading();
    /* メイン処理 */
    document.addEventListener('DOMContentLoaded', function(){
        //chrome Storage API読み込み
        chrome.storage.local.get(defaults, (items) => {
            if(document.domain == "scomb.shibaura-it.ac.jp"){
                console.log("旧Scomb");
                scombLogin();
            }
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
                //帰ってきて芝猫
                if(items.clickLoginBtn !== true){
                    topShibaneko();
                }
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
                //メニューを展開したときの時間割 (オフだった場合はグレーレイヤーだけ表示) , メニュー横に課題一覧を表示
                    subTimetable(items.addSubTimetable , items.tasklistDisplay , $$version);
                }
                //課題一覧取得
                if( items.tasklistDisplay === true ){
                getTaskLists($$reacquisitionMin);
                };
                //テストのスタイル変更
                if(items.styleExamBtn === true){
                    styleExam();
                }
                if(items.styleExamImg === true){
                    styleExamImg();
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
                //現在の授業を目立たせる
                if(items.styleNowPeriod === true){
                    styleNowPeriod();
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