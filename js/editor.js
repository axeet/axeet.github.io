var editor = CodeMirror.fromTextArea(document.getElementById("axeetScript"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    mode: "javascript",
    theme: "dracula"
});

var place =  '{\n' +
    '"titleCheat": "Axeet",\n' +
    '"theme": "axeet",\n' +
    '"author": "Fulano",\n' +
    '"cheatSheet": "Red Hat",\n' +
    '"topic": {\n' +
    '      "topicName": "Openshift",\n' +
    '      "cheat": {\n' +
    '            "codeCheat": "oc get ns",\n' +
    '            "description": "pegando o name space"\n' +
    '               },\n' +
    '               {\n' +
    '             "codeCheat": "oc select project [nome do projeto",\n' +
    '             "entra dentro de um projeto no openshift"\n' +
    '               }\n' +
    '           }\n' +
    '}';

var width = window.innerWidth;
editor.setSize(0.5*width, 0.5*width);