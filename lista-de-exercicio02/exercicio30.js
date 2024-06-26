// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

const numeroDeColunas = 5
const numeroDeLinhas = 5

let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.floor(Math.random() * 10)))

console.table(matrix)

let somaDasLinhas = 0
let linha = 0
let coluna = 0
let vetorLinhas = []
let vetorColunas = []
let SomaColunas = 0

while(coluna < numeroDeColunas){
    while (linha < numeroDeLinhas){
        SomaColunas += matrix[linha][coluna]
        linha++
    }
    vetorColunas.push(SomaColunas)
    SomaColunas=0
    linha=0
    coluna++
}

linha=0
coluna=0

while (linha < numeroDeLinhas){
    while(coluna < numeroDeColunas){
        somaDasLinhas += matrix[linha][coluna]
        coluna++
    }
    vetorLinhas.push(somaDasLinhas)
    somaDasLinhas=0
    coluna=0
    linha++
}

console.log('A soma das linhas é: ', vetorLinhas)
console.log('A soma das colunas é: ',vetorColunas)