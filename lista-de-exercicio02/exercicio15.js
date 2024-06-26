// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()

let cont = 0
let vetor = []
let indice = 0

while(cont < 10){
   vetor.push(Number(prompt('Digite um número: ')))
    cont ++
}
cont=0
while(cont < vetor.length){
    if (vetor[indice]%2===0){
        console.log('esse numero é par:', vetor[indice])
        console.log('e esta na ', indice+1, 'º posição',  )
    }
    indice++
    cont++
}

