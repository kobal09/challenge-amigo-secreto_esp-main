// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

let $_txt = document.getElementById('amigo');
let $_ulListaAmigos = document.getElementById('listaAmigos');
let $_ulganador = document.getElementById('resultado');
let $_liListaAmigos = "";
let $_liganador = "";


function agregarAmigo() {
    let contenido = $_txt.value;

    if (contenido.trim() === '') {
        return alert('no puedes ingresar una caja vacia');
    } else {
        listaAmigos.push(contenido);
        $_txt.value = "";
    } 
    mostrarAmigos(listaAmigos);     
    //contenido = "";       
    
}

function mostrarAmigos(listaAmigos) {
    console.log(listaAmigos);
    $_liListaAmigos = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        $_liListaAmigos += `<li>${listaAmigos[i]}</li>`;        
    }
    $_ulListaAmigos.innerHTML = $_liListaAmigos;
}

function sortearAmigo(listaAmigos) {
    //console.log(listaAmigos);
    let g = '';
    let indiceAmigoSecreto = Math.floor(Math.random() * listaAmigos.length);
    g = listaAmigos[indiceAmigoSecreto];
    console.log(g);
    mostrarAmigoGanador(g);
}

function mostrarAmigoGanador(g) {
    $_ulganador.innerHTML = g;
}

//console.log(listaAmigos);
