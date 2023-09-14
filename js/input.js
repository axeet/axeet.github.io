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

form.addEventListener('input', function (){

    if ((sessionStorage.getItem("axeet")) === null){
        console.log("-- não possui dados no session storage---")
        if (document.querySelector("#axeetScript").value === "") {
            const axeet = getAxeet();
            document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);
        }
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

function updateAxeet(AxeetDTO, codeCheat, description, topicName) {

    var axeet = new Axeet();
    var topic = new Topics();
    var cheat = new Cheats();

    axeet.titleCheat = AxeetDTO.titleCheat;
    axeet.theme = AxeetDTO.theme;
    axeet.author = AxeetDTO.author;
    axeet.cheatSheet = AxeetDTO.cheatSheet;
    axeet.topic = topic;

    if (topicName === ""){
        topic.topicName = AxeetDTO.topic.topicName;
        topic.cheat = cheat;
    }else {
        axeet.addTopic(topicName);
    }
    if ((codeCheat || description) === ""){
        cheat.codeCheat = AxeetDTO.topic.cheat.codeCheat;
        cheat.description = AxeetDTO.topic.cheat.description;
    }else{
        cheat.codeCheat = AxeetDTO.topic.cheat.codeCheat;
        cheat.description = AxeetDTO.topic.cheat.description;
        topic.addCheat(codeCheat, description);
    }
    console.log(axeet);
    // return axeet;
}


function createCheat() {

    let text = document.querySelector("#axeetScript").value;
    var axeet = JSON.parse(text);

    var codeCheat = document.getElementById("codeCheat").value;
    var description = document.getElementById("description").value;

    var countTopic = axeet.topic.length;

    if (countTopic > 1){
        for (i = 0; countTopic > i; i++){
            console.log("Teste")
            for (var cheat in axeet.topic[countTopic-1].cheat.value){
                axeet.topic[countTopic-1].cheat[i+1] = new Cheats("", "")
                console.log(axeet);
            }
            axeet.topic[i].cheat[i+1] = new Cheats("", "")
        }
    }else {
        for (i = 0; countTopic > i; i++){
            console.log("Teste1")
            for (j = 0; j < axeet.topic[i].cheat.length; j++){
                console.log(j);
            }
            axeet.topic[i].cheat[j] = new Cheats(codeCheat, description)
            console.log(axeet);

        }
    }

    document.getElementById("codeCheat").value = ""
    document.getElementById("description").value = ""

    document.getElementById("axeetScript").innerHTML = JSON.stringify(axeet, undefined, 8);


    // var cheatTxt = new Cheats("teste", "agoraVai")
    // // axeet.topic.cheat.push(cheatTxt)
    // var cheatTxt2 = new Cheats("teste", "agoraVai2")
    // // axeet.topic.cheat.push(cheatTxt2)
    // var cheatTxt3 = new Cheats("teste", "agoraVai3")
    // // axeet.topic.cheat.push(cheatTxt3)
    //
    // console.log();
    // axeet.topic.cheat.push(cheatTxt, cheatTxt2, cheatTxt3)
    // console.log(cheatTxt)
    // console.log(cheatTxt2)
    // console.log(cheatTxt3)
    //
    // var tamanho = axeet.topic.cheat.length;
    // // const newObj = {
    // //     ...axeet,
    // //     topic: [{...axeet.topic[0], cheat: [...axeet.topic[0].cheat, { codigoCheat: "oc select project [nome do projeto]", descricaoCheat: "entra dentro de umprojeto no openshift"}]}]
    // // }
    // console.log(tamanho);

}

