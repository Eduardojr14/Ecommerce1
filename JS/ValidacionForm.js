const nombre = document.getElementById("myname");
const apellidos = document.getElementById("lastname");
const correo = document.getElementById("email");
const telefono = document.getElementById("mobile");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido*");
        condicion = false;
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        mostrarMensajeError("lastname", "Apellido no valido");
        condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*");
        condicion = false;
    }
    if (
        telefono.value.length != 10 ||
        telefono.value.trim() == "" ||
        isNaN(telefono.value)
    ) {
        mostrarMensajeError("mobile", "Telefono no valido*");
        condicion = false;
    }

    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.lastElementChild.innerHTML = "Formulario Enviado !!";
    form.reset();
}