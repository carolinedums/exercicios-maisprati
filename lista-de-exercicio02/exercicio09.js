// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')()
let salario
let sexo


let salarioHomem = 0
let salarioMulher = 0
let continuar = 'sim'


while(continuar==='sim'){
     
     salario = Number(prompt('DIGITE O SALÁRIO: '))

     sexo = prompt('DIGITE HOMEM OU MULHER: ').toLocaleLowerCase()
    if(sexo==='homem'){
        salarioHomem = salarioHomem+salario
    }
    if(sexo==='mulher'){
        salarioMulher = salarioMulher+salario
    }
    continuar = prompt('Quer continuar? SIM ou NAO?: ')
}
console.log('TOTAL DE SALARIO PAGO AOS HOMENS= ', salarioHomem, 'E TOTAL DE SALARIO PAGO AS MULHERES = ', salarioMulher)

