/* ScombZ Utilities */
/* styleSurveys.js */
//アンケート改善
function styleSurveys(){
    'use strict';
    if (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/surveys/take")){
        //アンケート提出確認画面・アンケート画面
        const $submitBtnArea = document.querySelector('.block-under-area-btn');
        if($submitBtnArea){
            console.log('アンケート画面');
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
            .block-under-area .block-under-area-btn .backbutton{
                color:#545555;
                background:#fff;
                font-size:90%;
                border:1px solid #ccc;
                min-height:40px;
            }
            .block-under-area .block-under-area-btn .backbutton:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .block-under-area .block-under-area-btn .submit{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            .textarea-add-box{
                resize: vertical;
            }
            </style>
            `);
            $submitBtnArea.style.maxWidth = "450px";
            //アンケート提出確認画面
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.children[1].classList.add("submit");
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
        }
    }
}
