const listaAmigos = [];

function limpiarCaja(){
    document.querySelector('input').value = '';
}

function agregarAmigo(){
    let nuevoAmigo = document.querySelector('input').value;
     if(nuevoAmigo === null || nuevoAmigo === ""){
        alert('Por favor ingrese un nombre válido');
     }
     else{
        listaAmigos.push(nuevoAmigo.trim());
     }
     limpiarCaja();
     return;
}// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
