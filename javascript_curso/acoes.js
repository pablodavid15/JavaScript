var resp = window.document.getElementById('saida')

function acao1() {

    resp.innerHTML += '<p>Clicou no 1º botão</p>'
    
    var a = prompt('Informe um número')
    if (a != '6') {
        resp.innerHTML += '<h1>Diferente de 6</h1>'
    } else {
        resp.innerHTML += '<h1>Igual a 6</h1>'
    }
}


function acao2(){
    resp.innerHTML += '<p>Clicou o 2º bortão</p>'

    switch(prompt('Como está o tempo? use chuvoso, ensolarado ou nublado.').toLowerCase()){
        case 'chuvoso':
            resp.innerHTML += '<h1>Lembresse  de trazer o guarda-churva!</h1>'
            break
        case 'ensolarado':
            resp.innerHTML += '<h1>Vista roupa lever</h1>'
            break
        case 'Nublado':
            resp.innerHTML += '<h1>Vá lá fora!!</h1>'
            break
        default:
            resp.innerHTML += '<h1>Tempo desconhecido.</h1>'
    }
}

function acao3(){
    resp.innerHTML += '<p>Clicou no 3º botão</p>'

    let = numero = Number(prompt('Informe um número:'))
    for(i = 0; i <= numero; i++) {
        resp.innerHTML += `<p>Paragrafo ${i}</p>`
    } 
}

function acao4() {
    resp.innerHTML += '<p>Clicou no 4º botão</p>'
    let counter = Number(prompt('Informe um número:'))
    while (counter <= 10) {
        resp.innerHTML += `<p>Linha ${counter}<br></p>`
        counter++;
    }
}

function acao5(){
    resp.innerHTML += '<p>Clicou no 5º botão</p>'
    
    let counter = Number(prompt('Informe um número:'))

    do {
        resp.innerHTML +=  `<p>Linha ${counter}<br></p>`
        counter ++
    } while (counter <= 10);
}

function acao6(){
    resp.innerHTML += '<p>Clicou 6º botão</p>'

    
}