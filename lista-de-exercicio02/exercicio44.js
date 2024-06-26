// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

let objeto = {
    item: 'erva mate',
    nomeCientifico: 'ilex paraguariense',
    preço: 15,
    finalidade: 'chimarrão',
}

function contaStrings (){
    let contador = 0
    for (let propriedade in objeto){
        if (typeof objeto[propriedade] === 'string'){
            contador++
        }
    }
    return contador
}
console.log(contaStrings(objeto))

