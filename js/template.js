(function (){
    var axeet = JSON.parse(localStorage.getItem('axeet'));
    populaTemplate(axeet);
})()

function populaTemplate(axeet){
    console.log(axeet)
    console.log(axeet.titleCheat)
    document.querySelector(".titulo").innerText = axeet.titleCheat;
    document.querySelector(".author").innerText = axeet.author;
    document.querySelector(".cheatsheet").innerText = axeet.cheatSheet;

    for (i = 0; i <= axeet.topic.length; i++){
        var tagH4 = document.createElement('<h4>')

        tagH4.id = "topic-"+i;
        tagH4.innerHTML = axeet.topic[i]
    }
}

