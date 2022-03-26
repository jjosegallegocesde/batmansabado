
export function pintarTienda(){

    let productosBD = [

        { foto: 'img/tienda1.jpg', nombre: "Batimovil Escala", precio: 150000,descripcion:""},
        { foto: 'img/tienda2.jpg', nombre: "Camiseta Batman", precio: 50000},
        { foto: 'img/tienda3.jpg', nombre: "Gorra Batman DC", precio: 25000},
        { foto: 'img/tienda4.jpg', nombre: "Termo Batman DC", precio: 35500 },
        { foto: 'img/tienda5.jpg', nombre: "Batman v Superman", precio: 95000 },
        { foto: 'img/tienda6.jpg', nombre: "Maleta Batman", precio: 250000 },
        { foto: 'img/tienda7.jpg', nombre: "Silla Batman PRO", precio: 1500000},
        { foto: 'img/tienda8.jpg', nombre: "Comics Batman", precio: 350000},
        { foto: 'img/tienda9.jpg', nombre: "Caja sorpresa", precio: 187000},
        { foto: 'img/tienda10.jpg', nombre: "Lonchera Batman", precio: 70000}
    
    ]
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        


        //3. PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    
    //




}




