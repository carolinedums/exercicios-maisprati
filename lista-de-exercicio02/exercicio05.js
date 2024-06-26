//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

console.log ('------BEM VINDOS JOGADORES------')

const prompt = require('prompt-sync')()



const jogador1 = prompt('JOGADOR UM, DIGITE PEDRA PAPEL OU TESOURA: ')
const jogador2 = prompt('JOGADOR DOIS, DIGITE PEDRA PAPEL OU TESOURA: ') 

if ((jogador1 != 'papel' && jogador1 != 'tesoura' && jogador1 != 'pedra') || (jogador2 != 'papel' && jogador2 != 'tesoura' && jogador2 != 'pedra')){
    console.log ('ESCOLHA INVÁLIDA')
    
}else if (jogador1===jogador2){
    console.log('HOUVE UM EMPATE')
}else if(jogador1==='pedra'){
    if(jogador2==='papel'){
        console.log('JOGADOR DOIS VENCEU')
    }
    if(jogador2==='tesoura'){
        console.log('JOGADOR UM VENCEU')
    }
}else if(jogador1==='papel'){
    if(jogador2==='pedra'){
        console.log('JOGADOR UM VENCEU!')
    }
    if(jogador2==='tesoura'){
        console.log('JOGADOR DOIS VENCEU')
    }
}else if(jogador1==='tesoura'){
    if(jogador2==='papel'){
        console.log('JOGADOR UM VENCEU')
    }
    if(jogador2==='pedra'){
        console.log('JOGADOR DOIS VENCEU')
    }
}

















// algoritmo jokenpo:
// -pedir escolha do jogador1
// -pedir escolha do jogador2
// -se algum dos jogadores digitar algo diferente de 'pedra', 'papel' ou 'tesoura' responder que a escolha é inválida e reiniciar ou encerrar a aplicação
// -se ambos escolherem a mesma opção, responder que houve um empate.
// -se um jogador escolher pedra e o outro tesoura, responder que o jogador que escolheu pedra venceu
// -se um jogador escolher pedra e o outro papel, responder que o jogador que escolheu papel venceu
// -se um jogador escolher papel e o outro tesoura, responder que o jogador que escolheu tesoura venceu