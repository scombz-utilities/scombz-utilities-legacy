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
        else if(location.href.includes("mode=update")){
            if(location.href.includes("version=")){
                const version = location.href.slice(location.href.indexOf("version=")+8);
                window.location.href = `updates.html?version=${version}`;
            }else{
                message = `
                <div>
                <h1>アップデートされました</h1>
                <p>---アップデート情報 ~v3.9.0---<br>
                ・任意の課題を非表示にできる機能を追加しました<br>
                ・通知一括削除ボタンを追加しました<br>
                ・設定初期化ボタンを追加しました<br>
                ・崩れているレイアウトを修正しました<br>
                ・アップデート、インストール時に表示されるランディングページを追加しました<br>
                ・公式サイトへのリンクを追加しました<br>
                ・誤字を修正しました<br>
                ・設定のスタイルを変更しました</p>
                より詳細なアップデート情報は<a href="updates.html">こちら</a>
                </div>
                `;
            }
        }
        additionalModeArea.insertAdjacentHTML("afterbegin",message);
    }
