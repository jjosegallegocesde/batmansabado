//IMPORTANDO MODULOS
import {pintarTienda} from './tiendallenado.js'
import {ampliarInformacion} from './apliarInfo.js'
import {pintarCarrito} from './pintarCarrito.js';

//crear un objeto vacio
let producto={}

//GLOBAL MODAL

//Llamando al modulo de pintar
pintarTienda()

//1. Lanzando el modal para ampliar info
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
//2. carrito es un arreglo de productos (arreglo de objetos)
let carrito=[]

let boton = document.getElementById("botonAdd")
boton.addEventListener('click',function(evento){
    console.log("estoy añadiendo al carrito")


    //1. capturar la cantidad del producto
    let cantidad=document.getElementById("cantidadProducto").value
    
    //2. agrego la cantidad al objeto Producto
    producto.cantidad=cantidad

    //3. agregar el producto al carrito
    carrito.push(producto) //LLENAMOS EL CARRITO

    //4. calculo la sumatoria de cantidades
    let suma=0
    carrito.forEach(function(producto){
       
        suma=suma+Number(producto.cantidad)
    })
    
    pintarCarrito(suma);

})

//3. Limpiar Carrito
let limpiarCarro = document.getElementById("limpiar")
limpiarCarro.addEventListener("click" , function(evento){
    carrito=[]
    let capsula = document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})

//4. Ver resumen de venta 
let botonCarrito=document.getElementById("botoncarrito")
botonCarrito.addEventListener("click",function(evento){

   
    let contenedor=document.getElementById("contenedorventa")

    let modalVenta = new bootstrap.Modal(document.getElementById('resumenCarrito'))

    //Borrar el contenido HTML de una seccion
    contenedor.innerHTML=""

    //Recorrer el carrito para pintar los productos en la factura
    carrito.forEach(function(producto){

        //TRAVERSING
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        //PADRES E HIJOS
        columna1.appendChild(foto)

        fila.appendChild(columna1)
        fila.appendChild(columna2)

        contenedor.appendChild(fila)
    })

    modalVenta.show()


   
    
})