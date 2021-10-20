let color = "hsl(237, 12%, 33%)";

//textos
let text = document.getElementById("texto");
let text2 = document.getElementById("texto2");
let text3 = document.getElementById("texto3");
let text4 = document.getElementById("texto4");
let text5 = document.getElementById("texto5");
//Ocultados
let ocultado = document.getElementById("ocultado");
let ocultado_dos = document.getElementById("ocultado2");
let ocultado3 = document.getElementById("ocultado3");
let ocultado4 = document.getElementById("ocultado4");
let ocultado5 = document.getElementById("ocultado5");

function mostrar(){
    ocultado.style.display="flex";
    //regreso
          ocultado3.style.display = "none";
          ocultado_dos.style.display = "none";
          ocultado4.style.display = "none";
          ocultado5.style.display = "none";
    //texto
        text.style.color = "rgb(1,1,1)";
           //pintar
   text5.style.color = color;
   text2.style.color = color;
   text3.style.color = color;
   text4.style.color = color;
}
function mostrar2(){
    ocultado_dos.style.display="flex";
    text.style.color = color;
      //regreso
        ocultado.style.display = "none";
        ocultado3.style.display = "none";
        ocultado4.style.display = "none";
        ocultado5.style.display = "none";
     //texto
     text2.style.color = "rgb(1,1,1)";
        //pintar
   text.style.color = color;
   text5.style.color = color;
   text3.style.color = color;
   text4.style.color = color;
}
function mostrar3(){
    ocultado3.style.display="flex";
    text.style.color = color;
      //regreso
      ocultado.style.display = "none";
      ocultado_dos.style.display = "none";
      ocultado4.style.display = "none";
      ocultado5.style.display = "none";
      //texto
      text3.style.color = "rgb(1,1,1)";
         //pintar
   text.style.color = color;
   text2.style.color = color;
   text5.style.color = color;
   text4.style.color = color;
}
function mostrar4(){
    ocultado4.style.display="flex";
    text.style.color = color;

    //regreso
    ocultado.style.display = "none";
    ocultado_dos.style.display = "none";
    ocultado3.style.display = "none";
    ocultado5.style.display = "none";
 //texto
 text4.style.color = "rgb(1,1,1)";
    //pintar
    text.style.color = color;
    text2.style.color = color;
    text3.style.color = color;
    text5.style.color = color;
}
function mostrar5(){
    ocultado5.style.display="flex";
    
    //regreso
      ocultado.style.display = "none";
      ocultado_dos.style.display = "none";
      ocultado4.style.display = "none";
      ocultado3.style.display = "none";
    //texto
    text5.style.color = "rgb(1,1,1)";
   //pintar
   text.style.color = color;
   text2.style.color = color;
   text3.style.color = color;
   text4.style.color = color;
}


