chrome.storage.local.get({
    customcss : ""
},function(items) {
    document.getElementById('editor_js').innerHTML = items.customcss;
    const jsEditor = CodeMirror.fromTextArea(document.getElementById('editor_js'), {
        mode: "css",
        theme:"panda-syntax",
        lineNumbers: true,
        line: true,
        lineWrapping:true,
        indentUnit: 4,
        styleActiveLine: true,
        styleActiveLine: true,
        matchBrackets: true,
        gutters: ["CodeMirror-lint-markers"],
        highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
        lint: true,
        extraKeys:{
            "Ctrl-Space":"autocomplete",
            "F11": function(cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            "Esc": function(cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            },
            "Alt-F": "findPersistent"
        },
        autoCloseBrackets: true
    });
    document.getElementById('saveBtn').addEventListener("click",saveCss);
    //保存
    function saveCss(){
        jsEditor.save();
        const editorIndex = document.getElementById('editor_js').value;
        chrome.storage.local.set({
            customcss : editorIndex
        },function(){
            console.log('保存しました。');
            console.log(editorIndex);
            document.getElementById('savelog').innerHTML = "保存しました";
            setTimeout(() => {
                document.getElementById('savelog').innerHTML = "";
            }, 1000);
        });
        return;
    }
    //Ctrl+Sで自動保存
    $(window).bind('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (String.fromCharCode(e.which).toLowerCase()) {
            case 's':
                e.preventDefault();
                saveCss();
                break;
            }
        }
    });
});
