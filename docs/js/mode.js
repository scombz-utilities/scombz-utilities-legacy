(function() {
    const additionalModeArea = document.getElementById("additionalModeArea");
    if(additionalModeArea){
        let message = "";
        if(location.href.includes("mode=install")){
            message = `
            <h1>インストールありがとうございます！</h1>
            <p>このたびはScombZ Utilitiesのインストールをしただきありがとうございます!<br>個々の設定管理や、バグ報告などがございましたら<span class="extentionSettings">拡張機能設定</span>から設定してください！</p>
            <p>ScombZ Utilitiesは、Chrome・FireFox・iOS/iPadOSに対応しています!気に入っていただけたら、下記リンクから導入していただくと嬉しいです</p>
            `;
        }
        else if(location.href.includes("mode=install")){
                message = `
                <h1>アップデートされました</h1>
                <p>アップデート情報here</p>`;
        }
        additionalModeArea.insertAdjacentHTML("afterbegin",message);
    }
})
