/* ScombZ Utilities */
/* styleDialog.js */
function styleDialog() {
    'use strict';
    //お知らせダイアログ処理
    const dialogObserver = new MutationObserver((mutations) => {
        const $infoDialog = document.querySelector(
            '[aria-describedby="infoDetailView"]'
        );
        const $progressDialog = document.querySelector(
            '[aria-describedby="progress_dialog"]'
        );
        const $notificationDialog = document.querySelector(
            '[aria-describedby="info_detail_view2"]'
        );
        const $courseDialog = document.querySelector(
            '[aria-describedby="info_detail_view"]'
        );

        const $widgetOverlay =
            document.getElementsByClassName('ui-widget-overlay')[0];

        const $contentAppendCSSText =
            'max-height: calc(90vh - 40px)!important; height: calc(90vh - 40px);';
        const $dialogAppendCSSText =
            'position: fixed; inset: 0; margin: auto; width: 960px; height: fit-content;';

        //  ポータルホームのダイアログの処理
        if (
            $infoDialog &&
            !$progressDialog &&
            $infoDialog.style.display !== 'none'
        ) {
            document.getElementById('infoDetailView').style.cssText +=
                $contentAppendCSSText;
            $infoDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener(
                'click',
                function () {
                    $infoDialog
                        .querySelector(
                            '.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget'
                        )
                        .click();
                },
                { once: true }
            );
            styleadd();
        }

        //  お知らせのダイアログの処理
        if (
            $notificationDialog &&
            $notificationDialog.style.display !== 'none'
        ) {
            document.getElementById('info_detail_view2').style.cssText +=
                $contentAppendCSSText;
            $notificationDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener(
                'click',
                function () {
                    $notificationDialog
                        .querySelector(
                            '.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget'
                        )
                        .click();
                },
                { once: true }
            );
            styleadd();
        }

        //  LMSの授業詳細ページ＆コミュニティ詳細ページのダイアログの処理
        if ($courseDialog && $courseDialog.style.display !== 'none') {
            document.getElementById('info_detail_view').style.cssText +=
                $contentAppendCSSText;
            $courseDialog.style.cssText += $dialogAppendCSSText;
            $widgetOverlay.addEventListener(
                'click',
                function () {
                    $courseDialog
                        .querySelector(
                            '.commonDialogButtonArea button.under-btn.btn-color.btn-txt.ui-button.ui-corner-all.ui-widget'
                        )
                        .click();
                },
                { once: true }
            );
            styleadd();
        }
    });

    const config = {
        childList: true
    };

    const target = document.body;

    dialogObserver.observe(target, config);

    function styleadd() {
        document.head.insertAdjacentHTML(
            'beforeEnd',
            `
        <style>
            .information-popup-block{
                box-shadow: 0 0 15px #c2c2c2;
            }
            .ui-widget-overlay.ui-front{
                background: #000;
                opacity: .5;
            }
        </style>
        `
        );
    }

    return;
}
