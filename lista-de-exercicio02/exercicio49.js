// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.


let objeto_exemplo = [
    {id: 1, valor: 50, data: '25/10/11', categoria: 'boleto'},
    {id: 2, valor: 50, data: '22/10/11', categoria: 'pix'},
    {id: 3, valor: 53, data: '22/11/11', categoria: 'pix'},
    {id: 4, valor: 60, data: '21/10/11', categoria: 'cartao'},
    {id: 5, valor: 55, data: '03/10/11', categoria: 'boleto'},
]

function retornaObjeto (obj){
  let categorias = obj.map(item => item.categoria)
  let newObj = {}
  let subtotais = {}
  categorias.forEach(item => {
    newObj[item] = []
    subtotais[item] = 0
  })
  obj.forEach(item => {
    newObj[item.categoria].push(item)
    subtotais[item.categoria]+=item.valor
  })
  newObj.subtotal = subtotais
  return newObj
}

console.log(retornaObjeto(objeto_exemplo))