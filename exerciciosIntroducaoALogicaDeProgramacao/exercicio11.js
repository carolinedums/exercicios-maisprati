// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')()

let valorDigitado = 1

while(valorDigitado>0){
    valorDigitado = Number(prompt('Digite um valor: '))
    if (valorDigitado<=0){
        console.log('APLICAÇÃO ENCERRADA')
    }
    else if(valorDigitado%2===0){
        console.log('O número é par ')
    } else {
        console.log( 'O numero é impar')
    }
}
