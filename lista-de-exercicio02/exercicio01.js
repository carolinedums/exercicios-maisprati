// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.



const prompt = require('prompt-sync')();


const quantidadeDeCigarros = Number(prompt('Quantos cigarros você fuma por dia?: '))

const anosDeFumante = Number(prompt('Por quantos anos você já fumou?: '))

const diasFumados = anosDeFumante*365
let minutosperdidos = quantidadeDeCigarros*10

let diasDeVidaPerdido = diasFumados*minutosperdidos
 diasDeVidaPerdido = diasDeVidaPerdido/1440


console.log('você já perdeu :', parseInt(diasDeVidaPerdido), 'dias de vida, PARE DE FUMAR!!')

