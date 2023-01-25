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
        this.topic.push(newTopic);
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
        this.cheat.push(newCheat);
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
    axeet.topic = topic;
    topic.topicName = document.getElementById("topicName").value
    topic.cheat = cheat;
    cheat.codeCheat = document.getElementById("codeCheat").value;
    cheat.description = document.getElementById("description").value;

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

    if ((sessionStorage.getItem("axeet")) === null){
         var axeet = getAxeet();
         sessionStorage.setItem("axeet", JSON.stringify(axeet));

         document.getElementById("codeCheat").value = "";
         document.getElementById("description").value = "";
    }else {
        var codeCheat = document.getElementById("codeCheat").value;
        var description = document.getElementById("description").value;

        var axeetS = JSON.parse(sessionStorage.getItem("axeet"));

        // console.log(axeetS.topic.addCheat(codeCheat, description));

        updateAxeet(axeetS, codeCheat, description)

        // console.log(axeet);
        //
        // axeet.topic.addCheat()
        //
        // console.log(axeet);


        // var topic = new Topics();
        //
        // topic.addCheat(cheat.codeCheat, cheat.description);
        //
        // axeet.addTopic(topic.topicName, topic.cheat);
    }


   // var axeet =  populaAxeet(topic);

}

