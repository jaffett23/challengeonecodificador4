function encriptar(){
    var texto = document.querySelector("#input_encriptar").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    aparecerElementos();
    document.getElementById("label_resultado").textContent = textoCifrado;
    esconderElementos();
}

function aparecerElementos(){
    document.getElementById("label_resultado").style.display = "flex";
    document.getElementById("button_copiar").style.display = "flex";
}

function esconderElementos(){

    document.getElementById("frame5").style.display = "none";
    document.getElementById("muñeco").style.display = "none";
}

function limpiar(){
    document.getElementById("label_resultado").style.display = "none";
    document.getElementById("button_copiar").style.display = "none";
    document.getElementById("frame5").style.display = "flex";
    document.getElementById("muñeco").style.display = "flex";
    document.querySelector("#input_encriptar").value = " ";
    ponerCursor();
}

function ponerCursor() {
    document.getElementById('input_encriptar').focus();
  }
window.onload = ponerCursor;
var boton_encriptar = document.querySelector("#button_encriptar");
boton_encriptar.onclick = encriptar;
var boton_encriptar = document.querySelector("#button_limpiar");
boton_encriptar.onclick = limpiar;