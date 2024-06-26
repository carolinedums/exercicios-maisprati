// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.




const prompt = require('prompt-sync')()

const horaAtividades = Number(prompt('Quantas horas de atividades você teve esse mês?:  '))

let resultadoPontos

if(horaAtividades <= 10){
    resultadoPontos = horaAtividades*2

} else if (horaAtividades > 10 && horaAtividades <= 20){
    resultadoPontos = horaAtividades*5
} else if (horaAtividades > 20){
    resultadoPontos = horaAtividades*10
}

resultadoPontos = resultadoPontos*0.05

console.log (resultadoPontos, 'R$', 'Parabéns, continue se exercitando!! ')