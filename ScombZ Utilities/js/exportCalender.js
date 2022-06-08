/* ScombZ Utilities */
/* exportCalender.js */
function exportCalender() {
    function getJSON(filename) {
        return new Promise(function(r) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', chrome.runtime.getURL(filename), true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    r(xhr.responseText);
                }
            };
            xhr.send();
        });
    }
    if(location.href.includes("https://scombz.shibaura-it.ac.jp/lms/timetable")){
        const ttbody = document.getElementById("selectTimetable");
        if(ttbody){
            ttbody.querySelector("div").insertAdjacentHTML("afterBegin",`
            <style>
                .utilities-calender-export-btn{
                    display:block;
                    float:right;
                    transform: translateY(100%);
                    color: #222;
                }
            </style>
            <a href="javascript:void(0);" class="utilities-calender-export-btn" id="utlCalExportBtn">カレンダー形式にエクスポート</a>
            `);
            document.getElementById("utlCalExportBtn").addEventListener("click",function(){
                exportLMStoCalender();
            });
        }
    }else if(location.href.includes("https://scombz.shibaura-it.ac.jp/portal/home")){
        setTimeout(() => {
            const $exportGoogleBtn = document.querySelector(".portal-calendar-event-export.calendar_ics_download");
            if($exportGoogleBtn){
                getJSON('gcal/calender.json').then(function(r) {
                    //JSONファイルを読み込んだ後の処理
                    const jsondata = JSON.parse(r);
                    $exportGoogleBtn.insertAdjacentHTML("afterEnd",`
                    <a class="portal-calendar-event-export-a" href="javascript:void(0);" id="utlExportCalender">学年歴のエクスポート</a>
                    `);
                    document.body.insertAdjacentHTML("beforeEnd",`
                    <style>
                        #calSelectBackground{
                            width: 100%;
                            height: 100%;
                            position: fixed;
                            z-index: 20;
                            background: #0007;
                            top: 0;
                            left: 0;
                            display:none;
                        }
                        #calSelectLayer{
                            position: fixed;
                            width: 80%;
                            height: 70vh;
                            background-color:#fff;
                            top: 50%;
                            left: 50%;
                            transform: translateY(-50%) translateX(-50%);
                            z-index: 25;
                            text-align:center;
                            padding:30px;
                            display:none;
                        }
                        #calSelectSubmit{
                            display:block;
                            margin:10px auto;
                            padding:5px 10px;
                            min-width:200px
                        }
                        #calSelectYear{
                            display:block;
                            margin:10px auto;
                            padding:5px 10px;
                            height:30px;
                            width:400px;
                            font-size:16px;
                        }
                        #lmsCalExport{
                            display:block;
                            margin:10px auto;
                            margin-top:30px;
                            padding:5px 10px;
                            min-width:200px
                        }
                    </style>
                    <div id="calSelectBackground"></div>
                    <div id="calSelectLayer">
                    <h1>年度を選択してください</h1>
                    <p>ics形式でエクスポートされます。格納されているデータは、休講日、祝日ではあるが登校日である日、行事です。<br>授業も含めたデータのエクスポートはLMSからも行えます。</p>
                    <select id="calSelectYear">
                    </select>
                    <button id="calSelectSubmit">決定して出力</button>
                    <div>
                    <h2>LMSの授業時間割も含めて出力</h2>
                    <p>ics形式でエクスポートされます。格納されているデータは、休講日、祝日ではあるが登校日である日、行事、授業です。<br>※このモードは上の粘土選択にかかわらず、LMSに保存されている年度・学期が出力されます</p>
                    <button id="lmsCalExport">LMSの授業時間割も含めて出力する</button>
                    </div>
                    </div>
                    `);
                    document.getElementById("utlExportCalender").addEventListener("click",function(){
                        document.getElementById("calSelectBackground").style.display = "block";
                        document.getElementById("calSelectLayer").style.display = "block";
                    });
                    document.getElementById("calSelectBackground").addEventListener("click",function(){
                        document.getElementById("calSelectBackground").style.display = "none";
                        document.getElementById("calSelectLayer").style.display = "none";
                    });
                    for(const years of jsondata){
                        document.getElementById("calSelectYear").insertAdjacentHTML("beforeEnd",`
                        <option value="${years.year}">${years.year}年度</option>
                        `);
                    }
                    document.getElementById("lmsCalExport").addEventListener("click",function(){
                        exportLMStoCalender();
                    });
                    document.getElementById("calSelectSubmit").addEventListener("click",function(){
                        const gyear = Number(document.getElementById("calSelectYear").value);
                        console.log({gyear});
                        for(let i = 0; jsondata[i]; i++){
                            if(jsondata[i].year === gyear){
                                const gcal = jsondata[i].content;
                                console.log(jsondata);
                                let cal = ics();
                                //祝日・特別日情報を出力する
                                for(let i=0;gcal.holidays[i];i++){
                                    if(gcal.holidays[i].nationalHolidays){
                                        continue;
                                    }
                                    cal.addEvent(gcal.holidays[i].name, gcal.holidays[i].description, '', gcal.holidays[i].date, gcal.holidays[i].date);
                                }
                                for(let i=0;gcal.specialDays[i];i++){
                                    cal.addEvent(gcal.specialDays[i].name, gcal.specialDays[i].description, '', gcal.specialDays[i].date, gcal.specialDays[i].date);
                                }
                                cal.download(`${gyear}年度学年歴`);
                                break;
                            }
                        }
                    });
                });
            }
        },200);
    }
    function exportLMStoCalender(){
        chrome.storage.local.get({
            timetableData : null
        },function(items){
            console.log("時間割カレンダー出力");
            if(items.timetableData === null){
                window.alert("ERROR:時間割の読み込みに失敗しました。");
            }else{
                getJSON('gcal/calender.json').then(function(r) {
                    //JSONファイルを読み込んだ後の処理
                    const jsondata = JSON.parse(r);
                    const $timetableDatas = JSON.parse(decodeURIComponent(items.timetableData));
                    if(!$timetableDatas[$timetableDatas.length - 1].termYear){
                        window.alert("ERROR:時間割の読み込みに失敗しました。アップデート直後の場合は、LMSページを再読み込みしてください。");
                        return;
                    }
                    const termYear = $timetableDatas[$timetableDatas.length - 1].termYear;
                    const termPhase = $timetableDatas[$timetableDatas.length - 1].termPhase;
                    let gcalsource;
                    for(const gcalArray of jsondata){
                        if(gcalArray.year === termYear){
                            gcalsource = gcalArray.content;
                        }
                    }
                    if(gcalsource == null){//厳密比較だとダメ
                        window.alert(`ERROR:${termYear}年度の学年歴データが見つかりませんでした。`);
                        return;
                    }
                    const gcal = gcalsource;
                    let cal = ics();
                    
                    for(const $timetableData of $timetableDatas){
                        if($timetableData.day && $timetableData.time && 
                            $timetableData.day > 0 &&
                            $timetableData.time > 0){//正しい週ごとの時間割形式だったら
                                //授業開始日を取得
                                let phaseBegin = new Date(Date.parse((termPhase == 1)?gcal.termLength[0].begin:gcal.termLength[2].begin));
                                //let phaseEnd   = new Date(Date.parse((termPhase == 1)?gcal.termLength[0].end:gcal.termLength[2].end));
                                //クォーター制授業だったら7回で終了
                                let cnt = 0;
                                if($timetableData.name.slice(-4).replace(/[Ａ-Ｚａ-ｚ０-９]/g, '') === "(Q)"){
                                    cnt = 7;
                                    const termNum = Number($timetableData.name.slice(-4,-1).replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
                                        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                                    }).replace(/[^0-9]/g, ''))-1;
                                    phaseBegin = new Date(Date.parse((termPhase == 1)?gcal.termLength[termNum].begin:gcal.termLength[termNum].begin));
                                    phaseEnd   = new Date(Date.parse((termPhase == 1)?gcal.termLength[termNum].end  :gcal.termLength[termNum].end  ));
                                }
                                
                                //timeを時刻文字列に変換
                                let pBegin = pEnd = '';
                                switch($timetableData.time){
                                    case 1:
                                        pBegin  = '9:00';
                                        pEnd    = '10:40';
                                        break;
                                    case 2:
                                        pBegin  = '10:50';
                                        pEnd    = '12:30';
                                        break;
                                    case 3:
                                        pBegin  = '13:20';
                                        pEnd    = '15:00';
                                        break;
                                    case 4:
                                        pBegin  = '15:10';
                                        pEnd    = '16:50';
                                        break;
                                    case 5:
                                        pBegin  = '17:00';
                                        pEnd    = '18:40';
                                        break;
                                    case 6:
                                        pBegin  = '18:50';
                                        pEnd    = '20:30';
                                        break
                                    default:
                                        pBegin  = '20:40';
                                        pEnd    = '21:20';
                                        break;
                                }
                                //14回分(クォーター制は7回)生成、授業実施日でなかったらskip
                                //授業終了日は上回らないようにしたい(今後)
                                
                                for(let i = 0; cnt < 14; i++){
                                    //授業実施日であるか確認
                                    let skipflag = false;
                                    let theDate = new Date(phaseBegin);
                                    theDate.setDate(phaseBegin.getDate() + $timetableData.day-1 + i*7);
                                    //祝日かどうか
                                    for(let j = 0; gcal.holidays[j]; j++){
                                        if(skipflag){
                                            break;
                                        }
                                        if(Math.floor(theDate.getTime() / (1000 *60 *60 *24)) === Math.floor((new Date(gcal.holidays[j].date)).getTime() / (1000 * 60 * 60 * 24))){
                                            cnt--;
                                            skipflag = true;
                                            break;
                                        }
                                    }
                                    //長期祝日かどうか
                                    for(let j = 0; gcal.longholidays[j]; j++){
                                        if(skipflag){
                                            break;
                                        }
                                        if( Math.floor(theDate.getTime() / (1000 *60 *60 *24)) >= Math.floor((new Date(gcal.longholidays[j].begin)).getTime() / (1000 * 60 * 60 * 24))&&
                                            Math.floor(theDate.getTime() / (1000 *60 *60 *24)) <= Math.floor((new Date(gcal.longholidays[j].end)).getTime() / (1000 * 60 * 60 * 24))
                                        ){
                                            cnt--;
                                            skipflag = true;
                                            break;
                                        }
                                    }
                                    //午後休等かどうか
                                    for(let j = 0; gcal.specialDays[j]; j++){
                                        if(skipflag){
                                            break;
                                        }
                                        if( Math.floor(theDate.getTime() / (1000 *60 *60 *24)) === Math.floor((new Date(gcal.specialDays[j].date)).getTime() / (1000 * 60 * 60 * 24))&&
                                        gcal.specialDays[j].cansel && gcal.specialDays[j].cansel.includes($timetableData.time)
                                        ){
                                            cnt--;
                                            skipflag = true;
                                            break;
                                        }
                                    }
                                    //もしスキップにするべきでなかったら表示
                                    if(!skipflag){
                                        cal.addEvent($timetableData.name, `第${cnt+1}回授業`, $timetableData.classroom , `${theDate.getFullYear()}/${theDate.getMonth() + 1}/${theDate.getDate()} ${pBegin}`,  `${theDate.getFullYear()}/${theDate.getMonth() + 1}/${theDate.getDate()} ${pEnd}`);
                                    }
                                    cnt++;
                                }
                            }
                    }
                    //祝日・特別日情報を出力する
                    for(let i=0;gcal.holidays[i];i++){
                        if(gcal.holidays[i].nationalHolidays){
                            continue;
                        }
                        cal.addEvent(gcal.holidays[i].name, gcal.holidays[i].description, '', gcal.holidays[i].date, gcal.holidays[i].date);
                    }
                    for(let i=0;gcal.specialDays[i];i++){
                        cal.addEvent(gcal.specialDays[i].name, gcal.specialDays[i].description, '', gcal.specialDays[i].date, gcal.specialDays[i].date);
                    }
                    cal.download(`${termYear}年度${(termPhase === 1)?'前期':'後期'}`);
                });
            }
        });
    }
}
