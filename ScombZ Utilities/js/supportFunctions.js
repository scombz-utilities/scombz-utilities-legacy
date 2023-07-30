/* ScombZ Utilities */
/* supportFunctions.js */
//1文字目だけを切り取って半角にしてくれる関数
function jigenInt($str){
    return han2Zenkaku($str.charAt(0));
}
function getNowPeriod(){
    'use strict';
    const $now = new Date();
    const $periodList = [
        540,
        650,
        800,
        910,
        1020,
        1130
        ]
        const $nowNum = Number($now.getHours())*60+Number($now.getMinutes());
        for (let i = 0; i < $periodList.length ; i++) {
            if( $nowNum >= $periodList[i] && $nowNum <= $periodList[i]+100 ){
                //授業時間内
                return i + Number($now.getDay())*10;
            }
        }
        return -1;
}
//課題一覧のアンケートからリンクしたときにアンケートまでスクロールしてくれるようにする関数
function surveyLinkScroll() {
    if (location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?") && location.href.includes("questionnaire")){
        setTimeout(function(){
            window.location.href = ("#questionnaire");
        },300);
    }
}

//現在のページの科目名を返してくれる関数
function getCourseTitle(){
    const courseTitle = document.querySelector(".course-title-txt").textContent
            .replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/`/g, "&#x60;");
    const courseTitleItems = /(.+)\s([0-9]{2}[A-Z]{2}[0-9]{6})\s(.+)/.exec(courseTitle);
    return courseTitleItems[3];  //これが科目名
}

//次の曜日の日時を返してくれる関数
//0~6=日～土
function getNextDay(day){
    
    for (let i=0;i<7;i++){
        let now = new Date();
        now.setDate(now.getDate()+i);
        if (now.getDay() == day){
            return now;
        }
    }
}