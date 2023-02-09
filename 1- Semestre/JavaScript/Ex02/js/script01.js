/*let nome = "Vinicius Rodrigues Brito";
let idade = 22;
alert("Nome: " + nome + "Idade: " + idade);

document.getElementById("txtNumero").value = "Valor preenchido no script";


/*buscar uma informação que está no campo texto ou atribuir informação que está no campo texto*/

alert("Dentro da página");
function mostraMenor(){
    let nr1 = parseInt(document.getElementById("txtNumero1").value);
    let nr2 = parseInt(document.getElementById("txtNumero2").value);
    let objDiv = document.getElementById("idResultado");
    let resultado = "";
    
    if(nr1 > nr2){
        resultado = "Número " + nr1 + "é maior do que o " + nr2 +"!";
    }
    else if(nr1 == nr2){
        resultado = "Número " + nr1 + "é igual á " + nr2 +"!";
    }
    else{
        resultado = "Número " + nr1 + "é menor que " + nr2 +"!";
    }
    objDiv.innerHTML = resultado;
}