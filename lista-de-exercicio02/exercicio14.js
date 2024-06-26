// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.


const prompt = require('prompt-sync')()

let vetor = []
let a
let p = 0
let cont = 0
let p2 = 6

while(vetor.length < 7){
    vetor.push(prompt('Digite um nome:  '))
}

while (cont < 3){
    a = vetor[p]
    vetor[p]=vetor[p2]
    vetor[p2]=a
    p=p+1
    p2=p2-1
    cont++
}
console.log(vetor)

