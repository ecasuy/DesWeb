const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobil");
const direccion = document.getElementById("dire");
const nacimiento = document.getElementById("fnaci");
const sexo = document.getElementById("tsex");
const contrasenia = document.getElementById("password");
const form = document.getElementById("form");
const listInput = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let.condicion = true;
    listInput.forEach((element) =>{
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido");
    }

    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        mostrarMensajeError("surname", "Apellidos no validos");
    } 
    
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido");
    } 

    if (celular.value.length < 1 || celular.value.trim() == "") {
        mostrarMensajeError("mobil", "Numero no valido");
    } 

    if (direccion.value.length < 1 || direccion.value.trim() == "") {
        mostrarMensajeError("dire", "Direccion no valida");
    } 

    if (nacimiento.value.length < 1 || nacimiento.value.trim() == "") {
        mostrarMensajeError("fnaci", "Fecha no valida");
    } 

    if (sexo.value.length < 1 || sexo.value.trim() == "") {
        mostrarMensajeError("tsex", "Tipo de sexo no valido");
    } 

    if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
        mostrarMensajeError("password", "Contraseña no valida");
    } 

});

function mostrarMensajeError(claseInput, mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

