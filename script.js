
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var btnEncriptar = document.getElementById('btn-encriptar');
var btnDesencriptar = document.getElementById('btn-desencriptar');
var btnCopy = document.getElementById('btn-copy');
var inputMsg = document.getElementById('msg');
var input = document.getElementById('input-texto');
var mensaje;


btnEncriptar.addEventListener("click" , function(event) {
  event.preventDefault();
  let textoEncriptado = encriptar(input.value);
  inputMsg.value = textoEncriptado;
//terminamos con el parentesis de la funcion porque habia que añadir mas cosas
});
btnDesencriptar.addEventListener("click" , function(event) {
  event.preventDefault();
  let textoDesencriptado = desencriptar(input.value);
  inputMsg.value = textoDesencriptado
});
btnCopy.addEventListener("click", function(){
   inputMsg.focus();
   document.execCommand("selectAll");
   document.execCommand("copy")
});
  function encriptar(inputtext) {
  	inputtext =input.value;
  	mensaje = inputtext.replaceAll('e','enter')
  	.replaceAll('i','imes')
  	.replaceAll('a','ai')
  	.replaceAll('o','ober')
  	.replaceAll('u','ufat');

    return mensaje;
  }

  function desencriptar(inputtext) {
    inputtext = input.value;
    mensaje = inputtext.replaceAll('enter','e')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u');
    return mensaje;
  }
  function copiar() {
    inputMsg.focus
  }
for (var i=1;i<25;i++) {
  document.write("<br>")
}
document.write("<center>" + "Derechos reservados para Jhon Diaz" + "</center>")
