// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

const numeroDeLinhas = 5
const numeroDeColunas = 5

let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.floor(Math.random() * 10)))
console.table(matrix)

let linha = 4
let coluna = 0
let soma = 0

while (coluna < 5){
    soma += matrix[linha][coluna]
    coluna++
}
console.log('A soma da quarta coluna da matriz é: ',soma)

linha = 0
coluna=1
soma=0

while(linha < 5){
    soma += matrix[linha][coluna]
    linha++
}
console.log('A soma da segunda coluna da matriz é: ', soma )

linha=0
coluna=0
soma=0

while (linha < 5 && coluna < 5){
    soma += matrix[linha][coluna]
    linha++
    coluna++
}
console.log('A soma da diagonal principal é: ', soma)

linha=0
coluna=0
soma=0
 
while (linha <5 ){
    while (coluna < 5){
        soma += matrix[linha][coluna]
        coluna++
    }
    linha++
    coluna=0
}
console.log('A soma da matriz inteira é: ', soma)