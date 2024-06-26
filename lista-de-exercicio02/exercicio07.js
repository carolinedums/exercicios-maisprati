// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km


const prompt = require('prompt-sync')()

console.log('---OLÁ CLIENTE---')

const tipoDeCarro = prompt('Qual o tipo de carro alugado?: ').toLowerCase()

const diaDeAluguel = Number(prompt('Quantos dias de aluguel?: '))

const kmPercorrido = Number(prompt('Quantos KM foram percorridos?: '))

let valor;
let valor2;

if(tipoDeCarro==='luxo'){
    valor = diaDeAluguel*150
    if(kmPercorrido <= 200){
        valor2 = kmPercorrido*0.30
    } 
    if (kmPercorrido > 200){
        valor2 = kmPercorrido*0.25
    }        
} else if (tipoDeCarro==='popular'){
    valor = diaDeAluguel*90
    if(kmPercorrido <= 100){
       valor2 = kmPercorrido*0.20
    }
    if(kmPercorrido > 100){
        valor2 = kmPercorrido*0.10
    }
}
console.log(valor+valor2, 'R$, Esse é o valor a ser cobado. ')

