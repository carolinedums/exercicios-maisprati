// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

let vetorA = []
let vetorB = []
let cont = 0
let indice = 0
let novoNumero = 0

while(cont < 20){
    novoNumero = Math.floor(Math.random() * 198) - 99;
    vetorA.push(novoNumero)
    cont++
}
console.log(vetorA)

cont=0

while (cont < vetorA.length){
    if(vetorA[indice] >= 0) {
        vetorB.push(vetorA[indice])
    }
    indice++
    cont++
}
console.log(vetorB)