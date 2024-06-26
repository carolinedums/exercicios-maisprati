// console.log ('------BEM VINDOS JOGADORES------')

// const prompt = require('prompt-sync')()
// const opcoes = ['pedra', 'papel', 'tesoura']



// const jogador1 = prompt('JOGADOR UM, DIGITE PEDRA PAPEL OU TESOURA: ')
// const jogador2 = opcoes[Math.floor(Math.random()*3)]
// console.log('JOGADOR DOIS ESCOLHEU ', jogador2)

// if ((jogador1 != 'papel' && jogador1 != 'tesoura' && jogador1 != 'pedra') || (jogador2 != 'papel' && jogador2 != 'tesoura' && jogador2 != 'pedra')){
//     console.log ('ESCOLHA INVÁLIDA')
    
// }else if (jogador1===jogador2){
//     console.log('HOUVE UM EMPATE')
// }else if(jogador1==='pedra'){
//     if(jogador2==='papel'){
//         console.log('JOGADOR DOIS VENCEU')
//     }
//     if(jogador2==='tesoura'){
//         console.log('JOGADOR UM VENCEU')
//     }
// }else if(jogador1==='papel'){
//     if(jogador2==='pedra'){
//         console.log('JOGADOR UM VENCEU!')
//     }
//     if(jogador2==='tesoura'){
//         console.log('JOGADOR DOIS VENCEU')
//     }
// }else if(jogador1==='tesoura'){
//     if(jogador2==='papel'){
//         console.log('JOGADOR UM VENCEU')
//     }
//     if(jogador2==='pedra'){
//         console.log('JOGADOR DOIS VENCEU')
//     }
// }




// let sequencia = [1,1]
// while(sequencia.length<15) sequencia.push(sequencia[sequencia.length-1]+sequencia[sequencia.length-2])
// console.log(sequencia)


// let ponteiro = vetor.length-1
// let vetorAux = []
// while(ponteiro>=0){
//     vetorAux.push(vetor[ponteiro])
//     ponteiro--
// }
// vetor = vetorAux
// console.log(vetor)


// exercicio 39
// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.

// let vetorA = []
// let vetorB = []
// let cont = 0
// let indice = 0

// for (let i = 1; i <= 100; i++) {
//   vetorA.push(i)
// }  

// while (cont < vetorA.length){
//     if(vetorA[indice] > 0 && vetorA[indice]%2===0) {
//         vetorB.push(vetorA[indice])
//     }
//     indice++
//     cont++

// }
// console.log(vetorB)

// 41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

// let pessoa = {
//     nome: 'Caroline',
//     idade: 26,
// }

// console.log('A idade de, ', pessoa.nome, 'é', pessoa.idade, 'anos')

// pessoa.email = 'caroline.dums.lima@gmail.com'

// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
    nome: 'Clarissa Pinkola Estes',
    idade: 79,
    livrosPublicados: 7,
    paisQueReside: 'Brasil',
    genero: 'psicanalise',
    livrosClarissaPinkola: [
        { titulo: "Mulheres que Correm com os Lobos" },
        { titulo: "O Jardineiro que Chora: Contos de Cura, Alegria e Libertação" },
        { titulo: "Teoria e Prática do Aconselhamento Psicológico" },
        { titulo: "A Ciranda das Mulheres Sábias" },
        { titulo: "Onde Voam as Águias: Histórias de Libertação" },
        { titulo: "Mulheres que Correm com os Lobos: Mitos e Histórias do Arquétipo da Mulher Selvagem" },
        { titulo: "O Palácio da Memória: Círculos de Mulheres e Mitos Antigos" }
    ]
}    



// while(vetorDeUm.length < 7 && vetorRecebe.length < 7){
//     vetorDeUm[casa] = 1
//     vetorRecebe[casa]=vetorDeUm
//     casa++
// }
// casa = 0

// while (vetorRecebe.length < 7){
//     vetorRecebe[casa] = vetorDeUm
//     casa++

// }


// linha=0
// coluna=0
// let linha4 =0
// let coluna2 =0
// let diagonal =0
// let todos =0

// while(coluna < numeroDeColunas){
//     while(linha<numeroDeLinhas){
//         todos += matrix[linha][coluna]
//         if(linha==3) linha4 += matrix[linha][coluna]
//         if(coluna==1) coluna2 += matrix[linha][coluna]
//         if(linha==coluna) diagonal += matrix[linha][coluna]
//         linha++
//     }
//     linha=0
//     coluna++
// }

// console.log(linha4, coluna2, diagonal, todos)

