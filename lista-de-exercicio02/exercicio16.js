// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

let numeroAleatorio = []
let cont = 0
let novoNumero = []

let a; 
let indice1 = 0
let indice2 = 1
let contadora=0
let estaOrdenada = false

while(cont < 20){
    novoNumero = Math.floor(Math.random() * 99)
    numeroAleatorio.push(novoNumero)
    cont++
}
console.log(numeroAleatorio)

while(estaOrdenada===false){
    estaOrdenada=true
    while(contadora < numeroAleatorio.length){
        while (indice2 < numeroAleatorio.length){
            if (numeroAleatorio[indice1] > numeroAleatorio[indice2]){
                let a = numeroAleatorio[indice1]
                numeroAleatorio[indice1] = numeroAleatorio[indice2]
                numeroAleatorio[indice2] = a
                indice1=indice2
                estaOrdenada=false
            }
            indice2++
        }
        contadora++
        indice1=contadora
        indice2=contadora+1
    }
    indice1 = 0 
    indice2 = 1
    contadora=0
}
console.log('lista ordenada', numeroAleatorio)
