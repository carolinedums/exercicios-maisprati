// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

const numeroLinhas = 15
const numeroDeColunas = 20
const matrix = new Array(numeroLinhas).fill(0).map(() => new Array(numeroDeColunas).fill(0).map(() => parseFloat((Math.random() * 198 - 99).toFixed(2))));
console.table(matrix)

let linha = 0
let coluna = 0
let soma = 0

while (coluna < numeroDeColunas){                         // laço de repetição que vai percorrer as minhas colunas e preparar as variaveis para o laçop de repetição de dentro
    while (linha < numeroLinhas){                         // repetição que vai percorrer as linhas uma a uma, somando os elementos de toda uma coluna e depois outra
        soma = soma + matrix[linha][coluna]               // soma recebe o numero da posição da linha e da coluna, guarda ele e soma a cada repetição
        linha++                                           // encrementa a linha para obter o valor da proxima posição de linha, pra var soma somar
    }
    console.log('A soma da coluna,', coluna+1, 'é: ', soma.toFixed(2))  // imprime antes a soma da coluna apos a repetição
    coluna++                                                            // incrementa a coluna pro laço de repetição de dentro trabalhar na proxima coluna
    linha=0                                                             // prepara a variavel linha zerando ela, pra reiniciar o processo na proxima coluna.
}                                                                       // fim do algoritmo.
