
let fazerQuiz = confirm("Vamos fazer um quiz?");

let regiao = document.getElementById('regiao')
let nacional = document.getElementById('nacional')
let pais = document.getElementById('pais')
let quiz = document.getElementById('quiz')
let uva = document.getElementById('uva')
let consumo = document.getElementById('consumo')
let companhia = document.getElementById('companhia')
let pass = document.getElementById('pass')
let consultoria = document.getElementById('consultoria')
let avaliacao = document.getElementById('avaliacao')

if(fazerQuiz == true){

    let region = prompt("Qual região do Brasil você mora ?")
    regiao.innerHTML+=`<p class="respostas">${region}</p>`

    let nacio = prompt("Voce prefere vinhos nacionais ou importados ?")
    nacional.innerHTML+=`<p class="respostas">${nacio}</p>`

    let country = prompt("Qual pais tem o vinho que mais te agrada ?")
    pais.innerHTML+=`<p class="respostas">${country}</p>`

    let vinho = prompt("Qual seu tipo de vinho favorito ? \n - Vinho Tinto \n - Vinho Seco \n - Vinho Rosé \n - Vinho Branco", "escreva aqui")
    quiz.innerHTML +=`<p class="respostas"> ${vinho}</p>`

    let grape = prompt("Qual uva mais te agrada ?")
    uva.innerHTML+=`<p class="respostas">${grape}</p>`

    let consumer = prompt("Com qual frequencia voce costuma tomar vinho ?")
    consumo.innerHTML+=`<p class="respostas">${consumer}</p>`

    let company = prompt("Gosta de tomar vinho sozinho ou acompanhado  ?")
    companhia.innerHTML+=`<p class="respostas">${company}</p>`

    let vcPass = prompt("Gostaria de saber mais sobre o VinhaCity Pass ?")
    pass.innerHTML+=`<p class="respostas">${vcPass}</p>`

    let consult = prompt("Gostaria de fazer uma consultoria com nossa equipe especializada ?")
    consultoria.innerHTML+=`<p class="respostas">${consult}</p>`

    let avalie = prompt("Avalie nosso site: \n Isso é importante para nós")
    avaliacao.innerHTML+=`<p class="respostas">${avalie}</p>`
}

