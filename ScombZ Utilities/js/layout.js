/* ScombZ Utilities */
/* layout.js */
function changeLogout(){
    'use strict';
    if(location.href == 'https://scombz.shibaura-it.ac.jp/logout'){
        console.log("ログアウト画面を変更します");
        window.addEventListener('load', function(){
            const $logoutMainContent = document.getElementById('logout');
            const $logoutButton = document.querySelector('.btn-logout');
            if($logoutMainContent && $logoutButton){
                $logoutButton.style.background = "#f43c49";
                $logoutButton.style.border = "1px solid #ff0000";
                $logoutButton.style.boxShadow = "none";
                $logoutButton.style.fontWeight="bold";
                
                $logoutMainContent.style.width = '100%';
                $logoutMainContent.style.margin = '0 auto';
                $logoutMainContent.style.minWidth = '0';
                $logoutButton.insertAdjacentHTML('afterEnd',`
                <style>
                .btn-back{
                    margin-top:10px;
                    width:300px;
                    box-shadow:none;
                }
                @media (max-width: 480px){
                    .btn-back {
                        width: 200px;
                    }
                }
                </style>
                <br><a class="btn-inline btn-back btn-color btn-txt" href="#" onclick="history.back(-1);return false;" >戻る</a>
                `);
            }
        });
    }
    console.log("ログアウト画面を変更しました");
    return;
}
function maxWidthOnSubjPage(){
    'use strict';
    if(location.href.includes("lms/course?idnumber=") && location.href.length < 80){
        console.log('科目ページの最大横幅を変更します');
        document.head.insertAdjacentHTML('beforeEnd',`
        <style type="text/css">
        #courseTopForm{
            max-width: 1280px;
            margin: 0 auto;
        }
        @media(min-width:1281px){
            .course-header{
                border-left:1px solid #ccc;
                border-right:1px solid #ccc;
            }
        }
        </style>
        `);
        console.log("最大横幅は1280pxに設定されました");
    }
    return;
}
function remomvePageTop(){
    //ページトップボタン
    const $pagetopBtn = document.querySelector('.page-top-btn');
    if($pagetopBtn){
        $pagetopBtn.remove();
    }
    return;
}