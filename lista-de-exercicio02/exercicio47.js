// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

const objetoLivros = {
    nome: 'O retrato de dorian gray',
    valor: 49,
    autor: 'Oscar Wilde',
}

const objetoMateriais = {
    tabuas: 50,
    tijolos: 1000,
    pregos: 500,
    cimentos: 15,
}

function somaUm (param){
    return param+1
}

function somaDois(p){
    return p+2
}

function funcaoGenerica(obj, funcao){
    let retorno = Object.keys(obj)
    let indice = 0
    let novoObjeto = {}
    while(indice < retorno.length){
        novoObjeto[retorno[indice]] = funcao(obj[retorno[indice]])
        indice++
    }
    return novoObjeto
}


console.log(funcaoGenerica(objetoLivros,somaUm))
console.log(funcaoGenerica(objetoMateriais,somaDois))
console.log(funcaoGenerica(objetoLivros,somaDois))
console.log(funcaoGenerica(objetoMateriais,somaUm))