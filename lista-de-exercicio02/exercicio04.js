// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.



const prompt = require('prompt-sync')()

const primeiroSegmento = Number(prompt('Digiteo o primeiro segmento: '))

const segundoSegmento = Number(prompt('Digite o segundo segmento: '))

const terceiroSegmento = Number(prompt('Digite o terceiro segmento: '))

if (primeiroSegmento < segundoSegmento+terceiroSegmento && segundoSegmento < primeiroSegmento+terceiroSegmento && terceiroSegmento < segundoSegmento+primeiroSegmento){
    console.log ('é possivel formar um triângulo')
}else {
    console.log('não é possível formar um triângulo')
}