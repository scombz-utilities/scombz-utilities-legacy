/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            const $adfsButton = document.getElementById("continueButton");
            const $adfsPin = document.getElementById("pin");

            // ADFSの2段階認証が無効な場合（$adfsPinがnullで存在しない時）にスキップする
            if (!$adfsPin && $adfsButton) {
              console.log("ADFSをスキップします");
                $adfsButton.click();
                console.log("ADFSをスキップしました");
            }
        }
    return;
}
