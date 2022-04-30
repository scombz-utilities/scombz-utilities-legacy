/* ScombZ Utilities */
/* syllabus.js */
function syllabusLoaded($settings_year , $settings_fac){
    'use strict';
    if(location.href.includes("namazu") && location.href.includes("ajaxmode=true")){
        console.log("ScombZからのシラバスへの遷移を検出しました")
        const $namazuHeader = document.querySelector(".namazu-result-header");
        if(location.href.includes("%2Bsubject") && document.getElementsByTagName("dt")[15]){
            //複数あった時の処理
            if($namazuHeader){
                $namazuHeader.setAttribute('id', 'searchResult');
                $namazuHeader.insertAdjacentHTML('beforeEnd',`
                    <div style="width:100%;">
                    <h1>複数のシラバスデータを検出しました</h1>
                    <h3>以下の一覧から該当する科目を選択してください</h3>
                    </div>
                `);
                document.querySelector(".namazu-result-footer").insertAdjacentHTML('afterEnd',`
                <div style="width:100%;height:50vh;">
                </div>
                `);
                window.location.href = "#searchResult";
            }
        }else{
            //検索からの自動リンク
            function delstrong(str){
                str.replace(`<strong class="keyword">`,'');
                str.replace(`</strong>`,'');
                return str;
            }
            const $sylSubjLink = document.getElementById("hit_1");
            const $sylSubDDTag = document.getElementsByTagName("a");
            const $sylSubjLink2 = document.getElementById("hit_2");
            const $sylSubjLink3 = document.getElementById("hit_3");
            const $sylSubjLink4 = document.getElementById("hit_4");
            let $suggestSubj = '';
            if ($sylSubjLink2){
                $suggestSubj += "?scombzredirect=true&sug1l="+$sylSubjLink2.href.substring($sylSubjLink2.href.length - 14)+"&sug1n="+delstrong($sylSubjLink2.innerHTML);
            }
            if ($sylSubjLink3){
                $suggestSubj += "&sug2l="+$sylSubjLink3.href.substring($sylSubjLink3.href.length - 14)+"&sug2n="+delstrong($sylSubjLink3.innerHTML);
            }
            if ($sylSubjLink4){
                $suggestSubj += "&sug3l="+$sylSubjLink4.href.substring($sylSubjLink4.href.length - 14)+"&sug2n="+delstrong($sylSubjLink4.innerHTML);
            }
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
    }else if(location.href.includes(`${$settings_year}/${$settings_fac}/`) && location.href.includes("?scombzredirect=true")){
        //もしかしてを…表示する
        /* まだ実装途中 科目名の表示が不適切 */
        var urlPrm = new Object;
        var urlSearch = location.search.substring(1).split('&');
        for(let i=0;urlSearch[i];i++) {
            var kv = urlSearch[i].split('=');
            urlPrm[kv[0]]=kv[1];
        }
        let $suggest = '<div class="suggest">';
        if(urlPrm.sug1n && urlPrm.sug1l){
            $suggest += `<a href="${urlPrm.sug1l}" style="margin:1px 10px;">${urlPrm.sug1n}</a>`;
        }
        if(urlPrm.sug2n && urlPrm.sug2l){
            $suggest += `<a href="${urlPrm.sug2l}" style="margin:1px 10px;">${urlPrm.sug2n}</a>`;
        }
        if(urlPrm.sug3n && urlPrm.sug3l){
            $suggest += `<a href="${urlPrm.sug3l}" style="margin:1px 10px;">${urlPrm.sug3n}</a>`;
        }
        $suggest += "</div>";
        console.log($suggest);
            console.log("挿入中");
            document.body.insertAdjacentHTML(`afterBegin`,`<p style="margin-top:50px;">こちらの教科をお探しですか？</p>${$suggest}
            `);
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