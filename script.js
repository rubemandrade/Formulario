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
        const conferenceParticipant = document.getElementById("conferenceParticipant").value;
        if (conferenceParticipant === "sim") {
            numberOfParticipants = 1;
            document.getElementById("fullName1").value = document.getElementById("owner").value;
            initialInfo.style.display = "none";
            participantForm.style.display = "block";
        } else {
            numberOfParticipants = 0;
            createParticipantFields();
            initialInfo.style.display = "none";
            participantForm.style.display = "block";
        }
    });

    function createParticipantFields() {
        participantRegistrationForm.innerHTML = "";
        for (let i = 1; i <= numberOfParticipants; i++) {
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
                <option value="">Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
            </select>

            <label for="accommodation${numberOfParticipants}">Precisa de Hospedagem?</label>
            <select id="accommodation${numberOfParticipants}" name="accommodation${numberOfParticipants}" required>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;

        participantRegistrationForm.appendChild(participantDiv);
        document.getElementById(`fullName${numberOfParticipants}`).focus();
    }

    document.getElementById("addParticipantButton").addEventListener("click", function () {
        addParticipant();
    });

    document.getElementById("reviewAndSubmitButton").addEventListener("click", function () {
        const participantsData = collectParticipantData();
        totalParticipantsDiv.textContent = `Total de Participantes: ${numberOfParticipants}`;
        participantListDiv.innerHTML = "";
        participantsData.forEach(participant => {
            participantListDiv.innerHTML += `<p>${participant.fullName}</p>`;
        });
        participantForm.style.display = "none";
        summary.style.display = "block";
    });

    document.getElementById("submitButton").addEventListener("click", function () {
        alert("Obrigado e boa conferência!");
        location.reload(); // Recarrega a página após submissão
    });

    function collectParticipantData() {
        const participantsData = [];
        for (let i = 1; i <= numberOfParticipants; i++) {
            const participant = {
                fullName: document.getElementById(`fullName${i}`).value,
                age: document.getElementById(`age${i}`).value,
                gender: document.getElementById(`gender${i}`).value,
                accommodation: document.getElementById(`accommodation${i}`).value
            };
            participantsData.push(participant);
        }
        return participantsData;
    }
});
