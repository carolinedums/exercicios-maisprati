// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".




const prompt = require('prompt-sync')()

const vetorGabarito = [14, 17, 2, 5, 9, 7, 1, 48, 21, 56, 2, 9, 47];
let quantidadeApostadores = 0;

while (quantidadeApostadores < 100) {
    let numeroCartao = Number(prompt('Digite o número do seu cartão: '))
    let vetorResposta = []
    let numeroDeAcertos = 0
    let resposta = 0
    let indice = 0

    while (resposta < 13) {
        let numeroResposta = Number(prompt(`Digite a resposta ${resposta + 1} do seu cartão da loteria: `))
        vetorResposta.push(numeroResposta)

        if (numeroResposta === vetorGabarito[indice]) {
            numeroDeAcertos++
        }
        resposta++
        indice++
    }

    console.log(`Apostador ${quantidadeApostadores + 1}: Acertos = ${numeroDeAcertos}`)

    if (numeroDeAcertos === 13) {
        console.log('PARABÉNS VOCÊ FOI O GANHADOR!!')
    } else {
        console.log('Não foi dessa vez dono do cartão numero: ', numeroCartao, ' você acertou', numeroDeAcertos)
    }

    quantidadeApostadores++
}
