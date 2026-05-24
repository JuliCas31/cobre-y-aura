const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoCabello = document.getElementById("tipoCabello").value;
    const intensidad = document.getElementById("intensidad").value;

    let recomendacion;

    if (intensidad === "suave") {
        recomendacion = "te recomendamos un cobrizo claro o cobrizo dorado.";
    } else if (intensidad === "medio") {
        recomendacion = "te recomendamos un cobrizo dorado o cobrizo oscuro.";
    } else {
        recomendacion = "te recomendamos un cobrizo intenso o cobrizo rojizo.";
    }

    resultado.innerHTML = `Hola ${nombre}, según tu cabello ${tipoCabello}, ${recomendacion}`;
});