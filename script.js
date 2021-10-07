
let ordem = []; //Ordem aleatória
let cliqueOrdem = [];  //Ordem de cliques
let pontos = 0; //Início contagem pontuação

// 0 = verde, 1 = vermelho, 2 = amarelo, 3 = azul
var document
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//Cria a ordem aleatoria
let ordemAleatoria = () => {
    let sorteado = Math.floor(Math.random() * 4)
    ordem[ordem.length] = sorteado;
    cliqueOrdem = [];
//
    for(let i in ordem);{
        let elementColor = createColorElement(ordem[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//Acender proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('.selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Compara ordem cricada com ordem sorteada
let checkOrdem = () => {
    for(let i in cliqueOrdem){
        if(cliqueOrdem[i] != ordem[i]) {
            lose(); //Perdeu
            break;
        }
    }
    //Ganhou
    if(cliqueOrdem.length == ordem.length) {
        alert('Pontuação: ${pontos}\nParabéns! Você acertou! Iniciando próxima rodada!');
        nextLevel();
    }
}

//Função clicar do usuário
let clique = (color) => {
    cliqueOrdem[cliqueOrdem.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrdem();
    })
}



//Função para retornar cor
    let createColorElement = (color) =>{
        if(color == 0) {
            return green;
        }else if(color == 1){
            return red;
        }else if(color == 2){
            return yellow;
        } else if(color == 3){
            return blue;
        }
    }

//Próxima rodada de jogo
let nextLevel = () => {
    pontos++;
    ordemAleatoria();

}
//Game over
let gameOver = () => {
    alert('Pontuação: ${pontos}!\nVocê perdeu!\nClique em OK para reiniciar o jogo');
    ordem = [];
    cliqueOrdem = [];

    playGame();
}
//Iniciando o jogo
let playGame = () => {
    alert('BEM VINDO AO GENESIS!\nINICIANDO NOVO JOGO!')
    pontos = 0;

    nextLevel();
}

green.addEventListener('clique', clique(0));
red.addEventListener('clique', clique(1));
yellow.addEventListener('clique', clique(2));
blue.addEventListener('clique', clique(3));


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//primeira rodada
playGame();