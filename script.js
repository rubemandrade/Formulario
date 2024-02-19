document.addEventListener("DOMContentLoaded", function () {
    let numberOfParticipants = 1; // Inicia com 1 participante

    // Função para gerar o formulário para um participante
    function generateParticipantForm(participantNumber) {
        const participantFormDiv = document.getElementById("participantForm");
        const participantDiv = document.createElement("div");
        participantDiv.classList.add("participant");

        participantDiv.innerHTML = `
            <h2>Participante ${participantNumber}</h2>
            <label for="name${participantNumber}">Nome:</label>
            <input type="text" id="name${participantNumber}" name="name${participantNumber}" required>

            <label for="age${participantNumber}">Idade:</label>
            <input type="number" id="age${participantNumber}" name="age${participantNumber}" min="0" max="999" required>

            <label for="gender${participantNumber}">Sexo:</label>
            <select id="gender${participantNumber}" name="gender${participantNumber}" required>
                <option value="">Selecione</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>

            <label for="accommodation${participantNumber}">Precisa de hospedagem?</label>
            <select id="accommodation${participantNumber}" name="accommodation${participantNumber}" required>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        `;

        participantFormDiv.appendChild(participantDiv);
    }

    // Função para adicionar um novo participante
    function addParticipant() {
        if (numberOfParticipants < 30) { // Verifica se ainda não atingiu o limite de participantes
            numberOfParticipants++; // Incrementa o número de participantes
            generateParticipantForm(numberOfParticipants); // Gera o formulário para o novo participante
        }
    }

    // Função para revisar e enviar
    function reviewAndSubmit() {
        const participantList = document.getElementById("participantList");
        participantList.innerHTML = ""; // Limpa a lista antes de preencher

        // Preenche a lista de participantes
        for (let i = 1; i <= numberOfParticipants; i++) {
            const participantName = document.getElementById(`name${i}`).value;
            const participantAge = document.getElementById(`age${i}`).value;
            const listItem = document.createElement("li");
            listItem.textContent = `Nome: ${participantName}, Idade: ${participantAge}`;
            participantList.appendChild(listItem);
        }

        // Exibe a lista e o total de inscritos
        const reviewSection = document.getElementById("reviewSection");
        reviewSection.style.display = "block";
        document.getElementById("totalParticipants").textContent = `Total de inscritos: ${numberOfParticipants}`;
    }

    // Adiciona um ouvinte de evento ao botão "Adicionar Novo Participante"
    document.getElementById("addParticipantButton").addEventListener("click", addParticipant);

    // Adiciona um ouvinte de evento ao botão "Revisar e Enviar"
    document.getElementById("reviewAndSubmitButton").addEventListener("click", reviewAndSubmit);
});
