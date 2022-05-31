/* ScombZ Utilities */
/* exitSidemenu.js */
function exitSidemenu(){
    'use strict';
    var $closeButton = document.getElementById('sidemenuClose');
    if($closeButton){
        console.log('メニューを閉じます');
        //一時的にサイドメニューのtransitionを無効化する
        document.getElementById('sidemenu').style.transition = 'none';
        $closeButton.click();
        //逆に開く問題の修正
        if( !(document.getElementById('sidemenu').classList.contains('sidemenu-close')) ){
            document.getElementById('sidemenu').classList.add('sidemenu-close');
        }
        if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
            document.getElementById('pageMain').classList.add('sidemenu-hide');
        }
        if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
            document.getElementById('pageMain').classList.add('sidemenu-hide');
        }
        //サイドメニューのtransitionをデフォルトに復元する
        document.getElementById('sidemenuOpen').addEventListener('click', function(){
            document.getElementById('sidemenu').style.transition = '';
        }, { once: true, capture: true });
        console.log('メニューを閉じました');
    }
    return;
}