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

function percorreCheatList(countTopic, axeet) {
    console.log(countTopic)
    if (countTopic > 1) {
        for (i = 0; countTopic > i; i++) {
            for (var cheat in axeet.topic[countTopic - 1].cheat.value) {
                axeet.topic[countTopic - 1].cheat[i + 1] = new Cheats("", "")
            }
            axeet.topic[i].cheat[i + 1] = new Cheats("", "")
        }
    } else {
        for (i = 0; countTopic > i; i++) {
            var countCheat = axeet.topic[i].cheat.length;
            console.log(countCheat)
            for (j = 0; j < countCheat; j++) {
                console.log(axeet.topic[i].cheat[j + 1])
                if (axeet.topic[i].cheat[j + 1] === undefined) {
                    axeet.topic[i].cheat[j + 1] = new Cheats("", "")
                }
            }
        }
    }
}

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

function percorreTopicList(countTopic, axeet) {
    for (i = 0; countTopic > i; i++){
        for (var topic in axeet.topic[i]){
            if (axeet.topic[i + 1] === undefined){
                axeet.topic[i + 1] = new Topics("")
                axeet.topic[i + 1].cheat[0] = new Cheats("", "")
            }
        }
        // axeet.topic[i] = new Topics("", new Cheats("", ""))
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

function createCheat() {

    var {axeet, countTopic} = getEditorValues();

    percorreCheatList(countTopic, axeet);

    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""
    editor.setValue(JSON.stringify(axeet, undefined, 2));

}

function createTopic() {

    var {axeet, countTopic} = getEditorValues();

    percorreTopicList(countTopic, axeet)

    document.getElementById("topicName").value = ""
    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""
    editor.setValue(JSON.stringify(axeet, undefined, 2));

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