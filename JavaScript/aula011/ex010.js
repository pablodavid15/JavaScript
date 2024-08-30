function test() {
    var txt = document.querySelector('input#txt1')
    var res = document.getElementById('res')
    var pais = String(txt.value)
    res.innerHTML = `<p>Você é do <strong>${pais}</strong></p>`
    if (pais == 'Brasil'){
        res.innerHTML += '<p>Você é <strong>Brasileiro</strong></p>'
    }else{
        res.innerHTML += '<p>Você é <strong>Estrangeiro</strong></p>'
    }
}