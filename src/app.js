let numAleatorio = gerarNumeroAletorio()

function impimir(){
    console.log('hahahahah');
};


function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numAleatorio);

};


function atualizarElemento(tag , texto){
    

    let elemento = document.querySelector(tag);
    elemento.innerHTML =texto;
};


function gerarNumeroAletorio(){
     return parseInt(Math.random() * 10 +1);
};


atualizarElemento(tag ='h1', texto='Jogo do número secreto');

atualizarElemento(tag ='p', texto='escolha um número entre 0 e 10.');
