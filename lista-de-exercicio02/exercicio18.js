// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')()


let objeto = {}

objeto.nome = prompt('Digite o nome do funcionário: ')
objeto.cargo = prompt('Digite o cargo do funcionário: ')
objeto.salario = prompt('Digite o salário do funcionário: ')

console.log (objeto)