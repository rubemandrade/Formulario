document.addEventListener("DOMContentLoaded", function () {
    function generateForm() {
        const numberOfParticipants = parseInt(document.getElementById("numberOfParticipants").value);
        const participantsContainer = document.getElementById("participantsContainer");

        participantsContainer.innerHTML = ""; // Limpa qualquer conteúdo anterior

        for (let i = 1; i <= numberOfParticipants; i++) {
            const participantDiv = document.createElement("div");
            participantDiv.className = "participant";

            participantDiv.innerHTML = `
                <h3>Participante ${i}</h3>
                <label for="name${i}">Nome:</label>
                <input type="text" id="name${i}" name="name${i}" required>

                <label for="lastname${i}">Sobrenome:</label>
                <input type="text" id="lastname${i}" name="lastname${i}" required>

                <label for="age${i}">Idade:</label>
                <input type="text" id="age${i}" name="age${i}" required>

                <label for="accommodation${i}">Precisa de hospedagem? (sim ou não):</label>
                <select id="accommodation${i}" name="accommodation${i}" required>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                </select>
            `;

            participantsContainer.appendChild(participantDiv);
        }

        document.getElementById("registrationForm").style.display = "block";
    }

    document.getElementById("generateButton").addEventListener("click", generateForm);
});
