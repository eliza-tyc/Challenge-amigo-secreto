let nombres =[];
let nombre = "";

function condiciones_iniciales() {
    nombres =[];
    nombre = "";
    document.querySelector("#amigo").value = "";
}

function asignar_texto_elemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function agregar_amigo() {
    asignar_texto_elemento("#resultado","");
    nombre = document.querySelector("#amigo").value;
    if (nombre == "") {
        alert("Inserte un valor válido...");
    } else {
        nombres.push(nombre);
        limpiar_caja();
        asignar_texto_elemento("ul",nombres.join("<br>"));
    };
};

function limpiar_caja() {
    document.querySelector("#amigo").value = "";
};

function sortear_amigo() {
    document.querySelector("#amigo").value = "";
    if (nombres.length == 0) {
        asignar_texto_elemento("#resultado","");
        alert("Inserte al menos un valor");
    } else {
        let sorteado = Math.floor(Math.random()*nombres.length);
        asignar_texto_elemento("ul","")
        asignar_texto_elemento("#resultado",`Tu amigo secreto es: ${nombres[sorteado]}`);
        condiciones_iniciales();
    };
};

condiciones_iniciales();
