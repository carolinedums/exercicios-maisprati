// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h
// -1
// , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

let quilometragem = Number(prompt('Qual a velocidade do carro?: '))


if (quilometragem > 79){
    quilometragem = quilometragem-79
    quilometragem = quilometragem*5
    console.log('Você foi multado em R$: ', quilometragem, 'Dirija mais devagar.')
} else {
    console.log ('Você esta dentro do limite de velocidade, Boa viagem')
}
