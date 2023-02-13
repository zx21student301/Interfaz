onload = principal

let hardBreacher = {
    nombre: ["thermite", "hibana", "ace", "maverick"],
    velBlin: [[2, 2], [3, 1], [2, 2], [3, 1]]
}

let entry = {
    nombre: ["ash", "zofia", "jackal", "sledge", "buck", "nokk", "dokkaebi", "lion", "finka", "amaru", "ying", "iq", "blitz", "iana"],
    velBlin: [[3, 1], [1, 3], [2, 2], [1, 3], [2, 2], [2, 2], [3, 1], [2, 2], [2, 2], [2, 2], [2, 2], [3, 1], [2, 2], [2, 2]]
}

let support = {
    nombre: ["thatcher", "twitch", "kali", "flores"],
    velBlin: [[2, 2], [2, 2], [2, 2], [2, 2]]
}

let flexAtac = {
    nombre: ["nomad", "capitão", "fuze", "glaz", "montagne", "gridlock", "blackbeard", "osa", "zero"],
    velBlin: [[2, 2], [3, 1], [1, 3], [2, 2], [1, 3], [1, 3], [2, 2], [1, 3], [3, 1]]
}

let ancla = {
    nombre: ["rook", "doc", "maestro", "smoke", "echo", "melusi", "warden", "tachanka", "mira", "kaid"],
    velBlin: [[1, 3], [1, 3], [1, 3], [2, 2], [2, 2], [1, 3], [2, 2], [1, 3], [1, 3], [1, 3]]
}

let roamer = {
    nombre: ["jäger", "valkyrie", "vigil", "alibi", "oryx", "caveira"],
    velBlin: [[2, 2], [2, 2], [3, 1], [3, 1], [2, 2], [3, 1]]
}

let trampero = {
    nombre: ["kapkan", "lesion", "frost", "ela", "goyo", "thorn", "azami"],
    velBlin: [[2, 2], [2, 2], [2, 2], [3, 1], [3, 1], [2, 2], [2, 2]]
}

let flexDefen = {
    nombre: ["bandit", "castle", "mute", "clash", "mozzie", "wamai", "aruni", "thunderbird", "solis"],
    velBlin: [[3, 1], [2, 2], [1, 3], [1, 3], [2, 2], [2, 2], [1, 3], [2, 2], [2, 2]]
}

let arrays = [hardBreacher, entry, support, flexAtac, ancla, roamer, trampero, flexDefen];

function principal() {

    crearLista();
    crearListaO();

    cargarDiv();

    let lAgen = $(".lAgen").toArray();
    let lAgenO = $(".lAgenO").toArray();

    for (i = 0; i < lAgen.length; i++) {
        $(lAgen[i]).click(cambiarDiv);
        $(lAgen[i]).click(abrirSublista);
    }

    for (i = 0; i < lAgenO.length; i++) {
        $(lAgen[i]).click(cambiarDivO);
    }
}

function cargarDiv() {
    idTipo = 0;
    idNum = arrays[idTipo].lenght;

    for (let i = 0; i < arrays.length; i++) {

        for (let j = 0; j < idNum; j++) {
            agente = {
                nombre: arrays[idTipo].nombre[j],
                imagen: 'js/img/agentes/' + arrays[idTipo].nombre[j] + '.png',
                velBlin: arrays[idTipo].velBlin[j]
            }

            $("#rowCard").append(
                '<div class="card col-md-3">' +
                '   <div class="imgBx">' +
                `        <img src="${agente.imagen}">` +
                '   </div>' +
                '   <div class="contentBx">' +
                `       <h2>${agente.nombre.toUpperCase()}</h2>` +
                `       <div class="vel _${agente.velBlin[0]}">` +
                '           <h3>Velocidad :</h3>' +
                '           <span></span>' +
                '           <span></span>' +
                '           <span></span>' +
                '       </div>' +
                `       <div class="blin _${agente.velBlin[1]}">` +
                '           <h3>Blindaje :</h3>' +
                '           <span></span>' +
                '           <span></span>' +
                '           <span></span>' +
                '       </div>' +
                '   </div>' +
                '</div');
        }
        console.log(idTipo)
        idTipo++;
    }
}

function crearLista() {

    let cont = 0;

    $(".lAgen").each(function () {

        ul = {
            id: cont
        }

        let ulAgen = $("<ul>", ul);

        $(this).append(ulAgen);

        for (let i = 0; i < arrays[cont].nombre.length; i++) {
            agen = {
                nombre: arrays[cont].nombre[i]
            }

            $(this).children("ul").append(
                `<li><img src='js/img/r6icons/svg/${agen.nombre}.svg' style='width:50px;'>${agen.nombre}</li>`
            );
        }
        cont++;
    });
}

function crearListaO() {

    let cont = 0;

    $(".lAgenO").each(function () {

        ul = {
            id: cont
        }

        let ulAgen = $("<ul>", ul);

        $(this).append(ulAgen);

        for (let i = 0; i < arrays[cont].nombre.length; i++) {
            agen = {
                nombre: arrays[cont].nombre[i]
            }

            $(this).children("ul").append(
                `<li style="display:none;"></li>`
            );
        }

        cont++;
    });
}

function abrirSublista() {
    let abiertos = $(".abierta").toArray().length;

    if (abiertos < 1) {
        $(this).addClass("abierta");
    } else {
        if ($(this).hasClass("abierta")) {
            $(".titulos").find(".lAgen").removeClass("abierta");
        } else {
            $(".titulos").find(".lAgen").removeClass("abierta");
            $(this).addClass("abierta");
        }
    }
}

function cambiarDiv() {
    idTipo = $(this).children("ul").attr("id");
    idNum = $(this).children("ul").children();

    $("#rowCard").empty();

    for (let index = 0; index < idNum.length; index++) {
        agente = {
            nombre: arrays[idTipo].nombre[index],
            imagen: 'js/img/agentes/' + arrays[idTipo].nombre[index] + '.png',
            velBlin: arrays[idTipo].velBlin[index]
        }

        $("#rowCard").append(
            '<div class="card col-md-3">' +
            '   <div class="imgBx">' +
            `        <img src="${agente.imagen}">` +
            '   </div>' +
            '   <div class="contentBx">' +
            `       <h2>${agente.nombre.toUpperCase()}</h2>` +
            `       <div class="vel _${agente.velBlin[0]}">` +
            '           <h3>Velocidad :</h3>' +
            '           <span></span>' +
            '           <span></span>' +
            '           <span></span>' +
            '       </div>' +
            `       <div class="blin _${agente.velBlin[1]}">` +
            '           <h3>Blindaje :</h3>' +
            '           <span></span>' +
            '           <span></span>' +
            '           <span></span>' +
            '       </div>' +
            '   </div>' +
            '</div');
    }
}

function cambiarDivO() {
    idTipo = $(this).children("ul").attr("id");
    idNum = $(this).children("ul").children();

    $("#rowCard").empty();

    for (let index = 0; index < idNum.length; index++) {
        agente = {
            nombre: arrays[idTipo].nombre[index],
            imagen: 'js/img/agentes/' + arrays[idTipo].nombre[index] + '.png',
            velBlin: arrays[idTipo].velBlin[index]
        }

        $("#rowCard").append(
            '<div class="card col-md-3">' +
            '   <div class="imgBx">' +
            `        <img src="${agente.imagen}">` +
            '   </div>' +
            '   <div class="contentBx">' +
            `       <h2>${agente.nombre.toUpperCase()}</h2>` +
            `       <div class="vel _${agente.velBlin[0]}">` +
            '           <h3>Velocidad :</h3>' +
            '           <span></span>' +
            '           <span></span>' +
            '           <span></span>' +
            '       </div>' +
            `       <div class="blin _${agente.velBlin[1]}">` +
            '           <h3>Blindaje :</h3>' +
            '           <span></span>' +
            '           <span></span>' +
            '           <span></span>' +
            '       </div>' +
            '   </div>' +
            '</div');
    }
}