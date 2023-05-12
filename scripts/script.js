function trocar(fundo, cor) {
    document.body.style.background = fundo
    document.body.style.color = cor
}


function validarEmail() {
    var emailInput = document.getElementById("email");
    var span = document.getElementById("span");
    var email = emailInput.value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
;
    if(regex.test(email)) 
    {
    } 
    else 
    {
        emailInput.style.border = '2px solid #e63636'; 
        span.style.display = 'block';
        span.style.fontSize = '12px';
        span.style.color = '#e63636';
        span.style.textAlign = 'center';
        span.style.marginBottom = '4px';
    }
}

function validarTel() {
    var telInput = document.getElementById("tel");
    var spanTel = document.getElementById("span")
    var tel  = telInput.value;
    var regex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/

    if(regex.test(tel)){  
    }
    else {
        emailInput.style.border = '2px solid #e63636'; 
        span.style.display = 'block';
        span.style.fontSize = '12px';
        span.style.color = '#e63636';
        span.style.textAlign = 'center';
        span.style.marginBottom = '4px'; 
    } 
}     

// Data para o footer

date = document.getElementById('date');
let data = new Date();
let dia = ('0' + data.getDate()).slice(-2);
let mes = data.getMonth();
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let ano = data.getFullYear()

date.innerHTML += `<p id="date"> ${dia} de ${meses[mes]} de ${ano} <\p>`

