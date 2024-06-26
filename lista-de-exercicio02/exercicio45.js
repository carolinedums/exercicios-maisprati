// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

const vetorString = ['cadeira','sofa','cadeira','armario','sofa','chuveiro','cadeira']
let cont = 0
let indice1 = 0
let indice2 = 0
let objeto = {}

while(indice1 < vetorString.length){
    while(indice2 < vetorString.length){
        if(vetorString[indice1]===vetorString[indice2]){
            cont++
        }
        indice2++
    }
    objeto[vetorString[indice1]] = cont
    cont = 0
    indice2 = 0
    indice1++
}
console.log(objeto)
