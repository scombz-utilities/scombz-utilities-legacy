/* ScombZ Utilities */
/* styleExam.js */
//テスト改善
function styleExam(){
    'use strict';
    if (location.href.includes("scombz.shibaura-it.ac.jp/lms/course/examination/take")){
        //テストを受ける前の画面
        if(document.querySelector(".block-under-area-btn") && document.querySelector(".block-under-area-btn").innerHTML.includes("受験する")){
            console.log('テスト受験確認画面');
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
            .block-under-area .block-under-area-btn #backbtn,#back{
                color:#545555;
                background:#fff;
                font-size:90%;
                border:1px solid #ccc;
                min-height:40px;
            }
            .block-under-area .block-under-area-btn #backbtn:hover,#back:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .block-under-area .block-under-area-btn #takebtn{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
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
            $submitBtnArea.style.maxWidth = "450px";
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
        }
        //テスト中の画面
        if((document.querySelector(".block-under-area-btn") && document.querySelector(".block-under-area-btn").innerHTML.includes("一時保存する"))){
            console.log("テスト中画面");
            const $examTimer = document.getElementById('examTimer');
            window.onbeforeunload = function(e) {
                if($examTimer && $examTimer.querySelector("a.tempSaveBtn") && $examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                    window.onbeforeunload = null;
                }else{
                    e.returnValue = "ページを離れようとしています。よろしいですか？";
                }
            }
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
            .block-under-area .block-under-area-btn .takeConfirm{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            .block-under-area .block-under-area-btn .tempSaveBtn{
                color:#545555;
                background:#fff;
                font-weight:bold;
                border:1px solid #ccc;
                min-height:40px;
                box-shadow:none;
            }
            .block-under-area .block-under-area-btn .tempSaveBtn:hover{
                border:1px solid #999;
                box-shadow:0 0 3px #888;
            }
            .take-save-temp-area{
                display:block;
            }
            </style>
            `);
            const $submitBtnArea = document.querySelector('.block-under-area-btn');
            $submitBtnArea.style.maxWidth = "450px";
            //押しても大丈夫なボタン
            const $confirmBtn = document.querySelector(".block-under-area .block-under-area-btn .takeConfirm");
            if($confirmBtn){
                $confirmBtn.addEventListener("click", function(){
                    window.onbeforeunload = null;
                });
            }
            
            if($examTimer && $examTimer.querySelector("a.takeConfirm")){
                $examTimer.querySelector("a.takeConfirm").addEventListener("click",function() {
                    window.onbeforeunload = null;
                });
            }
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
            //毎分自動保存
            setInterval(function() {
                const $saveBtn = document.querySelector(".block-under-area .block-under-area-btn .tempSaveBtn");
                if($saveBtn && $examTimer && $examTimer.querySelector("a.tempSaveBtn") && !$examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                    $saveBtn.click();
                    console.log("上書き保存 Auto");
                }
            },60000);//秒数
            //Ctrl+Sで自動保存
            $(window).bind('keydown', function(e) {
                if (e.ctrlKey || e.metaKey) {
                    switch (String.fromCharCode(e.which).toLowerCase()) {
                    case 's':
                        e.preventDefault();
                        const $saveBtn = document.querySelector(".block-under-area .block-under-area-btn .tempSaveBtn");
                        if($saveBtn && $examTimer && $examTimer.querySelector("a.tempSaveBtn") && !$examTimer.querySelector("a.tempSaveBtn").classList.contains("disabled")){
                            $saveBtn.click();
                            console.log("上書き保存 ctrl+S");
                        }
                        break;
                    }
                }
            });
        }
        //テスト提出確認画面
        if(location.href === "https://scombz.shibaura-it.ac.jp/lms/course/examination/take?confirm"){
            console.log('テスト提出確認画面');
            window.onbeforeunload = function(e) {
                e.returnValue = "ページを離れようとしています。よろしいですか？";
            }
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
            .block-under-area .block-under-area-btn #submit{
                color:#fff;
                background:#4892e0;
                font-weight:bold;
                font-size:110%;
                border:1px solid #ccc;
            }
            </style>
            `);
            const $submitBtnArea = document.querySelector('.block-under-area-btn');
            $submitBtnArea.style.maxWidth = "450px";
            if($submitBtnArea.childElementCount == 2){
                $submitBtnArea.appendChild($submitBtnArea.children[0]);
            }
            const $confirmBtnList = [...document.querySelectorAll(".block-under-area .block-under-area-btn a"),...document.querySelectorAll(".timer-btn-confirm-area-btn a")];
            for(const $confirmBtn of $confirmBtnList){
                $confirmBtn.addEventListener("click", function(){
                    window.onbeforeunload = null;
                });
            }
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
        }
        //テストを受け終わった画面
        //すでに受けたテストを参照する画面
        if(location.href.includes("examination/take?complete")){
            console.log('テスト完了画面');
            document.head.insertAdjacentHTML('beforeEnd',`
            <style>
            .block-under-area .block-under-area-btn{
                margin:0 auto;
            }
            .block-under-area .block-under-area-btn .btn-color{
                display: grid;
                place-items: center;
                margin:10px auto;
                min-width:140px;
                min-height:50px;
                box-shadow:none;
                max-width: 440px;
            }
            </style>
            `);
            if(document.querySelector('.page-directlink'))
                document.querySelector('.page-directlink').remove();
            //提出完了時にAjax通信をして課題一覧を更新
            console.log("テスト提出完了ページを検出");
            setTimeout(function(){
                getTaskLists(0);
            },500);
        }
        if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course/examination/takeresult")){
            document.head.insertAdjacentHTML("beforeEnd",`
            <style>
            .course-header .course-header-detail .contents-detail .hides{
                opacity: 0;
            }
            </style>
            `);
            const contentsInputAreas = document.querySelectorAll(".course-header .course-header-detail .contents-detail .contents-input-area");
            for(const contentsInputArea of contentsInputAreas){
                contentsInputArea.addEventListener("click",function(){
                    if(contentsInputArea.classList.contains("hides"))
                        contentsInputArea.classList.remove("hides");
                    else
                        contentsInputArea.classList.add("hides");
                });
            }
        }
    }
    return;
}

function styleExamImg(){
    'use strict';
    if (location.href.includes('examination/take') && document.body.clientWidth > 480){
            console.log('テスト画像改善を実行します');
            const $exa_contsize = document.getElementById('examQuestionSubblock') || document.getElementById('pageContents');
            const $exa_examImgList = document.querySelectorAll('.downloadFile');
            const $exa_cheadList = document.querySelectorAll('.contents-header');
            const $exa_img = document.querySelector('.exam-question-img');
            const $exa_footer = document.getElementById('page_foot');
            const $exa_timer = document.getElementById('examTimer');
            if ($exa_footer){
                $exa_footer.style.visibility = 'hidden';
            }

            for (const $exa_chead of $exa_cheadList){
                $exa_chead.style.width = '8%';
                $exa_chead.style.background = '#f6f6ff';
            }
            if ($exa_img){
                for (const $exa_examImg of $exa_examImgList){
                    $exa_examImg.style.maxHeight = '100vh';
                    $exa_examImg.style.boxShadow= '0 0 1px #000000 ';
                }
                $exa_examImgList[0].style.maxHeight = '95vh';
                $exa_examImgList[0].style.maxWidth = '50vw';
                $exa_examImgList[0].style.position = 'fixed';
                $exa_examImgList[0].style.right= '1px';
                $exa_examImgList[0].style.top= '5vh';
                $exa_examImgList[0].style.boxShadow= '0 0 1px #000000 ';
                if ($exa_contsize) {
                    $exa_contsize.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth - 3 + 'px';
                }
                if($exa_timer){
                $exa_timer.style.width = document.body.clientWidth - $exa_examImgList[0].clientWidth + 'px';
                }
            }
            console.log('テスト画像改善の実行が完了しました');
    }
    return;
}