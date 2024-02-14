var editor = CodeMirror.fromTextArea(document.getElementById("axeetScript"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    readOnly: true,
    mode: "javascript",
    theme: "dracula"
});

var width = window.innerWidth;
editor.setSize(0.6*width, 0.8*width);