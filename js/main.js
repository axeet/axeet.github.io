function app (){
    get_input_value();
}

function get_input_value (){
    let json = document.querySelector('textarea[name=input]').value
    const obj = JSON.parse(json);

    //console.log(obj.name);

    //console.log(Object.values(obj)[0]);

    console.log(obj.name);
    console.log(obj.template_color);
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
  "template_color": "default",
  "title": "RHCSA",
  "systemd": "Configuração e controle de sistemas Linux",
  "man systemd.unit": "Para mais informações",
  "systemctl list-units": "Mostra todas unidades ativas e carregadas"
} 
*/