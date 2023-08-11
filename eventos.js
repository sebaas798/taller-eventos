const divBoton = document.getElementById("contenedor");
const boton = document.querySelector("#boton")

function clicEnDiv() {
    alert("Hola! Soy el div");
}

divBoton.addEventListener("click", clicEnDiv);

clicEnDiv.stopPropagation();
