// ==UserScript==
// @name         More-Useful-ScombZ
// @namespace    https://twitter.com/yudai1204
// @version      2.0.0
// @description  より快適なScombZライフのために、サイドメニュー、テスト、ログインを改善します
// @author       @yudai1204
// @match        https://scombz.shibaura-it.ac.jp/*
// @match        https://adfs.sic.shibaura-it.ac.jp/adfs/ls/*
// @icon         https://scombz.shibaura-it.ac.jp/favicon.ico
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    //ADFSスキップ
    if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
        const $adfsButton = document.getElementById("continueButton");
        if ($adfsButton) {
            $adfsButton.click();
        }
    }
    //ログインボタン自動クリック
    else if (location.href == 'https://scombz.shibaura-it.ac.jp/login'){
        window.onload = function(){
            document.querySelector('.login-btn:nth-child(1)').click();
        };

    }
    //その他
    else{
        //テスト改善
        if (location.href.indexOf('lms/course/examination/') && document.body.clientWidth > 480){

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
        }
        //メニューを閉じる
        const $closeButton = document.getElementById('sidemenuClose');
            $closeButton.click();
        window.onload = function(){
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
                    }
                    .sidemenu-hide.page-main .subtimetableBody{
                        visibility:hidden;
                    }
                }
                @media (max-width:899px){
                    .subtimetableBody{
                        visibility:hidden;
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
                $closeButton.classList.add('hamburger-icon');
                $closeButton.innerHTML = '<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>';
                $closeButton.style.left = '0';
                $closeButton.style.top = '0';
            //LMS取得
            if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
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
                        for(var $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                            if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                                $timetableData+='"day":'+$yobicolNum+`,`;
                                break;
                            }
                        }
                        $timetableData+='"time":'+jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML)+',';
                        $timetableData+= '"id":"'+$course.getAttribute("id")+`",`;
                        $timetableData+= '"name":"'+$course.innerHTML+`"},`;
                    }
                    $timetableData+='{"day":-1}]';
                    localStorage.setItem("udai:timetableDataList",encodeURIComponent($timetableData));
                    //JSON生成完了
                }
            }
            //グレーレイヤーの追加
            //LMS表示
            const $timetableDataStr = decodeURIComponent(localStorage.getItem("udai:timetableDataList"));
            const $timetableData = JSON.parse($timetableDataStr);
            console.log($timetableDataStr);
            let $subTimetable =`
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
                    padding:height:2vh 0;
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
            var num=0;
            for(var i=0; i<7; i++){ //i=時限
                $subTimetable+='<tr>';
                for(var j=0; j<7; j++){ //j=曜日
                    var $subjData = (j==0) ? i+1 : '';
                    if( $timetableData[num].day == j && $timetableData[num].time == i+1 ){
                        $subjData = `<a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=`+$timetableData[num].id+`" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">`+$timetableData[num].name+`</span></a>`;
                        num++;
                    }            
                    $subTimetable+=`<td class="SubTimetable">`+$subjData+`</td>`;
                }
                $subTimetable+='</tr>';
            }
            $subTimetable += `</tbody></table></div>`;
            $pageMain.insertAdjacentHTML('beforeEnd',`
            <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
            <p class="usFooter">ScombZ Utilities ver.2.0.0<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
            `+$subTimetable);
            //お知らせを変更する
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
        };
    }
})();