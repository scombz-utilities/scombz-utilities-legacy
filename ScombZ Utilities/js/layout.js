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
            console.log(`最大横幅は${items.maxWidthPx.lms}pxに設定されました`);
        });
    }
    else if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission")){
        console.log('課題ページの最大横幅を変更します');
        chrome.storage.local.get({
            maxWidthPx:{
                task: 1280
            }
        },function(items){
            document.head.insertAdjacentHTML('beforeEnd',`
            <style type="text/css">
            #pageContents{
                max-width: ${items.maxWidthPx.task}px;
                margin: 0 auto;
            }
            .block{
                margin: 40px 24px 0 34px;
            }
            </style>
            `);
            console.log(`最大横幅は${items.maxWidthPx.task}pxに設定されました`);
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
//ダイレクトリンク
function remomveDirectLink(){
    const $directLink = document.querySelector('.page-directlink');
    if($directLink){
        $directLink.remove();
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
                        $course.classList.add("now-period");
                        $course.parentNode.parentNode.style.color ="#000";
                        $course.innerHTML =`<style>.now-period{background:rgb(91 237 146);}</style><span id="nowPeriod" style="font-size:6px;font-weight:normal;color:#000;display:inline-block;background-color:#fff;padding:2px;border-radius:10px;transform:translate(-3px,-4px)">NOW</span>`+$course.innerHTML;
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
        //学年歴ボタンを作る
        const $exportGoogleBtn = document.querySelector(".portal-calendar-event-export.calendar_ics_download");
        if($exportGoogleBtn){
            $exportGoogleBtn.insertAdjacentHTML("afterEnd",`<a class="portal-calendar-event-add-a" href="https://www.shibaura-it.ac.jp/campus_life/school_calendar/" target="_blank" rel="noopener noreferrer" style="border-top: 1px dotted #FFF;">学年歴を見る</a>`);
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
        @media (max-width:650px){
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
//名前をクリックして表示を消す
function clickHideName(){
    "use strict";
    const $loginViewName = document.getElementsByClassName("login-view-name")[0];
    if($loginViewName){
        $loginViewName.insertAdjacentHTML("beforeend",`<style>.name-hidden{opacity:0;}</style>`);
        $loginViewName.addEventListener("click", function(){
            if($loginViewName.classList.contains("name-hidden")){
                $loginViewName.classList.remove("name-hidden");
                $loginViewName.style.opacity = "1";
            }else{
                $loginViewName.classList.add("name-hidden");
                $loginViewName.style.opacity = "0";
            }
        });
    }
}
//ページ上部にある固定ヘッダのキモい影を直す
function fixHeadShadow(){
    const $headIdList=[
        'page_head',
        'examTimer',
        'survey_timer'
    ];
    for (const $headId of $headIdList) {
        if(document.getElementById($headId)){
            document.getElementById($headId).style.boxShadow = "rgb(60 64 67 / 30%) 0px 1px 2px, rgb(60 64 67 / 15%) 0px 2px 6px 2px";
        }
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
//スマホ判定
function androidCss(){
    if ( (/android/i.test(navigator.userAgent) || screen.width < 480)  && document.head) {
        document.head.insertAdjacentHTML("beforeEnd",`
        <style>
        #pageMain{
            overflow-x:hidden;
            margin-top: 59px;
            }
            #page_head{
            position: fixed;
            }
            .sidemenu-hide{
            min-width:100vw;
            }
            .page-main #graylayer{
            margin-top: -59px;
            }
            @media (max-width: 480px){
                .page-main {
                min-width:100vw;
                }
            }
            @media (max-width:899px){
                #subTimetable{
                    display:none !important;
                }
                #subTaskList{
                    margin:10px auto;
                    display: block;
                    opacity: 1;
                    visibility: visible;
                    min-width: 90% !important;
                    box-shadow: 5px 5px 5px #c2c2c2;
                }
                .subk-column:nth-child(3n+1) {
                    width: fit-content !important;
                    display:block;
                    padding:1px 2px;
                    border:1px solid #ccc;
                    border-radius:10px;
                }
                .subk-column:nth-child(3n+2) {
                    width: 100% !important;
                    display:block;
                }
                .subk-deadline{
                    display: block;
                    float:left !important;
                    margin:4px 0 0 15px !important;
                }
                .relative-deadline-time{
                    display:inline-block !important;
                }
                .subk-line{
                    height:75px !important;
                }
                .manadd-column-name{
                    display:block !important;
                }
                .block-title.block-cube{
                    height:auto !important;
                }
            }
            </style>
        `);
    }
}

//ダークモード
function darkmodeLayout(mode){
    if(mode === 'normal'){
        console.log("ダークモードは設定されません");
        return;
    }else{
        console.log("ダークモードを挿入します\nmode: ",mode);
        let darkmode = `
        /* ScombZ Darkmode CSS v0.7 */
        /* styled by うだい */
        /*背景、全体設定*/
        :root{
        color-scheme: dark;
        }
        body{
        color:#aaa;
        }
        #pageMain,.login-view,.login{
        background-color: rgb(30, 32, 33);
        }
        .btn,.btn-color{
        border:1px solid #666;
        }
        /*ログインページ*/
        .login-btn.red-btn-color.btn-txt{
        background-color: rgb(168, 21, 21);
        border-color: rgb(152, 19, 19);
        box-shadow: rgb(140 63 63) 0px 1px 3px 1px;
        color: rgb(232, 230, 227);
        }
        .own-auth,.login-auth{
        border: 1px solid #5C5C5C !important;
        }
        /*ログアウトページ*/
        .logout-body {
        background-color: rgb(40, 45, 51);
        }
        .logout-select-box {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        border-color: rgb(65, 71, 73);
        }
        /*ヘッダ*/
        .sitelogo > img{
        filter: drop-shadow(0 0px 4px #fff);
        }
        #page_head{
        background-color: #303134;
        box-shadow: #6665 0px 1px 2px, #6662 0px 2px 6px 2px !important;
        }
        .page-head-navi-colomn{
        color: #abaaaa;
        }
        .header-img{
        filter: invert();
        }
        .mainmenu-head-logo:hover{
        background:#444;
        }
        .control-menu {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(98 103 106) 0px 0px 5px;
        }
        .header-control-color:nth-child(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .header-control-color:nth-child(2n) {
        background-color: rgb(35, 38, 40);
        }
        .header-control-colomn > .info_title,.header-control-colomn{
        color: rgb(179, 172, 162);
        }
        /*フッタ*/
        #page_foot{
        background-color: #303134;
        }
        /*サイドメニュー関連*/

        .sidemenu-logo > a > img{
        filter: drop-shadow(0 0px 1px #fff) drop-shadow(0 0px 1px #aaa) drop-shadow(0 0px 1px #aaa);
        }
        .hamburger-icon .hamburger-line {
        background-color: #ecedea;
        }

        .header-new-icon{
        background-color:#d00a;
        border: #303134 solid 2px;
        }
        .sidemenu{
        background-color:#303134;
        border-right: none;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt{
        background-color:#38393b;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:hover{
        background-color:#505154;
        }
        .sidemenu-head{
        background-color:#303134;
        border-bottom:1px solid #444c;
        filter:grayscale(40%);
        }
        .sidemenu-link-txt{
        color:#ccc;
        }
        .sidemenu-link{
        border-bottom:1px solid #444;
        border-top:none !important;
        }
        .sidemenu-pull {
        background-color: rgba(26, 29, 30, 0.19);
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(48, 52, 54);
        text-decoration-color: initial;
        }
        .sidemenu-list-txt {
        text-decoration-color: initial;
        color: rgb(232, 230, 227);
        }
        .sidemenu-list-colomn {
        background-color: rgb(34, 37, 38);
        border-bottom-color: rgb(72, 78, 81);
        }
        .sidemenu-list-colomn:hover {
        background-color: rgb(44, 47, 48);
        }
        /*サブ時間割関連*/
        .page-main .subtimetableBody {
        color: rgb(232, 230, 227);
        }
        .subtimetableBodyCulm{
        background-color:rgba(160,160,160,0.5) !important;
        }
        td.SubTimetable, th.SubTimetable{
        background-color:rgb(31, 34, 35) !important;
        }
        th.SubTimetable{
        background-color:rgb(85, 71, 42) !important;
        }
        td.SubTimetable:nth-child(1), th.SubTimetable:nth-child(1){
        background-color:rgb(108, 28, 19) !important;
        }
        td.SubTimetable > a{
        color:#ccc !important;
        }
        a.SubTimetable:hover{
        background:rgb(41,44,45) !important;
        }
        .subk-head,.note-line.note-head{
        background-color:rgb(31, 34, 35) !important;
        color: #ddd !important;
        border-bottom:2px solid rgba(160,160,160,0.5) !important;
        }
        .subk-subjname-link,a.subk-link,.subk-deadline,.memo-add,.memo-remove{
        color: #bbb !important;
        }
        .subk-line,.note-line{
        background-color:rgb(41, 44, 45) !important;
        color: #ccc !important;
        border-bottom:1px solid rgba(160,160,160,0.5) !important;
        }
        .note-head{
        border-top: 1px solid #333 !important;
        }
        .noteInput.inputmode{
        background-color:#333 !important;
        border:1px solid #999;
        }
        /*LMSページ関連*/
        .timetable-course-top-btn{
        background-color: rgb(33, 78, 57);
        border-bottom-color: rgb(56, 112, 37);
        box-shadow: rgb(51 55 57) 0px 1px 4px;
        }
        #nowPeriod{
        color:#000 !important;
        }
        .div-table-cell-detail {
        background-color: rgb(24, 26, 27);
        border-bottom-color: rgb(70, 76, 78);
        border-right-color: rgb(70, 76, 78);
        }
        .div-table-cell {
        border-color: rgb(66, 72, 74) rgb(66, 72, 74) rgb(66, 72, 74) rgb(48, 52, 54);
        color:#aaa !important;
        }
        .div-table-colomn-period-color {
        background-color: rgb(108, 28, 19);
        border-bottom-color: rgb(34, 59, 56);
        }
        .input {
        border-color: rgb(71, 77, 80);
        }
        .yobi-color1,.yobi-color3,.yobi-color5 {
        background-color: rgb(134, 111, 66);
        }
        .yobi-color2,.yobi-color4,.yobi-color6 {
        background-color: rgb(93, 78, 46);
        }
        .div-table-head-color {
        color: rgb(232, 230, 227);
        border-left-color: rgb(34, 59, 76);
        }
        /*メインページ*/
        .portal-subblock-mark-finish{
        background-color:#fff4;
        }
        .portal-subblock-link > div > a{
        color:#aaa !important;
        }
        .portal-subblock,.information-area,.login-body,.login-block {
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .portal-subblock-list {
        border-bottom-color: rgb(72, 78, 81);
        }
        .result-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .result-list:nth-child(2n) {
        background-color: rgb(31, 34, 35);
        }
        .portal-subblock-list-main a,.portal-subblock-list-sub {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .portal-calendar-day-td-a {
        color: rgb(214, 211, 205);
        text-decoration-color: initial;
        }
        .portal-calendar-month,.portal-calendar-week {
        background-color: rgba(25, 127, 46,0.6);
        border-top-color: rgba(5, 210, 74,0.6);
        }
        .portal-calendar-event-contents,.portal-calendar-event-pull {
        color: rgb(182, 180, 187);
        background-color: rgb(74, 61, 36);
        border-top-color: rgb(109, 90, 54);
        }
        .portal-calendar-booking {
        background-color: rgb(53, 76, 98);
        }
        .portal-calendar-today {
        background-color: rgb(142, 13, 13);
        }
        .portal-calendar-event-add-a, .portal-calendar-event-export-a {
        color: rgb(182, 180, 187);
        background-color: #195627;
        text-decoration-color: initial;
        }
        .portal-calendar-event-add-a:hover, .portal-calendar-event-export-a:hover {
        background-color: #094617;
        text-decoration-color: initial;
        }
        .portal-top-subblock-title {
        color: rgb(101, 225, 127);
        }
        .portal-info-tab-name {
        background-color: rgb(78, 77, 73);
        }
        .portal-subblock-title {
        font-weight: bold;
        position: relative;
        margin-bottom: 25px;
        border-bottom: solid 4px #1f9f3a;
        }
        .top_personal_pull::after, .top_kamoku_pull::after, .top_etc_pull::after,.portal-questionnaire-title::after,.portal-banner-title::after,.portal-notice-title::after,.portal-notice-title::after,.portal-attention-title::after,.timetable-title-txt:after {
        border-bottom-color: rgb(44, 111, 73);
        }
        .portal-info-tab-select {
        background-color: rgb(114, 92, 44);
        }
        .portal-subblock-link-main-a {
        color: rgb(214, 211, 205);
        }
        .portal-subblock-link-subtitle {
        color: rgb(214, 211, 205);
        background-color: #222;
        border-top-color: rgb(67, 72, 75);
        border-bottom-color: rgb(67, 72, 75);
        }
        /*科目別ページ関連*/
        .ql-editor > p > span{
        color:#aaa !important;
        }
        .course-view-header-btn-area{
        border-top-color:rgb(98, 102, 105);
        }
        .course-header{
        background-color: #333;
        box-shadow: #444 5px 5px 5px;
        }
        .white-btn-color{
        background-color:#111;
        box-shadow:0px 2px 3px 1px #222;
        color:#ddd;
        border:none;
        }
        .course-view-header-btn-color{
        background-color:#c00a;
        }
        .block {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 5px 5px 5px;
        }
        .block-contents {
        background-color: rgb(24, 26, 27);
        }
        .contents-tag {
        border-bottom-color: rgb(58, 62, 65);
        }
        .contents-list {
        border-top-color: initial;
        }
        .course-result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .course-result-list:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .course-result-list:nth-of-type(2n) {
        background-color: rgb(31, 34, 35);
        }
        .link-txt {
        color: rgb(86, 142, 241);
        text-decoration-color: initial;
        }
        .material-sub-color {
        background-color: rgb(59, 60, 30);
        }
        .block-title.block-cube{
        filter: contrast(150%);
        filter: opacity(60%);
        }
        .control-menu .control-list:nth-child(2n-1) {
        background-color: rgb(24, 26, 27);
        }
        .control-menu .control-list:nth-child(2n) {
        background-color: rgb(34, 36, 37);
        }
        .control-menu .control-list > .control-menu-colomn{
        color:#aaa !important;
        }
        .btn-control:hover:before {
        background-color: rgba(24, 26, 27, 0.4);
        }
        /*ダイアログ*/
        .ui-widget.ui-widget-content {
        border-color: rgb(64, 70, 72);
        }
        .ui-widget-header {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(36, 39, 41);
        color: rgb(200, 195, 188);
        }
        .ui-widget-content {
        border-color: rgb(58, 62, 65);
        background-image: initial;
        background-color: rgb(24, 26, 27);
        color: rgb(200, 195, 188);
        }
        .information-popup-block {
        box-shadow: rgb(58 63 66) 0px 0px 15px;
        }
        .information-popup-block {
        background-color: rgb(24, 26, 27) !important;
        box-shadow: rgb(58 63 66) 5px 5px 5px !important;
        }
        .contents-vertical {
        border-bottom-color: rgb(98, 102, 105);
        }
        .course-title-txt {
        border-top-color: rgb(98, 102, 105);
        }
        .course-header-detail {
        border-top-color: rgb(98, 102, 105);
        }
        .information-color {
        background-color: #ac732d !important;
        }
        .contents-title {
        border-top-color: rgb(59, 64, 66);
        }
        /*アンケート*/
        #survey_timer{
        background-color: rgb(41, 45, 46);
        box-shadow: rgb(58 63 66) 0px 5px 5px;
        }
        .survey-color{
        background-color:#9f6215;
        }
        /*課題提出*/
        .input-checkbox:checked:after {
        border-color: #ccc;
        opacity: 1.0;
        }
        .report-submission-link-area {
        background-color: rgb(31, 34, 35);
        }
        .report-color {
        background-color: rgb(136, 12, 12);
        }
        .block-under-area .block-under-area-btn #submitButton, #report_submission_btn,.block-under-area .block-under-area-btn #takebtn,.block-under-area .block-under-area-btn .takeConfirm,.block-under-area .block-under-area-btn #submit{
        background-color: #545555 !important;
        }
        .block-under-area .block-under-area-btn #backPage, #back, #backBtn, #backbtn,.block-under-area .block-under-area-btn .tempSaveBtn,.block-under-area .block-under-area-btn .backbutton{
        background-color: #333 !important;
        color:#aaa !important;
        }
        .result-list {
        border-bottom-color: rgb(58, 62, 65);
        }
        .block-popup {
        background-color: rgb(24, 26, 27);
        }
        .drag-drop-area {
        background-color: rgb(38, 41, 43) !important;
        color: rgba(232, 230, 227, 0.35) !important;
        }
        /*コミュニティ*/
        .participating-community-list-li .participating-community-list-li-img{
        filter: invert();
        }
        .community-header {
        background-color: rgb(24, 26, 27);
        box-shadow: rgb(58 63 66) 0px 7px 5px;
        }
        /*課題一覧*/
        div.result_list_content .result_list_line:nth-of-type(2n+1) {
        background-color: rgb(24, 26, 27);
        }
        .result_list .result_list_line {
        color: rgb(179, 172, 162);
        border-bottom-color: rgb(58, 62, 65);
        }
        .result_list .result_list_tag {
        color: rgb(210, 206, 200);
        border-bottom-color: rgb(58, 62, 65);
        }
        /*オンライン授業情報*/
        .week-label {
        background-color: rgb(24, 26, 27);
        }
        .week-checked {
        background-color: rgb(50, 54, 56);
        }
        /*テスト*/
        .examination-color {
        background-color: #003560;
        }
        .timer-btn-area {
        background-color: rgb(41, 45, 46);
        }
        .input-radio:checked:after {
        opacity: 1.0;
        background-color: #aaa;
        }
        .large-timer-number,.small-timer-number {
        background-color: #111;
        color:#999;
        }
        .input-box{
            color :#eee;
        }
        .portal-subblock-bottom-a,.portal-survey-content-part-left,.portal-survey-content-right{
            color:#c4c5c5;
        }
        .ItemBox-CheckBox-Label{
            background-color:#000 !important;
        }
        .ItemBox-CheckBox-Input:checked+.ItemBox-CheckBox-Label {
            background: #1b449f !important;
        }
        .subk-remove-btn {
            background-color: #0aa6 !important;
            background-blend-mode: darken !important;
            filter: invert(1);
        }
        .examination-question-answer-input-box{
            color:#ddd;
        }
        .relative-deadline-time{
            color:#a00 !important;
        }
        .highlightMark .relative-deadline-time{
            color:#555 !important;
        }
        .today.highlightMark .relative-deadline-time,.today.highlightMark .subk-deadline-time{
            color:#f00 !important;
        }
        .shorttime.highlightMark,.shorttime.highlightMark .subk-deadline-time{
            background-color: rgb(100, 44, 45) !important;
        }
        .a-few-days.highlightMark .relative-deadline-time,.a-few-days.highlightMark .subk-deadline-time{
            color:#e22 !important;
        }
        .a-week.highlightMark .relative-deadline-time{
            color:#999 !important;
        }
        .task-get-time,#add-task-manual{
            color:#ccc !important;
        }
        #manAddtaskSelectLayer{
            background-color:#333 !important;
        }
        #mdNotepadAdd{
            filter: invert(0.8);
        }
        .header-clear .header-icon-space{
            border-color: #303134 !important;
        }
        .now-period {
            background: rgb(20 126 60) !important;
        }
            `;
        if(mode === 'relative'){
            darkmode = "@media (prefers-color-scheme: dark) {\n" + darkmode + "}";
        }
        if(document.head)
            document.head.insertAdjacentHTML('beforeend',`<style type="text/css">`+darkmode+"</style>");
    }
    return;
}
//D&Dで課題を出す
function ddSub(){
    "use strict";
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/report/submission")){

        console.log("ドラッグ&ドロップに変更します");
        let DragAndDrop = document.getElementById("toDragAndDrop");
        if (DragAndDrop){
            setTimeout(function(){
                DragAndDrop.click();
            },300)
        }
    }
}