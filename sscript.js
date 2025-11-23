const ventan = document.getElementById("ventan");
const tituloVentan = document.getElementById("tituloVentan");


let ventanAbierta = false;

// FUNCION GENERAL
function abrirVentana(texto) {
    tituloVentan.innerText = texto;
    ventan.style.display = "block";
    ventanAbierta = true;
}


// CERRAR AL DAR CLICK FUERA
document.body.addEventListener("click", (e) => {
    if (!ventanAbierta) return;

    // si el click NO está dentro de la ventana → cerrar
    if (!ventan.contains(e.target)) {
        ventan.style.display = "none";
        ventanAbierta = false;
    }
});
