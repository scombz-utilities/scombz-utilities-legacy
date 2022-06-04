/* ScombZ Utilities */
/* changeReportBtn.js */
//提出ボタンのユーザビリティ向上
function changeReportBtn(){
    'use strict';
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/report/submission")){
        ////課題提出完了時にAjax通信をして課題一覧を更新
        if(document.querySelector(".contents-detail.contents-complete")){
            console.log("課題提出完了ページを検出");
            setTimeout(function(){
                getTaskLists(0);
            },500);
        }
        //時間入力バーを作る
        createTimeTempBtn();
        //自動入力ボタンを作る
        autoInputNameOnReport();
        //ボタンを変える
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
        .block-under-area .block-under-area-btn #backPage,#back,#backBtn{
            color:#545555;
            background:#fff;
            font-size:90%;
            border:1px solid #ccc;
            min-height:40px;
            box-shadow:none;
        }
        .block-under-area .block-under-area-btn #backPage:hover,#back:hover{
            border:1px solid #999;
            box-shadow:0 0 3px #888;
        }
        .block-under-area .block-under-area-btn #submitButton,#report_submission_btn,#report_submission_btn_bugfix{
            color:#fff;
            background:#4892e0;
            font-weight:bold;
            font-size:110%;
            border:1px solid #ccc;
        }
        .time-select-btn{
            padding:2px 10px;
        }
        #confirm_dialog{
            min-height:90px !important;
        }
        #confirm_dialog .block-popup{
            padding-bottom:none !important;
        }
        .ui-dialog-buttonset.commonDialogButtonArea{
            transform:translateX(6px);
        }
        </style>
        `);
    const $submitBtnArea = document.querySelector('.block-under-area-btn');
    if($submitBtnArea){
        $submitBtnArea.style.maxWidth = "450px";
        if($submitBtnArea.childElementCount == 2){
            $submitBtnArea.firstElementChild.id = $submitBtnArea.firstElementChild.id || "back";
            $submitBtnArea.appendChild($submitBtnArea.children[0]);
        }
    }
    if(document.querySelector('.page-directlink'))
        document.querySelector('.page-directlink').remove();
    }
    return;
}
//課題提出時の作成にかかった時間をマウス操作だけで入力できるようにボタンとバーを付ける
function createTimeTempBtn(){
    'use strict';
    console.log('createTimeTempBtn');
    const $timeBoxes = document.getElementsByName("creationTime");
    chrome.storage.local.get({
        sliderBarMax: 600,
        timesBtnValue: 'mode1'
    },function(items){
        const mins=[
            [10,30,60,100,200,300,600],
            [10,30,60,120,180,300,600],
            [10,20,30,60,90,120,180],
            [10,60,120,180,300,600,1000]
        ][Number(items.timesBtnValue.slice(-1))-1];
        for(const $timeBox of $timeBoxes){
            if($timeBox.type != "hidden"){
                $timeBox.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeEnd',`
                <style>
                .minBtn{
                    margin:2px 0;
                    padding:2px 4px;
                    min-width:50px;
                    font-size:14px;
                }
                .minBtnArea,minBarArea{
                    width:100%;
                }
                .min-slider-bar{
                    margin:10px 25px;
                    width:90%;
                    max-width:500px;
                }
                </style>
                <div class="minBtnArea">
                <input type="button" value="${mins[0]}分" class="minBtn" style="margin-left:25px"/>
                <input type="button" value="${mins[1]}分" class="minBtn"/>
                <input type="button" value="${mins[2]}分" class="minBtn"/>
                <input type="button" value="${mins[3]}分" class="minBtn"/>
                <input type="button" value="${mins[4]}分" class="minBtn"/>
                <input type="button" value="${mins[5]}分" class="minBtn"/>
                <input type="button" value="${mins[6]}分" class="minBtn"/>
                </div>
                <div class="minBarArea">
                <input type="range" min="0" max="${items.sliderBarMax}" step="30" class="min-slider-bar">
                </div>
                `);
                if(!$timeBox.value){
                    $timeBox.value = 0;
                }
                const $minBtns = document.getElementsByClassName("minBtn");
                const $minSliderBars = document.getElementsByClassName("min-slider-bar");
                for(let i = 0; i < $minBtns.length; i++) {
                    $minBtns[i].addEventListener("click",function() {
                        for(const $minSliderBar of $minSliderBars){
                            $minSliderBar.value = $timeBox.value = mins[i%($minBtns.length/2)];
                        }
                    });
                }
                for(const $minSliderBar of $minSliderBars){
                    $minSliderBar.value = $timeBox.value;
                    $minSliderBar.addEventListener('input',(e)=>{
                        $timeBox.value = $minSliderBar.value;
                    },false);
                }
            }
        }
    });
    return;
}
//課題提出時名前自動入力
function autoInputNameOnReport(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission") && document.getElementById("toDragAndDrop") && document.getElementById("report_submission_btn")){
        chrome.storage.local.get({
            defaultInputName: "AA00000_山田太郎"
        },function(items){
            const $nameInputs = document.querySelectorAll('input[name="fileName"]');
            console.log("自動入力ボタンを挿入します");
            for(const $nameInput of $nameInputs){
                $nameInput.previousElementSibling.insertAdjacentHTML("beforeEnd",`
                <input type="button" class="autoInputNameBtn" value="自動入力" onclick="javascript:this.parentNode.nextElementSibling.value='${items.defaultInputName}';"></input>
                `);
            }
        });
    }
}