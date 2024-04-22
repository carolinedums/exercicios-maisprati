// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

 const prompt = require('prompt-sync')()

  let valorA = prompt ('Digite o primeiro valor, lado A: ')

  let valorB = prompt ('Digite o segundo valor, lado B: ')

  let valorC = prompt ('Digite o terceiro valor, lado C: ')

   if (valorA===valorB && valorB===valorC ){
    console.log('Triângulo equilátero!')
   } else if (valorA!=valorB && valorB!=valorC && valorA!=valorC ){
    console.log('Triângulo escaleno!')
   } else if (valorA===valorB || valorA===valorC ){
    console.log('Triângulo isósceles!')
   }