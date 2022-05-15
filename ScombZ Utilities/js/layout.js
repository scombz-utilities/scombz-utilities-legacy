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
        chrome.storage.local.get({
            maxWidthPx:{
                subj: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #courseTopForm{
                max-width: ${items.maxWidthPx.subj}px;
                margin: 0 auto;
            }
            @media(min-width:${items.maxWidthPx.subj+1}px){
                .course-header{
                    border-left:1px solid #ccc;
                    border-right:1px solid #ccc;
                }
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx.subj}pxに設定されました`);
        });
    }
    
    else if(location.href == "https://scombz.shibaura-it.ac.jp/lms/timetable"){
        console.log('LMSの最大横幅を変更します');
        chrome.storage.local.get({
            maxWidthPx:{
                lms: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #timetable{
                max-width: ${items.maxWidthPx.lms}px;
                margin: 0 auto;
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx}pxに設定されました`);
        });
    }
    return;
}
//ページトップボタン
function remomvePageTop(){
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
//ホームのレイアウト
function layoutHome(){
    "use strict";
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/portal/home")){
        console.log("homeを検知しました");
        document.head.insertAdjacentHTML("beforeEnd",`
        <style>
        @media screen and (min-width: 1800px){
            .portal-link-list-li{
                min-width:440px;
            }
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain{
            transition:opacity 150ms;
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain:hover{
            opacity:0.6;
        }
        .portal-left {
            width: calc(100% - 310px);
            padding: 0 24px 35px 20px;
            float: left;
        }
        @media screen and (max-width: 970px) {
            .portal-left {
                width: 100%;
            }
        }
        @media screen and (min-width: 971px) {
            .portal-right {
                /* background-color: #E2E7E8; */
                padding: 0 34px 35px 24px;
                position: absolute;
                right: 11px;
                top: 96px;
                width: 310px;
                list-style: none;
                padding: 0;
            }
        }
        @media screen and (min-width:1280px){
            .portal-left{
                max-width: 950px;
                float:none !important;
                margin-left: calc(50vw - 650px);
            }
            .portal-right{
                right: calc(50vw - 625px);
            }
        }
        #top_links{
            overflow: visible;
        }
        </style>
        `);
        //リンクをすべて表示する
        const $school_link_list =  document.getElementById('school_link_list');
        if($school_link_list){
            setTimeout(() =>{
                $school_link_list.querySelector(".portal-link-bottom a").click();
            },300);
        }
        //カレンダーの下にリンク集を追加する
        const $top_attention = document.getElementById("top_attention");
        if($top_attention){
            console.log("注目コンテンツを取得しました");
            $top_attention.insertAdjacentHTML("beforeBegin",`
            <dl id="right-links" class="portal-subblock portal-subblock-dl-initial">
                        <dt class="portal-top-subblock-title portal-subblock-title portal-notice-title">重要リンク</dt>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://ami.sic.shibaura-it.ac.jp/" target="_blank" rel="noopener noreferrer">AMI</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="http://sgsot.sic.shibaura-it.ac.jp/" target="_blank" rel="noopener noreferrer">S*gsot</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://supereigo2.sic.shibaura-it.ac.jp/sso/" target="_blank" rel="noopener noreferrer">新スーパー英語</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a class="portal-subblock-link-main-a" href="https://scomb.shibaura-it.ac.jp/portal/dologin" target="_blank" rel="noopener noreferrer">旧Scomb</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a style="color: #231815;text-decoration: none;" href="#school_link_list">もっと見る</a>
                            </div>
                        </dd>
                            
                        
                    </dl>
            `);
        }
    }
    return;
}
//拡張機能設定ボタンの追加
function addExtensionSettingsBtn(){
    "use strict";
    console.log("拡張機能設定ボタンを追加します")
    const $headerBtnArea = document.querySelector(".page-head-navi-unordered-list");
    if($headerBtnArea){
        $headerBtnArea.insertAdjacentHTML("afterBegin",`
        <style>
        @media (max-width:630px){
            #link_to_extention{
                display:none;
            }
        }
        </style>
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
//名前を消す
function removeName(){
    "use strict";
    console.log("名前を変更します");
    const $loginViewName = document.querySelector(".login-view-name");
    if($loginViewName){
        chrome.storage.local.get({
            nickname: ""
        },function(items){
            console.log("名前を取得しました:"+items.nickname);
            $loginViewName.innerHTML= items.nickname;
        });
    }
}
//ページ上部にある固定ヘッダのキモい影を直す
function fixHeadShadow(){
    if(document.getElementById("page_head")){
        document.getElementById("page_head").style.boxShadow = "rgb(60 64 67 / 30%) 0px 1px 2px, rgb(60 64 67 / 15%) 0px 2px 6px 2px";
    }
    return;
}
//カスタムCSS
function customizeCSS(){
    chrome.storage.local.get({
        customcss: null
    },function(items){
        if(items.customcss){
            if(document.head){
                document.head.insertAdjacentHTML("beforeEnd",`
                <style type="text/css">
                ${items.customcss}
                </style>
                `);
            }
        }
    });
    return;
}