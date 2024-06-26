// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

let matrix1 = new Array(3).fill(0).map(() => new Array(5).fill(0).map(() => Math.floor(Math.random() * 100)))

let matrix2 = new Array(3).fill(0).map(() => new Array(5).fill(0).map(() => Math.floor(Math.random() * 100)))


console.table(matrix1)
console.table(matrix2)

let linha = 0
let coluna = 0
let produto = 0

while (coluna < 5){
    while (linha < 3){
        matrix1[linha][coluna] = matrix1[linha][coluna]*matrix2[linha][coluna] 
        linha++
    }
    coluna ++
    linha = 0
}
console.table(matrix1)