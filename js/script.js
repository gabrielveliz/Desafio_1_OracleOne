
var valorcopiar = "";
function encriptar(){
    //funcion para encriptar el texto, reconoce cuando no hay texto.

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
    //funcion para esconder el contenido cuando haya texto en el input
    document.getElementById("imagenlupa").style.display="none";
    document.querySelector('#texto_informacion1').innerHTML=""
    document.querySelector('#texto_informacion2').innerHTML=""
    document.getElementById("id_btn_copiar").style.display="flex";
}
function no_encontrado(){
    //funcion para mostrar el mensaje de no encontrado
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
    //funcion para cambiar la clase del contenedor del texto encriptado/desencriptado o el no encontrado
    document.querySelector('#div_des').classList.remove('cont_tex_des')
    document.querySelector('#div_des').classList.add('cont_tex_des2')
}
function desencriptar(){
    //funcion para desencriptar, reconoce si el campo esta vacio o no
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
    //funcion para elimiunar mayusculas y caracteres especiales
    let input = event.target.value;
    let transformed = input.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    event.target.value = transformed;
}