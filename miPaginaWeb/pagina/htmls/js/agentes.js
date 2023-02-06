onload = principal

let hardBreacher = ["thermite", "hibana", "ace", "maverick"];
let imgHB = ["js/img/agentes/Atacantes/HardBreach/thermite.png","js/img/agentes/Atacantes/HardBreach/hibana.png","js/img/agentes/Atacantes/HardBreach/ace.png","js/img/agentes/Atacantes/HardBreach/maverick.png"];
let descHb = ["a","b","c","Con el Demoledor explosivo de agua SELMA, el agua entra en juego. El dispositivo usa la presión hidráulica para atravesar superficies destructibles y reforzadas. Ace lanza el cilindro sobre aquello que quiere demoler, y el dispositivo se abre, desplegándose del todo. En suelos, techos y trampillas explota una sola vez, pero si se coloca sobre un muro rueda hacia abajo, detonando hasta dos veces (si hay espacio suficiente). Cada detonación abre una brecha rectangular, y al combinarse crean un agujero lo bastante grande para que pase un agente."];

let entry = ["ash", "zofia", "jackal", "sledge", "buck", "nokk", "dokkaebi", "lion", "finka", "amaru", "ying", "iq", "blitz", "iana"];
let imgEntry = ["https://static.wikia.nocookie.net/rainbow-six-sieg…o-width-down/278?cb=20151116160248&path-prefix=es",];
let iconEntry = [];
let descEntry = [];

let support = ["thatcher", "twitch", "kali", "flores"];
let imgSupport = [];
let iconSupport = [];
let descSupport = [];

let flexAtac = ["nomad", "capitão", "fuze", "glaz", "montagne", "gridlock", "blackbeard", "osa", "zero"];
let imgFlexA = [];
let iconFlexA=[];
let descFlexA = [];

let ancla = ["rook", "doc", "maestro", "smoke", "echo", "melusi", "warden", "tachanka", "mira", "kaid"];
let imgAncla = [];
let iconAncla = [];
let descAncla = [];

let roamer = ["jäger", "valkyrie", "vigil", "alibi", "oryx", "caveira"];
let imgRoamer = [];
let iconRoamer = [];
let descRoamer = [];

let trampero =  ["kapkan", "lesion", "frost", "ela", "goyo", "thorn", "azami"];
let imgTrampero = [];
let iconTrampero = [];
let descTrampero = [];

let flexDefen = ["bandit", "castle", "mute", "clash", "mozzie", "wamai", "aruni", "thunderbird","solis"];
let igmFlexD = [];
let iconFlexD = [];
let descFlexD = [];

let arrays = [hardBreacher,entry,support,flexAtac,ancla,roamer,trampero,flexDefen];

let listaAbierta= false;

let agente = {};

function principal() {
    let liA = document.getElementsByClassName("lA");

    for (i = 0; i < liA.length; i++) {
        liA[i].setAttribute("onclick", "abrirSublistaA(" + i + ")");
        $(liA[i]).click(cambiarDiv);
        liA[i].setAttribute("abierta","false");
    }

    let liD = document.getElementsByClassName("lD");

    for (let i = 0; i < liD.length; i++) {
        liD[i].setAttribute("onclick", "abrirSublistaD(" + i + ")")
        liD[i].setAttribute("abierta","false");

    }

    let listaHb = document.getElementsByClassName("hbList");

    for (let index = 0; index < listaHb.length; index++) {
        listaHb[index].setAttribute("id",index);
    }

    let spanHb = document.getElementsByClassName("iconHb");
    for (let index = 0; index < spanHb.length; index++) {
        let imgHb = document.createElement("img");
        imgHb.setAttribute("src","js/img/r6icons/svg/"+hardBreacher[index]+".svg");
        imgHb.setAttribute("style","width:50px;")
        spanHb[index].appendChild(imgHb);        
    }
}

function cambiarDiv() {
    idTipo = $(this).children("ul").attr("id");
    idNum = $(this).children("ul").children();

    $("#rowCard").empty();

    for (let index = 0; index < idNum.length; index++) {
        if(idTipo == "hb"){
            agente = {
                nombre : hardBreacher[index].toUpperCase(),
                imagen : imgHB[index],
                descrip : descHb[index] 
            }
        }

        $("#rowCard").append(
            '<div class="card col-md-3">'+
            '   <div class="imgBx">'+
            `        <img src="${agente.imagen}">`+
            '   </div>'+
            '   <div class="contentBx">'+
            `       <h2>${agente.nombre}</h2>`+
            '       <div class="size">'+
            '           <h3>Size :</h3>'+
            '           <span>7</span>'+
            '           <span>8</span>'+
            '           <span>9</span>'+
            '           <span>10</span>'+
            '       </div>'+
            '       <div class="color">'+
            '           <h3>Color :</h3>'+
            '           <span></span>'+
            '           <span></span>'+
            '           <span></span>'+
            '       </div>'+
            '       <a href="#">Buy Now</a>'+
            '   </div>'+
            '</div');
    }
}

function abrirSublistaA(num){ 

    let subliHb = document.getElementsByClassName("hb");
    let subliEf = document.getElementsByClassName("ef");
    let subliSup = document.getElementsByClassName("sup");
    let subliFlex = document.getElementsByClassName("flexA");

    if (num == 0) {
        let lista = document.getElementsByClassName("lA");
        let listaAbierta1 = lista[0].getAttribute("abierta");
        if (listaAbierta1 == "false") {
            subliHb[0].style.setProperty("display", "list-item");
            lista[0].setAttribute("abierta","true");
        } else {
            subliHb[0].style.setProperty("display", "none");
            lista[0].setAttribute("abierta","false");
        }
    }else if(num == 1){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta2 = lista[1].getAttribute("abierta");
        if (listaAbierta2 == "false") {
            subliEf[0].style.setProperty("display", "list-item");
            lista[1].setAttribute("abierta","true");
        } else {
            subliEf[0].style.setProperty("display", "none");
            lista[1].setAttribute("abierta","false");
        }
    }else if(num == 2){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta3 = lista[2].getAttribute("abierta");
        if (listaAbierta3 == "false") {
            subliSup[0].style.setProperty("display", "list-item");
            lista[2].setAttribute("abierta","true");
        } else {
            subliSup[0].style.setProperty("display", "none");
            lista[2].setAttribute("abierta","false");
        }
    }else if(num == 3){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta4 = lista[3].getAttribute("abierta");
        if (listaAbierta4 == "false") {
            subliFlex[0].style.setProperty("display", "list-item");
            lista[3].setAttribute("abierta","true");
        } else {
            subliFlex[0].style.setProperty("display", "none");
            lista[3].setAttribute("abierta","false");
        }
    }

}

function abrirSublistaD(num){ 

    let subliAn = document.getElementsByClassName("an");
    let subliRoam = document.getElementsByClassName("roam");
    let subliTramp = document.getElementsByClassName("tramp");
    let subliFlex = document.getElementsByClassName("flexD");

    if (num == 0) {
        let lista = document.getElementsByClassName("lD");
        let listaAbierta1 = lista[0].getAttribute("abierta");
        if (listaAbierta1 == "false") {
            subliAn[0].style.setProperty("display", "list-item");
            lista[0].setAttribute("abierta","true");
        } else {
            subliAn[0].style.setProperty("display", "none");
            lista[0].setAttribute("abierta","false");
        }
    }else if(num == 1){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta2 = lista[1].getAttribute("abierta");
        if (listaAbierta2 == "false") {
            subliRoam[0].style.setProperty("display", "list-item");
            lista[1].setAttribute("abierta","true");
        } else {
            subliRoam[0].style.setProperty("display", "none");
            lista[1].setAttribute("abierta","false");
        }
    }else if(num == 2){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta3 = lista[2].getAttribute("abierta");
        if (listaAbierta3 == "false") {
            subliTramp[0].style.setProperty("display", "list-item");
            lista[2].setAttribute("abierta","true");
        } else {
            subliTramp[0].style.setProperty("display", "none");
            lista[2].setAttribute("abierta","false");
        }
    }else if(num == 3){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta4 = lista[3].getAttribute("abierta");
        if (listaAbierta4 == "false") {
            subliFlex[0].style.setProperty("display", "list-item");
            lista[3].setAttribute("abierta","true");
        } else {
            subliFlex[0].style.setProperty("display", "none");
            lista[3].setAttribute("abierta","false");
        }
    }

}