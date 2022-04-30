/* ScombZ Utilities */
/* styleSidemenu.js */
function styleSidemenu(){
    'use strict';
    if(document.getElementById('page_head') === null){
        return;
    }
    console.log('サイドメニューのスタイル変更を開始します');
    //head追加
    const $head = document.head;
    $head.insertAdjacentHTML('beforeEnd',`
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
    console.log('サイドメニューのスタイルを変更しました');
    return;
}