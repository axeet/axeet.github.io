(function (){
    var axeet = JSON.parse(localStorage.getItem('axeet'));
    populaTemplate(axeet);
})()

function populaTemplate(axeet){
    document.querySelector(".titulo").innerText = axeet.titleCheat;
    document.querySelector(".author").innerText = axeet.author;
    document.querySelector(".cheatsheet").innerText = axeet.cheatSheet;
    var main = document.querySelector("#main")

    for (i = 0; i <= axeet.topic.length; i++){
        var divCard = document.createElement('div')
        var article = document.createElement('article')
        var divTopic = document.createElement('div')
        var cheatSection = document.createElement('section')

        cheatSection.id = "cheatSection-"+i;
        cheatSection.setAttribute('class', "card border-primary mb-3")
        divCard.id = "divCard-"+i;
        divCard.setAttribute('class', "card-header")
        divTopic.id = "topic-"+i;
        divTopic.setAttribute('class', "card-header")
        divTopic.innerHTML = axeet.topic[i].topicName

        cheatSection.appendChild(divTopic)
        cheatSection.appendChild(divCard)

        console.log(axeet.topic[i].cheat.length)
        for(j = 0; j < axeet.topic[i].cheat.length; j++){
            var tagH5 = document.createElement('h5')
            var pre = document.createElement('pre')
            var code = document.createElement('code')
            var span = document.createElement('span')

            article.id = "article-"+i+"-"+j;
            pre.id = "pre-"+i+"-"+j;
            span.id = "span-"+i+"-"+j;

            code.id = "code-"+i+"-"+j;
            code.setAttribute('class', "card-body text-primary")

            tagH5.id = "codeCheat-"+i+"-"+j;
            tagH5.setAttribute('class', "card-title")
            tagH5.innerHTML = axeet.topic[i].cheat[j].codeCheat

            span.innerHTML = axeet.topic[i].cheat[j].description

            pre.appendChild(tagH5)
            divCard.appendChild(article)
            article.appendChild(pre)
            pre.appendChild(code)
            code.appendChild(span)
        }
        main.appendChild(cheatSection)
    }
}

