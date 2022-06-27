/* ScombZ Utilities */
/* layoutSubject.js */
//科目ページの見た目の様々な変更

//目次
//要素並び替え
//教材の順番統一
//教材を一部非表示
//期限過ぎ課題を非表示
//期限過ぎテストを非表示

//要素並び替え
function subjectListOrder(items) {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        console.log("科目ページの要素並び替え");
        let subjectdivs = [];
        subjectdivs.push(document.getElementById("message"));
        subjectdivs.push(document.getElementById("information"));
        subjectdivs.push(document.getElementById("report"));
        subjectdivs.push(document.getElementById("courseContent"));
        subjectdivs.push(document.getElementById("examination"));
        subjectdivs.push(document.getElementById("questionnaire"));
        subjectdivs.push(document.getElementById("discussion"));
        subjectdivs.push(document.getElementById("attendance"));
        let subjectheader = document.querySelector("#courseTopForm > div.course-header");
        let numbers = [...items];
        for (const subjectdiv of subjectdivs){
            if (subjectdiv != null){
                subjectdiv.remove();
            }
        }
        for (let i=numbers.length-1;i>=0;i--){
            if (subjectdivs[Number(numbers[i])-1] != null){
                subjectheader.after(subjectdivs[Number(numbers[i])-1]);
            }
        }
    }
}

//教材の順番統一
function materialTopSet(items) {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        
        let materialList = document.querySelectorAll("#materialList > div");
        const firstmaterial = materialList[0];
        const materialListParent = document.getElementById("materialList");
        let [materialOrder,materialListBlock] = materialBlockCreate();
        console.log("教材の順番並び替え: "+materialOrder)
        //求めるものと一緒か反対かだけを考えればよい
        if ((items != materialOrder)){
                for (const material of materialList){
                    material.remove();
                }
                materialListParent.insertAdjacentElement("beforeend",firstmaterial);
                for (let i=materialListBlock.length-1;i>=0;i--){
                    for (let k=0;k<materialListBlock[i].length;k++){
                        materialListParent.insertAdjacentElement("beforeend",materialListBlock[i][k]);
                    }
                }
        }
    }
}

//教材を一部非表示化
function hideMaterial(items,materialTop) {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        console.log("教材を一部非表示");
        let [materialOrder,materialListBlock] = materialBlockCreate();
        let cssPosition = document.getElementById("materialList");
        setcss(cssPosition);
        
        if (materialTop === true){
            materialOrder = materialTop;
        }
        if (items == "none"){
            for (let i =0;i<materialListBlock.length;i++){
                let materials = materialListBlock[i];
                for (let material of materials){
                    if (material.className == "contents-detail clearfix"){
                        const materialButton = createButton("close-button",materials.slice(1),"material");
                        material.querySelector("div").appendChild(materialButton);
                        //materialButton.parentNode.parentNode.setAttribute('onclick', 'javascript:this.querySelector("#materialButton").click();');
                    }
                }
            }
            return
        }
        if (items == "new"){
            //新しいものだけ取得して別処理

            let lastMaterial;
            if (materialOrder == 'last'){
                lastMaterial = materialListBlock.shift();
            }
            else if (materialOrder == 'first'){
                lastMaterial = materialListBlock.pop();
            }

            let materialButton = createButton("close-button",lastMaterial.slice(1),"material");

            lastMaterial[0].querySelector("div").appendChild(materialButton);
        }
        for (let i =0;i<materialListBlock.length;i++){
            let materials = materialListBlock[i];
            for (let material of materials){
                if (material.className == "contents-detail clearfix"){
                    let materialButton = createButton("open-button",materials.slice(1),"material");
                    material.querySelector("div").appendChild(materialButton);
                    //materialButton.parentNode.parentNode.setAttribute('onclick', 'javascript:this.querySelector("#materialButton").click();');
                }else{
                    material.classList.add("hide-material");
                }
            }
        }
    }
}

//課題を一部非表示化
function hideReport(items){
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        
        let cssPosition = document.getElementById("reportList");
        if (!(cssPosition)){
            return;
        }
        let materials = document.querySelectorAll("#reportList > div.contents-list.sortReportParent > div");
        let query = "div.course-view-report-time-end.timeEnd.sp-contents-hidden";
        setcss(cssPosition);
        if (items === 'over'){
            hideOver(materials,query);
        }else if (items === 'done'){
            hideDoneReport(materials);
        }else if (items === 'end'){
            hideEndReport(materials);
        }else{
            hideOver(materials,query);
            hideDoneReport(materials);
            hideEndReport(materials);
        }
        let buttonDiv = document.createElement("div");
        let button = createButton("open-button",materials,"report");
        $(buttonDiv).addClass("course-result-list contents-display-flex sortReportBlock clearfix");
        buttonDiv.appendChild(button);
        let reportList = document.querySelector("#reportList > div.contents-list.sortReportParent");
        const hides = cssPosition.getElementsByClassName("hide-material");
        if(hides[0]){
            reportList.insertBefore(buttonDiv, hides[0]);
        }else{
            reportList.appendChild(buttonDiv);
        }
        console.log("ボタン作成")


    }

}

//テストを一部非表示化
function hideTest(items){
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        let cssPosition = document.getElementById("examination");
        if (!(cssPosition)){
            return;
        }
        let materials = document.querySelectorAll("#examination > div.block-contents > div > div:nth-child(2) > div");
        let query = "div.course-view-examination-period";
        setcss(cssPosition);
        if (items === 'over'){
            hideOver(materials,query);
        }
        /*else if (items === 'done'){
            hideDoneTest(materials);
        }else{
            hideOver(materials,query);
            hideDoneTest(materials);
        }*/
        let buttonDiv = document.createElement("div");
        let button = createButton("open-button",materials,"test");
        $(buttonDiv).addClass("course-result-list contents-display-flex clearfix");
        buttonDiv.appendChild(button);
        let reportList = document.querySelector("#examination > div.block-contents > div > div:nth-child(2)");
        const hides = cssPosition.getElementsByClassName("hide-material");
        if(hides[0]){
            reportList.insertBefore(buttonDiv, hides[0]);
        }else{
            reportList.appendChild(buttonDiv);
        }
        console.log("ボタン作成");

    }
}


function setcss(cssPosition){
    if ($(".hide-material").attr("display") != 'none'){
        cssPosition.insertAdjacentHTML("beforebegin",`
        <style>
            #materialList .hide-material,.should-hidden.hide-material{
                display:none;
            }
            .open-button{
                background-image: url(`+chrome.runtime.getURL("imgs/open_button.gif")+`);
            }
            .close-button{
                background-image: url(`+chrome.runtime.getURL("imgs/close_button.gif")+`);
            }
            .close-button:hover,.open-button:hover{
                background-color:#fff3;
                background-blend-mode:lighten;
            }
            #materialButton{
                padding-bottom: 0px;
                text-indent: -9999px;
                margin: 0 -3px 0px 0px;
                padding-left: 0px;
                width: 22px;
                height: 22px;
                padding-right: 0px;
                display: block;
                top: 4px;
                right: 0px;
                padding-top: 6px;
                float: right;
                background-repeat: no-repeat;
                background-size: cover;
            }
            #materialList .contents-detail.clearfix{
                border-bottom: 1px solid #ddd;
            }
            #materialList .contents-detail.clearfix:hover{
                filter: brightness(92%);
            }
            .should-hidden{
                width: calc(100% - 40px);
                margin-right:0;
                margin-left:auto;
                border-left: 1px solid #ccc;
            }
            .course-result-list.contents-display-flex.sortReportBlock.clearfix > #materialButton{
                margin: -5px 0 0  -10px;
                float:left;
            }
            </style>
        `)
    }

}
//共用・済を削除
function hideOver(materials,query){
    for (let material of materials){
        //2022/07/01 20:00
        let timeDate = material.querySelector(query).textContent;
        if (timeDate.indexOf("～") != -1){
            timeDate = timeDate.split("～")[1];
        }
        let timeEndDate = new Date(timeDate);
        let nowDate = Date.now();
        if (timeEndDate < nowDate){
            $(material).addClass("hide-material should-hidden");
        }else{
            $(material).addClass("not-hide");
        }
    }
}
//提出済み課題削除
function hideDoneReport(materials){
    for (let material of materials){
        let check = material.querySelector("div.course-view-report-status.submitStatus > label");
        if (check ==null){
            break;
        }
        if ((check.textContent == "期限外提出" || check.textContent == "期限内提出")){
            $(material).addClass("hide-material should-hidden");
        }else{
            $(material).addClass("not-hide");
        }
    }
}
//期間外提出不可課題削除
function hideEndReport(materials){
    for (let material of materials){
        let check = material.querySelector("div.control-list-txt");
        if (check == null){
            break;
        }
        if (check.querySelector("div") == undefined){
            $(material).addClass("hide-material should-hidden");
        }else{
            $(material).addClass("not-hide");
        }
    }
}
//解答済みテスト削除
/*
function hideDoneTest(materials) {

}
*/
function materialBlockCreate() {
    //科目ページの第○回をひとまとめにして返す関数
    //Orderは「一番上が最新回か初回か」、
    //Blockにはひとまとめにされたものが並び順通りに入ってる
    let materialOrder;
    let materialList = document.querySelectorAll("#materialList > div");
    let materialhtml=[];
    let materialListBlock=[];
    let k=0;
    for (let i=0;i<materialList.length;i++){
        if (i==0){continue;}
        if (materialList[i].className == "contents-detail clearfix"){
            if (materialList[i].textContent == "第1回(No.1)"){
                k = materialListBlock.length+1;
            }
            materialListBlock.push(materialhtml);
            materialhtml = [];
        }
        materialhtml.push(materialList[i]);
    }

    materialListBlock.push(materialhtml);
    materialListBlock.shift();

    if (k < materialListBlock.length/2){
        materialOrder = "first";
    }else{
        materialOrder = "last";
    }
    return [materialOrder,materialListBlock];
}

function createButton(className,materials,mode){
    //ボタン作成関数
    let materialButton = document.createElement("a");
    materialButton.id = "materialButton";
    materialButton.className = className;
    materialButton.href = "javascript:void(0);";
    materialButton.text = "詳細の表示/非表示";
    let frames,subjectContents;

    if (mode == "material"){
        frames = document.querySelectorAll("#materialList > div");
        subjectContents = document.querySelectorAll("#courseContent > div");
    }else if (mode == "report"){
        frames = document.querySelectorAll("#reportList > div");
        subjectContents = document.querySelectorAll("#report > div");
    }else if (mode == "test"){
        frames = document.querySelectorAll("#examination > div.block-contents > div");
        subjectContents = document.querySelectorAll("#examination > div");
    }

    $(materialButton).on("click",function() {
        if ($(this).attr('class') == "open-button"){
            $(this).addClass("close-button");
            $(this).removeClass("open-button");
            $(materials).removeClass("hide-material");
        }else if ($(this).attr('class') == "close-button"){
            $(this).addClass("open-button");
            $(this).removeClass("close-button");
            $(materials).addClass("hide-material");
        }
        let h = 0;
        for (frame of frames){
            if (!frame.classList.contains("hide-material")){
                h+=frame.offsetHeight;
            }
        }
        for (subjectContent of subjectContents){
            subjectContent.style.height = h+"px";
        }
        console.log(h);
    })

    return materialButton;
}

