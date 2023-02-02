function autoEvaluation() {
    chrome.storage.local.get({
        devMode: false,
        autoEvaluationFlag: -1,
        autoEvaluationUrls: []
    },function(items){
        if(items.devMode){
            // 一覧取得
            if(location.href.includes("https://scombz.shibaura-it.ac.jp/portal/surveys/list")){
                document.querySelector("#pageContents > div:nth-child(2)").insertAdjacentHTML("afterBegin",`
                    <div style="font-weight:bold;font-size:120%;text-align:center;box-shadow: 0 0 4px 4px #0002;padding: 10px;background-color:#fff;width:fit-content;margin: 0 auto;">
                        <a href="javascript:void(0);" id="utl-auto-evaluate">Auto Evaluate</a>
                    </div>
                `);
                document.getElementById("utl-auto-evaluate").addEventListener("click",function(){
                    if(confirm("実行を開始するとしばらく画面が自動的に遷移します。\n処理が終了するまで、\nこのブラウザで他のページの閲覧等を行わないでください。\n実行しますか？")){
                        const autoEvaluationUrls = [];
                        for(const row of document.querySelectorAll("#portalSurveysForm > .contents-list > .result-list")){
                            if( row.querySelector(".survey-list-title .template-name").innerHTML.includes("_自己評価アンケート") && row.querySelectorAll(".portal-surveys-status-end-color").length === 0 && row.querySelectorAll(".portal-surveys-status-takeend-color").length === 0){
                                autoEvaluationUrls.push(`https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?idnumber=${row.querySelector("#listIdnumber").value}&surveyId=${row.querySelector("#listSurveyId").value}`);
                            }
                        }
                        if(autoEvaluationUrls.length === 0){
                            alert("回答可能な自己評価アンケートが見つかりませんでした。");
                            return;
                        }
                        chrome.storage.local.set({
                            autoEvaluationUrls: autoEvaluationUrls,
                            autoEvaluationFlag: 1
                        },function(){
                            location.href = autoEvaluationUrls[0];
                        });
                    }
                })
            }
            // アンケ自動回答
            if(items.autoEvaluationFlag > 0 && items.autoEvaluationUrls.length >= items.autoEvaluationFlag && location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?idnumber=")){
                const sbody = document.getElementById("surveysTakeForm");
                if(sbody){
                    for(const radio of sbody.querySelectorAll(".survey-question-radio")){
                        if(radio.value == "3"){
                            radio.checked = true;
                        }
                    }
                    for(const input of sbody.querySelectorAll('input[type="text"]')){
                        input.value = "0";
                    }
                    for(const textarea of sbody.querySelectorAll('textarea')){
                        textarea.value = "　";
                    }
                }
                setTimeout(function(){
                    $('#surveysTakeForm').submit();
                },400);
            }
            else if(items.autoEvaluationFlag > 0 && items.autoEvaluationUrls.length >= items.autoEvaluationFlag && location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?complete")){
                setTimeout(function(){
                    location.href = items.autoEvaluationUrls[items.autoEvaluationFlag];
                })
            }
            else if(items.autoEvaluationFlag > 0 && items.autoEvaluationUrls.length >= items.autoEvaluationFlag && location.href =="https://scombz.shibaura-it.ac.jp/lms/course/surveys/take"){
                chrome.storage.local.set({
                    autoEvaluationFlag: (items.autoEvaluationFlag+1)
                },function(){
                    setTimeout(function(){
                        $('#surveysTakeForm').submit();
                    },400);
                })
            }
            else if(items.autoEvaluationFlag > 0 && items.autoEvaluationUrls.length < items.autoEvaluationFlag){
                chrome.storage.local.set({
                    autoEvaluationFlag: -1,
                    autoEvaluationUrls: []
                },function(){
                    alert("自己評価アンケート自動回答が完了しました");
                })
            }
        }
    });
}