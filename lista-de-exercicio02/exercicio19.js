// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.


const prompt = require('prompt-sync')()

let horario = {}
let cont = 0

console.log('Abaixo digite separadamente HORAS, MINUTOS, E SEGUNDOS')
while (cont < 5){
    horario.hora = Number(prompt('Digite a hora: '))
    horario.minutos = Number(prompt('Digite os segundos: '))
    horario.segundos = Number(prompt('Digite os segundos: '))
    if(horario.hora > 24 || horario.minutos > 60 || horario.segundos > 60){
        console.log('A hora foi digitada errado!! reinicie o programa por favor!!')
    } else {
        console.log ('São exatamente',horario.hora,':',horario.minutos,':',horario.segundos)
    }
    cont++
}