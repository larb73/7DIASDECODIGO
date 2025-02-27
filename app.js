
alert("¡Hola, Bienvenidos...En este segundo dia , necesitamos algunos datos de ustedes los usuairos!");

const nombre = prompt("Por favor , ¿Cuál es tu nombre?");
const edad = prompt(" ¿Cuántos años tienes?");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?")

const mensaje = (`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
alert(mensaje);


let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);

if (respuesta == "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta == "2") {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Respuesta no válida. Debes responder con 1 o 2.");
}


