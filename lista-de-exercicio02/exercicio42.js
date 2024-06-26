// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
    nome: 'Clarissa Pinkola Estes',
    profissão: 'Psicanalista',
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


function encontraArray(objeto) {
    const resultado = {}
    
    Object.keys(objeto).forEach(chave => {
        if (Array.isArray(objeto[chave])) {
            resultado[chave] = objeto[chave]
        }
    })
    
    return resultado
}


const arraysComoObjeto = encontraArray(dados)

console.log(arraysComoObjeto);

