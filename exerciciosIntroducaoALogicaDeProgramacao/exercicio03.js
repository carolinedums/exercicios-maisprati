//3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.


const prompt = require('prompt-sync')();

let primeiroInteiro = Number(prompt('Digite o primeiro valor: : '));
console.log ('Aqui esta o valor digitado somado com 25: ', primeiroInteiro+25);
let segundoInteiro = Number(prompt('Digite o segundo valor: '));
console.log('Valor triplicado: ', segundoInteiro*3);
let terceiroInteiro = Number(prompt('Digite o terceiro valor: '));
console.log('Valor modificado para 12% do original:', 12*terceiroInteiro/100 );
let quartoInteiro = Number (prompt('Digite o quarto valor: '));
quartoInteiro=primeiroInteiro+segundoInteiro+terceiroInteiro;
console.log('Valor dos três anteriores somados e armazenado no quarto valor = ', quartoInteiro);

