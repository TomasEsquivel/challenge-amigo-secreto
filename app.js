const listaAmigos = [];

function limpiarCaja(){
    document.querySelector('input').value = '';
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    //Primero había hecho concatenaciones con innerHTML y template string pero por eficiencia lo cambié.
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
    let indices = listaAmigos.length;
    let indiceSorteado = Math.floor(Math.random() * indices);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let lista = document.querySelector('.name-list');
    lista.innerHTML= '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es ${amigoSorteado}</li>`
    return;
}
