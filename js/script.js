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


function encriptar(){

    var array = [];

    document.getElementById("imagenlupa").style.display="none";
    document.querySelector('#texto_informacion1').innerHTML=""
    document.querySelector('#texto_informacion2').innerHTML=""


    let texto = document.getElementById('textinput').value
    if(texto==""){
        document.getElementById("imagenlupa").style.display="block";
        document.querySelector('#imagenlupa').src="./Assets/mujer_lupa.PNG"
        document.querySelector('#texto_informacion1').innerHTML="Ningún mensaje fue encontrado"
        document.querySelector('#texto_informacion2').innerHTML="Ingresa el texto que desees encriptar o desencriptar."
        document.querySelector('#div_des').classList.add('cont_tex_des')
        document.querySelector('#div_des').classList.remove('cont_tex_des2')
        document.querySelector("#texto_en").innerHTML="";
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
        document.querySelector('#div_des').classList.remove('cont_tex_des')
        document.querySelector('#div_des').classList.add('cont_tex_des2')
    }

}

function desencriptar(){
    
}