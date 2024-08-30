let valores = [5, 8, 3, 4, 6, 9]
valores.sort()
/* for (pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos}, tem valor ${valores[pos]}.`)
 }*/
 
 for (let pos in valores) {
    console.log(`A posição ${pos}, tem valor ${valores[pos]}.`)
 }