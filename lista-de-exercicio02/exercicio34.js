// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

const numeroDeColunas = 50
const numeroDeLinhas = 50

const matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => parseFloat((Math.random() * 198 - 99).toFixed(2))))
console.table(matrix)

let linha = 0
let coluna = 0
let linha2 = 0
let coluna2 = 0
let segundoVetor = []
let primeiroVetor=[]
let result = 0

while(linha < numeroDeLinhas){
    while(coluna2 < numeroDeColunas){
        result=matrix[linha][coluna]*matrix[linha2][coluna2]
        coluna2++
        primeiroVetor.push(result.toFixed(2))
    }
    segundoVetor.push(primeiroVetor)
    coluna2=0
    linha++
    coluna++
    linha2++
    primeiroVetor=[]
}
console.table(segundoVetor)


