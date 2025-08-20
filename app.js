const listaAmigos = [];

function limpiarCaja(){
    document.querySelector('input').value = '';
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for(let i = 0; i <= listaAmigos.length;i++){
        let li = document.createElement("li");

        li.textContent = listaAmigos[i];

        lista.appendChild(li);
    }
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
     listarAmigos();
     return;
}

function sortearAmigo(){

}
