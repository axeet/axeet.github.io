var form = document.querySelector('main');
form.addEventListener('input', function() {
    var titleCheat = document.getElementById("titleCheat").value;
    var theme = document.getElementById('themeTitle').value
    var author = document.getElementById("author").value;
    var cheatSheet = document.getElementById("cheatSheet").value;
    var topicName = document.getElementById("topicName").value;
    var codeCheat = document.getElementById("codeCheat").value;
    var description = document.getElementById("description").value;

    console.log(titleCheat, author, cheatSheet, topicName, codeCheat, description);

    var jsonScript = '{\n' +
        '    "titulo": "' + titleCheat + '",\n' +
        '    "palette": "' + theme + '",\n' +
        '    "autor": "' + author + '",\n' +
        '    "cheatsheet": "' + cheatSheet + '",\n' +
        '    "topic": [\n' +
        '        {\n' +
        '        "topicName": "' + topicName + '",\n' +
        '        "cheat": [\n' +
        '            {\n' +
        '                "codigoCheat": "' + codeCheat + '",\n' +
        '                "descricaoCheat": "' + description + '"\n' +
        '            }\n' +
        '        ]\n' +
        '        }\n' +
        '    ]\n' +
        '}'

    document.getElementById("axeetScript").innerHTML = jsonScript;
});

function write() {


}


function write() {

    var titleCheat = document.getElementById("titleCheat").value;

    var jsonScript = '{\n' +
        '    "titulo": "' + titleCheat + '",\n' +
        '    "palette": "' + theme + '",\n' +
        '    "autor": "' + author + '",\n' +
        '    "cheatsheet": "' + cheatSheet + '",\n' +
        '    "topic": [\n' +
        '        {\n' +
        '        "topicName": "' + topicName + '",\n' +
        '        "cheat": [\n' +
        '            {\n' +
        '                "codigoCheat": "' + codeCheat + '",\n' +
        '                "descricaoCheat": "' + description + '"\n' +
        '            }\n' +
        '        ]\n' +
        '        }\n' +
        '    ]\n' +
        '}'

    document.getElementById("axeetScript").innerHTML = jsonScript;
}



