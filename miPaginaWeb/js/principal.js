onload = principal

function principal(){
    let ver = document.getElementsByClassName("ver");
    let id = 1;

    for (v of ver){
        v.setAttribute("onclick","cargarVer("+id+")");
        v.setAttribute("abierto","false");
        v.setAttribute("id",id);
        id++;
    }

    let ocultos = document.getElementsByClassName("ocul");

    id = 1;

    for (o of ocultos){
        o.setAttribute("id",id);
        id++;
    }
}

function cargarVer(id){
    let ver = document.getElementById(id);
    let ocultos = document.getElementsByClassName("ocul");
    let abierto = ver.getAttribute("abierto");
    let img = document.getElementById("divImgCard");

    if(abierto == "false"){
        for (o of ocultos){
            o.setAttribute("style","display:block")
        }
        img.setAttribute("class","col-md-5");
        ver.setAttribute("abierto","true");
        ver.innerHTML = "Ver menos"

    }else if(abierto == "true"){
        for (o of ocultos){
            o.setAttribute("style","display:none")
        }
        img.setAttribute("class","col-md-2");
        ver.setAttribute("abierto","false");
        ver.innerHTML = "Ver más"
    }
}