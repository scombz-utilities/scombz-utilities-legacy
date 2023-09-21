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
                document.getElementById("loginArea").insertAdjacentHTML("beforeEnd", `
                <style>
                    #sconbzutil_toggle_display_password:hover,#utilitiesSaveButton:hover{
                        opacity: 0.7;
                    }
                </style>
                <div style="padding: 1em; font-weight: bold; box-shadow: 0 0 4px #aca; border-radius: 4px; background-color: #f8fff8;">
                <p style="font-size: 120%;">ScombZ Utilitiesに保存すると、自動的に入力およびサインイン押下が行われ、自動ログインできます</p>
                <p>保存したIDとパスワードはコンピュータ内のローカルにのみ保存され、外部サーバーには送信されません。</p>
                <p>詳細設定は <a class="page-head-navi-colomn" href="javascript:void(0);" id="link_to_extention">こちら</a> </p>
                </div>`);
                document.getElementById("submissionArea").insertAdjacentHTML("beforeEnd", `
                <span id="utilitiesSaveButton" class="submit" style="background-color: #4aaf92;">Utilitiesに保存</span>`);
                
                document.getElementById("link_to_extention").addEventListener("click", function () {
                    chrome.runtime.sendMessage({ "action": "openOptionsPage" });
                });

                const eye = `<svg style="scale: 1.5; margin-left: 10px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>`;
                const eyeInvisible = `<svg style="scale: 1.5; margin-left: 10px;" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg>`;
                $passwordInput.style.width = "calc(100% - 40px)";
                $passwordInput.insertAdjacentHTML("afterEnd", `<span id="sconbzutil_toggle_display_password" style="cursor: pointer;">${eye}</span>`)
                document.getElementById("sconbzutil_toggle_display_password").addEventListener("click", function () {
                    if ($passwordInput.type === "password") {
                        $passwordInput.type = "text";
                        document.getElementById("sconbzutil_toggle_display_password").innerHTML = eyeInvisible;
                    } else {
                        $passwordInput.type = "password";
                        document.getElementById("sconbzutil_toggle_display_password").innerHTML = eye;
                    }
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
