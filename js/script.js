/*
as "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
*/

var valorcopiar = "";
function encriptar(){

    var array = [];

    esconder();


    let texto = document.getElementById('textinput').value
    if(texto==""){
        no_encontrado();
    }else{
        for(let i=0;i<texto.length;i++){
            if(texto[i]=="e"){
                array.push("enter");
            }else if(texto[i]=="i"){
                array.push("imes");
            }else if(texto[i]=="a"){
                array.push("ai");
            }else if(texto[i]=="o"){
                array.push("ober");
            }else if(texto[i]=="u"){
                array.push("ufat");
            }else{
                array.push(texto[i]);
            }
        }
        document.querySelector("#texto_en").innerHTML=array.toString().replace(/,/g,"");
        valorcopiar=array.toString().replace(/,/g,"");
        cambio_clase();
    }

}
function esconder(){
    document.getElementById("imagenlupa").style.display="none";
    document.querySelector('#texto_informacion1').innerHTML=""
    document.querySelector('#texto_informacion2').innerHTML=""
    document.getElementById("id_btn_copiar").style.display="flex";
}
function no_encontrado(){
    document.getElementById("imagenlupa").style.display="block";
    document.querySelector('#imagenlupa').src="./Assets/mujer_lupa.PNG"
    document.querySelector('#texto_informacion1').innerHTML="Ningún mensaje fue encontrado"
    document.querySelector('#texto_informacion2').innerHTML="Ingresa el texto que desees encriptar o desencriptar."
    document.querySelector('#div_des').classList.add('cont_tex_des')
    document.querySelector('#div_des').classList.remove('cont_tex_des2')
    document.querySelector("#texto_en").innerHTML="";
    document.getElementById("id_btn_copiar").style.display="none";
}
function cambio_clase(){
    document.querySelector('#div_des').classList.remove('cont_tex_des')
    document.querySelector('#div_des').classList.add('cont_tex_des2')
}
function desencriptar(){
    esconder();
    let texto = document.getElementById('textinput').value

    if(texto==""){
        no_encontrado();
    }
    else{
        texto =texto.replace(/enter/g,"e");
        texto =texto.replace(/imes/g,"i");
        texto =texto.replace(/ai/g,"a");
        texto =texto.replace(/ober/g,"o");
        texto =texto.replace(/ufat/g,"u");
        document.querySelector("#texto_en").innerHTML=texto;
        valorcopiar=texto;
        cambio_clase();
    }

}

function copiar() {
    navigator.clipboard.writeText(valorcopiar)
}
function corregirtexto(event) {
    // Obtener el valor del textarea
    let input = event.target.value;
    
    // Convertir a minúsculas y eliminar caracteres especiales
    let transformed = input.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    
    // Asignar el valor transformado al textarea
    event.target.value = transformed;
}