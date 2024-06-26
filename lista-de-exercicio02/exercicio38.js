// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync')()

let vetor = [9,7,2,4,5,6]
let soma = 0
let indice = 0
let produto = 1
let media = 0

console.log('Digite 1 para a soma dos elementos')
console.log('Digite 2 para o produto dos elementos')
console.log('Digite 3 para a media dos elementos')
console.log('Digite 4 para ordenação dos elementos')
console.log('Digite 5 para ver o vetor dos elementos')

let numeroDigitado = Number(prompt('Esolha um numero de 1 a 5: '))

if(numeroDigitado===1){
    while(indice<vetor.length){
        soma+=vetor[indice]
        indice++
    }
    console.log(soma)
}
if(numeroDigitado===2){
    while(indice<vetor.length){
        produto=produto*vetor[indice]
        indice++
    }
    console.log(produto)
}
if(numeroDigitado===3){
    while(indice<vetor.length){
        soma+=vetor[indice]
        indice++
    }
    media=soma/vetor.length
    console.log(media)
}
if(numeroDigitado===4){
    vetor.sort()
    console.log(vetor)
}

if(numeroDigitado===5){
    console.log(vetor)
}


