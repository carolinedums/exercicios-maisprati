// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

const numeroDeColunas = 3
const numeroDeLinhas = 3
let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.floor(Math.random() * 10)))
console.table(matrix)

let soma = 0
let linha = 0
let coluna = 2
let elementos = 0
let mediaElementos = 0 
let resultadoMultiplicacao = 0
let vetorMultiplicados = []

while (linha < numeroDeLinhas){
    soma += matrix[linha][coluna]
    elementos++
    linha++
    coluna--
}
mediaElementos=soma/elementos
linha=0
coluna=0

while(coluna < numeroDeColunas){
    resultadoMultiplicacao=matrix[linha][coluna]*mediaElementos
    coluna++
    linha++
    vetorMultiplicados.push(resultadoMultiplicacao.toFixed(2))    
}
console.log('Abaixo o resultado da multiplicação da diagonal principal pela media da diagonal secundária: ')
console.log(vetorMultiplicados)