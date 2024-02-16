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
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                </select>

                <label for="phone${i}">Telefone:</label>
                <input type="text" id="phone${i}" name="phone${i}" required pattern="\+[0-9]{2} [0-9]{2} [0-9]{9}">
            `;

            // Adiciona o formulário do participante à div principal
            participantFormDiv.appendChild(participantDiv);

            // Aplica a formatação para o formato brasileiro ao campo de telefone
            const phoneInput = participantDiv.querySelector(`#phone${i}`);
            new IMask(phoneInput, {
                mask: '+00 00 000000000',
                lazy: false,
            });
        }

        // Mostra o bloco de informações adicionais
        document.getElementById("additionalInfo").style.display = "block";
    }

    // Adiciona um ouvinte de evento ao botão
    document.getElementById("generateButton").addEventListener("click", generateForm);
});


