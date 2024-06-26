// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = {
    blusas: 1,
    calcas: 2,
    meias: 1,
    jaquetas: 2,
}
let inventarioLojaB = {
    jeans: 1,
    blusas: 1,
    tenis: 1,
    jaquetas: 1,
    bones: 2,
}

function combinaInventario (inventarioA, inventarioB){
    let retornoA = Object.keys(inventarioA)
    let retornoB = Object.keys(inventarioB)
    let indiceA = 0
    let indiceB = 0
    let newObject = {...inventarioA, ...inventarioB}

    while(indiceA < retornoA.length){
        while(indiceB < retornoB.length){
            if(retornoA[indiceA]===retornoB[indiceB]){
                newObject[retornoA[indiceA]]=inventarioA[retornoA[indiceA]]+inventarioB[retornoB[indiceB]]
            }
            indiceB++
        }
        indiceB=0
        indiceA++
    }
    
    
    return newObject
}
console.log(combinaInventario(inventarioLojaA,inventarioLojaB))

