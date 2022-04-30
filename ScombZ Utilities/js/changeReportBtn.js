/* ScombZ Utilities */
/* changeReportBtn.js */
function changeReportBtn(){
    'use strict';
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/report/submission")){
        document.head.insertAdjacentHTML('beforeEnd',`
        <style>
        .block-under-area .block-under-area-btn{
            margin:0 auto;
        }
        .block-under-area .block-under-area-btn .btn-color{
            display: grid;
            place-items: center;
            margin:10px auto;
            width:100%;
            min-width:140px;
            min-height:50px;
            box-shadow:none;
        }
        .block-under-area .block-under-area-btn #backPage,#back{
            color:#545555;
            background:#fff;
            font-size:90%;
            border:1px solid #ccc;
            min-height:40px;
        }
        .block-under-area .block-under-area-btn #backPage,#back:hover{
            border:1px solid #999;
            box-shadow:0 0 3px #888;
        }
        .block-under-area .block-under-area-btn #submitButton,#report_submission_btn{
            color:#fff;
            background:#4892e0;
            font-weight:bold;
            font-size:110%;
            border:1px solid #ccc;
        }
        .time-select-btn{
            padding:2px 10px;
        }
        </style>
        `);
    const $submitBtnArea = document.querySelector('.block-under-area-btn');
    $submitBtnArea.style.maxWidth = "450px";
    if($submitBtnArea.childElementCount == 2){
        $submitBtnArea.firstElementChild.id = "back";
        $submitBtnArea.appendChild($submitBtnArea.children[0]);
    }
    document.querySelector('.page-directlink').remove();
    }
    return;
}