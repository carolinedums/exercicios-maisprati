// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

let vetorPar = []
let vetorImpar = []
let indice = 0
let cont = 0

const quantidade = 30;
let vetor = [];

for (let i = 0; i < quantidade; i++) {
    let numero = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    vetor.push(numero);
}

console.log(vetor);


while(indice < vetor.length){
    if(vetor[indice]%2===0){
        vetorPar.push(vetor[indice])
    }
    else{
        vetorImpar.push(vetor[indice])
    }
    if(vetorPar.length===5){
        console.log(vetorPar)
        vetorPar=[]
    }
    if(vetorImpar.length===5){
        console.log(vetorImpar)
        vetorImpar=[]
    }
    indice++
}
console.log(vetorImpar,vetorPar)

