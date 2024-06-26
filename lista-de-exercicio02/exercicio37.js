// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require('prompt-sync')()

let vetorGabarito = ['a','c','a','d','b','a','e','c','d','b','a','e','d','a','b','e','a','e','a','b']
let quantidadeDeAlunos = 0
let indice = 0
let quantidadeAcertos = 0

while(quantidadeDeAlunos < 50){

    while(indice < 20){
        let resposta = prompt('Digite sua resposta: ')
        
        if (resposta === vetorGabarito[indice]){
            quantidadeAcertos++
        }
        indice++
    }
    indice=0
    if (quantidadeAcertos >= 12){
        console.log('APROVADO')
    }
    else {
        console.log('REPROVADO')
    }
    quantidadeDeAlunos++
}
