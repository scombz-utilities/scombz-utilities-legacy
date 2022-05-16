/* ScombZ Utilities */
/* oldScomb.js */
function scombLogin() {
    if (location.href == 'https://scomb.shibaura-it.ac.jp/portal/index') {
        const $scombLoginBtns = document.querySelectorAll('strong');
        for (const $scombLoginBtn of $scombLoginBtns) {
            if ($scombLoginBtn.innerHTML.includes('ScombZ')) {
                $scombLoginBtn.parentNode.parentNode.parentNode.insertAdjacentHTML(
                    'afterBegin',
                    `
                <a href="https://scomb.shibaura-it.ac.jp/portal/dologin" style="margin-bottom:5px;">
                                <span>
                                    <strong>学生ログイン</strong>
                                </span>
                            </a>
                `
                );
            }
        }
    }
}
