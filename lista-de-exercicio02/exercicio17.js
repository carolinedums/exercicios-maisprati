// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.


const prompt = require('prompt-sync')()

let cont = 0
let nome = []
let idade = []
let indice = 0

while (cont < 9) {
    nome.push(prompt('Digite um nome: '))
    idade.push(Number(prompt('Digite a idade: ')))
    cont++
}

while(indice < idade.length){
    if (idade[indice] < 18) {
        console.log (nome[indice], 'tem',  idade[indice], ' de idade, potanto é menor de idade')
    }
    indice++
}
