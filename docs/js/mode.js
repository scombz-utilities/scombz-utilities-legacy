    console.log("loaded");
    const additionalModeArea = document.getElementById("additionalModeArea");
    if(additionalModeArea){
        let message = "";
        if(location.href.includes("mode=install")){
            message = `
            <div>
            <h1>インストールありがとうございます！</h1>
            <p>このたびはScombZ Utilitiesのインストールをしただきありがとうございます!<br>個々の設定管理や、バグ報告などがございましたら<span class="extentionSettings">拡張機能設定</span>から設定してください！</p>
            <div>ScombZ Utilitiesをほかのブラウザでも使いませんか？
                <ul>
                    <li><a href="https://chrome.google.com/webstore/detail/scombz-utilities/iejnanaabfgocfjbnmhkfheghbkanibj?hl=ja" target="_blank" rel="noopener noreferrer">Chrome / Edge</a></li>
                    <li><a href="https://addons.mozilla.org/ja/firefox/addon/scombz-utilities/"  target="_blank" rel="noopener noreferrer">FireFox</a></li>
                    <!--li>iOS / iPadOS</li-->
                </ul>
            </div>
            </div>
            `;
        }
        else if(location.href.includes("mode=install")){
                message = `
                <h1>アップデートされました</h1>
                <p>アップデート情報here</p>`;
        }
        additionalModeArea.insertAdjacentHTML("afterbegin",message);
    }