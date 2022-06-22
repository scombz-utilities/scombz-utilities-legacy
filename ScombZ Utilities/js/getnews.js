function getNews(){
    if(!location.href.includes("https://scombz.shibaura-it.ac.jp/portal/home") && !location.href.includes("https://scombz.shibaura-it.ac.jp/lms/timetable") ){
        return;
    }
    chrome.storage.local.get({
        getNewsData:[0]
    },function(items){
        const getNewsData = items.getNewsData;
        setTimeout(function(){
        console.log("===NOW LOADING===");
        chrome.runtime.sendMessage(
            {
                action: 'getJson',
                endpoint: 'https://yudai1204.github.io/ScombZ-Utilities/news/news.json'
            },
            (response) => {
                if(response.error){
                    //エラー時
                    console.log(response);
                    return;
                }else{
                    console.log("Utilitiesからのお知らせ取得成功");
                    console.log(response);
                    if(getNewsData.includes(response.length-1)) return;
                    document.body.insertAdjacentHTML("beforeEnd",`
                    <style>
                    .utilities-news-box{
                        display:block;
                        width:300px;
                        height:160px;
                        background-color:#fff;
                        border:1px solid #000;
                        position:fixed;
                        top:30px;
                        right:10px;
                        z-index:11;
                        opacity:0.9;
                        text-align:center;
                        border-radius:5px;
                        color:#000;
                        font-size: 90%;
                    }
                    .utilities-news-remove{
                        float:right;
                        background-color:#fcc;
                        margin-right:2px;
                        margin-top:2px;
                        width:18px;
                        height:14px;
                        cursor: pointer;
                        font-size: 10px;
                    }
                    .utilities-news-remove:hover{
                        background-color:#daa;
                    }
                    .utilities-news-box *{
                        margin:5px;
                        padding:0;
                    }
                    </style>
                    <div class="utilities-news-box">
                    <div class="utilities-news-remove">×</div>
                    <div style="padding:3px 10px;">
                    <h4>${response[response.length-1].title}</h4>
                    <p>${response[response.length-1].content}</p>
                    <a href="${response[response.length-1].link}">詳細へ</a>
                    </div>
                    </div>
                    `);
                    document.querySelector(".utilities-news-remove").addEventListener("click", function(){
                        document.querySelector(".utilities-news-box").remove();
                        getNewsData.push(response[response.length-1].id);
                        chrome.storage.local.set({
                            getNewsData: getNewsData
                        });
                    });
                }
            }
        );
        },1000);
    });
}