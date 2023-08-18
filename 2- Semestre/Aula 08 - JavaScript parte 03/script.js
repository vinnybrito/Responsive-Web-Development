//---------------------------Exemplo 1---------------------------//

//Função Tradicional

function soma(num1,num2){
    return num1 + num2
}

console.log(soma(2,3));

//Arrow Function

const soma1 = (num3,num4) =>{
    return num3 + num4
}
console.log(soma(5,9))

//---------------------------Exemplo 2---------------------------//

//Function Tradicional

const texto = "Hello World"

function sepaTexto(texto){
    return texto.split('')
}
console.log(sepaTexto(texto))

//Arrow Function

const texto1 = "mundo"
const sepaTexto1=(texto1) => {
    return texto1.split('')
}
console.log(sepaTexto1(texto1))

//---------------------------Exemplo 3---------------------------//

//Arrow Function com Array

const usuarios=[
    {id:1,nome:"Vinicius"},
    {id:2,nome:"Vanessa"},
    {id:3,nome:"TioPatinhas"},
]
const usuario = usuarios.find(usuario =>usuario.id ===1)

document.write (`O usuario é ${usuario.nome}`);

//---------------------------Exemplo 4---------------------------//

//Exemplo com filter, map e reduce

const funcionarios = [
    {nome:"huguinho",salario:1500,dataNascimento:1990},
    {nome:"Zezinho",salario:500,dataNascimento:2000},
    {nome:"Luizinho",salario:1000,dataNascimento:2001},
    {nome:"Donald",salario:1300,dataNascimento:1969},
    {nome:"Patinhas",salario:1100,dataNascimento:1963},
]

const dataNascimento = funcionarios.filter(funcionario =>(
    funcionario.dataNascimento > 1980));

    console.log(dataNascimento);

const exibeInfo = funcionarios.map (funcionario =>
    `${funcionario.nome}` + 'Tem salario de' + `${funcionario.salario}`);
    console.log(exibeInfo)

const total = funcionarios.reduce((resultado, valorTotal)=>{
    return (resultado + valorTotal.salario)
},0)
console.log(total)