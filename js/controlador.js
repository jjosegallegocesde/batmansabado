//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'
import {ampliarInformacion} from './apliarInfo.js'


//Llamando al modulo de pintar
pintarTienda()

//Lanzando el modal
let contenedorTienda=document.getElementById("fila")

contenedorTienda.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
        //cargar informaciond el producto dentro del modal
        ampliarInformacion(evento)
        modalinfo.show()
    }

})