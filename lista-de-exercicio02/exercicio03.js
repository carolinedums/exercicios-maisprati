// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.


const prompt = require('prompt-sync')()


const distanciaKm = Number(prompt('Qual a distância que você deseja percorrer?: '))
const km = 200
let preco;

if (distanciaKm <= km){
    preco = km*0.50
    console.log('o preço da passagem para essa distância é: ', preco, 'BOA VIAGEM!!')
} else {
    preco = km*0.45
    console.log('O preço da passagem para essa distância é: ', preco, 'BOA VIAGEM!!')
}
