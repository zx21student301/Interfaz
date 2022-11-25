onload = principal

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

    //recoge el elmento de la class "contacto" y le añade un atributo
    let contacto = document.getElementById("contacto");
    contacto.setAttribute("onclick","verForm()");

    //crea el formulario en el div "formulario" y lo deja en display none
    crearForm();
}

//funcion que se ejecuta cuando se hace click sobre el span con class "ver"
function cargarVer(id){
    //Guarda en variables todos los elementos o atributos que se van a usar en la funcion
    let ver = document.getElementById("v"+id);
    let img = document.getElementById("divImgCard"+id);
    let imgA = document.getElementById("imgAmpliada"+id);
    let card = document.getElementById("row"+id);
    let menos = document.getElementById("m"+id);

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
        ver.innerHTML = "Ver menos";

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
    
}

//funcion para crear el formulario cuando se cargue la pagina
function crearForm(){

}

//funcion para ver o dejar de ver el formulario
function verForm(){

}