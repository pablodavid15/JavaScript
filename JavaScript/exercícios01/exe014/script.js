function carregar() {
    var msg = document.getElementById('msg') // pegando a mesnsagem
    var img = document.getElementById('imagem') // pegando  a img
    var data = new Date() //instaciando a variavel data
    var hora = data.getHours() // intasciando a variavel e pegando as horas
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // bom dia!!
        img.src = 'manhã.png' 
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        // boa noite
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
       // boa noite
       img.src = 'noite.png'
       document.body.style.background ='#515154'
    }
}
