function validar() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    
    let situacao;

    if (usuario === "login" && senha === "1234")
    {
        situacao = "Login feito com sucesso";
    }
    else
    {
        situacao = "Usuário ou senha inválidos";
    }

    document.getElementById("validacao").textContent =
        "Validação: " + situacao;
}