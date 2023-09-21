/* ScombZ Utilities */
/* clickLogin.js */
function clickLoginBtn() {
    "use strict";
    if (location.href.startsWith("https://scombz.shibaura-it.ac.jp/login")) {
        window.onload = function () {
            console.log("ログインページへリダイレクトします");
            location.href = "https://scombz.shibaura-it.ac.jp/saml/login?idp=http://adfs.sic.shibaura-it.ac.jp/adfs/services/trust";
        };
    }
    return;
}
