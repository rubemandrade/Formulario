// Adicione este código ao seu script.js

document.addEventListener("DOMContentLoaded", function () {
    // Função para ser chamada quando o botão for clicado
    function generateForm() {
        // Mostra o formulário e as informações adicionais
        document.getElementById("registrationForm").style.display = "block";
        document.getElementById("additionalInfo").style.display = "block";
    }

    // Adiciona um ouvinte de evento ao botão
    document.getElementById("generateButton").addEventListener("click", generateForm);
});
