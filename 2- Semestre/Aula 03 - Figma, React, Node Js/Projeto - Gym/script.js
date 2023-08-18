
/*-----------------------------IMC-----------------------------*/ 

function calcularImc() {
    let peso = (parseFloat(document.getElementById("peso").value));
    let altura = (parseFloat(document.getElementById("altura").value));

    let imc = (peso / (altura * altura));
    let text = "";

    if (imc < 20) {
        text = "Abaixo do peso!"
    } else if (imc < 25) {
        text = "Peso ideal"
    } else {
        text = "Acima do peso!"
    }

    document.getElementById("text_area").innerText = text;

}

/*----------------------------LOGIN----------------------------*/ 

function Login() {
    let email = document.getElementById("emailid");
    let password = document.getElementById("passwordid");

    if (email.value == "" && password.value == "") {
        alert("Tá faltando informação marombeiro");
    }
    
    else {
        alert("Bora shaipá!");
    }
}