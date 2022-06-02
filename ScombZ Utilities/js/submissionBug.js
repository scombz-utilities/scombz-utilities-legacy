/* ScombZ Utilities */
/* submissionBug.js */

function submissionBugFix(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission") && 
    document.querySelectorAll("#toDragAndDrop").length == 1 && 
    document.querySelectorAll("#submissionFileResult").length == 1){
        console.log("D&D状態のバグ修正開始");
        let reportBtn = document.querySelector("#report_submission_btn");
        reportBtn.style.display = "none";
        reportBtn.insertAdjacentHTML("beforebegin",`
        <a id="report_submission_btn_" class="under-btn btn-txt btn-color">確認画面に進む</a>
        `)
    }
}

function dadFileAreaAddDiv(){
    document.querySelector("#dad_file_area").insertAdjacentHTML("beforeEnd",`
            <div style="display:none;" id="DaDfix">
            <input type="file" class="fileSelectInput" name="uploadFiles" style="display : none;">
            <input type="hidden" class="originalFileName" name="originalFileName" value="">
            <input type="hidden" name="fileId" value="0">
            <input type="hidden" name="rowCounter" value="1">
            <input type="text" name="fileName" class="input input-box">
            <input type="text" name="comment" class="input input-box"></div>`
            );
}


function DaDCheck() {
    if (document.querySelector("#dad_file_area > div") == null){
    dadFileAreaAddDiv();
    }else{
        let dadFix = document.querySelectorAll("#DaDfix");
        if (dadFix.length != 1 || dadFix[0].id != "DaDfix"){
            for (let i=0;i<dadFix.length;i++){
                dadFix[i].remove();
            }
        }
    }
    document.querySelector("#report_submission_btn").click();
}


$(document).ready(function () {
$("#report_submission_btn_").click(function (){
    console.log("変更されたボタンをクリック");
    DaDCheck();});
})

