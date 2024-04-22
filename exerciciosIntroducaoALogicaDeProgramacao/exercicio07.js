// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()
let valorCompra;
let numeroDemacas = Number(prompt('Quantas maças você comprou?: '))
 if (numeroDemacas<12){
    valorCompra = numeroDemacas*0.30
    console.log ('O valor da sua compra foi: ', valorCompra)
 } else if ( numeroDemacas>=12){
    valorCompra = numeroDemacas*0.25
    console.log('O valor da sua compra foi: ', valorCompra)
 }