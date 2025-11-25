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

const buno = document.querySelector("#buno");
const bdos = document.querySelector("#bdos");
const btres = document.querySelector("#btres");
const bcuatro = document.querySelector("#bcuatro");
const bcinco = document.querySelector("#bcinco");
const bseis = document.querySelector("#bseis");
const bocho = document.querySelector("#bocho");

const pestaña = document.getElementById("pestaña");
const titupesta = document.getElementById("titupesta");

let pestañabierta = false;

buno.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupesta.innerText = "Copycat";
    pestaña.style.display = "block";
    pestañabierta = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabierta) return;
    if(!pestaña.contains(evento.target)) {
        pestaña.style.display = "none";
        pestañabierta = false;
    }
});
const pestañad = document.getElementById("pestañad");
const titupestad = document.getElementById("titupestad");

let pestañabiertad = false;

bdos.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestad.innerText = "idontwannabeyouanymore";
    pestañad.style.display = "block";
    pestañabiertad = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertad) return;
    if(!pestañad.contains(evento.target)) {
        pestañad.style.display = "none";
        pestañabiertad = false;
    }
});

const pestañat = document.getElementById("pestañat");
const titupestat = document.getElementById("titupestat");

let pestañabiertat = false;

btres.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestat.innerText = "My boy";
    pestañat.style.display = "block";
    pestañabiertat = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertat) return;
    if(!pestañat.contains(evento.target)) {
        pestañat.style.display = "none";
        pestañabiertat = false;
    }
});

const pestañac = document.getElementById("pestañac");
const titupestac = document.getElementById("titupestac");

let pestañabiertac = false;

bcuatro.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestac.innerText = "Watch";
    pestañac.style.display = "block";
    pestañabiertac = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertac) return;
    if(!pestañac.contains(evento.target)) {
        pestañac.style.display = "none";
        pestañabiertac = false;
    }
});


const pestañaci = document.getElementById("pestañaci");
const titupestaci = document.getElementById("titupestaci");

let pestañabiertaci = false;

bcinco.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestaci.innerText = "My boy";
    pestañaci.style.display = "block";
    pestañabiertaci = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertaci) return;
    if(!pestañaci.contains(evento.target)) {
        pestañaci.style.display = "none";
        pestañabiertaci = false;
    }
});


const pestañas = document.getElementById("pestañas");
const titupestas = document.getElementById("titupestas");

let pestañabiertas = false;

bseis.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestas.innerText = "Bellyache";
    pestañas.style.display = "block";
    pestañabiertas = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertas) return;
    if(!pestañas.contains(evento.target)) {
        pestañas.style.display = "none";
        pestañabiertas = false;
    }
});


const pestañasi = document.getElementById("pestañasi");
const titupestasi = document.getElementById("titupestasi");

let pestañabiertasi = false;

bsiete.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestasi.innerText = "Ocean eyes";
    pestañasi.style.display = "block";
    pestañabiertasi = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertasi) return;
    if(!pestañasi.contains(evento.target)) {
        pestañasi.style.display = "none";
        pestañabiertasi = false;
    }
});


const pestañao = document.getElementById("pestañao");
const titupestao = document.getElementById("titupestao");

let pestañabiertao = false;

bocho.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestao.innerText = "Ocean eyes";
    pestañao.style.display = "block";
    pestañabiertao = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertao) return;
    if(!pestañao.contains(evento.target)) {
        pestañao.style.display = "none";
        pestañabiertao = false;
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

const muno = document.querySelector("#muno");
const mdos = document.querySelector("#mdos");
const mtres = document.querySelector("#mtres");
const mcuatro = document.querySelector("#mcuatro");
const mcinco = document.querySelector("#mcinco");
const mseis = document.querySelector("#mseis");
const mocho = document.querySelector("#mocho");

const pestañam = document.getElementById("pestañam");
const titupestam = document.getElementById("titupestam");

let pestañabiertam = false;

muno.addEventListener('click', (elemento) => {
    elemento.stopPropagation();
    titupestam.innerText = "Zitti e buoni";
    pestañam.style.display = "block";
    pestañabiertam = true;
});

document.body.addEventListener('click', (evento) => {
    if(!pestañabiertam) return;
    if(!pestañam.contains(evento.target)) {
        pestañam.style.display = "none";
        pestañabiertam = false;
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


