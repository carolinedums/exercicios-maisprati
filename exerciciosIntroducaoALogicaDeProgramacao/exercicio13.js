// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
// calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N


const prompt = require('prompt-sync')()
let resultado = 0
let n = 0
let c = 0
let c2 = 1
while (c <5){
    n = prompt('Digite um valor: ')
    while (c2 <= n){
        resultado = c2*n
        console.log(c2, 'x', n,  '=', resultado)
        c2++
    }
    c2=1
    n=0
    c++

}