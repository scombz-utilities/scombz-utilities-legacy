/* ScombZ Utilities */
/* adfs.js */
//ADFSスキップ
function adfsLoaded(){
    'use strict';
        if (document.domain == 'adfs.sic.shibaura-it.ac.jp'){
            const $adfsButton = document.getElementById("continueButton");
            const $adfsPin = document.getElementById("pin");
            const $hasAdfsButton = $adfsButton !== null;
            const $requiresPin = $hasAdfsButton && $adfsPin !== null;
            const $userNameInput = document.getElementById("userNameInput");
            const $passwordInput = document.getElementById("passwordInput");
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
            } else if ($userNameInput && $passwordInput) {
                console.log("パスワード直接入力画面");
                document.getElementById("loginArea").insertAdjacentHTML("beforeEnd", `<div style="padding: 1em; font-weight: bold; box-shadow: 0 0 4px #aca; border-radius: 4px; background-color: #f8fff8;">
                <p style="font-size: 120%;">ScombZ Utilitiesに保存すると、自動的に入力およびサインイン押下が行われ、自動ログインできます</p>
                <p>保存したIDとパスワードはコンピュータ内のローカルにのみ保存され、外部サーバーには送信されません。</p>
                <p>詳細設定は <a class="page-head-navi-colomn" href="javascript:void(0);" id="link_to_extention">こちら</a> </p>
                </div>`);
                document.getElementById("submissionArea").insertAdjacentHTML("beforeEnd", `
                <span id="utilitiesSaveButton" class="submit" style="background-color: #4aaf92;">Utilitiesに保存</span>`);
                
                document.getElementById("link_to_extention").addEventListener("click", function () {
                    chrome.runtime.sendMessage({ "action": "openOptionsPage" });
                });

                document.getElementById("utilitiesSaveButton").addEventListener("click", function () {
                    confirm("ScombZ Utilitiesに保存しますか？") && chrome.storage.local.set({
                        "adfs": {
                            "username": $userNameInput.value,
                            "password": $passwordInput.value,
                            "forcelogin": document.getElementById("kmsiInput").checked
                        }
                    }, function () {
                        alert("保存しました。次回から自動的にログインします。");
                    });
                });
                if (document.getElementById("errorText").innerText.trim() === "") {
                    chrome.storage.local.get({
                        "adfs": {
                            "username": "",
                            "password": "",
                            "forcelogin": true
                        }
                    }, function (items) {
                        if (items.adfs.username.match(/^[A-z]{2}[0-9]{5}$/g)) {
                            $userNameInput.value = items.adfs.username + "@sic";
                        } else {
                            $userNameInput.value = items.adfs.username;
                        }
                        $passwordInput.value = items.adfs.password;
                        document.getElementById("kmsiInput").checked = items.adfs.forcelogin;
                        setTimeout(function () {
                            if (items.adfs.username && items.adfs.password) {
                                document.getElementById("submitButton").click();
                            }
                        }, 300);
                    });
                }
            } else {
                console.log("ADFSのエラーページであるため、スキップしません");
            }
        }
    return;
}
