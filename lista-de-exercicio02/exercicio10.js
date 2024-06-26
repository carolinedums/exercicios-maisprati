// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

let continuar
let numeros
let somatorio = 0
let contaPares = 0
let menorNumero = Infinity
let contaNumeros = 0



do {
    numeros = Number(prompt('Digite um número: '))
    contaNumeros++
    somatorio = somatorio + numeros
    
    if(numeros%2===0){
        contaPares++
    }
    if(numeros<menorNumero){
        menorNumero = numeros
    }

    continuar = prompt('Quer continuar? S ou N? ').toLowerCase()

    

}while(continuar==='s')

console.log (somatorio, ' é a soma dos valores ')
console.log (menorNumero, 'é o menor valor digitado')
console.log (somatorio/contaNumeros, ' é a media entre os valores')
console.log (contaPares, 'são pares')

