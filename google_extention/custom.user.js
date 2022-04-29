// ==UserScript==
// @name         ScombZ-Utilities
// @namespace    https://twitter.com/yudai1204
// @version      2.5.5
// @description  より快適なScombZライフのために、サイドメニュー、テスト、ログインを改善します
// @author       @yudai1204 , @to_ku_me
// @match        https://scombz.shibaura-it.ac.jp/*
// @match        https://adfs.sic.shibaura-it.ac.jp/adfs/ls/*
// @match        http://syllabus.sic.shibaura-it.ac.jp/*
// @icon         https://scombz.shibaura-it.ac.jp/favicon.ico
// @grant        none
// ==/UserScript==
const $$version = '2.5.5';
(function() {
    'use strict';
    console.log(`welcome to Scomb Utilities ver.${$$version}`);
    //----------------chrome拡張機能部分----------------
    //chrome storageの反応性が不安定だったため、chrome storageでの設定を一度localStorageに読み込むことで解決
    console.log('Chrome拡張機能設定を読み込んでいます');
    chrome.storage.sync.get({
        year: null,
        fac: null,
        login_auto: true,
        adfs_auto: true,
        menu_exit_auto: true,
        submenu: true,
        exam: true,
        additional_lms: true,
        finished_report: true,
        syll_btn: true
    }, function(items) {
        localStorage.setItem("udai:settings_year",items.year);
        localStorage.setItem("udai:settings_fac",items.fac);
        localStorage.setItem("udai:settings_login_auto",items.login_auto);
        localStorage.setItem("udai:settings_adfs_auto",items.adfs_auto);
        localStorage.setItem("udai:settings_exit_auto",items.menu_exit_auto);
        localStorage.setItem("udai:settings_submenu",items.submenu);
        localStorage.setItem("udai:settings_exam",items.exam);
        localStorage.setItem("udai:settings_additional_lms",items.additional_lms);
        localStorage.setItem("udai:settings_finished_report",items.finished_report);
        localStorage.setItem("udai:settings_syll_btn",items.syll_btn);
    });
    var $settings_year = localStorage.getItem("udai:settings_year");
    var $settings_fac = localStorage.getItem("udai:settings_fac");
    var $settings_login_auto = localStorage.getItem("udai:settings_login_auto");
    var $settings_adfs_auto = localStorage.getItem("udai:settings_adfs_auto");
    var $settings_exit_auto = localStorage.getItem("udai:settings_exit_auto");
    var $settings_submenu = localStorage.getItem("udai:settings_submenu");
    var $settings_exam = localStorage.getItem("udai:settings_exam");
    var $settings_additional_lms = localStorage.getItem("udai:settings_additional_lms");
    var $settings_finished_report = localStorage.getItem("udai:settings_finished_report");
    var $settings_syll_btn = localStorage.getItem("udai:settings_syll_btn");
    function s2b(str){
        if(str == 'true' || str === null || str === undefined){
            return true;
        }else{
            return false;
        }
    }
    console.log("settings_year:"+$settings_year);
    console.log("settings_fac:"+$settings_fac);
    console.log("login_auto:"+$settings_login_auto);
    console.log("login_adfs:"+$settings_adfs_auto);
    console.log("exit_auto:"+$settings_exit_auto);
    console.log("submenu:"+$settings_submenu);
    console.log("exam:"+$settings_exam);
    console.log("additional_lms:"+$settings_additional_lms);
    console.log("finished_report:"+$settings_finished_report);
    console.log("syll_btn:"+$settings_syll_btn);
    console.log("読み込み完了");
    //------------------------------------------------
    //ADFSスキップ
    if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
        console.log("ADFSをスキップします");
        if(s2b($settings_adfs_auto)){
            const $adfsButton = document.getElementById("continueButton");
            if ($adfsButton) {
                $adfsButton.click();
            }
        }
        console.log("ADFSをスキップしました");
    }
    //ログインボタン自動クリック
    else if (location.href == 'https://scombz.shibaura-it.ac.jp/login'){
        if(s2b($settings_login_auto)){
            window.onload = function(){
                console.log("ログインボタンをクリックします");
                document.querySelector('.login-btn:nth-child(1)').click();
                console.log("ログインボタンをクリックしました");
            };
        }
    }
    //その他
    else if(document.domain == 'scombz.shibaura-it.ac.jp'){
        //テスト改善
        if (location.href.includes('examination') && document.body.clientWidth > 480){
            if(s2b($settings_exam)){
                console.log('テスト改善を実行します');
                const $exa_contsize = document.getElementById('pageContents');
                const $exa_examImgList = document.querySelectorAll('.downloadFile');
                const $exa_cheadList = document.querySelectorAll('.contents-header');
                const $exa_img = document.querySelector('.exam-question-img');
                const $exa_footer = document.getElementById('page_foot');
                const $exa_timer = document.getElementById('examTimer');
                if ($exa_footer){
                    $exa_footer.style.visibility = 'hidden';
                }

                for (const $exa_chead of $exa_cheadList){
                    $exa_chead.style.width = '8%';
                    $exa_chead.style.background = '#f6f6ff';
                }
                if ($exa_img){
                    for (const $exa_examImg of $exa_examImgList){
                        $exa_examImg.style.maxHeight = '100vh';
                        $exa_examImg.style.boxShadow= '0 0 1px #000000 ';
                    }
                    $exa_examImgList[0].style.maxHeight = '95vh';
                    $exa_examImgList[0].style.maxWidth = '50vw';
                    $exa_examImgList[0].style.position = 'fixed';
                    $exa_examImgList[0].style.right= '1px';
                    $exa_examImgList[0].style.top= '5vh';
                    $exa_examImgList[0].style.boxShadow= '0 0 1px #000000 ';
                    if ($exa_contsize) {
                        $exa_contsize.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth - 3 + 'px';
                    }
                    if($exa_timer){
                    $exa_timer.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth + 'px';
                    }
                }
                console.log('テスト改善の実行が完了しました');
            }
        }
        //メニューを閉じる
            console.log('メニューを閉じます');
            var $closeButton = document.getElementById('sidemenuClose');
            if($closeButton && s2b($settings_exit_auto)){
                $closeButton.click();
                if( !(document.getElementById('sidemenu').classList.contains('sidemenu-close')) ){
                    document.getElementById('sidemenu').classList.add('sidemenu-close');
                }
                if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
                    document.getElementById('pageMain').classList.add('sidemenu-hide');
                }
                if( !(document.getElementById('pageMain').classList.contains('sidemenu-hide')) ){
                    document.getElementById('pageMain').classList.add('sidemenu-hide');
                }
                console.log('メニューを閉じました');
            }
            console.log('Webページ読み込み完了まで待機しています');
            window.addEventListener('load', function(){
                console.log('Webページを読み込みました');
                //提出済み課題
                //将来的にはhas()を使用
                if(location.href == 'https://scombz.shibaura-it.ac.jp/portal/home' && $settings_finished_report){
                    console.log('提出済課題非表示 実行開始');
                    const $finRepList = document.querySelectorAll('.portal-subblock-mark-finish');
                    for(const $finRep of $finRepList){
                        $finRep.parentNode.parentNode.style.display = 'none';
                    }
                    console.log('提出済課題非表示 実行終了');
                }
                //横メニュー
                if(s2b($settings_submenu)){
                console.log('サイドメニューのスタイル変更を開始します');
                //head追加
                const $head = document.head;
                $head.insertAdjacentHTML('beforeEnd',`
                <style>
                    .sidemenu-hide{
                        min-width:371px;
                    }
                    .page-main #graylayer{
                            width:100%;
                            height:100%;
                            position:fixed;
                            z-index:11;
                            background:#000000;
                            opacity:0.5;
                            visibility:visible;
                            transition:opacity 300ms;
                        }
                    .sidemenu-hide.page-main #graylayer{
                            width:100%;
                            height:100%;
                            position:fixed;
                            z-index:11;
                            background:#000000;
                            opacity:0;
                            visibility:hidden;

                    }
                    .page-main .usFooter{
                        position:fixed;
                        bottom:0;
                        right:5px;
                        font-size:8px;
                        color:#000000;
                        visibility:visible;
                        z-index:15;
                    }
                    .sidemenu-hide.page-main .usFooter{
                        visibility:hidden;
                    }
                    
                    .sidemenu-open.hamburger-icon{
                        display:block;
                    }
                    .sidemenu-pull,.sidemenu-link,.sidemenu-head,.sidemenu-close{
                        width:301px;
                    }
                    .mainmenu-head-logo{
                        position:fixed;
                        text-align:center;
                        top:2px;
                        width:55px;
                        height:55px;
                        border-radius: 27.5px;
                        visibility:hidden;
                    }
                    .mainmenu-head-logo:hover{
                        background:#e0e0e0;
                    }
                    
                    @media (min-width:900px){
                        .mainmenu-head-logo{
                            left:calc(50vw - 27.5px);
                            visibility:visible;
                        }
                        .page-main .subtimetableBody{
                            position:fixed;
                            Top:10px;
                            right:10px;
                            font-size:15px;
                            color:#000000;
                            visibility:visible;
                            z-index:15;
                            display:visible;
                            opacity:1;
                            transition:opacity 300ms;
                        }
                        .sidemenu-hide.page-main .subtimetableBody{
                            opacity:0;
                            visibility:hidden;
                            transition:opacity 300ms;
                        }
                    }
                    @media (max-width:899px){
                        .subtimetableBody{
                            opacity:0;
                            visibility:hidden;
                            transition:opacity 300ms;
                        }
                    }
                    img.scombz-icon{
                        object-fit: cover;
                        width:66%;
                        height:100%;
                        object-position: 1% 100%;
                    }
                    @media(max-width:480px){
                        .mainmenu-head-logo{
                            right:0px;
                        }
                        .sidemenu-pull,.sidemenu-link,.sidemenu-head,.sidemenu-close{
                            width:280px;
                        }
                        .pagetop-head{
                            top:0;
                            left:195px;
                            width:calc(100vw - 195px);
                            height:100%;
                            position:absolute;
                            display:block;
                        }
                    }
                    .sidemenu-close {
                        transform: translateX(-100%);
                    }
                    
                </style>
                `);
                //ヘッダ中心にアイコンを表示 ヘッダをクリックで一番上へ
                const $pageHead = document.getElementById('page_head');
                $pageHead.insertAdjacentHTML('afterBegin',`<a href="javascript:void(0);" onclick='javascript:window.scrollTo({ top: 0, behavior: "smooth" });' class="pagetop-head"></a>`);
                $pageHead.insertAdjacentHTML('beforeEnd',`
                <a href="/portal/home"><div class="mainmenu-head-logo"><img src="/sitelogo" class="scombz-icon" alt="Top"></div></a>
                `);
                //サイドメニューおよびメインカラムの設定
                const $sidemenu = document.getElementById('sidemenu');
                    $sidemenu.style.boxShadow = ('none');
                    $sidemenu.style.overflowY = ('auto');
                    $sidemenu.style.position = ('fixed');
                    $sidemenu.style.top = ('0');
                    $sidemenu.style.left = ('0');
                    $sidemenu.style.float = ('left');
                    $sidemenu.style.zIndex = ('100');
                const $pageMain = document.getElementById('pageMain');
                    $pageMain.style.position = ('absolute');
                    $pageMain.style.top = ('0');
                    $pageMain.style.left = ('0');
                    $pageMain.style.width = '100vw';
                    $pageMain.style.minWidth = ('371px');
                //サイドメニューをモノトーンに
                const $menuIconList = document.querySelectorAll('.sidemenu-icon');
                for (const $menuIcon of $menuIconList){
                    //通常時
                    $menuIcon.style.background = '#ffffff';
                    $menuIcon.addEventListener('mouseleave', function(){
                        $menuIcon.style.background = '#ffffff';
                    })
                    //マウスホバー時
                    $menuIcon.addEventListener('mouseover', function(){
                        $menuIcon.style.background = '#f0f0f0';
                    })
                }
                //サイドメニューのヘッドサイズを小さくする
                const $sidemenuHead = document.querySelector('.sidemenu-head');
                    $sidemenuHead.style.height = '60px';
                //サイドメニューのロゴ小さく
                const $sidemenuLogo = document.querySelector('.sidemenu-logo');
                    $sidemenuLogo.style.height = '60px';
                    $sidemenuLogo.style.width = '115px';
                    $sidemenuLogo.style.paddingTop = '0px';
                    $sidemenuLogo.style.margin = '0 auto';
                //サイドメニューの開閉ボタンを変える
                var $closeButton = document.getElementById('sidemenuClose');
                    $closeButton.classList.add('hamburger-icon');
                    $closeButton.innerHTML = '<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>';
                    $closeButton.style.left = '0';
                    $closeButton.style.top = '0';
                console.log('サイドメニューのスタイルを変更しました');

                //LMS取得
                var $subTimetable='';
                if(s2b($settings_additional_lms)){
                    if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
                        console.log('LMSを取得開始します');
                        const $courseList = document.querySelectorAll('.timetable-course-top-btn');
                        if($courseList[0]){
                            function han2Zenkaku($str) {
                                return $str.replace(/[０-９]/g, function(s) {
                                    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                                });
                            }
                            function jigenInt($str){
                                return han2Zenkaku($str.charAt(0));
                            }
                            //JSON生成
                            let $timetableData = '[';
                            for(const $course of $courseList) {
                                $timetableData+="{";
                                for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                                    if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                                        $timetableData+='"day":'+$yobicolNum+`,`;
                                        $timetableData+='"time":'+jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML)+',';
                                        break;
                                    }
                                    if($yobicolNum == 6){
                                        $timetableData+=`"day":-1,"time":-1,`; // 曜日時限不定履修
                                    }
                                }
                                $timetableData+= '"id":"'+$course.getAttribute("id")+`",`;
                                $timetableData+= '"name":"'+$course.innerHTML+`"},`;
                            }
                            $timetableData+='{"day":-2}]';
                            console.log('LMSを取得しました\n\n'+$timetableData);
                            localStorage.setItem("udai:timetableDataList",encodeURIComponent($timetableData));
                            console.log('LocalStorageに保存しました');
                            //JSON生成完了
                        }
                    }
                    //グレーレイヤーの追加
                    //LMS表示
                    console.log('グレーレイヤーを追加します');
                    if(localStorage.getItem("udai:timetableDataList") == null) {
                        console.log('LocalStrageのアクセスに失敗しました');
                        $pageMain.insertAdjacentHTML('beforeEnd',`
                        <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
                        <p class="usFooter">ScombZ Utilities ver.${$$version}<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
                        `);
                    }else{
                        const $timetableDataStr = decodeURIComponent(localStorage.getItem("udai:timetableDataList"));
                        console.log('LocalStrageのアクセスに成功しました\nJSONファイルにparseします');
                        const $timetableData = JSON.parse($timetableDataStr);
                        console.log('JSONファイルを読み込みました'+$timetableDataStr);
                        $subTimetable =`
                        <style type="text/css">
                            .SubTimetable {
                                text-align:center;
                                decolation:none;
                                font-size:100%;
                            }
                            @media(max-width:1281px){
                                .SubTimetable {
                                    font-size:90%;
                                }
                            }
                            td.SubTimetable , th.SubTimetable {
                                width:calc((100vw - 300px)/7);
                                height:4vh;
                                background:#EDF3F7;
                            }
                            td.SubTimetable:nth-child(1) , th.SubTimetable:nth-child(1) {
                                width:30px;
                                background:#ec9c93;
                            }
                            th.SubTimetable{
                                background:#bea87b;
                                height:30px;
                            }
                            a.SubTimetable{
                                display:block;
                                width:100%;
                                height:100%;
                                min-height:40px;
                            }
                            a.SubTimetable:hover{
                                background:rgba(206, 213, 217,0.5);
                            }
                            .subtimetableBody{
                                background:rgba(255,255,255,0.5);
                            }
                        </style>
                        <div class="subtimetableBody">
                        <table class="SubTimetable">
                            <thead>
                                <tr>
                                    <th class="SubTimetable"></th>
                                    <th class="SubTimetable">月</th>
                                    <th class="SubTimetable">火</th>
                                    <th class="SubTimetable">水</th>
                                    <th class="SubTimetable">木</th>
                                    <th class="SubTimetable">金</th>
                                    <th class="SubTimetable">土</th>
                                </tr>
                            </thead>
                            <tbody>`;
                        console.log('LMSを表示します');
                        let num=0;
                        //通常授業
                        for(let i=0; i<7; i++){ //i=時限
                            $subTimetable+='<tr>';
                            for(let j=0; j<7; j++){ //j=曜日
                                let $subjData = (j==0) ? i+1 : '';
                                if( $timetableData[num].day == j && $timetableData[num].time == i+1 ){
                                    //2Q、4Qのことを考える
                                    if( $timetableData[num+1].day == j && $timetableData[num+1].time == i+1 ){
                                        console.log('クォーター制授業を検出しました 曜日:'+j+' 時間:'+i);
                                        $subjData = `
                                        <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num].name}</span></a>
                                        <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num+1].id}" class="SubTimetable" style="color:#000000;text-decoration:none;margin-top:1px;border-top:1px solid #ccc; white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num+1].name}</span></a>`;
                                        num++;
                                    }else{//2Q,4Qが存在しないとき
                                        console.log('通常授業を検出しました 曜日:'+j+' 時間:'+i);
                                        $subjData = `<a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a>`;
                                    }
                                    num++;
                                }            
                                $subTimetable+=`<td class="SubTimetable">${$subjData}</td>`;
                            }
                            $subTimetable+='</tr>';
                        }
                        $subTimetable += `</tbody></table>`;
                        //曜日時間不定授業
                        if($timetableData[num].day != -1){
                            console.log('読み取り完了 課外授業なし day:'+$timetableData[num].day);
                        }else{
                            console.log('曜日時間不定授業・集中講座を検出しました');
                            $subTimetable+= `<table class="SubTimetable" style="margin-top:10px;">
                            <tr class="SubTimetable">
                                <th class="SubTimetable">その他の授業</th>
                            </tr>`;
                            for(;$timetableData[num].day == -1;num++){
                            $subTimetable+=`
                                <tr>
                                    <td class="SubTimetable" style="background:#EDF3F7;width:calc((100vw - 300px)/5);height:4vh;"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a></td>
                                </tr>`;
                            }
                            $subTimetable+=`</table>`;
                            console.log('読み取り完了 課外授業あり day:'+$timetableData[num].day);
                        }
                        $subTimetable+=`</div>`;
                        console.log('時間割の生成に成功しました\nコマ数:'+num);
                        $pageMain.insertAdjacentHTML('beforeEnd',`
                        <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
                        <p class="usFooter">ScombZ Utilities ver.${$$version}<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
                        `+$subTimetable);
                    }
                }else{
                    $pageMain.insertAdjacentHTML('beforeEnd',`
                    <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
                    <p class="usFooter">ScombZ Utilities ver.${$$version}<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
                    `);
                }
                console.log('グレーレイヤーの生成を完了しました');

                
                //お知らせを変更する
                const $sidemenuInfoList = document.querySelectorAll('.sidemenu-link.info-icon');
                if($sidemenuInfoList[0])
                    $sidemenuInfoList[0].style.borderTop = '1px solid #ccc';
                /* 2022/4/27 ScombZの仕様変更により標準仕様となった
                const $sidemenuInfoList = document.querySelectorAll('.sidemenu-link.info-icon');
                if($sidemenuInfoList[0]){
                    //お知らせページへの遷移へと変更
                    $sidemenuInfoList[0].innerHTML=`お知らせ`;
                    $sidemenuInfoList[0].setAttribute('href', 'https://scombz.shibaura-it.ac.jp/portal/home/information/list');
                    $sidemenuInfoList[0].removeAttribute("onclick");
                    $sidemenuInfoList[0].style.borderTop = '1px solid #ccc';
                    //2,3個目のお知らせメニューを削除
                    for (let i=1; i < $sidemenuInfoList.length; i++){
                        $sidemenuInfoList[i].remove();
                    }
                }
                */

                //各メニューの縦幅をすべて50pxにする
                const $sidemenuLinkList = document.querySelectorAll('.sidemenu-link');
                if($sidemenuLinkList[0]){
                    for (const $sidemenuLink of $sidemenuLinkList){
                        $sidemenuLink.style.height = '50px';
                    }
                }
                const $sidemenuPullList = document.querySelectorAll('.sidemenu-pull');
                if($sidemenuPullList[0]){
                    for (const $sidemenuPull of $sidemenuPullList){
                        $sidemenuPull.style.height = '53px';
                        $sidemenuPull.style.padding = '17px 40px 12px 81px';
                    }
                }
                //ページトップボタン
                const $pagetopBtn = document.querySelector('.page-top-btn');
                if($pagetopBtn){
                    $pagetopBtn.remove();
                }
            }
            //シラバスリンク
            if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=') && s2b($settings_syll_btn)){
                console.log('授業別ページを検出しました\nシラバスのデータと連携します');
                const $courseTitle = document.querySelector('.course-title-txt');
                if($courseTitle){
                    console.log($courseTitle.innerHTML);
                    const $nameInt = $courseTitle.innerHTML.indexOf(' ', $courseTitle.innerHTML.indexOf(' ') + 2);
                    const $courseName = $courseTitle.innerHTML.slice($nameInt+1);
                    let $courseNameStr ='';
                    let $courseNameStrEnc ='';
                    if( $courseName.search(/[０-９]|[0-9]/) > 0){
                        $courseNameStr = $courseName.slice(0,$courseName.search(/[０-９]|[0-9]/));
                        $courseNameStr = $courseNameStr + ' ' +$courseName.slice($courseName.search(/[０-９]|[0-9]/));
                        $courseNameStrEnc = EscapeEUCJP($courseNameStr);
                    }else{
                        $courseNameStr = `subject:"${$courseName}"`;
                        $courseNameStrEnc = `%2B${EscapeEUCJP($courseNameStr)}`;
                    }
                    console.log('授業検索名を決定しました['+$courseNameStr+']');
                    
                    if($settings_year == null || $settings_fac == null || $settings_fac == null || $settings_year == null){
                        $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<span style="color:red;">シラバス表示をするには、学年と学部を設定してください</span>`);
                    }else{
                        console.log("EUC-JPに変換中");
                        $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<a href="http://syllabus.sic.shibaura-it.ac.jp/namazu/namazu.cgi?ajaxmode=true&query=${$courseNameStrEnc}&whence=0&idxname=`+$settings_year+`%2F`+$settings_fac+`&max=20&result=normal&sort=score#:~:text=%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C,-%E5%8F%82%E8%80%83%E3%83%92%E3%83%83%E3%83%88%E6%95%B0"  target="_blank" rel="noopener noreferrer" class="btn btn-square btn-square-area btn-txt white-btn-color" style="margin-left:40px;margin-bottom:5px;">シラバスを表示</a>
                        <span style="margin-left:35px;margin-bottom:10px;font-size:60%;">※自動検索で関連付けているため、違う教科のシラバスが開かれることがあります。</span>
                        `);
                    }
                    console.log("シラバスリンクの挿入が完了しました");
                }
            }
            console.log('すべての機能の実行が完了しました');
        });
    }
    //シラバス適用
    //シラバス適用
    if(document.domain == "syllabus.sic.shibaura-it.ac.jp"){
        if(location.href.includes("namazu") && location.href.includes("ajaxmode=true")){
            console.log("ScombZからのシラバスへの遷移を検出しました")
            const $namazuHeader = document.querySelector(".namazu-result-header");
            if(location.href.includes("%2Bsubject") && document.getElementsByTagName("dt")[15]){
                //複数あった時の処理
                if($namazuHeader){
                    $namazuHeader.setAttribute('id', 'searchResult');
                    $namazuHeader.insertAdjacentHTML('beforeEnd',`
                        <div style="width:100%;">
                        <h1>複数のシラバスデータを検出しました</h1>
                        <h3>以下の一覧から該当する科目を選択してください</h3>
                        </div>
                    `);
                    document.querySelector(".namazu-result-footer").insertAdjacentHTML('afterEnd',`
                    <div style="width:100%;height:50vh;">
                    </div>
                    `);
                    window.location.href = "#searchResult";
                }
            }else{
                //検索からの自動リンク
                const $sylSubjLink = document.getElementById("hit_1");
                const $sylSubDDTag = document.getElementsByTagName("a");
                if($sylSubjLink){
                    console.log("科目ページに遷移します by ID");
                    $sylSubjLink.click();
                }else if($sylSubDDTag[22]){
                    console.log("科目ページに遷移します by Tag");
                    window.location.href = $sylSubDDTag[22].innerHTML;
                }else{
                    console.log("科目が見つかりませんでした");
                    $namazuHeader.setAttribute('id', 'searchResult');
                    $namazuHeader.insertAdjacentHTML('beforeEnd',`
                    <div style="height:100vh;">
                    <h1>シラバスデータの取得に失敗しました</h1>
                    <h3>該当する科目が見つかりませんでした。お手数おかけしますが、シラバス内で直接お探しください。</h3>
                    <h3><a href="http://syllabus.sic.shibaura-it.ac.jp/">シラバスへ</a></h3>
                    </div>
                    `);
                    window.location.href = "#searchResult";
                }
            }
        }else if(location.href.includes("Matrix")){
            //見やすくする by とくめいっ！
            console.log("シラバスのスタイルを変更します");
            window.addEventListener('load', function(){
                const $list1 = document.querySelector(".table_sticky thead tr td");
                if($list1){
                    $list1.style.position = "static";
                    let li = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(1) th");
                    for (const l of li){
                        l.style.position = "static";
                    }
                }
                const $list2 = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(2) th");
                if($list2[0]){
                    for (const li2 of $list2){
                        li2.style.position = "static";
                    }
                }
                console.log("変更が完了しました");
            });
        }
    }
})();

/*USとChromeで違うゾーン*/
EscapeEUCJP=function(str){
    // EUC-JP に変換
    actual  = Encoding.convert(str.split('').map((v) => v.charCodeAt()), 'EUCJP', 'UNICODE');
    // URL用にエスケープ
    return Encoding.urlEncode(actual);
}
/*USとChromeで違うゾーン*/