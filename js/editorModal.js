var editorModal = CodeMirror.fromTextArea(document.getElementById("axeetScriptModal"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoRefresh: true,
    mode: "javascript",
    theme: "dracula"
});

var width = window.innerWidth;
editorModal.setSize(null, 0.8*width);
editorModal.focus()
