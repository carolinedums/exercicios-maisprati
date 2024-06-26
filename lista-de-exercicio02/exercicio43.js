// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

let objeto1 = {
    banda: 'The Wailers',
    primeiroAlbum: 'The Wailing Wailers',
    anoLançamento: 1965,
}

let objeto2 = {
    banda: 'The Wailers',
    segundoAlbum: 'Soul Rebels',
    anoLançamento: 1970,
}

function criaNovoObjeto (objeto1,objeto2){
    let resultado = {}
for(let chave in objeto1){
    resultado[chave] = objeto1[chave]
}
for(let chave in objeto2){
    resultado[chave] = objeto2[chave]
}
    return resultado

}

console.log(criaNovoObjeto(objeto1,objeto2))