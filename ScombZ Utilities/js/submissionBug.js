/* ScombZ Utilities */
/* submissionBug.js */

function submissionBugFix(){
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/report/submission?idnumber=") && document.querySelectorAll("#toDragAndDrop").length == 1){

        document.querySelector("#dad_file_area").insertAdjacentHTML("beforeEnd",'<div style="display:none;"><input type="file" class="fileSelectInput" name="uploadFiles" style="display : none;">'+
        `<input type="hidden" class="originalFileName" name="originalFileName" value="">`+
        `<input type="hidden" name="fileId" value="0">`+
        `<input type="hidden" name="rowCounter" value="1">`+
        `<input type="text" name="fileName" class="input input-box">`+
        `<input type="text" name="comment" class="input input-box"></div>`);

    }
}
