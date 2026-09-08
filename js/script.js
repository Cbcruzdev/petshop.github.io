// Mostra uma mensagem no console quando o site é carregado
window.addEventListener("load", function() {
    console.log("Amigo Pet carregado com sucesso!");
});

// Mostra a data e o horário atual na página
function mostrarData() {
    const elementoData = document.getElementById("dataAtual");

    if (elementoData) {
        elementoData.innerHTML =
            "Data e horário atual: " +
            new Date().toLocaleString("pt-BR");
    }
}

// Atualiza a data e o horário automaticamente
setInterval(mostrarData, 1000);

// Exibe uma mensagem quando o cadastro é enviado
function confirmarCadastro() {
    alert("Cadastro realizado com sucesso!");
}

// Exibe uma mensagem quando o agendamento é enviado
function confirmarAgendamento() {
    alert("Agendamento realizado com sucesso!");
}
