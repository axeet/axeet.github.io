function generateCheatSheet() {
    var {axeet, countTopic} = getEditorValues();
    alert(JSON.stringify(axeet))
}

function createTopic() {

    var {axeet, countTopic} = getEditorValues();

    percorreTopicList(countTopic, axeet)

    document.getElementById("topicName").value = ""
    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""
    editor.setValue(JSON.stringify(axeet, undefined, 2));

}

function createCheat() {

    var {axeet, countTopic} = getEditorValues();

    percorreCheatList(countTopic, axeet);

    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""
    editor.setValue(JSON.stringify(axeet, undefined, 2));

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
