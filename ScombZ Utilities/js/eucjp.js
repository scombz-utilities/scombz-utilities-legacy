/* ScombZ Utilities */
/* eucjp.js */

/*
SyllabusとScombZで文字コードが違うため、変換用の関数
Syllabus : EUC-JP
ScombZ   : UTF-8 , UNICODE

使用ライブラリ Encoding.js
https://github.com/polygonplanet/encoding.js/blob/master/README_ja.md
*/

// UNICODE文字列 → EUC-JPエスケープに変えてくれる関数
EscapeEUCJP=function(str){
    // EUC-JP に変換
    let actual  = Encoding.convert(str.split('').map((v) => v.charCodeAt()), 'EUCJP', 'UNICODE');
    // URL用にエスケープ
    return Encoding.urlEncode(actual);
}
// EUC-JPエスケープ → UNICODE文字列に変えてくれる関数
DecodeEUCJP=function(str){
    //エスケープを戻す
    let eucjpArray = Encoding.urlDecode(str);
    // UNICODE に変換
    let unicodeArray = encoding.convert(eucjpArray,'UNICODE','EUCJP');
    // 文字列に変換
    return Encoding.codeToString(unicodeArray);
}