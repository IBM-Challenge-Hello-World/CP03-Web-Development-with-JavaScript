function quiz() {
    var perguntas = [
        "Qual é a montadora que fabrica o modelo Mustang?\n" +
        "a) Ford\nb) Chevrolet\nc) Dodge",

        "Qual é o nome do carro que é um ícone da Volkswagen e foi produzido pela primeira vez em 1938?\n" +
        "a) Gol\nb) Fusca\nc) Uno",
            
        "Qual é a marca de carro que produz o modelo Corolla?\n" +
        "a) Toyota\nb) Honda\nc) Nissan",
    ];

    var respostas = ["a", "b", "a"];
    var acertos = 0;

    for (var i = 0; i < perguntas.length; i++) {
        var resposta = prompt(perguntas[i]);
        if (resposta !== null && resposta.toLowerCase() === respostas[i]) {
            console.log("Resposta correta!");
            acertos++;
        } else {
            console.log("Resposta incorreta.");
        }
    }

    resultado =  alert(`Você acertou ${acertos} de ${perguntas.length} perguntas.`)
}
