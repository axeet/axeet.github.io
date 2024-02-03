var editor = CodeMirror.fromTextArea(document.getElementById("axeetScript"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    readOnly: true,
    mode: "javascript",
    theme: "dracula"
});

var width = window.innerWidth;
editor.setSize(0.5*width, 0.5*width);