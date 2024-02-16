// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona ouvinte de evento ao input de range para atualizar em tempo real
    const numberOfParticipantsInput = document.getElementById("numberOfParticipants");
    const numberOfParticipantsOutput = document.querySelector("output[for='numberOfParticipants']");
    numberOfParticipantsOutput.textContent = numberOfParticipantsInput.value; // Inicializa o valor
    numberOfParticipantsInput.addEventListener("input", function () {
        numberOfParticipantsOutput.textContent = numberOfParticipantsInput.value;
    });

    // Função para validar se as informações adicionais foram preenchidas
    function validateAdditionalInfo() {
        const owner = document.getElementById("owner").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;

        return owner && email && phone && city && state;
    }

    // Função para ser chamada quando o botão for clicado
    function generateForm() {
        // Verifica se as informações adicionais estão preenchidas
        if (!validateAdditionalInfo()) {
            alert("Por favor, preencha todos os campos obrigatórios nas informações adicionais.");
            return;
        }

        // Obtém o número de participantes do input
        const numberOfParticipants = parseInt(document.getElementById("numberOfParticipants").value, 10);

        // Atualiza a exibição do valor escolhido
        document.querySelector("output[for='numberOfParticipants']").textContent = numberOfParticipants;

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

    // Adiciona ouvinte de evento ao botão Gerar Formulário
    document.getElementById("generateButton").addEventListener("click", generateForm);

    // Adiciona ouvinte de evento ao formulário para validação antes de submeter
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        // Verifica se as informações adicionais estão preenchidas
        if (!validateAdditionalInfo()) {
            alert("Por favor, preencha todos os campos obrigatórios nas informações adicionais.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});



