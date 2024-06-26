// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

const prompt = require('prompt-sync')()

function lerDados (){
    let habitantes = {}
    let novoVetorDeHabitantes = []
    let continuar = 'sim'
    let mediaDeSalarios = 0
    let somaDeSalarios = 0 
    let somaDeFilhos = 0
    let mediaDeFilhos = 0
    let salarioMaior = 0
    let contador = 0
    let percentual = 0


    while(continuar==='sim'){
        habitantes.salario = Number(prompt('Digite o salário: '))
        somaDeSalarios += habitantes.salario
        if (habitantes.salario > salarioMaior){
            salarioMaior = habitantes.salario
        }
        if (habitantes.salario <= 350){
            contador++
        }

        habitantes.filhos = Number(prompt ('Digite o numero de filhos: '))
        somaDeFilhos += habitantes.filhos
        novoVetorDeHabitantes.push(habitantes)
        continuar = prompt('Quer continuar? digite sim ou não!')
    }
    let quantidadeDeHabitantes = novoVetorDeHabitantes.length        
    mediaDeSalarios = somaDeSalarios/quantidadeDeHabitantes
    mediaDeFilhos = somaDeFilhos/quantidadeDeHabitantes
    percentual = contador/quantidadeDeHabitantes*100

    return {
        mediaSalario : mediaDeSalarios,
        mediaFilhos: mediaDeFilhos,
        percentualate350: percentual,
        maiorSalario: salarioMaior,

    }
   
}
console.log(lerDados())