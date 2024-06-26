// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

var a = 1
var b = 1
var c = 0
var cont = 0
console.log(a)

while (cont < 3){
    console.log(b)
    c = a+b
    console.log(c)

    a = b+c
    console.log(a)

    b = c+a

    cont++

}

