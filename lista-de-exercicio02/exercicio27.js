// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require('prompt-sync')()

let matrix = new Array(6).fill(0).map(() => new Array(6).fill(0).map(() => Math.floor(Math.random() * 100)))

let valorA = Number(prompt('Digite aqui o valor que será multiplicado: '))
let vetorA =[]
let produto = 0
let linha = 0
let coluna = 0

console.table(matrix)

while (coluna < 6){
    while (linha < 6){
        produto = matrix[linha][coluna]*valorA
        vetorA.push(produto)
        linha++
    }
    linha=0
    coluna++
}
console.log(vetorA)
