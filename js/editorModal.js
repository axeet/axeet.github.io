var editorModal = CodeMirror.fromTextArea(document.getElementById("axeetScriptModal"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoRefresh: true,
    mode: "javascript",
    theme: "dracula"
});

// var width = window.innerWidth;
// editorModal.setSize(0.5*width, 0.5*width);