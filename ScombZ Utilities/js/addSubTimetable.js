/* ScombZ Utilities */
/* addSubTimetable.js */

//LMS取得&表示
function subTimetable($timetableDisplay,$$version){
    'use strict';
    if(document.getElementById('pageMain') === null){
        return;
    }
    if($timetableDisplay === true){
        if(location.href == 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
            getSubTimetable();
        }
        console.log('グレーレイヤー&時間割を追加します');
        displaySubTimetable($$version);
        console.log('グレーレイヤー&時間割を追加しました');
    }else{
        console.log('グレーレイヤーを追加します');
        displayGrayLayer($$version);
        console.log('グレーレイヤーを追加しました');
    }
    return;
}

//------------LMS情報取得------------
//全角数字→半角数字にする関数
function han2Zenkaku($str) {
    return $str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
//1文字目だけを切り取って半角にしてくれる関数
function jigenInt($str){
    return han2Zenkaku($str.charAt(0));
}
//LMSから情報を取得してJSON化する関数
//生成方法がごり押しすぎるのでどなたか直してください(涙)byうだい
function getSubTimetable(){
    console.log('LMSを取得開始します');
    const $courseList = document.querySelectorAll('.timetable-course-top-btn');
    if($courseList[0]){
        //JSON生成
        let $timetableData = '[';
        for(const $course of $courseList) {
            $timetableData+="{";
            for(let $yobicolNum = 1 ; $yobicolNum < 7 ; $yobicolNum++){
                if( $course.parentNode.parentNode.className.indexOf($yobicolNum+'-yobicol') != -1 ){
                    $timetableData+='"day":'+$yobicolNum+`,`;
                    $timetableData+='"time":'+jigenInt($course.parentNode.parentNode.parentNode.firstElementChild.innerHTML)+',';
                    break;
                }
                if($yobicolNum == 6){
                    $timetableData+=`"day":-1,"time":-1,`; // 曜日時限不定履修
                }
            }
            $timetableData+= '"id":"'+$course.getAttribute("id")+`",`;
            $timetableData+= '"name":"'+$course.innerHTML+`"},`;
        }
        $timetableData+='{"day":-2}]';
        console.log('LMSを取得しました\n\n'+$timetableData);
        localStorage.setItem("udai:timetableDataList",encodeURIComponent($timetableData));
        console.log('LocalStorageに保存しました');
        //JSON生成完了
    }
}

//------------LMS情報表示------------
function displaySubTimetable($$version){
    'use strict';
    if(localStorage.getItem("udai:timetableDataList") === null || localStorage.getItem("udai:timetableDataList") === undefined) {
        console.log('LocalStrageのアクセスに失敗しました');
        displayGrayLayer();
    }else{
        const $timetableDataStr = decodeURIComponent(localStorage.getItem("udai:timetableDataList"));
        console.log('LocalStrageのアクセスに成功しました\nJSONファイルにparseします');
        const $timetableData = JSON.parse($timetableDataStr);
        console.log('JSONファイルを読み込みました'+$timetableDataStr);
        let $subTimetable =`
        <style type="text/css">
            .SubTimetable {
                text-align:center;
                decolation:none;
                font-size:100%;
            }
            @media(max-width:1281px){
                .SubTimetable {
                    font-size:90%;
                }
            }
            td.SubTimetable , th.SubTimetable {
                width:calc((100vw - 300px)/7);
                height:4vh;
                background:#EDF3F7;
            }
            td.SubTimetable:nth-child(1) , th.SubTimetable:nth-child(1) {
                width:30px;
                background:#ec9c93;
            }
            th.SubTimetable{
                background:#bea87b;
                height:30px;
            }
            a.SubTimetable{
                display:block;
                width:100%;
                height:100%;
                min-height:40px;
            }
            a.SubTimetable:hover{
                background:rgba(206, 213, 217,0.5);
            }
            .subtimetableBodyCulm{
                background:rgba(255,255,255,0.5);
            }
        </style>
        <div class="subtimetableBody">
        <div class="subtimetableBodyCulm">
        <table class="SubTimetable">
            <thead>
                <tr>
                    <th class="SubTimetable"></th>
                    <th class="SubTimetable">月</th>
                    <th class="SubTimetable">火</th>
                    <th class="SubTimetable">水</th>
                    <th class="SubTimetable">木</th>
                    <th class="SubTimetable">金</th>
                    <th class="SubTimetable">土</th>
                </tr>
            </thead>
            <tbody>`;
        console.log('LMSを表示します');
        let num=0;
        //通常授業
        for(let i=0; i<7; i++){ //i=時限
            $subTimetable+='<tr>';
            for(let j=0; j<7; j++){ //j=曜日
                let $subjData = (j==0) ? i+1 : '';
                if( $timetableData[num].day == j && $timetableData[num].time == i+1 ){
                    //2Q、4Qのことを考える
                    if( $timetableData[num+1].day == j && $timetableData[num+1].time == i+1 ){
                        console.log('クォーター制授業を検出しました 曜日:'+j+' 時間:'+i);
                        $subjData = `
                        <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num].name}</span></a>
                        <a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num+1].id}" class="SubTimetable" style="color:#000000;text-decoration:none;margin-top:1px;border-top:1px solid #ccc; white-space: nowrap;text-overflow:ellipsis;overflow:hidden;font-size:80%;height:calc(50% - 2px);min-height:30px;"><span class="subTimetable">${$timetableData[num+1].name}</span></a>`;
                        num++;
                    }else{//2Q,4Qが存在しないとき
                        console.log('通常授業を検出しました 曜日:'+j+' 時間:'+i);
                        $subjData = `<a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a>`;
                    }
                    num++;
                }            
                $subTimetable+=`<td class="SubTimetable">${$subjData}</td>`;
            }
            $subTimetable+='</tr>';
        }
        $subTimetable += `</tbody></table></div>`;
        //曜日時間不定授業
        if($timetableData[num].day != -1){
            console.log('読み取り完了 課外授業なし day:'+$timetableData[num].day);
        }else{
            console.log('曜日時間不定授業・集中講座を検出しました');
            $subTimetable+= `
            <div class="subtimetableBodyCulm"><table class="SubTimetable" style="margin-top:10px;">
            <tr class="SubTimetable">
                <th class="SubTimetable">その他の授業</th>
            </tr>`;
            for(;$timetableData[num].day == -1;num++){
            $subTimetable+=`
                <tr>
                    <td class="SubTimetable" style="background:#EDF3F7;width:calc((100vw - 300px)/5);height:4vh;"><a href="https://scombz.shibaura-it.ac.jp/lms/course?idnumber=${$timetableData[num].id}" class="SubTimetable" style="color:#000000;text-decoration:none;"><span class="subTimetable">${$timetableData[num].name}</span></a></td>
                </tr>`;
            }
            $subTimetable+=`</table></div>`;
            console.log('読み取り完了 課外授業あり day:'+$timetableData[num].day);
        }
        $subTimetable+=`</div>`;
        console.log('時間割の生成に成功しました\nコマ数:'+num);

        document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
        <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
        <p class="usFooter">ScombZ Utilities ver.${$$version}<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
        `+$subTimetable);
    }
    return;
}
//時間割のないグレーレイヤーの表示関数
function displayGrayLayer($$version){
    'use strict';
    document.getElementById('pageMain').insertAdjacentHTML('beforeEnd',`
                    <div id="graylayer" onclick="document.getElementById('sidemenuClose').click();"></div>
                    <p class="usFooter">ScombZ Utilities ver.${$$version}<br>presented by <a style="color:#000000;" href="https://twitter.com/yudai1204" target="_blank" rel="noopener noreferrer">@yudai1204</a></p>
                    `);
    return;
}