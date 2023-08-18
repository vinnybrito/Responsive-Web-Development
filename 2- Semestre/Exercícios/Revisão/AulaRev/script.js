//caixa de alert
//alert("Ola mundo")


//caixa de confirmação
//let teste=confirm("Deseja sair desta tela ")
//console.log("O resultado:", teste)

//caixa de prompt

//let msg= prompt("Qual o seu nome")
//console.log("O nome é:", msg)
//document.write("O nome é: ", msg)

/*

//IF E ELSE
 if(10 < 8){
    document.write("O valor 10 É maior que 8")
 }else{
    document.write("o valor 10 NÃO é maior que 8")
    document.write("<br><br>")
 }

 let valor=10
 if(valor < 8){
    document.write("O valor 10 É maior que 8")
 }else{
    document.write("o valor 10 NÃO é maior que 8")
    document.write("<br><br>")
 }
//IF E ELSE ENCADEADA

let idade =28
if(idade  <= 12){
    document.write("É UMA CRIANÇA")
    document.write("<br><br>")
}else if(idade <=17){
    document.write("É UM ADOLESCENTE")
    document.write("<br><br>")
}else if( idade <=29){
    document.write("É UM ADULTO")
    document.write("<br><br>")
}else{
    document.write("É UM IDOSO EXPERIÊNCIA")
    document.write("<br><br>")
}
// && "e"

let valor1 = 17
if(valor1 >10 && valor1  < 20){
    document.write("Valor válido")
    document.write("<br><br>")
}else{
    document.write("valor inválido")
    document.write("<br><br>")
}
//|| " ou"

let valor2 = 20
if(valor2 < 10 || valor> 20){
    document.write("valor VÁLIDO")
}else{
    document.write("valor INVÁLIDO")
}
 
*/

// a) Crie um método tela aluno estudando e apresente na tela

// b) busque um aluno usando o método find e apresente na tela 

//-------------------EXERCÍCO 2-------------------//

const funcionarios = [
    {
        nome: "Priscila",
        idade: 28,
        sexo: "Feminino",
        cargo: "Pleno",
        salario: 8300,
        descontos: 1200,
        dataAdmissao: 2007,
        dataDemissao: 2019
    },
    {
        nome: "Weslley",
        idade: 35,
        sexo: "Masculino",
        cargo: "Sênior",
        salario: 14000,
        descontos: 3500,
        dataAdmissao: 2012,
        dataDemissao: 2021
    },
    {
        nome: "Patricia",
        idade: 23,
        sexo: "Feminino",
        cargo: "Júnior",
        salario: 3700,
        descontos: 1000,
        dataAdmissao: 2003,
        dataDemissao: 2017
    }
]

// a) Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010

const admissao = funcionarios.filter(funcionario => (
    funcionario.dataAdmissao >= 2000 && funcionario.dataAdmissao <= 2010))

    console.log(admissao);

document.write(`Funcionários contratados entre 2000 e 2010: <br>`)

for (let i = 0; i < admissao.length; i++) {
    document.write(`Nome: ${admissao[i].nome} | Idade: ${admissao[i].idade} | Sexo: ${admissao[i].sexo} <br>`);
}

// b) Fazer um filter de funcionários que foram demitidos depois de 2018

const demissao = funcionarios.filter(funcionario =>(
    funcionario.dataDemissao > 2018));

    console.log(demissao);

    document.write(`<br>Funcionários Demitidos após 2018: <br>`)

    for (let i = 0; i < demissao.length; i++) {
        document.write(`Nome: ${demissao[i].nome} | Idade: ${demissao[i].idade} | Sexo: ${demissao[i].sexo} <br>`);
    }

// c) Fazer um map de funcionários e trazer o nome, salário, desconto 

document.write(`<br>Map de Funcionários<br> <br>`)

  const mapFuncionarios = funcionarios.map(funcionario =>
    `${funcionario.nome}` + ' tem ' + `salário de R$ ${funcionario.salario}` + ' com desconto de R$' +` ${funcionario.descontos} <br>`);

    console.log(mapFuncionarios);

    document.write(mapFuncionarios);

// d) Criar um Reduce para somar o valor total dos descontos

const totalDescontos = funcionarios.reduce(function(total, funcionario) {
    return total + funcionario.descontos;
  }, 0);
  
  console.log("Total de descontos: " + totalDescontos);
  document.write(`Total de descontos: ${totalDescontos} <br>`)


//-------------------EXERCÍCO 3-------------------//

// Tradicional
function soma1(a, b, c){
    return (a + b) / c;
}
console.log(soma1(8, 4, 2));

//Arrow Function
const soma2 = (a, b, c) => {
    return (a + b) / c; 
}
console.log(soma2(5, 4, 2));

//-------------------EXERCÍCO 4-------------------//


//-------------------EXERCÍCO 5-------------------//

//-------------------EXERCÍCO 6-------------------//

//-------------------EXERCÍCO 7-------------------//

//-------------------EXERCÍCO 8-------------------//

