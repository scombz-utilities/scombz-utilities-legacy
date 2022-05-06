/* ScombZ Utilities */
/* changeReportBtn.js */
function changeReportBtn(){
    'use strict';
    createTimeTempBtn();
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
function createTimeTempBtn(){
    'use strict';
    console.log('createTimeTempBtn');
    const $timeBoxes = document.getElementsByName("creationTime");
    for(const $timeBox of $timeBoxes){
        $timeBox.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeEnd',`
        <style>
        .minBtn{
            margin:2px 0;
            padding:2px 4px;
            min-width:50px;
            font-size:14px;
        }
        .minBtnArea{
            width:100%;
        }
        </style>
        <div class="minBtnArea">
        <input type="button" value="10分" class="minBtn" style="margin-left:25px"/>
        <input type="button" value="30分" class="minBtn"/>
        <input type="button" value="60分" class="minBtn"/>
        <input type="button" value="100分" class="minBtn"/>
        <input type="button" value="200分" class="minBtn"/>
        <input type="button" value="300分" class="minBtn"/>
        </div>
        `);
        const $minBtns = document.getElementsByClassName("minBtn");
        const mins=[10,30,60,100,200,300];
        for(let i = 0; i < $minBtns.length; i++) {
            $minBtns[i].addEventListener("click",function() {
                $timeBox.value = mins[i%($minBtns.length/2)];
            });
        }
    }
    return;
}
