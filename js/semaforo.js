const corVerde = document.getElementById ('verde');
const corAmarelo = document.getElementById ('amarelo');
const corVermelho = document.getElementById ('vermelho');
const automatico = document.getElementById ('trocar');
const semaf = document.getElementById ('semaf');
const desligando = document.getElementById ('desligar');

function verde(){
        semaf.src = './img/verde.png';
}

function amarelo(){
        semaf.src = './img/amarelo.png';
}

function vermelho(){
        semaf.src = './img/vermelho.png';
}

function desligar(){
        semaf.src = './img/desligado.png';
}

function trocar(){
    setInterval("semaf.src = './img/verde.png'; " , 1500);
    setInterval("semaf.src = './img/amarelo.png';" , 2000);
    setInterval("semaf.src = './img/vermelho.png'; " , 3000);
}



corVerde.addEventListener('click', verde);
corAmarelo.addEventListener('click', amarelo);
corVermelho.addEventListener('click', vermelho);
desligando.addEventListener('click', desligar);
automatico.addEventListener('click', trocar);
