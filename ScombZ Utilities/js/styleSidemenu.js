/* ScombZ Utilities */
/* styleSidemenu.js */
function styleSidemenu() {
    'use strict';
    if (document.getElementById('sidemenu') === null) {
        return;
    }
    console.log('サイドメニューのスタイル変更を開始します');
    // head追加
    const $head = document.head;
    $head.insertAdjacentHTML(
        'beforeEnd',
        `
    <style type="text/css">
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
                width:calc(100% - 195px);
                height:100%;
                position:absolute;
                display:block;
            }
        }
        .sidemenu-close {
            transform: translateX(-100%);
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt{
            background:#fff;
        }
        .sidemenu-link.sidemenu-lms-link.sidemenu-link-txt:hover{
            background:#f0f0f0;
        }
        #sidemenu{
            box-shadow:none;
            overflow-y:auto;
            position:fixed;
            top:0;
            left:0;
            float:left;
            z-index:100;
        }
        #pageMain{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            minW-width:371px;
        }
        .sidemenu-head{
            height:60px;
        }
        .sidemenu-logo{
            height:60px;
            width:115px;
            padding-top:0;
            margin:0 auto;
        }
        #sidemenuClose{
            left:0;
            top:0;
        }
        .sidemenu-link{
            height:50px;
        }
        .sidemenu-pull{
            height:53px;
            padding:17px 40px 12px 81px;
        }
    </style>
    `
    );
    // ヘッダ中心にアイコンを表示 ヘッダをクリックで一番上へ
    const $pageHead = document.getElementById('page_head');
    if ($pageHead) {
        $pageHead.insertAdjacentHTML(
            'afterBegin',
            `<a href="javascript:void(0);" onclick='javascript:window.scrollTo({ top: 0, behavior: "smooth" });' class="pagetop-head"></a>`
        );
        $pageHead.insertAdjacentHTML(
            'beforeEnd',
            `
        <a href="/portal/home" id="pagetop-head-logo"><div class="mainmenu-head-logo"><img src="/sitelogo" class="scombz-icon" alt="Top"></div></a>
        `
        );
    }
    // サイドメニューの開閉ボタンを変える
    const $closeButton = document.getElementById('sidemenuClose');
    if ($closeButton) {
        $closeButton.classList.add('hamburger-icon');
        $closeButton.innerHTML =
            '<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>\n<div class="hamburger-line"></div>';
    }
    // お知らせ、アンケートを直リンクにする
    // お知らせ(ついでにborder-topもつけてスタイル直す)
    const $infoButton = document.querySelector(
        '.sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.info-color.sidemenu-icon.info-icon'
    );
    if ($infoButton) {
        $infoButton.href =
            'https://scombz.shibaura-it.ac.jp/portal/home/information/list';
        $infoButton.style.borderTop = '1px solid #CCC';
        $infoButton.removeAttribute('onclick');
    }
    // アンケート
    const $questionnaire = document.querySelector(
        '.sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.questionnaire-color.sidemenu-icon.questionnaire-icon'
    );
    if ($questionnaire) {
        $questionnaire.href =
            'https://scombz.shibaura-it.ac.jp/portal/surveys/list';
        $questionnaire.removeAttribute('onclick');
    }
    // お知らせ、アンケートが表示されてないとき追加する
    const $comBtn = document.querySelector(
        '.sidemenu-link.sidemenu-lms-link.sidemenu-link-txt.community-search-color.sidemenu-icon.search-icon'
    );
    if ($comBtn && !$infoButton && !$questionnaire) {
        $comBtn.insertAdjacentHTML(
            'afterEnd',
            `
        <br>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt info-color sidemenu-icon info-icon " href="https://scombz.shibaura-it.ac.jp/portal/home/information/list" style="height: 50px;border-top: 1px solid #CCC;">お知らせ</a>
        <a class="sidemenu-link sidemenu-lms-link sidemenu-link-txt questionnaire-color sidemenu-icon questionnaire-icon" href="https://scombz.shibaura-it.ac.jp/portal/surveys/list" style="height: 50px;">アンケート</a>
        `
        );
    }
    console.log('サイドメニューのスタイルを変更しました');
    return;
}
