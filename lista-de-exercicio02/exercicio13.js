// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacci.


let sequencia = []

var a = 1
var b = 1
var c = 0
var cont = 0

while (cont < 15){
    sequencia.push(a)
    c = a+b
    a = b
    b = c
    cont++
}


console.log(sequencia)
