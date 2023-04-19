/* ScombZ Utilities */
/* layoutSubject.js */
//科目ページの見た目の様々な変更

//目次
//要素並び替え
//教材の順番統一
//教材を一部非表示
//期限過ぎ課題を非表示
//期限過ぎテストを非表示
//課題手動追加を科目ページから呼び出す

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
        if (!materialListParent) {
            return ;
        }
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
        if (cssPosition){
            setcss(cssPosition);
        }else{
            return;
        }
        
        
        if (materialTop != 'none'){
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
            }else{
                return;
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

function sortMaterials(items,list){
    console.log(items);
    let re =[];
    for (let material of items){
        material.remove();
    }
    for (let material of items){
        if (!(material.classList.contains("should-hidden"))){
            re.push(material);
        }
    }
    for (let material of items){
        if ((material.classList.contains("should-hidden"))){
            re.push(material);
        }
    }
    for (let material of re){
        list.appendChild(material);
    }
    return re;

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
        let buttonDiv = document.createElement("span");
        let button = createButton("open-button",materials,"report");
        $(buttonDiv).addClass("course-result-list contents-display-flex sortReportBlock clearfix close-button-div");
        buttonDiv.appendChild(button);
        let reportList = document.querySelector("#reportList > div.contents-list.sortReportParent");
        
        sortMaterials(materials,reportList);
        
        const hides = cssPosition.getElementsByClassName("hide-material");
        if(hides[0]){
            reportList.insertBefore(buttonDiv, hides[0]);
        }else{
            //全部非表示対象でないなら、そもそもボタンが必要ない
            //reportList.appendChild(buttonDiv);
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
        let buttonDiv = document.createElement("span");
        let button = createButton("open-button",materials,"test");
        $(buttonDiv).addClass("course-result-list contents-display-flex clearfix close-button-div");
        buttonDiv.appendChild(button);
        let reportList = document.querySelector("#examination > div.block-contents > div > div:nth-child(2)");
        
        sortMaterials(materials,reportList);
        
        const hides = cssPosition.getElementsByClassName("hide-material");
        if(hides[0]){
            reportList.insertBefore(buttonDiv, hides[0]);
        }else{
            //全部非表示対象でないなら、そもそもボタンが必要ない
            //reportList.appendChild(buttonDiv);
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
            #materialList .contents-detail.clearfix:hover{
                filter: brightness(92%);
            }
            .should-hidden{
                width: 100%;
                margin-right:0;
                margin-left:40px;
                border-left: 1px solid #ccc;
            }
            #reportList .course-result-list.should-hidden:nth-last-child(1),#examination .course-result-list.should-hidden:nth-last-child(1){
                margin-bottom: -32px;
            }
            #reportList .course-result-list.should-hidden,#examination .course-result-list.should-hidden{
                min-height:43px;
            }
            .should-hidden .course-view-report-name ,.should-hidden .course-view-examination-name{
                margin-left: -40px;
            }
            .contents-list.sortReportParent,#examination > .block-contents{
                overflow-x: hidden;
            }
            #examination > .block-contents > .contents-detail{
                overflow:hidden;
            }
            .course-view-report-name,.course-view-examination-name{
                margin-left: 22px;
            }
            .close-button-div > #materialButton{
                margin: -5px 0 0  -10px;
                float:left;
            }
            .course-result-list.should-hidden{
                padding-left:42px;
                transform:translateY(-32px);
            }
            span.close-button-div{
                border-bottom: 1px solid #aaa0;
                min-height:0px;
            }
            .control-menu{
                transform: translate(-30px,-50px);
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
    let No1Check = false;
    for (let i=0;i<materialList.length;i++){
        if (i==0){continue;}
        if (materialList[i].className == "contents-detail clearfix"){
            if ((materialList[i].textContent.trim() == "第1回(No.1)")){
                k = materialListBlock.length;
                No1Check = true;
                console.log("教材第1回(No.1)の場所: "+materialListBlock.length);
            }
            materialListBlock.push(materialhtml);
            materialhtml = [];
        }
        materialhtml.push(materialList[i]);
    }

    //第1回(No.1)がない場合
    if (!No1Check){
        //なんか動くのでここは要らない。動かなくなったら追加する
    }

    materialListBlock.push(materialhtml);
    materialListBlock.shift();
    console.log("デバッグ: ")
    console.log(materialListBlock);
    console.log(k);

    if (k <= materialListBlock.length/2){
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
    })

    return materialButton;
}

//課題手動追加を科目ページから呼び出す
function addTaskPage() {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        if (!document.getElementById("report")){
            return;
        }
        let cssPosition = document.getElementById("report").getElementsByTagName("div")[0];
        //要素あるかチェック
        if (!(cssPosition)){
            return;
        }

        cssPosition.insertAdjacentHTML("afterbegin",`
        <div class="block-title-btn">
			<a class="btn btn-new btn-left" id="addTaskinSubject" href="javascript:void(0);"></a>
		</div>
        `);

        //追加ボタンを押したときに代入
        $(function(){
            $("#addTaskinSubject").click(subAutoInput)
        })

    }

}

//科目ページとURLを自動入力するボタンを設置
function autoTaskInput(){
    'use strict'
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        setTimeout(function(){
        let buttonPositon = document.getElementById("manAddtaskSelectLayer");
        if(!buttonPositon){
            return;
        }
        document.querySelector("#manAddtaskSelectLayer > form > div:nth-child(4) > button:nth-child(2)").insertAdjacentHTML("beforebegin", 
        `
        <button type="button" id="subAutoInput">自動入力</button>
        `
        );
        let autoInputButton = document.getElementById("subAutoInput");
        autoInputButton.addEventListener("click", subAutoInput);

    },1000);
    }

}

//科目ページとURLを自作課題欄に入力する関数
function subAutoInput(){
    let subjectName = getCourseTitle();
    document.getElementById("manAddtaskSubjname").value = subjectName;
    document.getElementById("manAddtaskSubjlink").value = location.href;
    //clickイベントコピペした(addSubTimeTable.js)の//手動追加部分
    document.getElementById("manAddtaskSelectBackground").style.display = "block";
    document.getElementById("manAddtaskSelectLayer").style.display = "block";

}