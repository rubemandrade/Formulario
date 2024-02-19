// script.js

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const participantRegistrationForm = document.getElementById("participantRegistrationForm");
    const initialInfo = document.getElementById("initialInfo");
    const participantForm = document.getElementById("participantForm");
    const summary = document.getElementById("summary");
    const totalParticipantsDiv = document.getElementById("totalParticipants");
    const participantListDiv = document.getElementById("participantList");

    let numberOfParticipants = 0;

    document.getElementById("startRegistrationButton").addEventListener("click", function () {
        initialInfo.style.display = "none";
        participantForm.style.display = "block";
        addParticipant(); // Adiciona campos para o primeiro participante
        createParticipantFields();
    });

    function createParticipantFields() {
        participantRegistrationForm.innerHTML = "";
        for (let i = 2; i <= numberOfParticipants; i++) { // Começa com 2 pois o participante 1 já está sendo exibido
            addParticipant();
        }
    }

    function addParticipant() {
        numberOfParticipants++;
        const participantDiv = document.createElement("div");
        participantDiv.classList.add("participant");

        participantDiv.innerHTML = `
            <h3>Participante ${numberOfParticipants}</h3>
            <label for="fullName${numberOfParticipants}">Nome Completo:</label>
            <input type="text" id="fullName${numberOfParticipants}" name="fullName${numberOfParticipants}" required>

            <label for="age${numberOfParticipants}">Idade:</label>
            <input type="number" id="age${numberOfParticipants}" name="age${numberOfParticipants}" min="0" max="999" required>

            <label for="gender${numberOfParticipants}">Sexo:</label>
            <select id="gender${numberOfParticipants}" name="gender${numberOfParticipants}" required>
                <option value="">Selecione...</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>

            <label for="accommodation${numberOfParticipants}">Precisa de Hospedagem?</label>
            <select id="accommodation${numberOfParticipants}" name="accommodation${numberOfParticipants}" required>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        `;

        participantRegistrationForm.appendChild(participantDiv);
    }

    document.getElementById("reviewAndSubmitButton").addEventListener("click", function () {
        participantForm.style.display = "none";
        summary.style.display = "block";
        displaySummary();
    });

    function displaySummary() {
        totalParticipantsDiv.textContent = `Total de Inscritos: ${numberOfParticipants}`;
        participantListDiv.textContent = "Lista de Inscritos:";
        for (let i = 1; i <= numberOfParticipants; i++) {
            const fullName = document.getElementById(`fullName${i}`).value;
            participantListDiv.textContent += `\n- ${fullName}`;
        }
    }

    document.getElementById("submitButton").addEventListener("click", function () {
        alert("Obrigado e boa conferência!");
    });
});








