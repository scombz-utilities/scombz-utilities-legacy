
const downloadFilesMain = () => {
    const dlLabels = [...document.querySelectorAll(".course-view-material-file-name > .fileDownload")].filter(e => e.innerText.trim().match(/\.pdf$/));
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
                document.querySelector("#downloadFileBundle").textContent = "URL取得中...(" + resultURLs.length + "/" + dlLabels.length + ")";
                if(resultURLs.length < dlLabels.length){
                    setTimeout(function(){
                        downloadFileRoutine(dlLabels[resultURLs.length]);
                    }, 100);
                }else{
                    console.log(resultURLs);
                    document.querySelector("#downloadFileBundle").textContent = "ダウンロード中...(0/"+resultURLs.length+")";
                    setTimeout(function(){
                        dlZip(resultURLs);
                    }, 100);
                    // setTimeout(function(){
                    //     document.querySelector("#downloadFileBundle").textContent = "一括ダウンロード";
                    //     document.querySelector("#downloadFileBundle").classList.remove("clicked");
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
                    document.querySelector("#downloadFileBundle").textContent = "ダウンロード中...(" + downloadCount + "/" + urls.length + ")";
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
        document.querySelector("#downloadFileBundle").textContent = "ZIPファイル生成中...(時間がかかります)";
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

            folderName = `${courseName}_${("00"+(t.getMonth() + 1)).slice(-2)}${("00"+t.getDate()).slice(-2)}_${("00"+t.getHours()).slice(-2)}${("00"+t.getMinutes()).slice(-2)}`;
        }


        // フォルダ下にデータを格納
        images.forEach(image => {
            if (image.data && image.fileName) {
                zip.file(image.fileName, image.data)
            }
        });

        // zip を生成
        zip.generateAsync({ type: "blob" }).then(blob => {

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
                document.querySelector("#downloadFileBundle").textContent = "pdf一括ダウンロード";
                document.querySelector("#downloadFileBundle").classList.remove("clicked");
            }, 100);
        });
    }
}


function downloadFileBundle(){
    if(location.href.startsWith("https://scombz.shibaura-it.ac.jp/lms/course?")){
        setTimeout(function(){
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
                        }
                        #downloadFileBundle:hover{
                            background-color: #eee;
                        }
                        #downloadFileBundle.clicked{
                            pointer-events: none;
                        }
                    </style>
                    <div id="downloadFileBundle" class="btn btn-primary btn-sm" style="margin-right: 5px;">PDF一括ダウンロード</div>
                </div>
            `);
            document.querySelector("#downloadFileBundle").addEventListener("click", function(){
                this.classList.add("clicked");
                this.textContent = "URL取得中...";
                downloadFilesMain();
            });
        },500);
    }
}
