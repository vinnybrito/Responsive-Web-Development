console.log("Seja bem vinde!!!");

var funcionario = "Vinicius Rodrigues";

console.log("olá" + funcionario + " seu valor com desconto é R$");

var ValorPago = 100.00;
var desconto = 20.00;

var descontoFun = require("./module/rh")

var valorAreceber = descontoFun(Valorpago,desconto)

console.log(valorAreceber)