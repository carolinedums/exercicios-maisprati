// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const funcionarios = [
    { matricula: 1, nome: "João", salarioBruto: 3000 },
    { matricula: 2, nome: "Maria", salarioBruto: 4000 },
    { matricula: 3, nome: "Pedro", salarioBruto: 2500 },
    { matricula: 4, nome: "Ana", salarioBruto: 3500 },
    { matricula: 5, nome: "Carlos", salarioBruto: 2800 },
    { matricula: 6, nome: "Juliana", salarioBruto: 4200 },
    { matricula: 7, nome: "Paulo", salarioBruto: 3200 },
    { matricula: 8, nome: "Mariana", salarioBruto: 3800 },
    { matricula: 9, nome: "Lucas", salarioBruto: 2700 },
    { matricula: 10, nome: "Isabela", salarioBruto: 3900 },
    { matricula: 11, nome: "Felipe", salarioBruto: 4100 },
    { matricula: 12, nome: "Carolina", salarioBruto: 3400 },
    { matricula: 13, nome: "Rafael", salarioBruto: 3600 },
    { matricula: 14, nome: "Fernanda", salarioBruto: 4300 },
    { matricula: 15, nome: "Gustavo", salarioBruto: 2900 },
    { matricula: 16, nome: "Aline", salarioBruto: 3700 },
    { matricula: 17, nome: "Diego", salarioBruto: 3100 },
    { matricula: 18, nome: "Camila", salarioBruto: 3300 },
    { matricula: 19, nome: "Gabriel", salarioBruto: 4000 },
    { matricula: 20, nome: "Patricia", salarioBruto: 4600 },
    { matricula: 21, nome: "Roberto", salarioBruto: 2800 },
    { matricula: 22, nome: "Larissa", salarioBruto: 4200 },
    { matricula: 23, nome: "Marcos", salarioBruto: 3200 },
    { matricula: 24, nome: "Julia", salarioBruto: 3800 },
    { matricula: 25, nome: "Thiago", salarioBruto: 2700 },
    { matricula: 26, nome: "Renata", salarioBruto: 3900 },
    { matricula: 27, nome: "Bruno", salarioBruto: 4100 },
    { matricula: 28, nome: "Luana", salarioBruto: 3400 },
    { matricula: 29, nome: "Rodrigo", salarioBruto: 3600 },
    { matricula: 30, nome: "Amanda", salarioBruto: 4300 },
    { matricula: 31, nome: "Luciana", salarioBruto: 2900 },
    { matricula: 32, nome: "Marcelo", salarioBruto: 3700 },
    { matricula: 33, nome: "Eduarda", salarioBruto: 3100 },
    { matricula: 34, nome: "Vinicius", salarioBruto: 3300 },
    { matricula: 35, nome: "Natalia", salarioBruto: 4000 },
    { matricula: 36, nome: "Leandro", salarioBruto: 4600 },
    { matricula: 37, nome: "Jessica", salarioBruto: 2800 },
    { matricula: 38, nome: "Henrique", salarioBruto: 4200 },
    { matricula: 39, nome: "Fernanda", salarioBruto: 3200 },
    { matricula: 40, nome: "Ricardo", salarioBruto: 3800 },
    { matricula: 41, nome: "Beatriz", salarioBruto: 2700 },
    { matricula: 42, nome: "José", salarioBruto: 3900 },
    { matricula: 43, nome: "Carla", salarioBruto: 4100 },
    { matricula: 44, nome: "Felipe", salarioBruto: 3400 },
    { matricula: 45, nome: "Patricia", salarioBruto: 3600 },
    { matricula: 46, nome: "Vinicius", salarioBruto: 4300 },
    { matricula: 47, nome: "Aline", salarioBruto: 2900 },
    { matricula: 48, nome: "Lucas", salarioBruto: 3700 },
    { matricula: 49, nome: "Thais", salarioBruto: 3100 },
    { matricula: 50, nome: "Camila", salarioBruto: 3300 },
    { matricula: 51, nome: "Gustavo", salarioBruto: 4000 },
    { matricula: 52, nome: "Mariana", salarioBruto: 4600 },
    { matricula: 53, nome: "Luis", salarioBruto: 2800 },
    { matricula: 54, nome: "Ana", salarioBruto: 4200 },
    { matricula: 55, nome: "Fernando", salarioBruto: 3200 },
    { matricula: 56, nome: "Gabriela", salarioBruto: 3800 },
    { matricula: 57, nome: "Rafael", salarioBruto: 2700 },
    { matricula: 58, nome: "Patricia", salarioBruto: 3900 },
    { matricula: 59, nome: "Diego", salarioBruto: 4100 },
    { matricula: 60, nome: "Laura", salarioBruto: 3400 },
    { matricula: 61, nome: "Mariana", salarioBruto: 3600 },
    { matricula: 62, nome: "Lucas", salarioBruto: 4300 },
    { matricula: 63, nome: "Camila", salarioBruto: 2900 },
    { matricula: 64, nome: "Ricardo", salarioBruto: 3700 },
    { matricula: 65, nome: "Isabela", salarioBruto: 3100 },
    { matricula: 66, nome: "João", salarioBruto: 3300 },
    { matricula: 67, nome: "Aline", salarioBruto: 4000 },
    { matricula: 68, nome: "Pedro", salarioBruto: 4600 },
    { matricula: 69, nome: "Carolina", salarioBruto: 2800 },
    { matricula: 70, nome: "Fernando", salarioBruto: 4200 },
    { matricula: 71, nome: "Juliana", salarioBruto: 3200 },
    { matricula: 72, nome: "Renato", salarioBruto: 3800 },
    { matricula: 73, nome: "Bruna", salarioBruto: 2700 },
    { matricula: 74, nome: "Rafaela", salarioBruto: 3900 },
    { matricula: 75, nome: "Diego", salarioBruto: 4100 },
    { matricula: 76, nome: "Mariana", salarioBruto: 3400 },
    { matricula: 77, nome: "Lucas", salarioBruto: 3600 },
    { matricula: 78, nome: "Camila", salarioBruto: 4300 },
    { matricula: 79, nome: "Gustavo", salarioBruto: 2900 },
    { matricula: 80, nome: "Juliana", salarioBruto: 3700 },
]


let novoVetor = funcionarios.map(funcionario => {
    let desconto = funcionario.salarioBruto * 0.12
    let salarioLiquido = funcionario.salarioBruto-desconto

    return {
       matricula:funcionario.matricula,
       nome:funcionario.nome,
       salarioBruto:funcionario.salarioBruto,
       decontoINSS:desconto,
       salarioLiquido
    }
})
console.log(novoVetor)
