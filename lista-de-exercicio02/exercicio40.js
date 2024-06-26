// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)
const prompt = require('prompt-sync')()


let vetor = [5,9,4,78,16]
let quantidadeDeAcertos = 0
let indice = 0
let resposta = 0
let conjuntoVetores = 0
let vetorResposta = []

while (conjuntoVetores < 50){
    while(indice < 5){
        resposta=Number(prompt('Digite os números da sua aposta: '))
        if(resposta===vetor[indice]){
            quantidadeDeAcertos++
        }
        indice++
    }
    indice=0
    if(quantidadeDeAcertos===5){
        console.log('Você foi o ganhador!')
    }
    else{
        console.log('Não foi dessa vez')
    }
    quantidadeDeAcertos=0
    conjuntoVetores++
}