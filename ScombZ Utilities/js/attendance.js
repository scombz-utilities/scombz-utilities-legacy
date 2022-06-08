/* ScombZ Utilities */
/* attendance.js */
//場所を無駄にとる出席表示を削除
//3つのモード
function attendanceRemove(item){
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        if (item === 'only'){
            console.log("※表示の場合出席を削除");
            let attendanceKome = document.querySelector("#attendance > div.block-contents > div > div:nth-child(3) > div:nth-child(1) > div.course-view-attendance-status > label");
            if (attendanceKome != null){
                if (attendanceKome.textContent == "※"){
                    let attendance = document.querySelector("#attendance");
                    attendance.remove();
                }
            }
        }else if (item === 'all'){
            console.log("無条件で出席を削除")
            let attendance = document.querySelector("#attendance");
            if (attendance != null){
                attendance.remove();
            }
        }
    }
}