//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.



const prompt = require('prompt-sync')();

let eleitores = Number(prompt('Digite a quantidade de eleitores: '));
let votosBrancos = Number(prompt('Digite a quantidade de votos brancos: '));
let votosNulos = Number(prompt('Digite  a quantidade de votos nulos: '));
let votosValidos = Number(prompt('Digite a quantidade de votos validos: '));

if (votosBrancos+votosNulos+votosValidos!=eleitores){
    console.log ('o numero de votos não condiz com o numero de eleitores!')


}else {
votosBrancos = (votosBrancos/eleitores)*100
votosNulos = (votosNulos/eleitores)*100
votosValidos = (votosValidos/eleitores)*100

console.log(`Percentual de votos brancos: ${votosBrancos}%`)
console.log(`Percentual de votos nulos: ${votosNulos}%`)
console.log(`Percentual de votosValidos ${votosValidos}%`)

}
