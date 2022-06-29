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
                console.log("ADFSのワンタイムパスコード入力時の挙動を変更します");
                const $adfsPinTip = document.querySelector("#customAuthArea > p:nth-child(3)");
                $adfsPinTip.textContent = "MoSICAアプリを起動し、表示されている6桁のワンタイムパスコードを入力してください。";
                const $adfsPinPattern = new RegExp("^[0-9]{6}$");
                $adfsPin.oninput = (event) =>
                    $adfsPinPattern.test(event.target.value) && $adfsButton.click();
                $adfsPin.focus();
                console.log("ADFSのワンタイムパスコード入力時の挙動を変更しました");
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
