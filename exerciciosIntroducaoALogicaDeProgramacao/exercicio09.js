//9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

const prompt = require('prompt-sync')()

let codigoDeOrigem = Number(prompt('Digite o código de origem do seu produto: '))


if (codigoDeOrigem===1){
    console.log('A ORIGEM DO SEU PRODUTO É DO SUL.')
} else if (codigoDeOrigem===2){
    console.log(' A ORIGEM DO SEU PRODUTO É DO NORTE.')
} else if (codigoDeOrigem===3){
    console.log('A ORIGEM DO SEU PRODUTO É DO LESTE.')
} else if (codigoDeOrigem===4){
    console.log('A ORIGEM DO SEU PRODUTO É DO OESTE')
} else if (codigoDeOrigem===5 || codigoDeOrigem===6){
    console.log('A ORIGEM DO SEU PRODUTO É NORDESTE.')
} else if (codigoDeOrigem===7 || codigoDeOrigem===8 || codigoDeOrigem===9){
    console.log('AMORIGEM DO SEU PRODUTO É DO SUDESTE')
} else if (codigoDeOrigem >= 10 && codigoDeOrigem <=20){
    console.log('A ORIG4EM DO SEU PRODUTO É DO CENTRO OESTE.')
} else if (codigoDeOrigem >=25 && codigoDeOrigem <=50){
    console.log('A ORIGEM DO SEU PRODUTO É DO NORDESTE.')
} else {
    console.log ('SEU PRODUTO É IMPORTADO.')
}