function encriptar() {
    if (texto = document.querySelector("#input_encriptar").value == "")
        false;
    else {
        var texto = document.querySelector("#input_encriptar").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        aparecerElementos();
        resultado.textContent = textoCifrado;
        esconderElementos();
        rect.classList.add('active');
        body.classList.add('active');
    }
}

function desencriptar() {
    var texto_des = document.querySelector("#input_encriptar").value
    if (texto_des == "")
        false;
    else {
        texto_des = document.querySelector("#input_encriptar").value;
        var textoCifrado = texto_des.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        aparecerElementos();
        resultado.textContent = textoCifrado;
        rect.classList.add('active');
        body.classList.add('active');
        esconderElementos();
    }
}

function aparecerElementos() {
    document.getElementById("label_resultado").style.display = "flex";
    document.getElementById("button_copiar").style.display = "flex";
}

function esconderElementos() {

    document.getElementById("frame5").style.display = "none";
    muñeco.classList.add('active');
}

function limpiar() {
    const rect = document.querySelector('.rectangulo1');
    if (texto = document.querySelector("#input_encriptar").value == "")
        false;
    else {
        document.getElementById("label_resultado").style.display = "none";
        document.getElementById("button_copiar").style.display = "none";
        document.getElementById("frame5").style.display = "flex";
        muñeco.classList.remove('active');
        document.querySelector("#input_encriptar").value = "";
        ponerCursor();
        rect.classList.remove('active');
        body.classList.remove('active');
    }
}

function copiar() {
    let txtCopiar = document.querySelector('#label_resultado').innerHTML;
    navigator.clipboard.writeText(txtCopiar);
}

function ponerCursor() {
    document.getElementById('input_encriptar').focus();
}

var resultado = document.getElementById("label_resultado");
const rect = document.querySelector('.rectangulo1');
const body = document.querySelector('body');

window.onload = ponerCursor;
var boton_encriptar = document.querySelector("#button_encriptar");
boton_encriptar.onclick = encriptar;
var boton_limpiar = document.querySelector("#button_limpiar");
boton_limpiar.onclick = limpiar;
var boton_copiar = document.querySelector("#button_copiar");
boton_copiar.onclick = copiar;
var boton_desencriptar = document.querySelector("#button_desencriptar");
boton_desencriptar.onclick = desencriptar;
const muñeco = document.querySelector('.muñeco');