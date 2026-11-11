// 1. Buscar elementos del DOM
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#boton");

const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

const tarjeta = document.querySelector("#tarjeta");
const nombreTarjeta = document.querySelector("#nombre-tarjeta");
const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const rojo = document.querySelector("#rojo");
const reestablecer = document.querySelector("#reestablecer");
// 2. Evento click del botón
boton.addEventListener("click", function () {
    mensaje.textContent = "Bienvenido a la clase de ingenieria web :D AHORA cambiate a psicologia antes que sea tarde para seguir en esta carrera";
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        saludo.textContent = "Por favor ingresa tu nombre si no como quieres que sepa quien eres ve pilas";
        return;
    }
    saludo.textContent = "Bienvenido, " + nombre;
    formulario.reset();
});

//cambio de color 
azul.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "blue";
});

verde.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "green";
});

rojo.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "red";
});

reestablecer.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "";
});