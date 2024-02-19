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

        const participantList = document.createElement("ul");
        participantList.classList.add("participant-list");

        for (let i = 1; i <= participantCounter; i++) {
            const name = document.getElementById(`name${i}`).value;
            const age = document.getElementById(`age${i}`).value;

            const participantItem = document.createElement("li");
            participantItem.textContent = `Nome: ${name}, Idade: ${age}`;
            participantList.appendChild(participantItem);
        }

        summary.appendChild(participantList);

        const divider = document.createElement("hr");
        summary.appendChild(divider);

        const totalParticipants = document.createElement("p");
        totalParticipants.textContent = `Total de inscrições: ${participantCounter}`;
        summary.appendChild(totalParticipants);
    }

    function submit() {
        alert("Obrigado e boa conferência!");
        location.reload();
    }
});
