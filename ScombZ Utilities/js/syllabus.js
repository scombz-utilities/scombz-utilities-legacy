/* ScombZ Utilities */
/* syllabus.js */
function syllabusLoaded($settings_year , $settings_fac){
    'use strict';
    if(location.href.includes("namazu") && location.href.includes("ajaxmode=true")){
        console.log("ScombZからのシラバスへの遷移を検出しました");
        const $sylSubjLink = document.getElementById("hit_1");
        const $sylSubDDTag = document.getElementsByTagName("a");
        const $sylSubjLink2 = document.getElementById("hit_2");
        let $suggestSubj = '';
        const $namazuHeader = document.querySelector(".namazu-result-header");
        let $autoredirect = true;
        if( document.getElementsByTagName("dt")[15])  {
            //スコアが近いものが複数あった時の処理
            const $dltag =String(document.getElementsByTagName("dl")[2].innerHTML);
            const $score1 = 5+$dltag.indexOf("スコア:");
            const $score2 = 5+$dltag.indexOf("スコア:",$score1+1);
            const $score1word = Number($dltag.slice($score1,$dltag.indexOf(")",$score1+1)));//1つ目のスコア
            const $score2word = Number($dltag.slice($score2,$dltag.indexOf(")",$score2+1)));//2つ目のスコア
            if($namazuHeader){
            $namazuHeader.insertAdjacentHTML('beforeEnd',`
                <style type="text/css">
                    .result-list-box{
                        padding:10px;
                        border:2px solid #ccc;
                        border-radius:10px;
                    }
                    .result-alert{
                        padding:10px 10px 10px 30px;
                        background:#eee;
                        margin:10px;
                        border:2px solid #ccc;
                        border-radius:10px;
                    }
                    strong.keyword {
                        color:#337ab7;
                    }
                    .gakkaname{
                        font-weight:bold;
                        font-size:80%;
                        border:1px solid #ccc;
                        width:fit-content;
                        padding:2px;
                        border-radius:2px;
                        margin-right:2px;
                        display:inline-block;
                    }
                    .gakkaname-area{
                        width:100%;
                    }
                </style>
                    <div class="result-alert">
                    <h1>複数の類似したシラバスデータを検出しました</h1>
                    <h3>以下の一覧から該当する科目を選択してください</h3>
                    </div>
                `);
                console.log("類似度: "+ ($score1word-$score2word));
                if($score1word-$score2word < 3){
                    const $sylSubjLink3 = document.getElementById("hit_3");
                    if ($sylSubjLink2 && $sylSubjLink3){
                        $autoredirect = false;
                    }
                    if($dltag.includes(`<dt><strong class="keyword">1</strong>`)){
                        let $buggingArea = $dltag.slice(0,$score1-7);
                        $buggingArea = $buggingArea.slice($buggingArea.indexOf("href"));
                        $buggingArea = `<dt>1.<strong><a id="hit_1" `+$buggingArea;
                        document.getElementsByTagName("dl")[2].innerHTML = $buggingArea+$dltag.slice($score1-7);
                        console.log("置換します");
                    }
                    document.getElementsByTagName("dl")[2].classList.add("result-list-box");
                    $namazuHeader.setAttribute('id', 'searchResult');
                    document.querySelector(".namazu-result-footer").insertAdjacentHTML('afterEnd',`
                    <div style="width:100%;height:50vh;">
                    </div>
                    `);
                    window.location.href = "#searchResult";
                    //Ajax通信
                    const hitarea = document.querySelector(".namazu-result-header").innerHTML.indexOf("<!-- HIT -->");
                    const the_number_of_hit = Number(document.querySelector(".namazu-result-header").innerHTML.slice(hitarea+12 , hitarea+17).replace(/[^0-9]/g,''));
                    for(let i = 0; i < 20 && i < the_number_of_hit ; i++){
                        let link = $sylSubDDTag[22+i*2].innerHTML;
                        getDepartment(link,i+1);
                    }
                    //Ajax関数定義
                    function getDepartment(URL,cnt){
                        async function getDepResponse() {
                            const res = await fetch(URL);
                            const data = await res.text();
                            return data;
                        }
                        getDepResponse()
                            .then(data => {
                                let gakkaID = data.slice( data.indexOf(`<div id="KamokuCD">`)+19 , data.indexOf(`<div id="KamokuCD">`)+21 );
                                console.log(cnt+": "+gakkaID);
                                document.getElementsByTagName("dt")[12+cnt].insertAdjacentHTML('afterBegin',`<div class="gakkaname-area">${gakkaIDtoStr(gakkaID)}</div>`);
                            })
                            .catch(err => {
                                return err;
                            });
                    }
                }
            }
        }
            //検索からの自動リンク
            $suggestSubj = '';
            if ($sylSubjLink2){
                $suggestSubj += "?suggesting=true&sug1l="+$sylSubjLink2.href.substring($sylSubjLink2.href.length - 14);
            }
            if($autoredirect){
                if($sylSubjLink){
                    console.log("科目ページに遷移します by ID");
                    window.location.href = `${$sylSubjLink.href}${$suggestSubj}`;
                }else if($sylSubDDTag[22]){
                    console.log("科目ページに遷移します by Tag");
                    window.location.href = `${$sylSubDDTag[22].innerHTML}${$suggestSubj}`;
                }else{
                    console.log("科目が見つかりませんでした");
                    $namazuHeader.setAttribute('id', 'searchResult');
                    $namazuHeader.insertAdjacentHTML('beforeEnd',`
                    <div style="height:100vh;">
                    <h1>シラバスデータの取得に失敗しました</h1>
                    <h3>該当する科目が見つかりませんでした。科目名に記号が含まれているとうまく見つからない場合があります。\nお手数おかけしますが、シラバス内で直接お探しください。</h3>
                    <h3><a href="http://syllabus.sic.shibaura-it.ac.jp/">シラバスへ</a></h3>
                    </div>
                    `);
                    window.location.href = "#searchResult";
                }
            }
    }else if(location.href.includes(`${$settings_year}/${$settings_fac}/`) && location.href.includes("?suggesting=true")){
        //もしかしてを…表示する
        /* まだ実装途中 科目名の表示が不適切 */
        //jQueryを使って実装
        $(function() {
            console.log("SUGGESTING");
            var urlPrm = new Object;
            var urlSearch = location.search.substring(1).split('&');
            for(let i=0;urlSearch[i];i++) {
                var kv = urlSearch[i].split('=');
                urlPrm[kv[0]]=kv[1];
            }
            $.ajax({
                type: "GET",
                url: urlPrm.sug1l,
                dataType:"html"
            })
            .then(
                //通信成功時
                function(data) {
                    console.log("読み込み成功");
                    const sug1n = $(data).find("span.kamoku").html();
                    let $suggest = '<div class="suggest">';
                        $suggest += `<a href="${urlPrm.sug1l}" style="margin:1px 10px;">${sug1n}</a>`;
                        console.log("挿入中");
                        document.body.insertAdjacentHTML(`afterBegin`,`<p style="margin-top:50px;">こちらの教科をお探しですか？</p>${$suggest}
                        `);
                    },
                function(){
                    console.log("読み込み失敗");
                }
            );
        });
    }else if(location.href.includes("Matrix")){
        //見やすくする by とくめいっ！
        console.log("シラバスのスタイルを変更します");
        window.addEventListener('load', function(){
            const $list1 = document.querySelector(".table_sticky thead tr td");
            if($list1){
                $list1.style.position = "static";
                let li = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(1) th");
                for (const l of li){
                    l.style.position = "static";
                }
            }
            const $list2 = document.querySelectorAll(".table_sticky thead:nth-child(2) tr:nth-child(2) th");
            if($list2[0]){
                for (const li2 of $list2){
                    li2.style.position = "static";
                }
            }
            console.log("変更が完了しました");
        });
    }
    return;
}
function gakkaIDtoStr(gakkaID) {
    let str = "";
    if(gakkaID.includes('A')){
        str += '<div class="gakkaname">機械工学科</div>';
    }
    if(gakkaID.includes('B')){
        str += '<div class="gakkaname">機械機能工学科</div>';
    }
    if(gakkaID.includes('C')){
        str += '<div class="gakkaname">材料工学科</div>';
    }
    if(gakkaID.includes('D')){
        str += '<div class="gakkaname">応用科学科</div>';
    }
    if(gakkaID.includes('E')){
        str += '<div class="gakkaname">電気工学科</div>';
    }
    if(gakkaID.includes('F')){
        str += '<div class="gakkaname">情報通信工学科</div>';
    }
    if(gakkaID.includes('G')){
        str += '<div class="gakkaname">電子工学科</div>';
    }
    if(gakkaID.includes('H')){
        str += '<div class="gakkaname">土木工学科</div>';
    }
    if(gakkaID.includes('L')){
        str += '<div class="gakkaname">情報工学科</div>';
    }
    if(gakkaID.includes('P')){
        str += '<div class="gakkaname">電子情報システム学科</div>';
    }
    if(gakkaID.includes('Q')){
        str += '<div class="gakkaname">機械制御システム学科</div>';
    }
    if(gakkaID.includes('R')){
        str += '<div class="gakkaname">環境システム学科</div>';
    }
    if(gakkaID.includes('N')){
        str += '<div class="gakkaname">生命科学科</div>';
    }
    if(gakkaID.includes('V')){
        str += '<div class="gakkaname">数理科学科</div>';
    }
    if(str.length < 2){
        str = '<div class="gakkaname">学科指定なし</div>';
    }
    return str;
}