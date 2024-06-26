// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.


const numeroDeColunas = 13
const numeroDeLinhas = 12
let matrix = new Array(numeroDeLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => Math.random() > 0.5 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)))

console.table(matrix)

let linha = 0
let coluna = 0
let aux = 0
let result = 0
let primeiroVetor =[]
let segundoVetor = []
let resultPosicao = 0

while(linha < 12){
    while (coluna < 13){
        if (matrix[linha][coluna] < 0){
            result = matrix[linha][coluna]*-1
            if(result > aux){
                aux = result
            }
        }
        else{
            if(matrix[linha][coluna] > aux){
                aux=matrix[linha][coluna]
            }
        }
        coluna++
    } 
    coluna=0
    while (coluna < 13){
        resultPosicao = matrix[linha][coluna]/aux
        primeiroVetor.push(resultPosicao.toFixed(2))
        coluna++
    }
    segundoVetor.push(primeiroVetor)
    coluna=0
    linha++
    primeiroVetor=[]
}
console.table(segundoVetor)