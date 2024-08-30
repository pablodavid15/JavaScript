function soma() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    res.innerHTML = `A soma de ${n1} e ${n2} e igual ${soma}`
}