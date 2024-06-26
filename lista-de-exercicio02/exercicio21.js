// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')()

let genero
let pesoIdeal;
let altura

console.log('vamos descobrir o seu peso ideal!!')

genero = prompt('Digite se é homem ou mulher: ')

altura = prompt('Digite sua altura: ')

function calcularPesoIdeal (altura,sexo){
    if (sexo==='homem') {
        pesoIdeal = (72.7 * altura) - 58
    }
    else if (sexo==='mulher'){
        pesoIdeal = (62.1 * altura) - 44.7
    }

    return pesoIdeal.toFixed(2)
}

console.log('O peso ideal é: ',calcularPesoIdeal(altura,genero))