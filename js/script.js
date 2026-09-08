window.onload = function() {
    console.log("Amigo Pet carregado com sucesso!");
};

function mostrarData() {
    let data = new Date();

    let dia = String(data.getDate()).padStart(2, "0");
    let mes = String(data.getMonth() + 1).padStart(2, "0");
    let ano = data.getFullYear();

    document.getElementById("dataAtual").innerHTML =
        "Data de hoje: " + dia + "/" + mes + "/" + ano;
}

function confirmarCadastro() {
    alert("Cadastro realizado com sucesso!");
}

function confirmarAgendamento() {
    alert("Agendamento realizado com sucesso!");
}
