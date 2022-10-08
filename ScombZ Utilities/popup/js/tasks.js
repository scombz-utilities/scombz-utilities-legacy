/* ScombZ Utilities */
/* tasks.js */

function checkGetTime(reacquisitionMin){
    return new Promise((resolve, reject) => {
        const nowUnix = Date.now();
        chrome.storage.local.get({
            TaskGetTime: 0,
        }, function(item){
            if (Number(item.TaskGetTime) + reacquisitionMin * 60000 > Number(nowUnix) ) {
                reject(new TypeError("Please Wait"));
                return;
            }
            resolve();
        });
    });
}

function fetchTasks(){
    return new Promise((resolve, reject) => {
        const nowUnix = Date.now();
        fetch("https://scombz.shibaura-it.ac.jp/lms/task", {
            method: "GET",
            cache: "no-store",
            credentials: "include",
        })
        .then(res => {
            if (res.redirected) {
                throw new TypeError("Unauthorized");
            }

            return res.text();
        })
        .then(docString => {
            const taskListObj = [];
            const parser = new DOMParser();
            let doc = parser.parseFromString(docString, "text/html");

            const items = doc.querySelectorAll(".result_list_line");

            for(let i = 0; i < doc.querySelectorAll(".result_list_line .course").length; i++){
                const taskObj = {};
                taskObj.course   = items[i].querySelector(".tasklist-course").textContent;
                taskObj.title    = items[i].querySelector(".tasklist-title a").textContent;
                taskObj.link     = items[i].querySelector(".tasklist-title a").getAttribute("href");
                taskObj.id       = taskObj.link.includes("idnumber=") && taskObj.link.slice(taskObj.link.indexOf("idnumber=")+9).replace(/&|Id=/g,'');
                taskObj.deadline = items[i].querySelector(".tasklist-deadline .deadline").textContent;
                if(!taskObj.link.includes("https://scombz.shibaura-it.ac.jp")){
                    taskObj.link = "https://scombz.shibaura-it.ac.jp" + taskObj.link;
                }
                taskListObj.push(taskObj);
            }
            if(!taskListObj[0]){
                if(doc.querySelector(".no-data")){
                    taskListObj.push({
                        data: null
                    });
                }else{
                    taskListObj.push({
                        course: "取得ERROR",
                        title: "課題一覧ページ",
                        link: "https://scombz.shibaura-it.ac.jp/lms/task",
                        deadline: ""
                    });
                }
            }

            chrome.storage.local.set({
                TaskGetTime: nowUnix,
                tasklistData: encodeURIComponent(JSON.stringify(taskListObj))
            }, () => {
                console.log("課題一覧と現在時刻をChromeLocalStorageに保存しました");
                resolve(taskListObj);
            });
        })
        .catch(err => {
            reject(err);
        });
    });
}

function fetchSurveys(){
    return new Promise((resolve, reject) => {
        const nowUnix = Date.now();
        fetch("https://scombz.shibaura-it.ac.jp/portal/surveys/list", {
            method: "GET",
            cache: "no-store",
            credentials: "include",
        })
        .then(res => {
            if (res.redirected) {
                throw new TypeError("Unauthorized");
            }

            return res.text();
        })
        .then(docString => {
            const taskListObj = [];
            const pastSurveyList = [];
            const parser = new DOMParser();
            let doc = parser.parseFromString(docString, "text/html");

            const items = doc.querySelectorAll("#portalSurveysForm .result-list");

            for(let i = 0; i < items.length; i++){
                if(items[i].getElementsByClassName(".portal-surveys-status-end-color").length > 0){
                    //  解答済はスキップ
                    continue;
                }
                const taskObj = {};
                taskObj.title     = items[i].querySelector(".survey-list-title .template-name").textContent;
                taskObj.course    = items[i].querySelector(".survey-list-address span").textContent;
                taskObj.startline = items[i].querySelectorAll(".survey-list-update span")[0].textContent;
                taskObj.deadline  = items[i].querySelectorAll(".survey-list-update span")[2].textContent;
                taskObj.id        = "survey" + items[i].querySelector("#listSurveyId").value;
                if(items[i].querySelector("#listIdnumber").getAttribute("value").length > 3){
                    taskObj.suvurl = `https://scombz.shibaura-it.ac.jp/lms/course/surveys/take?surveyId=${items[i].querySelector("#listSurveyId").value}&idnumber=${items[i].querySelector("#listIdnumber").value}`;
                }else{
                    taskObj.suvurl = `https://scombz.shibaura-it.ac.jp/portal/surveys/take?surveyId=${items[i].querySelector("#listSurveyId").value}`;
                }
                taskListObj.push(taskObj);
                pastSurveyList.push(taskObj);
            }

            chrome.storage.local.get({
                pastSurveyList: [],
                noticeSurvey: [
                    {
                        name: "ScombZ Utilities",
                        value: true,
                        url: "https://scombz.shibaura-it.ac.jp",
                    }
                ]
            }, function(item){
                const oldPastSurveyList = item.pastSurveyList;
                for(const taskObj of taskListObj){
                    if(!oldPastSurveyList[0]){
                        oldPastSurveyList.push(taskObj);
                        continue;
                    }
                    let flag = false;
                    for(const oldPastSurvey of oldPastSurveyList){
                        if(oldPastSurvey.id == taskObj.id){
                            flag = true;
                            break;
                        }
                    }
                    if(flag === false){
                        oldPastSurveyList.push(taskObj);
                    }
                }
                while(oldPastSurveyList.length > 100){
                    oldPastSurveyList.shift();
                }

                const readableSubjects = [];
                const surveyList = [];
                for(const subject of item.noticeSurvey){
                    if(subject.value === true){
                        readableSubjects.push({
                            name: subject.name,
                            url: subject.url,
                        });
                    }
                }

                for(const subject of taskListObj){
                    if(readableSubjects.findIndex((element) => element.name === subject.course) !== -1){
                        subject.url = readableSubjects[readableSubjects.findIndex((element) => element.name === subject.course)].url;
                        surveyList.push(subject);
                    }
                }

                chrome.storage.local.set({
                    surveyListData: encodeURIComponent(JSON.stringify(surveyList)),
                    pastSurveyList: oldPastSurveyList,
                }, function(){
                    console.log("アンケート一覧をChromeLocalStorageに保存しました");
                    resolve(surveyList);
                });
            });
        })
        .catch(err => {
            reject(err);
        });
    });
}

async function wait(ms) { 
    return new Promise((resolve) => setTimeout(resolve, ms)); 
}
