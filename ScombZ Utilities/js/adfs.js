/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            const $adfsButton = document.getElementById("continueButton");
            const $adfsPin = document.getElementById("pin");
            const $hasAdfsButton = $adfsButton !== null;
            const $requiresPin = $hasAdfsButton && $adfsPin !==null;
            if ($requiresPin) {
                console.log("ADFSの2段階認証が有効なため、スキップしません");
            } else if ($hasAdfsButton) {
                console.log("ADFSをスキップします");
                $adfsButton.click();
                console.log("ADFSをスキップしました");
            } else {
                console.log("ADFSのエラーページであるため、スキップしません");
            }
        }
    return;
}
