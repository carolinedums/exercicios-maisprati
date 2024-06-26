// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let numero = 1
let c = 0
let media = 0
while (numero!=0){
    numero = parseFloat(prompt('Digite um valor:  '))
    media = media + numero
    c++
}
media = media/c
console.log ('A media aritmética dos numeros é = ', media.toFixed(2))