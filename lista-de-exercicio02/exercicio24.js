// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.


let matrix = new Array(6).fill(0).map(() => new Array(8).fill(0).map(() => Math.random() > 0.5 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)));

let contaNegativos = 0
let vetorDeNegativos = []
let linha = 0
let coluna = 0
let contador = 0

while (contador < matrix.length ){              // enquanto contador for menos que 6 que é o numero de linhas da minha matriz.
    while (coluna < 8){                         // enquanto meu contador for menor que o numero de linhas, eu vou percorrer o numero de colunas
        if (matrix[linha][coluna] < 0){         // perguntando se o que contem nessa posição da matriz e menor que 0
            contaNegativos++                    // se eu encontrei um negativo naquela posição eu conto minha variavel de negativos
        }
        coluna++                                // incrementando a coluna, pra mudar a posição que vai ser verificada no if
    }
    vetorDeNegativos.push(contaNegativos)       // enviando para o vetor de negativos a quantidade de negativos que tinha na primeira linha
    contaNegativos = 0                          // zerando contador de negativos para o proximo while
    coluna = 0                                  // zerando a coluna para reiniciar o processo do segundo o while, percorrendoa segunda linha
    linha++                                     // incrementando a minha linha para o segundo while percorrer ela
    contador++                                  // incrementado o contador de fora, pra ele percorrer o while e a condição do if de dentro.

}
console.table(matrix)
console.log(vetorDeNegativos)
