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
            // Se o responsável participará, o nome dele será o do primeiro participante
            numberOfParticipants = 1;
            document.getElementById("fullName1").value = document.getElementById("owner").value;
            initialInfo.style.display = "none";
            participantForm.style.display = "block";
            document.getElementById("age1").focus(); // Foca no próximo campo
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
           
