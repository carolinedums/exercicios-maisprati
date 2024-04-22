
// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.


const prompt = require('prompt-sync')()
let somaDosPesos = 0
let nota = 0
let somaNota = 0
let pesoDaNota = 1
while (pesoDaNota!=0){
    nota = parseFloat(prompt('Digite a nota:  '))
    pesoDaNota = parseFloat(prompt('D igite o peso da nota: '))
    somaNota = somaNota + (nota*pesoDaNota)
    somaDosPesos = somaDosPesos + pesoDaNota
}

console.log('A média ponderada das notas e pesos respectivos é:', (somaNota / somaDosPesos).toFixed(2));
