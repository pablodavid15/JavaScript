function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Imposivel contar'
        alert('[ERRO] Faltam dados!!')
    }else{
        res.innerHTML = 'Contando: <br><br>'
        let start = Number(ini.value)
        let end = Number(fim.value)
        let step = Number(pas.value)
        if (step == 0){
            alert('Passo invalido considerando passo 1')
            step = 1
        }
        if (start < end){
            // contagem cresente
            for (let counter = start; counter <= end; counter += step){
                res.innerHTML += `${counter} \u{1F449}`
            }
        }else {
            // contagem decresente
            
            for (let counter = start; counter >= end; counter -= step){
                res.innerHTML += `${counter} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}