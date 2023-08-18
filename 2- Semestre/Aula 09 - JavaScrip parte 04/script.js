// caixa de alert
alert("Hello world");

//caixa de confirmação
let teste = confirm("Deseja sair desta tela ");
console.log("O resultado: ", teste);

//caica de prompt
let msg = prompt("Qual o seu nome: ");
document.write("O nome é ", msg);
document.write("O nome é: ", msg);

// IF e ELSE

if (10 > 8) {
    document.write("O valor 10 É maior que 7")
}

else {
    document.write("O valor 10 NÃO é maior que 8");
}

let valor = 10

if (valor > 8) {
    document.write(`O valor ${valor} É maior que 8`);
}

else {
    document.write(`O valor ${valor} NÃO é maior que 8`);
}

let idade = 20 

if (idade <= 12) {
    document.write("É uma criança");
}

else if (idade <= 17) {
    document.write("É um Adolecente");
}

else if (idade <= 29) {
    document.write("É um Adulto");
}

else {
    document.write("É um idoso Experiênte");
}

let valor1 = 15

if (valor1 > 10 && valor1 < 20) {
    document.write("Valor válido");
}

else {
    document.write("Valor inválido");
}

let valor2 = 17

if (valor2 > 10 || valor > 20) {
    document.write("valor válido");
}

else {
    document.write("valor inválido");
}



// se chama pyp ||, que representa "ou"