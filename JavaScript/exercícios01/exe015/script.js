function verificar() {
    let date = new Date()// instancando a variavel date
    let year = date.getFullYear() // instanciando  a variavel ano atual
    let fyear = document.getElementById('txtyear') // pegando o ano de nasc
    let res = document.querySelector('div#res') // pegando  a div res
    if(fyear.value.length == 0 || Number(fyear.value) > year){ // validado o ano 
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let fsex = document.querySelectorAll('input[type="radio"]') //pegando  o ano
        let age = year - Number(fyear.value) // calculando a idade
        let gênero = '' // instancindo o gênero como vazio
        let img = document.createElement('img') // criando o elemento img
        img.setAttribute('id', 'foto')// atribiondo  o id
        if(fsex[0].checked) { //verificando se é homem
            gênero = 'Homem'
            if (age >= 0 && age <= 10){
                // criança
                img.setAttribute('src', 'foto_menino.png') // atribuindo a foto de um menino
            }else if (age <= 21) {
                // jovem
                img.setAttribute('src', 'foto_homem_jovem.png')// atribuindo a foto de um jovem
            }else if(age < 50){
                // adulto
                img.setAttribute('src', 'foto_homem_adulto.png')// atribuindo a foto de um adulto
            }else{
                // idoso
                img.setAttribute('src', 'foto_homem_idoso.png')// atribuindo a foto de idoso
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (age >= 0 && age <= 10) {
                // criança
                img.setAttribute('src', 'foto_menina.png')// atribuindo a foto de uma menina
            }else if (age <= 21) {
                // jovem 
                img.setAttribute('src', 'foto_mulher_jovem.png')// atribuindo a foto de uma jovem
            }else if(age < 50){
                // adulta
                img.setAttribute('src', 'foto_mulher_adulta.png')// atribuindo a foto de uma adulta
            }else{
                //idosa
                img.setAttribute('src', 'foto_mulher_idosa.png')// atribuindo a foto de uma idosa
            }
        }
        res.style.textAlign = 'center' // alinado o texto no centro
        res.innerHTML = `Detectamos: ${gênero} com ${age} anos.` // mostrando o gênero e a idade
        res.appendChild(img) // mostrando a imagem
    }
}