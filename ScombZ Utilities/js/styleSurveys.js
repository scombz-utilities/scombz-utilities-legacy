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
    //アンケート提出完了画面
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?complete")){
        setTimeout(function(){
            getSurveysByAjax();
        },500);
    }
}


//アンケート一覧に過去のアンケートを追加
function pastSurvey(){
    if(location.href === "https://scombz.shibaura-it.ac.jp/portal/surveys/list"){
        chrome.storage.local.get({
            pastSurveyList: []
        },function(items){

            let pastSurveyList = `
            <style>
            .past-survey-list-link{
                color:#777
            }
            </style>
            `;
            for(const pastSurvey of items.pastSurveyList){
                pastSurveyList += `
                <div
                    class="result-list contents-display-flex-exchange-sp contents-display-flex-padding-sp template-list-sp">
                    <div class="survey-list-title title-text-height">
                        <a href="${pastSurvey.suvurl}" class="past-survey-list-link"><span class="template-name">${pastSurvey.title}</span></a>
                    </div>
                    <div class="survey-list-update">
                        <span>${pastSurvey.startline}</span>
                        <span>～</span>
                        <span>${pastSurvey.deadline}</span>
                    </div>
                    <div class="survey-list-resultdate">
                    </div>
                    <div class="survey-list-address">
                        <span>${pastSurvey.course}</span>
                    </div>
                </div>
                `;
            }
            const insertPastSurvery = setInterval(
                function(){
                    const insertingNode = document.getElementById("surveylist").parentNode.parentNode.parentNode;
                    if(insertingNode){
                        clearInterval(insertPastSurvery);
                        insertingNode.insertAdjacentHTML("afterEnd",
                            `
                            <div class="block flex clearfix">
                                <div class="block-title survey-color block-cube">
                                    <div class="block-title-txt cube-block-title-txt course-top-icon survey-icon">過去のアンケート一覧</div>
                                </div>
                                <div class="block-contents">
                                    <div class="contents-detail">
                                        <div>
                                            <div>
                                                <div
                                                    class="contents-list contents-display-flex contents-tag contents-header-txt sp-contents-hidden">
                                                    <div class="survey-list-title bold-txt">アンケートタイトル</div>
                                                    <div class="survey-list-update bold-txt">アンケート期間・期限</div>
                                                    <div class="survey-list-resultdate bold-txt">結果公開期間</div>
                                                    <div class="survey-list-address bold-txt">登録部署</div>
                                                    <div class="survey-list-btn bold-txt"></div>
                                                </div>
                                                <form>
                                                    <div class="contents-list">
                                                        ${pastSurveyList}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `);
                        console.log("過去アンケート挿入完了");
                    }
                }
            ,300);
        });
    }
}