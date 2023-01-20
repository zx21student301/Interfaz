onload = principal

let hardBreacher = ["thermite", "hibana", "ace", "maverick"];
let imgHB = ["https://static.wikia.nocookie.net/rainbowsix/images/4/44/R6_SWAT_Thermite.jpg","https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mAs4mz2zA4wjPZsNg6tys/5e607795f95200f83b3d4be2f7cc4bba/r6-operators-list-hibana.png","https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5snW47tH4a5VuPhidr61sm/4bee3d218c40a6aeeedb97afbcea82cb/r6s-operator-list-ace.png","https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1MmaEupq7KOe6it1trqIWP/93730f7c3b2b7de5591243a9d5276dcf/r6-operators-list-maverick.png"];
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

function principal() {
    let liA = document.getElementsByClassName("lA");

    for (i = 0; i < liA.length; i++) {
        liA[i].setAttribute("onclick", "abrirSublistaA(" + i + ")");
        liA[i].setAttribute("abierta","false");
    }

    let liD = document.getElementsByClassName("lD");

    for (let i = 0; i < liD.length; i++) {
        liD[i].setAttribute("onclick", "abrirSublistaD(" + i + ")")
        liD[i].setAttribute("abierta","false");

    }

    let listaHb = document.getElementsByClassName("hbList");

    for (let index = 0; index < listaHb.length; index++) {
        listaHb[index].setAttribute("id","hb_"+index);
    }

    let spanHb = document.getElementsByClassName("iconHb");
    for (let index = 0; index < spanHb.length; index++) {
        let imgHb = document.createElement("img");
        imgHb.setAttribute("src","js/img/r6icons/svg/"+hardBreacher[index]+".svg");
        imgHb.setAttribute("style","width:50px;")
        spanHb[index].appendChild(imgHb);        
    }

    $(".hbList").click(cambiarDiv);
}

function cambiarDiv() {
    idCompleto = $(this).attr("id");
    idTipo = idCompleto.split('_')[0];
    idNum = idCompleto.split('_')[1];

    if(idTipo == 'hb'){
        let personaje ={
            nombre : hardBreacher[idNum],
            imagen : imgHB[idNum],
            icono : "js/img/r6icons/svg/"+this.nombre+".svg",
            descripcion : descHb[idNum]
        };

        $(".postcard__img").attr("src", personaje.imagen);
        $(".postcard__title blue").html(personaje.nombre);
        //$(".card-img-top").attr("src", personaje.icono);
        $(".postcard__preview-txt").html(personaje.descripcion);
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