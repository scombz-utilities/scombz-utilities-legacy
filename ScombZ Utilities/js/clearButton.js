/* ScombZ Utilities */
/* clearButton.js */
//更新通知を削除するボタンの追加

function updateClear(){
    'use strict';
    //裏で全部読み込む→重い
    //POSTっぽいことする？→正しく処理が行われるかわからない
    //いつ起動する？→ボタンを確認して起動？


    let button_ul = document.getElementsByClassName("page-head-notification-area clearfix")[0];
    if (button_ul){
        console.log("更新通知を削除するボタン追加");
        var button = document.createElement("li");

        var button_link = document.createElement("a");
        button_link.className = "btn-header-info btnControl";
        button_link.id = "ctrl_btn_clear";
        button_link.href = "javascript:void(0);"

        var button_span = document.createElement("span");
        button_span.className = "header-new-icon";

        var button_image = document.createElement("img");
        button_image.src = "/img/head_icon_info_bell.png";
        button_image.title = "通知削除";
        button_image.alt = "通知削除";
        button_image.className = "header-img";

        button.className = "header-clear";

        button_ul.insertAdjacentHTML('beforeEnd',`
        <style>
        .header-clear {
            margin-right: 10px;
            float: left;
            margin-top: 5px;
            margin-left: 13px;
        }
        
        .header-clear > a > .header-new-icon{
            background-color: transparent;
        }
        </style>
        `);

        button_link.appendChild(button_span);
        button_link.appendChild(button_image);
        
        button.appendChild(button_link);
        button_ul.appendChild(button);                          //通知欄をパクったけど
    }
    
}


$(function(){
    $("#ctrl_btn_clear").click(function(){

    })
})