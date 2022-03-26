//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'
import {ampliarInformacion} from './apliarInfo.js'

//crear un objeto vacio
let producto={}

//Llamando al modulo de pintar
pintarTienda()

//Lanzando el modal para ampliar info
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
        //cargar informaciond el producto dentro del modal
        producto=ampliarInformacion(evento)
        modalinfo.show()
    }
})

//detectar la accion de añadir al carrito

//carrito es un arreglo de productos (arreglo de objetos)
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
    console.log("estoy añadiendo al carrito")

    //1. capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value
    
    //2. agrego la cantidad al objeto Producto
    producto.cantidad=cantidad

    //3. agregar el producto al carrito
    carrito.push(producto)

    //4. calculo la sumatoria de cantidades
    let suma=0
    carrito.forEach(function(producto){
       
        suma=suma+Number(producto.cantidad)
    })
    
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma

    capsula.classList.remove("invisible")



})

let limpiarCarro = document.getElementById("limpiar")
limpiarCarro.addEventListener("click" , function(evento){
    carrito=[]
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})