
const downloadFilesMain = (dlLabels, btn) => {
    const resultURLs = [];
    const resultNames = [];
    function downloadFileRoutine(label){
        const tg = label.parentNode;
        const data = {};
        data.scanStatus = tg.querySelector(".scanStatus").textContent;
        data.fileName = tg.querySelector(".fileName").textContent;
        data.objectName = tg.querySelector(".objectName").textContent;
        data.resource_Id = tg.querySelector(".resource_Id").textContent;
        data.openEndDate = tg.querySelector(".openEndDate").textContent;
        data.dlMaterialId = tg.querySelector("#dlMaterialId").value;
        //console.log(data);

        //Ajaxする
        const param = {
            fileName: data.fileName,
            objectName: data.objectName,
            id: data.resource_Id,
            idnumber: document.querySelector('input[name="idnumber"]').value
        };

        // データをクエリパラメータにシリアライズする関数
        const serializeData = (data) => {
            const params = new URLSearchParams();
            for (const key in data) {
                params.append(key, data[key]);
            }
            return params.toString();
        };
        console.log({param});
        const tempUrl = "/lms/course/make/tempfile";
        $.ajax({
            type: "GET",
            url: tempUrl,
            data: param,
            async: false,
            cache: false,
            success: function (e) {
                const result = {
                    fileName: data.fileName,
                    fileId: e,
                    idnumber: document.getElementById("idnumber").value,
                    resourceId: data.resource_Id,
                    screen: 1,
                    contentId: data.dlMaterialId,
                    endDate: data.openEndDate
                }
                const resultURL ="https://scombz.shibaura-it.ac.jp/lms/course/material/setfiledown/" + encodeURIComponent(data.fileName.replace(/\s+/g, "_").replace(/_+/g, "_")).replace(/#/g, "%23") + "?" + serializeData(result);
                console.log(resultURL);
                resultURLs.push(resultURL);
                resultNames.push(data.fileName);
                btn.textContent = "URL取得中...(" + resultURLs.length + "/" + dlLabels.length + ")";
                if(resultURLs.length < dlLabels.length){
                    setTimeout(function(){
                        downloadFileRoutine(dlLabels[resultURLs.length]);
                    }, 100);
                }else{
                    console.log(resultURLs);
                    btn.textContent = "ダウンロード中...(0/"+resultURLs.length+")";
                    setTimeout(function(){
                        dlZip(resultURLs);
                    }, 100);
                    // setTimeout(function(){
                    //     btn.textContent = "一括ダウンロード";
                    //     btn.classList.remove("clicked");
                    // }, 100);
                }
            }
        })
    };
    downloadFileRoutine(dlLabels[0]);
    return;
    // 画像の一括ダウンロード
    async function dlZip(urls) {
        let downloadCount = 0;
        // JSZip に追加するために非同期リクエストを Promise で wrap
        const imagePromises = urls.map(
            (src, i) => new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', src, true);
                xhr.responseType = "blob";
                xhr.onload = function() {
                    downloadCount++;
                    btn.textContent = "ダウンロード中...(" + downloadCount + "/" + urls.length + ")";
                    // ファイル名とデータ返却
                    const fileName = resultNames[i];
                    resolve({ data: this.response, fileName: fileName });
                };
                // reject だと await Promise.all を抜けてしまう
                // => resolve でデータ無し
                xhr.onerror = () => resolve({ data: null });
                xhr.onabort = () => resolve({ data: null });
                xhr.ontimeout = () => resolve({ data: null });
                xhr.send();
            })
        );

        // すべてのファイルが取得できたら zip 生成
        const images = await Promise.all(imagePromises);
        generateZip(images);
    }

    // zip ファイルで画像をダウンロード
    function generateZip(images) {
        btn.textContent = "ZIPファイル生成中...(時間がかかります)";
        let zip = new JSZip();

        // フォルダ作成
        let folderName = "download";
        const courseTitle = document.querySelector(
            '#courseTopForm > div.course-header > div:nth-child(1) > div.course-title-txt.course-view-header-txt'
        )
        if (courseTitle) {
            // 科目名を取得する。例えば、「学部 01CD456789 Course Name」のような文字列から科目名（この例では「Course Name」）を抽出する
            const courseName = courseTitle.textContent
                .split(/ [0-9A-Za-z]{10} /)
                .at(-1)
                .trim()
                .replace(/\s+/g, "_");
            const t = new Date();

            folderName = `${courseName}`;
            if(btn.getAttribute("data-title")) folderName += `_${btn.getAttribute("data-title")}`;
            folderName += `_${("00"+(t.getMonth() + 1)).slice(-2)}${("00"+t.getDate()).slice(-2)}_${("00"+t.getHours()).slice(-2)}${("00"+t.getMinutes()).slice(-2)}`;
        }


        // フォルダ下にデータを格納
        images.forEach(image => {
            if (image.data && image.fileName) {
                zip.file(image.fileName, image.data)
            }
        });

        // zip を生成
        zip.generateAsync({ type: "blob" ,
            compression: "DEFLATE",
            compressionOptions: {
                level: 3
            }
        }).then(blob => {

            // ダウンロードリンクを 生成
            let dlLink = document.createElement("a");

            // blob から URL を生成
            const dataUrl = URL.createObjectURL(blob);
            dlLink.href = dataUrl;
            dlLink.download = `${folderName}.zip`;

            // 設置/クリック/削除
            document.body.insertAdjacentElement("beforeEnd", dlLink);
            dlLink.click();
            dlLink.remove();

            // オブジェクト URL の開放
            setTimeout(function() {
                window.URL.revokeObjectURL(dataUrl);
            }, 1000);
            //終了処理
            setTimeout(function(){
                if(btn.getAttribute("data-title")) btn.textContent = "この回を一括DL";
                btn.textContent = "pdf一括ダウンロード";
                btn.classList.remove("clicked");
            }, 100);
        });
    }
}


function downloadFileBundle(){
    if(location.href.startsWith("https://scombz.shibaura-it.ac.jp/lms/course?")){
        //firefoxでは動作しないためreturn
        if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1) return;
        setTimeout(function(){
            // 全体のDL
            document.querySelector("#courseContent #materialTitle").style.position = "relative";
            document.querySelector("#courseContent #materialTitle").insertAdjacentHTML("afterBegin", `
                <div style="position: absolute; left: 10px; top: 10px;">
                    <style>
                        #downloadFileBundle{
                            background-color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 3px;
                            padding: 3px 5px;
                            cursor: pointer;
                            user-select: none;
                        }
                        #downloadFileBundle:hover{
                            background-color: #eee;
                        }
                        #downloadFileBundle.clicked{
                            pointer-events: none;
                        }
                        .utilities-dl-file-button{
                            position: absolute;
                            right: 2px;
                            bottom: 1px;
                            background-color: #fff;
                            border: 1px solid #ccc;
                            border-radius: 3px;
                            padding: 3px 5px;
                            cursor: pointer;
                            user-select: none;
                        }
                        .utilities-dl-file-button:hover{
                            background-color: #eee;
                        }
                    </style>
                    <div id="downloadFileBundle" class="btn btn-primary btn-sm" style="margin-right: 5px;">PDF一括ダウンロード</div>
                </div>
            `);
            document.querySelector("#downloadFileBundle").addEventListener("click", function(){
                const dlLabels = [...document.querySelectorAll(".course-view-material-file-name > .fileDownload")].filter(e => e.innerText.trim().match(/\.pdf$/));
                if(dlLabels.length == 0) return;
                this.classList.add("clicked");
                this.textContent = "URL取得中...";
                downloadFilesMain(dlLabels, this);
            });
            // 回ごとのDL
            const titles = [...document.querySelectorAll("#materialContents > #materialList > .contents-detail.clearfix > .block-title.material-sub-color.block-wide.break > label.bold-txt")].map(x => x.textContent.trim());
            [...document.querySelectorAll("#materialContents > #materialList > .contents-list.contents-display-flex.contents-tag.contents-header-txt > .course-view-material-comment.bold-txt")].map(x => x.parentNode).forEach((x, i) => {
                x.style.position = "relative";
                x.insertAdjacentHTML("beforeEnd", `
                <div class="utilities-dl-file-button" data-title="${titles[i]}">
                    この回を一括DL
                </div>
                `);
            });
            document.querySelectorAll(".utilities-dl-file-button").forEach(x => {
                x.addEventListener("click", function(){
                    const dlLabels = [];
                    let targetnode = x.parentNode.nextElementSibling;
                    while(targetnode?.classList.contains("materialCss") && targetnode.querySelector(".fileDownload")){
                        dlLabels.push(targetnode.querySelector(".fileDownload"));
                        targetnode = targetnode.nextElementSibling;
                    }
                    if(dlLabels.length == 0) return;
                    this.classList.add("clicked");
                    this.textContent = "URL取得中...";
                    downloadFilesMain(dlLabels, this);
                });
            });
        },500);
    }

}
