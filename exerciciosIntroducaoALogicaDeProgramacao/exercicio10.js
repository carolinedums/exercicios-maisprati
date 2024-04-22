//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numeroInterio = parseInt(prompt('Digite um numero: '))

let c = 0
while ( c < numeroInterio){
    console.log(numeroInterio)
    c++
}