/* ScombZ Utilities */
/* clickLogin.js */
function clickLoginBtn(){
    'use strict';
    if (location.href == 'https://scombz.shibaura-it.ac.jp/login'){
        window.onload = function(){
            console.log("ログインボタンをクリックします");
            document.querySelector('.login-btn:nth-child(1)').click();
            console.log("ログインボタンをクリックしました");
        };
    }
    return;
}