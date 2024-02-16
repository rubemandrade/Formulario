// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Função para ser chamada quando o botão for clicado
    function generateForm() {
        // Mostra o formulário principal
        document.getElementById("registrationForm").style.display = "block";

        // Obtém o número de participantes do input
        const numberOfParticipants = parseInt(document.getElementById("numberOfParticipants").value, 10);

        // Obtém a div onde os formulários dos participantes serão inseridos
        const participantFormDiv = document.getElementById("participantForm");

        // Limpa qualquer conteúdo anterior
        participantFormDiv.innerHTML = '';

        // Gera os campos para cada participante
        for (let i = 1; i <= numberOfParticipants; i++) {
            const participantDiv = document.createElement("div");
            participantDiv.classList.add("participant");

            participantDiv.innerHTML = `
                <h2>Participante ${i}</h2>
                <label for="name${i}">Nome:</label>
                <input type="text" id="name${i}" name="name${i}" required>

                <label for="lastname${i}">Sobrenome:</label>
                <input type="text" id="lastname${i}" name="lastname${i}" required>

                <label for="age${i}">Idade:</label>
                <input type="text" id="age${i}" name="age${i}" required>

                <label for="accommodation${i}">Precisa de hospedagem?</label>
                <select id="accommodation${i}" name="accommodation${i}" required>
                    <option value="nao">Não</option>
                    <option value="sim">Sim</option>
                </select>
            `;

            // Adiciona o formulário do participante à div principal
            participantFormDiv.appendChild(participantDiv);
        }

        // Mostra o bloco de informações adicionais
        document.getElementById("additionalInfo").style.display = "block";
    }

    // Adiciona um ouvinte de evento ao botão
    document.getElementById("generateButton").addEventListener("click", generateForm);

    // Adiciona uma máscara para o telefone no padrão brasileiro e pré-preenche
    const phoneInput = document.getElementById("phone");
    const phoneMask = new IMask(phoneInput, {
        mask: '+55 (00) 00000-0000',
    });
    phoneMask.value = '+55 (11) 98765-4321'; // Substitua com o valor desejado

    // Adiciona um ouvinte de evento ao formulário para validação
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function (event) {
        // Verifica se todos os campos estão preenchidos
        const formInputs = registrationForm.querySelectorAll("input, select");
        for (const input of formInputs) {
            if (!input.checkValidity()) {
                alert("Por favor, preencha todos os campos obrigatórios corretamente.");
                event.preventDefault(); // Impede o envio do formulário
                return;
            }
        }
    });
});


