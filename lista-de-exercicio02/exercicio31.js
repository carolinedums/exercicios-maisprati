// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const prompt = require('prompt-sync')()

const numeroDeColunas = 30
const numeroDeLinhas = 30

let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.floor(Math.random() * 10)))
console.table(matrix)

let linha = 0
let coluna = 0
let primeiroVetor = []
let segundoVetor = []
let cont = 0
let valorA;
valorA=Number(prompt('Digite o valor que será comparado: '))

while (linha < numeroDeLinhas){
    while (coluna < numeroDeColunas){
        if(matrix[linha][coluna]!=valorA){
            primeiroVetor.push(matrix[linha][coluna])
            cont++
        }
        coluna++
    }
    segundoVetor.push(primeiroVetor)
    coluna=0
    linha++
    primeiroVetor=[]
}
console.log('A quantidade de numeros diferentes é: ', cont)
console.log('Abaixo segue uma nova matriz, sem o ', valorA)
console.table(segundoVetor)
