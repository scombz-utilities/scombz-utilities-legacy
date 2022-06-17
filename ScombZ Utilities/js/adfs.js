/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            const $adfsButton = document.getElementById("continueButton");
            const $adfsPin = document.getElementById("pin");

            // ADFSの2段階認証が無効な場合にだけスキップを実行する
            if ($adfsPin ?? $adfsButton) {
                console.log("ADFSをスキップします");
                $adfsButton.click();
                console.log("ADFSをスキップしました");
            } else {
                console.log("ADFSの2段階認証が有効なため、スキップしません");
            }
        }
    return;
}
