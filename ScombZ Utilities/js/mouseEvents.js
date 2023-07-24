/* ScombZ Utilities */
/* mouseEvent.js */
function mouseEvents(){
    'use strict';
    const dlLinks = document.querySelectorAll(".fileDownload");
    const dlFiles = document.querySelectorAll(".downloadFile");
    const LMSLinks = document.querySelectorAll(".timetable-course-top-btn");
    const courseInfo = document.querySelectorAll(".course-view-information-name");
    if(dlLinks){
        mousedownClick(dlLinks);
    }
    if(dlFiles){
        mousedownClick(dlFiles);
    }
    if(courseInfo){
        mousedownClick(courseInfo);
    }
    chrome.storage.local.get({
        "openTabInBG": true
    },function(values){
        for(const LMSLink of LMSLinks) {
            LMSLink.addEventListener('mousedown', function(event){
                switch (event.which) {
                case 2:
                    console.log('リンクホイールクリック検知');
                    if(values.openTabInBG){
                            chrome.runtime.sendMessage({action: "openNewPageBG", url: "https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+LMSLink.getAttribute("id")});
                    }else{
                        window.open("https://scombz.shibaura-it.ac.jp/lms/course?idnumber="+LMSLink.getAttribute("id"));
                    }
                    break;
                case 3:
                    console.log('リンク右クリ検知');
                    break;
                default:
                    console.log('リンクのクリックを検知');
                }
            });
        }
    });
    return;
}

function mousedownClick(items){
    for(const item of items){
        item.addEventListener('mousedown', function(event){
            switch (event.which) {
            case 2:
                console.log('リンクホイールクリック検知');
                item.click();
                break;
            case 3:
                console.log('リンク右クリ検知');
                break;
            default:
                console.log('リンクのクリックを検知');
            }
        });
    }
    return;
}