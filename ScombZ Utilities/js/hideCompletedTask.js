/* ScombZ Utilities */
/* hideCompletedTask.js */

//提出済み課題
//将来的にはhas()を使用
function hideCompletedReports(){
    'use strict';
    if(location.href == 'https://scombz.shibaura-it.ac.jp/portal/home'){
        console.log('提出済課題非表示 実行開始');
        const $finRepList = document.querySelectorAll('.portal-subblock-mark-finish');
        for(const $finRep of $finRepList){
            $finRep.parentNode.parentNode.style.display = 'none';
        }
        console.log('提出済課題非表示 実行終了');
    }
    return;
}