function entrarSite() {
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (nome_usuario === "Bernardo" && senha_usuario === "1234"){
        alert("Login realizado com sucesso.");
        window.location.href = "contaBancaria.html";
    }
    else{
        alert("Usuário e/ou senha incorretos. Tente novamente.");
    }
}