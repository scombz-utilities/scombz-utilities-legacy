const agent2 = window.navigator.userAgent.toLowerCase();

console.log("loaded");
$.getJSON("updateData.json", (updateData) => {
    const additionalModeArea = document.getElementById("additionalModeArea");
    if(additionalModeArea){
        let message = "";
        if(location.href.includes("mode=install")){
            message = `
            <div class="card-deck text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                    <h2>Thanks for the installation!!</h2>
                    </div>
                    <div class="jumbotron p-2">
                        <p class="lead mt-5">ScombZ Utilitiesのインストールをしただきありがとうございます!</p>
                        <p class="lead">設定管理や、バグ報告などは拡張機能設定から設定してください！</p>

                        <p class="mt-5"><a class="btn btn-lg btn-success" href="javascript:void(0);" role="button" id="utilities-incontent-open-option-btn">拡張機能機能オプション</a></p>
                    </div>
                    <div class="container">
                        <h5>ScombZ Utilitiesをほかのブラウザでも使いませんか？</h5>
                        <ul style="list-style: none;">
                            <li><a href="https://chrome.google.com/webstore/detail/scombz-utilities/iejnanaabfgocfjbnmhkfheghbkanibj?hl=ja" target="_blank" rel="noopener noreferrer">Chrome / Edge</a></li>
                            <li><a href="https://addons.mozilla.org/ja/firefox/addon/scombz-utilities/"  target="_blank" rel="noopener noreferrer">FireFox</a></li>
                            <li><a href="/smartphone.html"  target="_blank" rel="noopener noreferrer">iOS / iPadOS / Android</a></li>
                            <!--li>iOS / iPadOS</li-->
                        </ul>
                    </div>
                </div>
            </div>
            `;
        }
        else if(location.href.includes("mode=update")){
            if(location.href.includes("version=")){
                const version = location.href.slice(location.href.indexOf("version=")+8);
                message = `
                <div>
                <h2>ScombZ Utilitiesがアップデートされました！</h2>

                <div class="card-deck text-center mt-3">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4>ScombZ Utilities ver.${version}</h4>
                    </div>
                    <div class="container pt-3 text-left">
                        <h5>アップデート内容</h5>
                        <ul style="text-align:left;">
                `;
                let updateDate = "error";
                for(let i = 0; updateData[i]; i++){
                    if(updateData[i].version === version){
                        for(let j = 0; updateData[i].contents[j]; j++){
                            message += `<li>${updateData[i].contents[j].explain}</li><br>`;
                        }
                        if (agent2.indexOf("firefox") != -1) {
                            console.log("firefox");
                            break;
                        }
                        updateDate = updateData[i].date.chrome;
                    }
                }
                message += `
                        </ul>
                        </div>
                        
                        <p>
                            アップデート情報詳細は<a href="updates.html">こちら</a></p>
                        </p>
                        <div class="jumbotron">
                            <p><a class="btn btn-sl btn-success" href="javascript:void(0);" role="button" id="utilities-incontent-open-option-btn">拡張機能機能オプション</a></p>
                        </div>
                    </div>
                </div>

                
                </div>`;
            }else{
                message = `
                <div>
                <h1>アップデートされました</h1>
                    <p>アップデート情報は<a href="updates.html">こちら</a>から
                </div>
                `;
            }
        }
        additionalModeArea.insertAdjacentHTML("afterbegin",message);
    }
});