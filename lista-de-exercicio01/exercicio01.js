//1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
//valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();


const celcius = Number(prompt('digite a temperatura em graus celcius: '));
const fahrenheit = (celcius*1.8)+32;

console.log (`A temperatura de ${celcius}ºC convertido para fahrenheit é: ${fahrenheit}ºF `);
