function calcular(){
    var txtv = document.querySelector('input#txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}Km/h</strong></p>`
    if(vel > 60){
        res.innerHTML += '<p>Você estar <strong>MULTADO</stronge></p>'
    }
    res.innerHTML += `<p>Dirija com cinto de segurança!</p>`
}
