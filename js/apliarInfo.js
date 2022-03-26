export function ampliarInformacion(evento){

    let producto={}

    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.nombre=evento.target.parentElement.querySelector("h4").textContent

    let fotoInfo=document.getElementById("fotoInfo")
    fotoInfo.src=producto.foto

    let tituloFoto=document.getElementById("nombreInfo")
    tituloFoto.textContent=producto.nombre


    return producto

}