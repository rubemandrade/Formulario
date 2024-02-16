<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Inscrição</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Entremesclar - Igrejas do Grande ABC</h1>
    </header>

    <div id="participantInfo">
        <h2>Dados da Inscrição</h2>
        <form id="registrationForm">
            <label for="numberOfParticipants">Número de Participantes (máx. 30):</label>
            <input type="range" id="numberOfParticipants" name="numberOfParticipants" min="1" max="30" value="1" required>
            <output for="numberOfParticipants" id="participantsOutput">1</output>

            <div id="additionalInfo">
                <h2>Quem é o responsável por estas inscrições?</h2>
                
                <label for="owner">Nome do responsável:</label>
                <input type="text" id="owner" name="owner" required>
                
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="phone">WhatsApp para contato:</label>
                <input type="text" id="phone" name="phone" required pattern="\+[0-9]{2} [0-9]{2} [0-9]{9}">
                
                <label for="city">Cidade:</label>
                <input type="text" id="city" name="city" required>
                
                <label for="state">UF:</label>
                <input type="text" id="state" name="state" required>

                <!-- Botão Gerar Formulário movido para o final da sessão additionalInfo -->
                <button type="button" id="generateButton">Gerar Formulário</button>

                <!-- Botão Adicionar +1 Participante -->
                <button type="button" id="addParticipantButton">Adicionar +1 Participante</button>
            </div>
        </form>

        <div id="participantForm"></div>
    </div>

    <script src="https://unpkg.com/imask"></script>
    <script src="script.js"></script>
</body>
</html>
