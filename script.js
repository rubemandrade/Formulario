function generateForm() {
    const numParticipants = document.getElementById('numParticipants').value;
    const participantsContainer = document.getElementById('participants-container');

    let formHTML = '';

    for (let i = 1; i <= numParticipants; i++) {
        formHTML += `
            <div class="participant">
                <h3>Participante ${i}</h3>
                <label for="name${i}">Nome: </label>
                <input type="text" id="name${i}" required>

                <label for="surname${i}">Sobrenome: </label>
                <input type="text" id="surname${i}" required>

                <label for="age${i}">Idade: </label>
                <input type="number" id="age${i}" required>

                <label for="accommodation${i}">Precisa de hospedagem: </label>
                <select id="accommodation${i}" required>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
        `;
    }

    participantsContainer.innerHTML = formHTML;
}

function submitForm() {
    // Aqui você pode adicionar lógica para enviar os dados para o Google Forms ou Sheets.
    // Pode ser necessário usar uma API ou biblioteca para isso.
    alert('Formulário enviado com sucesso!');
}
