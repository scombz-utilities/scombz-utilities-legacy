/* ScombZ Utilities */
/* syllBtn.js */
function displaySyllabus(year , fac){
    'use strict';
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        console.log('授業別ページを検出しました\nシラバスのデータと連携します');
        const $courseTitle = document.querySelector('.course-title-txt');
        if($courseTitle){
            //タイトルを取得
            console.log($courseTitle.innerHTML);
            //科目IDを除外し、科目名だけを抽出
            const $nameInt = $courseTitle.innerHTML.indexOf(' ', $courseTitle.innerHTML.indexOf(' ') + 2);
            let $courseName = $courseTitle.innerHTML.slice($nameInt+1);
            /*検索精度向上アルゴリズム
            科目名に数字が入っていたとき
                数字はシラバス検索システムではエラーの要因、英数字と日本語の間をスペースで分割することで検索精度向上することが分かった
                →数字を含む科目名の場合スペースを数字の前に挿入するという処理を実行　[基礎情報演習１Ｂ]→[基礎情報演習 １Ｂ]
            科目名に数字がないとき
                教科名を+Subject"教科名"で検索に投げることで、教科の名前のみで合致するか検索するようになるためそれを挿入
                スペースで区切られていたり、数字が入っている科目の場合はこれだと検索できない場合が多かったので数字がないときとは処理を分岐
            記号が入っている科目
                スペースに置換
            特定の科目
                特定の文字列に変換
            */
                $courseName = specificCourse($courseName);
                $courseName = $courseName.replace(/＆/g," ");
                $courseName = $courseName.replace(/．/g," ");
                $courseName = $courseName.replace(/・/g," ");
                $courseName = $courseName.replace(/（/g," ");
                $courseName = $courseName.replace(/）/g," ");
                $courseName = $courseName.replace(/／/g," ");
            let $courseNameStr ='';
            let $courseNameStrEnc ='';
            if( $courseName.search(/[０-９]|[0-9]/) > 0){
                $courseNameStr = $courseName.slice(0,$courseName.search(/[０-９]|[0-9]/));
                $courseNameStr = $courseNameStr + ' ' +$courseName.slice($courseName.search(/[０-９]|[0-9]/));
                $courseNameStrEnc = EscapeEUCJP($courseNameStr);
            }else if(!($courseName.includes(' '))){
                $courseNameStr = `subject:"${$courseName}"`;
                $courseNameStrEnc = `%2B${EscapeEUCJP($courseNameStr)}`;
            }else{
                $courseNameStr = $courseName;
                $courseNameStrEnc = EscapeEUCJP($courseNameStr);
            }
            console.log('授業検索名を決定しました['+$courseNameStr+']');
            console.log("EUC-JPに変換中");
            $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<a href="http://syllabus.sic.shibaura-it.ac.jp/namazu/namazu.cgi?ajaxmode=true&query=${$courseNameStrEnc}&whence=0&idxname=`+year+`%2F`+fac+`&max=20&result=normal&sort=score#:~:text=%E6%A4%9C%E7%B4%A2%E7%B5%90%E6%9E%9C,-%E5%8F%82%E8%80%83%E3%83%92%E3%83%83%E3%83%88%E6%95%B0"  target="_blank" rel="noopener noreferrer" class="btn btn-square btn-square-area btn-txt white-btn-color" style="margin-left:40px;margin-bottom:5px;">シラバスを表示</a>
                <span style="margin-left:35px;margin-bottom:10px;font-size:60%;">※自動検索で関連付けているため、違う教科のシラバスが開かれることがあります。</span>
                `);
        }
        console.log("シラバスリンクの挿入が完了しました");
    }
    return;
}
function displaySyllabusError(){
    'use strict';
    if (location.href.includes('scombz.shibaura-it.ac.jp/lms/course?idnumber=')){
        const $courseTitle = document.querySelector('.course-title-txt');
        $courseTitle.parentNode.insertAdjacentHTML('beforeEnd',`<span style="color:red;">シラバス表示をするには、学年と学部を設定してください</span>`);
    }
    return;
}
function specificCourse(courseName) {
    if (courseName.includes("ＷｒｉｔｉｎｇI")){
        courseName = courseName.replace("ＷｒｉｔｉｎｇI","Ｗｒｉｔｉｎｇ I");
    }
    if (courseName == "Ｈ．Ｃ．インタラクション"){
        courseName = "インタラクション";
    }
    return courseName;
}