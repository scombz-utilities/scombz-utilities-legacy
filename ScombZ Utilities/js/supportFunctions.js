/* ScombZ Utilities */
/* supportFunctions.js */
//1文字目だけを切り取って半角にしてくれる関数
function jigenInt($str) {
    return han2Zenkaku($str.charAt(0));
}
function getNowPeriod() {
    'use strict';
    const $now = new Date();
    const $periodList = [540, 650, 800, 910, 1020, 1130];
    const $nowNum = Number($now.getHours()) * 60 + Number($now.getMinutes());
    for (let i = 0; i < $periodList.length; i++) {
        if ($nowNum >= $periodList[i] && $nowNum <= $periodList[i] + 100) {
            //授業時間内
            return i + Number($now.getDay()) * 10;
        }
    }
    return -1;
}
