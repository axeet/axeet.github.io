function app (){
    get_input_value();
}

function get_input_value (){
    let json = document.querySelector('textarea[name=input]').value
    const obj = JSON.parse(json);

    //console.log(obj.name);

    //console.log(Object.values(obj)[0]);

    console.log(obj.name);
    console.log(obj.palette);


switch (obj.palette) {
    case fedora:
        var cor = "fedora";
        break;
    case ubuntu:
        var cor = "ubuntu";
        break;
    case redhat:
        var cor = "redhat";
        break;
    case dracula:
        var cor = "dracula";
        break;
    default:
        var cor = "default";
        break;
}



    console.log(obj.title);
    console.log(" ");

    for (let i = 3; i < Object.keys(obj).length; i++) {
        console.log(Object.keys(obj)[i] + ": " + Object.values(obj)[i]);
    }
}

/* 
# Valor test a ser inserido na textarea

{
  "name": "Cheatsheet do vini",
  "palette": "default",
  "title": "RHCSA",
  "cheat": [ {
            "systemd": "Configuração e controle de sistemas Linux",
            "man systemd.unit": "Para mais informações",
            "systemctl list-units": "Mostra todas unidades ativas e carregadas"
  }]
} 
*/

/* {
    "titulo": "Axeet",
    "palette": "default",
    "autor": "mich",
    "cheatsheet": "RedHat",
    "topic": [
        {
        "topicName": "Manipulando Openshift",
        "cheat": [
            {
                "codigoCheat": "oc get ns",
                "descricaoCheat": "pegando o name space openshift"
            },
            {
                "codigoCheat": "oc select project [nome do projeto]",
                "descricaoCheat" : "entra dentro de umprojeto no openshift"
            }
        ]
        }
    ]
} */

/* obj.title = Axeet

obj.cheat.codigoCheat[0] = oc get ns

obj.cheat.descricaoCheat[0] = pegando o name space openshift */



