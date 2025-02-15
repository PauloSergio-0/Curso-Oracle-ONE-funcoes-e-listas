let numAleatorio = gerarNumeroAletorio();
let tentativas = 0;

function NewGame(){
    tentativas = 0;
    numAleatorio = gerarNumeroAletorio();
    atualizarElemento(tag ='h1', texto='Jogo do número secreto');
    atualizarElemento('input',null);
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function contator(num){
    return num += 1;
};

function verificarChute(){
    
    let chute = document.querySelector('input').value;
        
    tentativas = contator(tentativas)

    if (chute == numAleatorio){
        atualizarElemento(tag ='h1', texto=`Você acertou! o numero é ${chute}. Você fez ${tentativas} tentativa(s)!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if (chute >= numAleatorio){
        atualizarElemento(tag ='h1', texto='O numero deve ser menor!');
        atualizarElemento('input',null);
        
    }else{
        atualizarElemento(tag ='h1', texto='O numero deve ser maior!');
        atualizarElemento('input',null);
    };

};


function atualizarElemento(tag , texto){
    

    if (tag == 'input'){
        document.querySelector('input').value = texto;
    } else{
        let elemento = document.querySelector(tag);
        elemento.innerHTML =texto;
    };
};


function gerarNumeroAletorio(){
     return parseInt(Math.random() * 10 +1);
};


atualizarElemento(tag ='h1', texto='Jogo do número secreto');

atualizarElemento(tag ='p', texto='escolha um número entre 0 e 10.');
