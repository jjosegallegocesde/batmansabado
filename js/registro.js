import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro=document.getElementById("botonregistro")

botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let correo =document.getElementById("correo").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("Exito en el registro")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("upps fallamos")
    });
    
   

})