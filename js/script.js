function mostrarData() {
    const elementoData = document.getElementById("dataAtual");

    if (elementoData) {
        elementoData.innerHTML =
            "Data e horário atual: " +
            new Date().toLocaleString("pt-BR");
    }
}

setInterval(mostrarData, 1000);

function confirmarCadastro() {
    alert("Cadastro realizado com sucesso!");
}

function confirmarAgendamento() {
    alert("Agendamento realizado com sucesso!");
}
