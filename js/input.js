class Axeet {
    constructor(theme, titleCheat, author, cheatSheet) {
        this.theme = "";
        this.titleCheat = "";
        this.author = "";
        this.cheatSheet = "";
        this.topic = [];
    }
    addTopic(topicName, cheat){
        let newTopic = new Topics(topicName, cheat);
        this.topic.push([newTopic]);
        return newTopic
    }
}
class Topics {
    constructor(topicName) {
        this.topicName = topicName;
        this.cheat = [];
    }
    addCheat (codeCheat, description){
        let newCheat = new Cheats(codeCheat, description);
        this.cheat.push([newCheat]);
        return newCheat;
    }
}
class Cheats {
    constructor(codeCheat, description) {
        this.codeCheat = codeCheat;
        this.description = description;
    }
}

const form = document.querySelector('main');

function autoGenerateTextRealtime() {
    const x = getAxeet();
    editor.setValue(JSON.stringify(x, undefined, 2));
}

form.addEventListener('input', autoGenerateTextRealtime)

function autoGenerateTextRealTimeCheat(){
    var {axeet, countTopic} = getEditorValues();

    for (i = 0; countTopic > i; i++) {
        if (axeet.topic[i + 1] === undefined) {
            var countCheat = axeet.topic[i].cheat.length;
            for (j = 0; j < countCheat; j++) {
                if (axeet.topic[i].cheat[j + 1] === undefined) {
                    var cheatX = new Cheats
                    cheatX.codeCheat = document.getElementById("codeCheat").value;
                    cheatX.description = document.getElementById("description").value;
                    axeet.topic[i].cheat[j] = cheatX;
                    editor.setValue(JSON.stringify(axeet, undefined, 2));
                }
            }
        }
    }
}

function autoGeneratetextRealTimeTopic() {
    var {axeet, countTopic} = getEditorValues();

    for (i = 0; countTopic > i; i++) {
        if (axeet.topic[i + 1] === undefined) {
            var topicX = new Topics
            topicX.topicName = document.getElementById("topicName").value
            topicX.cheat = axeet.topic[i].cheat
            axeet.topic[i] = topicX;
            editor.setValue(JSON.stringify(axeet, undefined, 2))
        }
    }
}

function getEditorValues() {
    let text = editor.getValue();
    var axeet = JSON.parse(text);
    var countTopic = axeet.topic.length;
    return {axeet, countTopic};
}

function getAxeet() {

    var texte =  editor.getValue();

    var axeet = new Axeet();
    var topic = new Topics();
    var cheat = new Cheats();

    axeet.titleCheat = document.getElementById("titleCheat").value;
    axeet.theme = document.getElementById('themeTitle').value
    axeet.author = document.getElementById("author").value;
    axeet.cheatSheet = document.getElementById("cheatSheet").value;
    topic.topicName = document.getElementById("topicName").value
    cheat.codeCheat = document.getElementById("codeCheat").value;
    cheat.description = document.getElementById("description").value;
    topic.cheat = [cheat];
    axeet.topic = [topic];

    return axeet;
}

function editAxeetScript(){
    let content = editor.getValue();

    // console.log(content)
    // document.getElementById("axeetScriptModal").innerHTML = content;

    editorModal.setValue(content);

    setTimeout(function() {
        editorModal.refresh();
    },1);
}

function isJSON(text){
    if (typeof text!=="string"){
        return false;
    }
    try{
        var json = JSON.parse(text);
        return (typeof json === 'object');
    }
    catch (error){
        return false;
    }
}

function saveEditedAxeetScript(){
    let originalContent = editor.getValue();
    let modalContent = editorModal.getValue();

    let originalTitleCheat = document.getElementById("titleCheat").value
    let originalThemeTitle = document.getElementById('themeTitle').value
    let originalAuthor = document.getElementById("author").value
    let originalCheatSheet = document.getElementById("cheatSheet").value
    let originalTopicName = document.getElementById("topicName").value
    let originalCodeCheat = document.getElementById("codeCheat").value
    let originalDescription = document.getElementById("description").value

    if(isJSON(modalContent)) {
        document.getElementById("titleCheat").value = ""
        document.getElementById('themeTitle').value = ""
        document.getElementById("author").value = ""
        document.getElementById("cheatSheet").value = ""
        document.getElementById("topicName").value = ""
        document.getElementById("codeCheat").value = ""
        document.getElementById("description").value = ""

        editor.setValue(modalContent);
    } else {
        document.getElementById("titleCheat").value = originalTitleCheat
        document.getElementById('themeTitle').value = originalThemeTitle
        document.getElementById("author").value = originalAuthor
        document.getElementById("cheatSheet").value = originalCheatSheet
        document.getElementById("topicName").value = originalTopicName
        document.getElementById("codeCheat").value = originalCodeCheat
        document.getElementById("description").value = originalDescription

        editor.setValue(originalContent);
    }
}

function novoAddEventListenerPosCreateTopic(countTopic, axeet) {
    form.removeEventListener('input', autoGenerateTextRealtime)
    form.addEventListener('input', autoGeneratetextRealTimeTopic)
}

function novoAddEventListenerPosCreateCheat(axeet, countTopic) {
    form.removeEventListener('input', autoGenerateTextRealtime)
    form.addEventListener('input', autoGenerateTextRealTimeCheat)
}

$("#topicName").keyup(function (){
    novoAddEventListenerPosCreateTopic()
})
$("#codeCheat").keyup(function (){
    novoAddEventListenerPosCreateCheat()
})
$("#description").keyup(function (){
    novoAddEventListenerPosCreateCheat()
})