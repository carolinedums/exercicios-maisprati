// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require('prompt-sync')()


let hoteis = []
let reservas = []
let idsReservas = 0

function cadastrarHotel(){
  const nome = (prompt('Digite o nome do hotel: '))
  const cidade = (prompt('Digite a cidade do hotel: '))
  const quartosTotais = Number(prompt('Digite quantos quartos tem o hotel: '))
  hoteis.push({id:hoteis.length+1 , nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais})
  console.log('Hotel registrado.')
}

function listarPorCidade(cidade){
  const hoteisDaCidade = hoteis.filter(item => item.cidade === cidade)
  console.log('Os hotéis disponiveis em ' + cidade + ' são: ' + hoteisDaCidade.map(item => item.nome))
}

function fazerReserva(nomeHotel){
  const hotel = hoteis.find(item => item.nome === nomeHotel)
  if(!hotel){
    console.log('Hotel não encontrado.')
  }
  else if(hotel.quartosDisponiveis > 0){
    const nomeCliente = prompt('Digite o nome do cliente: ')
    reservas.push({idReserva: idsReservas, idHotel: hotel.id, nomeCliente})
    idsReservas++
    hoteis[hoteis.findIndex(item => item.id === hotel.id)].quartosDisponiveis--
    console.log('Reserva realizada com sucesso.')
  }else{
    console.log('Não há quartos disponíveis nesse hotel.')
  }
}

function cancelarReserva(idReserva){
  reservas = reservas.filter(item => item.id != idReserva)
  console.log('Reserva cancelada.')
}

function listarReservas(){
  reservas.forEach(item => {
    const hotelReservado = hoteis.find(hotel => hotel.id===item.idHotel)
    console.log(item.nomeCliente + ' tem uma reserva no ' +  hotelReservado.nome + ' (id:' + item.id + ').')
  })
}

let operacao = 0
console.log('Bem vindo ao Dumes Hotelaria!')
while(1){
  console.log('Cadastrar hotel: 1')
  console.log('Consultar hotéis de uma cidade: 2')
  console.log('Fazer reserva: 3')
  console.log('Cancelar reserva: 4')
  console.log('Listar reservas: 5')

  operacao = Number(prompt('Digite o número referente à operação desejada e aperte ENTER.'))
  if(operacao===1){
    cadastrarHotel()
  }
  if(operacao===2){
    listarPorCidade(prompt('Digite o nome da cidade: '))
  }
  if(operacao===3){
    fazerReserva(prompt('Digite o nome do hotel: '))
  }
  if(operacao===4){
    cancelarReserva(Number(prompt('Digite o numero do id da reserva: ')))
  }
  if(operacao===5){
    listarReservas()
  }
}