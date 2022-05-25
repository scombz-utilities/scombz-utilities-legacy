/* ScombZ Utilities */
/* adjustTimetable.js */
/* Kyo_s_s */

function adjustTimetable(data, addSubTimetable){
    'use strict';
    var addcss = '<style type="text/css">';

    if(data.eraseSat === true){
        const sats = Array.from(document.getElementsByClassName('6-yobicol'));
        for(const sat of sats) sat.remove();
        addcss += `
            th.SubTimetable:nth-child(7), td.SubTimetable:nth-child(7) {
                display: none;
            }
        `;
    }
    
    if(data.timetableCentering === true){
        addcss += `
            .div-table{
                text-align: center;
            }
        `;
    }
    
    // 教室名表示　20文字を超えたら丸める
    if(data.dispClassroom === true){
        const TableCellDetail = Array.from(document.getElementsByClassName('div-table-cell-detail'));
        for(const cell of TableCellDetail){
            let classroom = cell.firstElementChild.title;  
            if(classroom.length > 20) classroom = classroom.substring(0, 20) + '...';
            cell.firstElementChild.innerHTML = '<p>' + classroom + '</p>';
        }
    }

    const TableDataRow = Array.from(document.getElementsByClassName('div-table-data-row'));
    if(TableDataRow.length > 0 && data.erase6) TableDataRow[5].remove();           
    if(TableDataRow.length > 0 && data.erase7) TableDataRow[6].remove();

    
    addcss += '</style>';
    document.head.insertAdjacentHTML('beforeEnd', addcss);


    if(addSubTimetable === true){
        const existingTimetable = setInterval(function(){
            if(document.getElementById('SubTimetableid')){
                clearInterval(existingTimetable);
                const Timetablerows = Array.from(document.getElementById('SubTimetableid').rows);
                if(data.erase6) Timetablerows[6].remove();
                if(data.erase7) Timetablerows[7].remove();
            }
        },100);
    }
    // alert('adjusttimeTableが終了');
}   