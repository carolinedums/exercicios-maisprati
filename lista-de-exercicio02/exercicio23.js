// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.


let linha=0
let coluna=0
let matrix = new Array(7).fill(0).map(() => new Array(7).fill(0))

while (coluna < 7){

    while (linha < 7){
        if (linha===coluna){
            matrix[linha][coluna]=1
            linha++
        }
        else if (linha != coluna){
            matrix[linha][coluna]=0
            linha++
        }
    }
    coluna++
    linha = 0
}

console.table(matrix)

