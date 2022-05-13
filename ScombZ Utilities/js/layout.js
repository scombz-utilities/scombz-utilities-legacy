/* ScombZ Utilities */
/* layout.js */
//ログアウト画面変更
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
//ページ最大横幅
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
//芝猫表示
function topShibaneko(){
    if(location.href=="https://scombz.shibaura-it.ac.jp/login"){
        const $topLogo = document.querySelector(".sitelogo");
        if($topLogo){
            console.log("にゃーん");
            $topLogo.insertAdjacentHTML("beforeBegin",`
            <div style="text-align:center;"><img src="https://scomb.shibaura-it.ac.jp/theme1/skin/common/img/007.jpg" alt="slide1" style="width:960px;height:153px;"></div>
            `);
        }
    }
}
//現在時刻のコマを目立たせる
function styleNowPeriod() {
    const $nowperiod = getNowPeriod();
    console.log("現在のコマ: "+$nowperiod);
    if($nowperiod == -1){
        return;
    }
    if(location.href == "https://scombz.shibaura-it.ac.jp/lms/timetable"){
        console.log("LMSの現在のコマを目立たせます");
        const $courseList = document.querySelectorAll('.timetable-course-top-btn');
        for(const $course of $courseList) {
            for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                    if($yobicolNum*10 + Number(jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML)) -1 == $nowperiod){
                        $course.style.background ="rgb(91 237 146)";
                        $course.parentNode.parentNode.style.color ="#000";
                        $course.innerHTML =`<span style="font-size:6px;font-weight:normal;color:#000;display:inline-block;background-color:#fff;padding:2px;border-radius:10px;transform:translate(-3px,-4px)">NOW</span>`+$course.innerHTML;
                        break;
                    }
                }
            }
        }
    }
    return;
}
function layoutHome(){
    "use strict";
    console.log("homeを検知しました");
    document.head.insertAdjacentHTML("beforeEnd",`
    <style>
    .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain{
        transition:opacity 150ms;
    }
    .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain:hover{
        opacity:0.6;
    }
    </style>
    `);
    return;
}
function addExtensionSettingsBtn(){
    "use strict";
    console.log("拡張機能設定ボタンを追加します")
    const $headerBtnArea = document.querySelector(".page-head-navi-unordered-list");
    if($headerBtnArea){
        $headerBtnArea.insertAdjacentHTML("afterBegin",`
        <li class="page-head-navi-list">
			<a class="page-head-navi-colomn" href="javascript:void(0);" id="link_to_extention">拡張機能設定</a>
		</li>
        `);
        document.getElementById("link_to_extention").addEventListener("click", function(){
            chrome.runtime.sendMessage({"action": "openOptionsPage"});
        });
    }
    return;
}