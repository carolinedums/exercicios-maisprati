//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
//tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')()

console.log('------BEM VINDO JOGADOR------')


let numeroAleatorio = Math.floor(Math.random() * 5)+1
let numeroDigitado;

do{
    numeroDigitado = Number(prompt('Digite um numero de 1 a 5: '))
    if(numeroAleatorio===numeroDigitado){
        console.log('VOCÊ ACERTOU!!')
    }else{
        console.log('VOCÊ ERROU, TENTE NOVAMENTE!')
    }

} while (numeroAleatorio!=numeroDigitado)
