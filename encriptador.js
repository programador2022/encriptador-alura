/*
en este orden para que no se interpongan los encriptados

primer la "e" porque "enter" no tiene otras vocales
e = enter

segundo la "i" porque "imes" contiene a la "e" pero la encriptamos anteriormente
i = imes

tercera la "o" porque "ober" contiene la "e" que como dijimos ya fue encriptada
o = ober

cuarto la "a" porque "ai" contiene la "i" que  ya fue encriptada
a = ai

por ultima la "u" porque "ufat" contien la "a"   que  ya fue encriptada
u = ufat

*/

function encriptar() {
let cuadrouno = document.querySelector(".ingresartexto").value.toLowerCase();
let encriptadoe = cuadrouno.replace(/e/igm,"enter");

let encriptadoi = encriptadoe.replace(/i/igm,"imes");
let encriptadoo = encriptadoi.replace(/o/igm,"ober");

let encriptadoa = encriptadoo.replace(/a/igm,"ai");
let encriptadou = encriptadoa.replace(/u/igm,"ufat");

document.querySelector(".mostrar").innerHTML = encriptadou;


document.getElementById("imagen").style.display = "none";
document.getElementById("textoh2").style.display = "none";
document.getElementById("parra").style.display = "none";
document.getElementById("aparece").style.display = "show";
document.getElementById("aparece").style.display = "inherit";


}

function desencriptar() {
let cuadrouno = document.querySelector(".ingresartexto").value.toLowerCase();
let desencriptadoe = cuadrouno.replace(/enter/igm,"e");

let desencriptadoi = desencriptadoe.replace(/imes/igm,"i");
let desencriptadoo = desencriptadoi.replace(/ober/igm,"o");

let desencriptadoa = desencriptadoo.replace(/ai/igm,"a");
let desencriptadou = desencriptadoa.replace(/ufat/igm,"u");

document.querySelector(".mostrar").innerHTML = desencriptadou;

}

function copiar() {
	let copiando = document.querySelector(".mostrar");
	copiando.select();
	document.execCommand("copy");
	alert("se copio");
}



var botonencriptar = document.getElementById("encripta");
botonencriptar.addEventListener("click", encriptar);

var botondesencriptar = document.getElementById("desencripta");
botondesencriptar.addEventListener("click", desencriptar);

var botoncopiando = document.getElementById("copiar");
botoncopiando.addEventListener("click", copiar);
