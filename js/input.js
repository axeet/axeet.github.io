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

form.addEventListener('input', form.fn=function fn(){

    if ((sessionStorage.getItem("axeet")) === null){
        console.log("-- não possui dados no session storage---")

        const axeet = getAxeet();
        document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);

    }else {
        console.log("-- carregando dados do session storage")
        const axeet = JSON.parse(sessionStorage.getItem("axeet"))
        document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);
    }

});

function getAxeet() {

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
function percorreCheatList(countTopic, axeet) {
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
            for (j = 0; j < countCheat; j++) {
                if (axeet.topic[i].cheat[j + 1] === undefined) {
                    axeet.topic[i].cheat[j + 1] = new Cheats("", "")
                }
            }
        }
    }
}

function novoAddEventListenerPosCreateCheat(axeet, countTopic) {
    form.removeEventListener('input', form.fn)

    form.addEventListener('input', form.novo_fn = function novo_fn() {
        for (i = 0; countTopic > i; i++) {
            var countCheat = axeet.topic[i].cheat.length;
            for (j = 0; j < countCheat; j++) {
                var auxCheat = axeet.topic[i].cheat[j];
                if (axeet.topic[i].cheat[j + 1] === undefined) {
                    var cheatX = new Cheats
                    cheatX.codeCheat = document.getElementById("codeCheat").value;
                    cheatX.description = document.getElementById("description").value;
                    axeet.topic[i].cheat[j] = cheatX;
                    document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);
                }
            }
        }
    });
}

function createCheat() {

    let text = document.querySelector("#axeetScript").value;
    var axeet = JSON.parse(text);
    var countTopic = axeet.topic.length;

    percorreCheatList(countTopic, axeet);
    novoAddEventListenerPosCreateCheat(axeet, countTopic);

    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""
    document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);

}

