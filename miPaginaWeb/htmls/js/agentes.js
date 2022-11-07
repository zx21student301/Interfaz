onload = principal

let hardBreacher = ["Thermite", "Hibana", "Ace", "Maverick"];
let imgHB = ["","","","https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48…2f9a54238f569797a3e185a6/r6-operator-maverick.png"];
let iconHb = ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6tow5mqLao5TrJVL52csSc/46aa934c9f3f02189e9c04df0114a081/Y0R6_BADGE_Thermite_L.png","https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1TSA4pMR58vgfrEai69REl/f82b1eba6694b4aa77259d3d0fe8cc08/Y1S4_BADGE_Hibana_L.png",
"https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/dgG7GmXY1HgfeEE2gI1H9/06bd3917c8fc19f61654490019ef25fb/Y5S2_BADGE_Ace_L.png",""];
let descHb = [];

let entry = ["Ash", "Zofia", "Jackal", "Sledge", "Buck", "Nokk", "Dokkaebi", "Lion", "Finka", "Amaru", "Ying", "IQ", "Blitz", "Iana"];
let imgEntry = [];
let iconEntry = [];
let descEntry = [];

let support = ["Thatcher", "Twitch", "Kali", "Flores"];
let imgSupport = [];
let iconSupport = [];
let descSupport = [];

let flexAtac = ["Nomad", "Capitão", "Fuze", "Glaz", "Montagne", "Gridlock", "Blackbeard", "Osa", "Zero"];
let imgFlexA = [];
let iconFlexA=[];
let descFlexA = [];

let ancla = ["Rook", "Doc", "Maestro", "Smoke", "Echo", "Melusi", "Warden", "Tachanka", "Mira", "Kaid"];
let imgAncla = [];
let iconAncla = [];
let descAncla = [];

let roamer = ["Jäger", "Valkyrie", "Vigil", "Alibi", "Oryx", "Caveira"];
let imgRoamer = [];
let iconRoamer = [];
let descRoamer = [];

let trampero =  ["Kapkan", "Lesion", "Frost", "Ela", "Goyo", "Thorn", "Azami"];
let imgTrampero = [];
let iconTrampero = [];
let descTrampero = [];

let flexDefen = ["Bandit", "Castle", "Mute", "Clash", "Mozzie", "Wamai", "Aruni", "Thunderbird"];
let igmFlexD = [];
let iconFlexD = [];
let descFlexD = [];

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
        listaHb[index].style.cssText = "list-style: url(\""+iconHb[index]+"\") inside;"
        listaHb[index].setAttribute("onclick","cambiarDiv()");  
    }
}

function cambiardiv() {
    let leng = document.createElement("p");

    leng.innerHTML = agentes.length;

    document.getElementById("contenido").appendChild(leng);
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
            subliHb[0].style.setProperty("display", "flex");
            lista[0].setAttribute("abierta","true");
        } else {
            subliHb[0].style.setProperty("display", "none");
            lista[0].setAttribute("abierta","false");
        }
    }else if(num == 1){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta2 = lista[1].getAttribute("abierta");
        if (listaAbierta2 == "false") {
            subliEf[0].style.setProperty("display", "flex");
            lista[1].setAttribute("abierta","true");
        } else {
            subliEf[0].style.setProperty("display", "none");
            lista[1].setAttribute("abierta","false");
        }
    }else if(num == 2){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta3 = lista[2].getAttribute("abierta");
        if (listaAbierta3 == "false") {
            subliSup[0].style.setProperty("display", "flex");
            lista[2].setAttribute("abierta","true");
        } else {
            subliSup[0].style.setProperty("display", "none");
            lista[2].setAttribute("abierta","false");
        }
    }else if(num == 3){
        let lista = document.getElementsByClassName("lA");
        let listaAbierta4 = lista[3].getAttribute("abierta");
        if (listaAbierta4 == "false") {
            subliFlex[0].style.setProperty("display", "flex");
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
            subliAn[0].style.setProperty("display", "flex");
            lista[0].setAttribute("abierta","true");
        } else {
            subliAn[0].style.setProperty("display", "none");
            lista[0].setAttribute("abierta","false");
        }
    }else if(num == 1){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta2 = lista[1].getAttribute("abierta");
        if (listaAbierta2 == "false") {
            subliRoam[0].style.setProperty("display", "flex");
            lista[1].setAttribute("abierta","true");
        } else {
            subliRoam[0].style.setProperty("display", "none");
            lista[1].setAttribute("abierta","false");
        }
    }else if(num == 2){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta3 = lista[2].getAttribute("abierta");
        if (listaAbierta3 == "false") {
            subliTramp[0].style.setProperty("display", "flex");
            lista[2].setAttribute("abierta","true");
        } else {
            subliTramp[0].style.setProperty("display", "none");
            lista[2].setAttribute("abierta","false");
        }
    }else if(num == 3){
        let lista = document.getElementsByClassName("lD");
        let listaAbierta4 = lista[3].getAttribute("abierta");
        if (listaAbierta4 == "false") {
            subliFlex[0].style.setProperty("display", "flex");
            lista[3].setAttribute("abierta","true");
        } else {
            subliFlex[0].style.setProperty("display", "none");
            lista[3].setAttribute("abierta","false");
        }
    }

}