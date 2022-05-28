/* ScombZ Utilities */
/* adjustTimetable.js */
/* Kyo_s_s */

function adjustTimetable(data, addSubTimetable){
    'use strict';
    let addcss = '<style type="text/css">';

    if(location.href === 'https://scombz.shibaura-it.ac.jp/lms/timetable'){
        // 土曜日削除
        if(data.eraseSat === true){
            const sats = Array.from(document.getElementsByClassName('6-yobicol'));
            for(const sat of sats) sat.remove();
            
        }

        // 5, 6限削除
        const TableDataRow = Array.from(document.getElementsByClassName('div-table-data-row'));
        if(TableDataRow.length > 0 && data.erase6) TableDataRow[5].remove();           
        if(TableDataRow.length > 0 && data.erase7) TableDataRow[6].remove();
        
        // 教室名表示
        if(data.dispClassroom === true){
            const TableCellDetail = Array.from(document.getElementsByClassName('div-table-cell-detail'));
            for(const cell of TableCellDetail){
                let classroom = cell.firstElementChild.title;  
                cell.firstElementChild.innerHTML = '<p style = "white-space: nowrap; overflow : hidden; text-overflow: ellipsis;">' + classroom + '</p>';
            }
        }

        // センタリング
        if(data.timetableCentering === true){
            addcss += `
                .div-table{
                    text-align: center;
                }
            `;
        }
    }

    if(data.eraseSat === true){
        addcss += `
            th.SubTimetable:nth-child(7), td.SubTimetable:nth-child(7) {
                display: none;
            }
        `;
    } 
    
    addcss += '</style>';
    document.head.insertAdjacentHTML('beforeEnd', addcss);
    


    // subTimetable の 5, 6限削除
    if(addSubTimetable === true){
        const existingTimetable = setInterval(function(){
            if(document.getElementById('subTimetable')){
                clearInterval(existingTimetable);
                const Timetablerows = Array.from(document.getElementById('subTimetable').rows);
                if(data.erase6) Timetablerows[6].remove();
                if(data.erase7) Timetablerows[7].remove();
            }
        },100);
    }
    // alert('adjusttimeTableが終了');
}   