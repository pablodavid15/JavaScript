function tabuada() {
    let txtn = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab')
    if (txtn.value.length == 0){
        alert('Por favor, digite novamente')
    }else{
        let num = Number(txtn.value)
        let counter = 1
        tab.innerHTML = ''
        while(counter <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${counter} = ${num * counter}`
            item.value = `tab${counter}`
            tab.appendChild(item)
            counter++
        }
    }
}