/* ScombZ Utilities */
/* getTaskLists.js */
function getTaskLists($$reacquisitionMin) {
    'use strict';
    if (location.href == 'https://scombz.shibaura-it.ac.jp/lms/task') {
        getTasksOnTaskpage();
    } else {
        getTasksByAdjax($$reacquisitionMin);
    }
    return;
}
function getTasksOnTaskpage() {
    'use strict';
    console.log('課題一覧ページを検出しました');
    const $taskList = document.getElementById('taskList');
    if ($taskList) {
        const $taskListsObj = [];
        $taskListsObj.push({
            data: null
        });
        const $tasks = $taskList.querySelectorAll('.result_list_line');
        for (const $task of $tasks) {
            const $taskObj = {};
            $taskObj.course = $task.querySelector('.course').innerHTML;
            $taskObj.title = $task.querySelector(
                '.tasklist-title a:nth-child(1)'
            ).innerHTML;
            $taskObj.link = $task.querySelector(
                '.tasklist-title a:nth-child(1)'
            ).href;
            $taskObj.deadline = $task.querySelector(
                '.tasklist-deadline .deadline'
            ).innerHTML;
            if (!$taskObj.link.includes('https://scombz.shibaura-it.ac.jp')) {
                $taskObj.link =
                    'https://scombz.shibaura-it.ac.jp' + $taskObj.link;
            }
            $taskListsObj.push($taskObj);
        }
        console.log(
            '課題一覧を取得しました:\n' + JSON.stringify($taskListsObj)
        );
        chrome.storage.local.set(
            {
                tasklistData: encodeURIComponent(JSON.stringify($taskListsObj))
            },
            function () {
                console.log('課題一覧をChromeLocalStorageに保存しました');
            }
        );
    }
    return;
}
function getTasksByAdjax($$reacquisitionMin) {
    'use strict';
    // 現在時刻と前回取得日時を取得して比較
    const $nowUnix = Date.now();
    chrome.storage.local.get(
        {
            TaskGetTime: 0
        },
        function (item) {
            if (
                Number(item.TaskGetTime) + $$reacquisitionMin * 1000 * 60 >
                Number($nowUnix)
            ) {
                console.log(
                    `前回日時: ${new Date(
                        item.TaskGetTime
                    ).toLocaleString()}\n現在日時: ${new Date(
                        $nowUnix
                    ).toLocaleString()}\n${$$reacquisitionMin}分経過していないため、再取得をスキップします`
                );
            } else {
                console.log(
                    `前回日時: ${new Date(
                        item.TaskGetTime
                    ).toLocaleString()}\n現在日時: ${new Date(
                        $nowUnix
                    ).toLocaleString()}`
                );
                console.log('課題取得を開始します');
                // Ajax通信
                // jQueryを使って実装
                $(function () {
                    console.log('Getting Timetable Data By Ajax');
                    $.ajax({
                        type: 'GET',
                        url: 'https://scombz.shibaura-it.ac.jp/lms/task',
                        dataType: 'html'
                    }).then(
                        // 通信成功時
                        function (data) {
                            console.log('課題一覧ページAjax読み込み成功');
                            const $taskListsObj = [];
                            $taskListsObj.push({
                                data: null
                            });
                            for (
                                let i = 0;
                                $(data)
                                    .find('.result_list_line .course')
                                    .eq(i)
                                    .html();
                                i++
                            ) {
                                const $taskObj = {};
                                $taskObj.course = $(data)
                                    .find('.result_list_line .course')
                                    .eq(i)
                                    .html();
                                $taskObj.title = $(data)
                                    .find('.result_list_line .tasklist-title a')
                                    .eq(i * 2)
                                    .html();
                                $taskObj.link = $(data)
                                    .find('.result_list_line .tasklist-title a')
                                    .eq(i * 2)
                                    .attr('href');
                                $taskObj.deadline = $(data)
                                    .find(
                                        '.result_list_line .tasklist-deadline .deadline'
                                    )
                                    .eq(i)
                                    .html();
                                if (
                                    !$taskObj.link.includes(
                                        'https://scombz.shibaura-it.ac.jp'
                                    )
                                ) {
                                    $taskObj.link =
                                        'https://scombz.shibaura-it.ac.jp' +
                                        $taskObj.link;
                                }
                                $taskListsObj.push($taskObj);
                            }
                            console.log(
                                '課題一覧をAjaxで取得しました: \n' +
                                    JSON.stringify($taskListsObj)
                            );
                            chrome.storage.local.set(
                                {
                                    TaskGetTime: $nowUnix,
                                    tasklistData: encodeURIComponent(
                                        JSON.stringify($taskListsObj)
                                    )
                                },
                                function () {
                                    console.log(
                                        '課題一覧と現在時刻をChromeLocalStorageに保存しました'
                                    );
                                }
                            );
                        },
                        // 通信失敗時
                        function () {
                            console.log('読み込み失敗');
                        }
                    );
                });
            }
        }
    );
    return;
}
