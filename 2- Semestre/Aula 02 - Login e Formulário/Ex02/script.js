function Logar() {
    
    let usuario = document.getElementById("usuarioid");
    let senha = document.getElementById("senhaid");

    if (usuario.value !== "" | senha.value == "12345") {
        alert("Seja bem vindo " + usuario.value);
    }

    else {
        alert("Preencha todos os campos!")
    }
}