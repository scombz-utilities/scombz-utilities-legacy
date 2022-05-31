/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            console.log("ADFSをスキップします");
            const $adfsButton = document.getElementById("continueButton");
            if ($adfsButton) {
                $adfsButton.click();
            }
            console.log("ADFSをスキップしました");
        }
    return;
}