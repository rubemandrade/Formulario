document.addEventListener("DOMContentLoaded", function () {
    const startRegistrationButton = document.getElementById("startRegistrationButton");
    const addParticipantButton = document.getElementById("addParticipantButton");
    const reviewAndSubmitButton = document.getElementById("reviewAndSubmitButton");
    const submitButton = document.getElementById("submitButton");

    startRegistrationButton.addEventListener("click", startRegistration);
    addParticipantButton.addEventListener("click", addParticipant);
    reviewAndSubmitButton.addEventListener("click", reviewAndSubmit);
    submitButton.addEventListener("click", submit);

    let participantCounter = 1;

    function startRegistration() {
        document.getElementById("participantSection").style.display = "block";
        document.getElementById("summarySection").style.display = "none";
        document.getElementById("name1").focus();
    }

    function addParticipant() {
        participantCounter++;
        const participantForm = document.getElementById("participantForm");
        const participantDiv = document.createElement("div");
        participantDiv.classList.add("participant");

        participantDiv.innerHTML = `
            <h3>Participante ${participantCounter}</h3>
            <label for="name${participantCounter}">Nome:</label>
            <input type="text" id="name${participantCounter}" name="name${participantCounter}" required>

            <label for="age${participantCounter}">Idade:</label>
            <input type="number" id="age${participantCounter}" name="age${participantCounter}" min="0" max="999" required>

            <label for="gender${participantCounter}">Sexo:</label>
            <select id="gender${participantCounter}" name="gender${participantCounter}" required>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>

            <label for="accommodation${participantCounter}">Precisa de Hospedagem?</label>
            <select id="accommodation${participantCounter}" name="accommodation${participantCounter}" required>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select>
        `;

        participantForm.appendChild(participantDiv);
        document.getElementById(`name${participantCounter}`).focus();
    }

    function reviewAndSubmit() {
        document.getElementById("summarySection").style.display = "block";
        document.getElementById("participantSection").style.display = "none";

        const summary = document.getElementById("summary");
        summary.innerHTML = "";

        const responsibleName = document.getElementById("name").value;
        const responsibleLocation = document.getElementById("location").value;
        const responsibleEmail = document.getElementById("email").value;
        const responsiblePhone = document.getElementById("phone").value;

        const summaryList = document.createElement("ul");
        const responsibleInfo = document.createElement("li");
        responsibleInfo.innerHTML = `<strong>Nome do Responsável:</strong> ${responsibleName}<br>
                                     <strong>Localidade:</strong> ${responsibleLocation}<br>
                                     <strong>E-mail:</strong> ${responsibleEmail}<br>
                                     <strong>WhatsApp:</strong> ${responsiblePhone}`;
        summaryList.appendChild(responsibleInfo);

        const participantNames = [];
        for (let i = 1; i <= participantCounter; i++) {
            const participantName = document.getElementById(`name${i}`).value;
            participantNames.push(participantName);
        }

        participantNames.sort();
        const participantsInfo = document.createElement("li");
        participantsInfo.innerHTML = "<strong>Participantes:</strong>";
        const participantsList = document.createElement("ul");
        participantNames.forEach(name => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            participantsList.appendChild(listItem);
        });
        participantsInfo.appendChild(participantsList);

        summary.appendChild(summaryList);
        summary.appendChild(participantsInfo);
    }

    function submit() {
        alert("Obrigado e boa conferência!");
        location.reload();
    }
});
