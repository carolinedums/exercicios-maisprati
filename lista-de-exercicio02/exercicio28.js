// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal

const numeroDeLinhas = 3
const numeroDeColunas = 3

let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.floor(Math.random() * 10)))
console.table(matrix)

let linha = 0
let coluna = 1
let soma = 0
let soma2 = 0


while(linha < numeroDeLinhas){
    while(coluna < numeroDeColunas){
        soma += matrix[linha][coluna]
        coluna++
    }
    linha++
    coluna=linha+1
}

linha=numeroDeLinhas-1
coluna=numeroDeColunas-2

while (linha > 0){
    while(coluna >= 0){
        soma2 += matrix[linha][coluna]
        coluna--
    }
    linha--
    coluna=linha-1
}

console.log(soma)

console.log(soma2)
