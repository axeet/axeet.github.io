var form = document.querySelector('main');
form.addEventListener('input', function() {
    var titleCheat = document.getElementById("titleCheat").value;
    var theme = document.getElementById('themeTitle').value
    var author = document.getElementById("author").value;
    var cheatSheet = document.getElementById("cheatSheet").value;
    var topicName = document.getElementById("topicName").value;
    var codeCheat = document.getElementById("codeCheat").value;
    var description = document.getElementById("description").value;


    var jsonScript = '{\n' +
        '    "titulo": "' + titleCheat + '",\n' +
        '    "theme": "' + theme + '",\n' +
        '    "author": "' + author + '",\n' +
        '    "cheatsheet": "' + cheatSheet + '",\n' +
        '    "topic": [\n' +
        '        {\n' +
        '        "topicName": "' + topicName + '",\n' +
        '        "cheat": [\n' +
        '            {\n' +
        '                "codeCheat": "' + codeCheat + '",\n' +
        '                "descriptionCheat": "' + description + '"\n' +
        '            }\n' +
        '        ]\n' +
        '        }\n' +
        '    ]\n' +
        '}'

    document.getElementById("axeetScript").innerHTML = jsonScript;
});

function createField(){
    var divCheat = document.createElement('div');
    divCheat.className = 'form-floating mb-3';
    divCheat.id = 'bodyCheat'

    var divDescription = document.createElement('div');
    divDescription.className = 'form-floating mb-3';
    divDescription.id = 'bodyDescription'

    var fieldCode = document.createElement('input');
    fieldCode.type = 'text';
    fieldCode.id = 'codeCheatField';
    fieldCode.placeholder = 'ls';
    fieldCode.className = 'form-control';

    var fieldDescription = document.createElement('input');
    fieldDescription.type = 'text';
    fieldDescription.id = 'descriptionField';
    fieldDescription.placeholder = 'ver Pastas'
    fieldDescription.className = 'form-control';

    var labelCheat = document.createElement('label');
    labelCheat.htmlFor = 'codeCheatField';
    labelCheat.innerHTML = 'Cógio';

    var labelDescription = document.createElement('label');
    labelDescription.htmlFor = 'descriptionField';
    labelDescription.innerHTML = 'Descrição';

    var container = document.getElementById('cheat');
    container.appendChild(divCheat);

    var container = document.getElementById('bodyCheat');
    container.appendChild(fieldCode);
    container.appendChild(labelCheat)

    var container = document.getElementById('cheat');
    container.appendChild(divDescription);

    var container = document.getElementById('bodyDescription');
    container.appendChild(fieldDescription);
    container.appendChild(labelDescription);

}

