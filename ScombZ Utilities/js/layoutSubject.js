/* ScombZ Utilities */
/* layoutSubject.js */
//科目ページの見た目の様々な変更

//要素並び替え
function subjectListOrder(items) {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
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
        let materialOrder,materialListBlock = materialBlockCreate();

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

function hideMaterial(items) {
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){
        if (items == "new"){
            let materialOrder,materialListBlock = materialBlockCreate();


        }else if (items == "all"){
            
        }
    }
    
}
function hideReport(){
    'use strict';
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=")){}

}

function materialBlockCreate() {
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
    if (k < materialListBlock.length/2){
        materialOrder = "first";
    }else{
        materialOrder = "last";
    }

    return materialOrder,materialListBlock;
}