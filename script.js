const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");


/*primera*/
const ventana = document.getElementById("ventana");
const tituloVentana = document.getElementById("tituloVentana");
let ventanabierta = false;

uno.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentana.innerText = "Don't smile at me";
    ventana.style.display = "block";
    ventanabierta = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabierta) return;
    if(!ventana.contains(evento.target)) {
        ventana.style.display = "none";
        ventanabierta = false;
    }
});

/*segunda ventana*/
const ventanad = document.getElementById("ventanad");
const tituloVentanad = document.getElementById("tituloVentanad");
let ventanabiertad = false;

dos.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanad.innerText = "Teatro d'ira";
    ventanad.style.display = "block";
    ventanabiertad = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertad) return;
    if(!ventanad.contains(evento.target)) {
        ventanad.style.display = "none";
        ventanabiertad = false;
    }
});

/*tercera*/

const ventanat = document.getElementById("ventanat");
const tituloVentanat = document.getElementById("tituloVentanat");
let ventanabiertat = false;

tres.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanat.innerText = "Book of shadows";
    ventanat.style.display = "block";
    ventanabiertat = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertat) return;
    if(!ventanat.contains(evento.target)) {
        ventanat.style.display = "none";
        ventanabiertat = false;
    }
});

/*cuarta*/

const ventanac = document.getElementById("ventanac");
const tituloVentanac = document.getElementById("tituloVentanac");
let ventanabiertac = false;

cuatro.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanac.innerText = "Animal";
    ventanac.style.display = "block";
    ventanabiertac = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertac) return;
    if(!ventanac.contains(evento.target)) {
        ventanac.style.display = "none";
        ventanabiertac = false;
    }
});

/*quinta*/

const ventanaq = document.getElementById("ventanaq");
const tituloVentanaq = document.getElementById("tituloVentanaq");
let ventanabiertaq = false;

cinco.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    tituloVentanaq.innerText = "Queen of the murder scene";
    ventanaq.style.display = "block";
    ventanabiertaq = true;
});

document.body.addEventListener('click', (evento) => {
    if(!ventanabiertaq) return;
    if(!ventanaq.contains(evento.target)) {
        ventanaq.style.display = "none";
        ventanabiertaq = false;
    }
});

/*segunda parte*/


