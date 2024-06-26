// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.


let arrayObjeto =[
    {vendedor: 'Rodrigo', valor: 500},
    {vendedor: 'Caroline', valor: 900},
    {vendedor: 'Maria', valor: 600},
    {vendedor: 'Rodrigo', valor: 300},
    {vendedor: 'Caroline', valor: 1200},
]


function somaTotalDeVendasPorVendedor (umArray){
    let newObject = {}
    let soma = 0
    let indice1 = 0
    let indice2 = 0
    while(indice1 < umArray.length){
        while (indice2 < umArray.length){
            if(umArray[indice1].vendedor===umArray[indice2].vendedor){
                soma += umArray[indice2].valor
            }
            indice2++
        }
        newObject[umArray[indice1].vendedor] = soma
        soma=0
        indice1++
        indice2=0
    }
    
    return newObject
}
console.log(somaTotalDeVendasPorVendedor(arrayObjeto))