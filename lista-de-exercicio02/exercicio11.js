// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.

const prompt = require('prompt-sync')()

let primeiroTermo = Number(prompt('Digite o primeiro termo: ')) // pedidndo o termo que vai ser utilizado para iniciar, ele vai somado com a razao.

let razao = Number(prompt('Digite a razão da PA: '))            //pedindo a razao que vai ser a quantidade a ser somada, 3 ou ,2 , ou 1 .. qualquer numero

let contador = 0                                                // iniciando contador em 0 para oercorrer desde o incio
let somaDosValores=0                                            // inicializando soma em zero para ter com o que somar


while (contador < 10){                                          // enquanto for menor que dez por que e a quantidade que eu preciso mostrar de elementos
    console.log(primeiroTermo)                                  // imprimindo o primeiro termo, por que a impressão comelça com o primeiro termo sempre
    somaDosValores=somaDosValores+primeiroTermo                 // soma dos valores vai receber de inciio 0 mais o primeiro termo que pode ser 2, soma sera entao = 02
    primeiroTermo=primeiroTermo+razao                           // por exemplo primeiro termo sera, primeiro t4ermo = 2 + razao que é = 3, então sera 5 
    contador++                                                  // incrementando o contador, a cada passagem ate 10
}
console.log('a soma dos valores é:', somaDosValores)            // imprimindo a soma dos valores


