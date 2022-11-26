onload = principal

let formRelleno = false;

function principal(){
    //recoge en un array todos los elementos de la class "ver"
    let ver = document.getElementsByClassName("ver");
    let idV = 1;

    //por cada elemento del array ver, le añade los siguientes atributos en la pagina html
    for (v of ver){
        v.setAttribute("onclick","cargarVer("+idV+")");
        v.setAttribute("abierto","false");
        v.setAttribute("id","v"+idV);
        idV++;
    }

    let menos = document.getElementsByClassName("menos");
    let idM = 1;

    //por cada elemento del array menos, le añade los siguientes atributos en la pagina html
    for (m of menos){
        m.setAttribute("onclick","cargarVer("+idM+")");
        m.setAttribute("abierto","false");
        m.setAttribute("id","m"+idM);
        idM++;
    }

    let cards = document.getElementsByClassName("card");

    //Bucle que recorre el numero de tarjetas que hay y a los elementos de la class "ocul"+i los pone en diplay none
    for(i=1;i < cards.length+1; i++){
        let ocultos = document.getElementsByClassName("ocul"+i);
        for (o of ocultos){
            o.setAttribute("style","display:none");
        }
    }

    //variable para diferenciar el card que se encuentra dentro de otro
    let matrizVetos = document.getElementById("matrizVetos");
    matrizVetos.setAttribute("onclick","mostrarCardMatrizVetos()");
    matrizVetos.setAttribute("abierto","false");

    //crea un span en el elemento p con id "text4" dentro de la card 4
    let p = document.getElementById("text4");

    let cerrar = document.createElement("span");
    cerrar.setAttribute("id","span4");
    cerrar.setAttribute("onclick","mostrarCardMatrizVetos()");
    cerrar.setAttribute("abierto","false");
    p.appendChild(cerrar);

    //pone el div-formulario en oculto y añade una serie de atributos al mismo
    let form = document.getElementById("div-form");
    form.setAttribute("style","display:none;");
    form.setAttribute("abierto","false");

    //Añade una funcion al "p" que se usará para cerrar el formulario
    let cerrarForm = document.getElementById("cerrarForm");
    cerrarForm.setAttribute("onclick","cerrarForm()");

    //Añade a todos los "inputs" del form un value
    let campos = document.getElementsByClassName("form-control");

    for (c of campos){
        c.setAttribute("value","");
    }

    //recoge el elmento de la class "contacto" y le añade un atributo
    let contacto = document.getElementById("contacto");
    contacto.setAttribute("onclick","abrirForm()");
}

//funcion que se ejecuta cuando se hace click sobre el span con class "ver"
function cargarVer(id){
    //Guarda en variables todos los elementos o atributos que se van a usar en la funcion
    let ver = document.getElementById("v"+id);
    let img = document.getElementById("divImgCard"+id);
    let imgA = document.getElementById("imgAmpliada"+id);
    let card = document.getElementById("row"+id);
    let menos = document.getElementById("m"+id);
    let enlace = document.createElement("a");
    let enlacePuesto = false;

    let ocultos = document.getElementsByClassName("ocul"+id);

    let abierto = ver.getAttribute("abierto");

    //recoge el atributo abierto y comprueba su contenido
    if(abierto == "false"){

        for (o of ocultos){
            o.setAttribute("style","display:block;");
        }

        card.setAttribute("style","text-align:center;");

        img.setAttribute("style","visibility:hidden");
        img.setAttribute("class","col-md-3");

        imgA.setAttribute("style","display:block;");

        menos.setAttribute("abierto","true");
        menos.setAttribute("style","display:block");

        ver.setAttribute("abierto","true");
        ver.innerHTML = "";

        if(enlacePuesto == false){
            enlace.setAttribute("href","#card"+id);
            enlace.setAttribute("class","sr-only sr-only-focusable");
            enlace.innerHTML = "Ver menos";
            ver.appendChild(enlace);
            enlacePuesto = true;
        }else if(enlacePuesto){
            enlace.innerHTML = "Ver menos";
        }

    }else if(abierto == "true"){

        for (o of ocultos){
            o.setAttribute("style","display:none");
        }

        card.setAttribute("style","text-align:left");

        img.setAttribute("style","visibility:visible");
        img.setAttribute("class","col-md-2");

        imgA.setAttribute("style","display:none;");

        menos.setAttribute("abierto","false");
        menos.setAttribute("style","display:none");

        ver.setAttribute("abierto","false");
        ver.innerHTML = "Ver más";
    }
}

//funcion para abrir y cerrar el card que se encuentra dentro de otro
function mostrarCardMatrizVetos(){
    let ver = document.getElementById("matrizVetos");
    let abierto = ver.getAttribute("abierto");
    let spans = document.getElementsByClassName("ocul4");
    let cerrar = document.getElementById("span4");

    if(abierto == "false"){

        for (s of spans){
            s.setAttribute("style","display:block;");
        }

        ver.setAttribute("abierto","true");
        ver.innerHTML = "Cerrar matriz de equilibrio y agentes más vetados";
        
        cerrar.setAttribute("style","display:block;");
        cerrar.setAttribute("abierto","true");
        cerrar.innerHTML = "Cerrar matriz de equilibrio y agentes más vetados";

    }else if(abierto == "true"){

        for (s of spans){
            s.setAttribute("style","display:none;");
        }

        ver.setAttribute("abierto","false");
        ver.innerHTML = "Ver matriz de equilibrio y agentes más vetados";
        
        cerrar.setAttribute("style","display:none;");
        cerrar.setAttribute("abierto","false");
        
    }
}

//funcion para ver el formulario
function abrirForm(){
    let divForm = document.getElementById("div-form");
    let abierto = divForm.getAttribute("abierto");
    let form = document.getElementById("form");
    let titulo = document.getElementById("titulo-form");

    if(abierto  == "false"){
        divForm.setAttribute("style","display:block;");
        divForm.setAttribute("abierto","true");
        form.setAttribute("style","display:block;");
        titulo.innerHTML = "Formulario de contacto"
    }
}

//funcion para dejar de ver el formulario y vaciar todos los datos
function cerrarForm(){
    let form = document.getElementById("div-form");
    let abierto = form.getAttribute("abierto");

    if(abierto == "true"){
        form.setAttribute("style","display:none;");
        form.setAttribute("abierto","false");
    }

    //vaciar de datos todos los campos del form
    let campos = document.getElementsByClassName("form-control");

    for (c of campos){
        c.value = "";
    }
}

//funcion que valida que los campos del formulario tengan los datos necesarios 
function validarContenido(){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let email = document.getElementById("email");
    let telf = document.getElementById("numTelf");
    let telfLong = telf.value.length;
    let coments = document.getElementById("comentarios");

    let nomApTrue = false;
    let emailTrue = false;
    let telfTrue = false;
    let comentTrue = false;

    let soloLetras = new RegExp('^[A-Z]+$','i');
    let emailCorrecto = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let soloNums = new RegExp(/^[0-9]+$/);

    if(!soloLetras.test(nombre.value) | !soloLetras.test(apellidos.value)){
        if(!soloLetras.test(nombre.value)){
            nombre.setAttribute("class","form-control is-invalid");
        }
        if(!soloLetras.test(apellidos.value)){
            apellidos.setAttribute("class","form-control is-invalid");
        }
        if(soloLetras.test(nombre.value)){
            nombre.setAttribute("class","form-control");
        }
        if(soloLetras.test(apellidos.value)){
            apellidos.setAttribute("class","form-control");
        }
        nomApTrue = false;
    }else{
        nombre.setAttribute("class","form-control");
        apellidos.setAttribute("class","form-control");
        nomApTrue = true;
    }

    if(!emailCorrecto.test(email.value)){
        email.setAttribute("class","form-control is-invalid");
        emailTrue = false;
    }else{
        email.setAttribute("class","form-control");
        emailTrue = true;
    }

    if(telfLong == 9){
        if(soloNums.test(telf.value)){
            telf.setAttribute("class","form-control");
            telfTrue = true;
        }else{
            telf.setAttribute("class","form-control is-invalid");
            telfTrue = false;
        }
    }else{
        telf.setAttribute("class","form-control is-invalid");
        telfTrue = false;
    }

    if(coments.value == ""){
        coments.setAttribute("class","form-control is-invalid");
        comentTrue = false;
    }else{
        coments.setAttribute("class","form-control");
        comentTrue = true;
    }

    if(nomApTrue & emailTrue & telfTrue & comentTrue){
        formRelleno = true;
        formCompleto();
        return false;
    }else{
        return false;
    }

}

//funcion para cambiar el contenido de la tarjeta "div-form" cuando el formulario se rellena correctamente
function formCompleto(){
    let form = document.getElementById("form");
    let titulo = document.getElementById("titulo-form");

    if(formRelleno){
        form.setAttribute("style","display:none;");
        titulo.innerHTML = "Gracias, uno de nuestros operadores se pondrá en contacto con usted"
        formRelleno = false;
    }
}