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
        if (registrationForm.checkValidity()) {
            initialInfo.style.display = "none";
            participantForm.style.display = "block";
            createParticipantFields();
        } else {
            alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        }
    });

    function createParticipantFields() {
        participantRegistrationForm.innerHTML = "";
        for (let i = 1; i <= numberOfParticipants; i++) {
            const participantDiv = document.createElement("div");
            participantDiv.classList.add("participant");

            participantDiv.innerHTML = `
                <h3>Participante ${i}</h3>
                <label for="fullName${i}">Nome Completo:</label>
                <input type="text" id="fullName${i}" name="fullName${i}" required>

                <label for="age${i}">Idade:</label>
                <input type="number" id="age${i}" name="age${i}" min="0" max="999" required>

                <label for="gender${i}">Sexo:</label>
                <select id="gender${i}" name="gender${i}" required>
                    <option value="">Selecione...</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                </select>

                <label for="accommodation${i}">Precisa de Hospedagem?</label>
                <select id="accommodation${i}" name="accommodation${i}" required>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            `;

            participantRegistrationForm.appendChild(participantDiv);
        }
    }

    document.getElementById("addParticipantButton").addEventListener("click", function () {
        if (numberOfParticipants < 30) {
            numberOfParticipants++;
            createParticipantFields();
        } else {
            alert("Limite máximo de participantes atingido (30).");
        }
    });

    document.getElementById("reviewAndSubmitButton").addEventListener("click", function () {
        if (participantRegistrationForm.checkValidity()) {
            participantForm.style.display = "none";
            summary.style.display = "block";
            displaySummary();
        } else {
            alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        }
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






