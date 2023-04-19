function contar(){
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
 
if (inic.value.length == 0 || fim.value.length == 0 || fim.value.length == 0){
    //alert('[ERRO] Faltam dados!')
    res.innerHTML = `<br>Impossível contar!`
    } else {
        res.innerHTML = `<br>Contando:<br>`
        var n1 = Number(inic.value)
        var n2 = Number(fim.value)
        var n3 = Number(passo.value)
            if (n3 == 0){
            alert('Passo inválido, considerando PASSO 1')
            n3 = 1
        }
        //Contagem crescente
        if (n1 < n2){
            for (var c = n1;c <= n2;c += n3){
                res.innerHTML += ` ${c}\u{1F449} `
        }
    } else {
        //Contagem descrescente
        for (var c = n1; c >= n2; c -= n3)
            res.innerHTML += ` ${c}\u{1F449} `
        }
            res.innerHTML += `\u{1F3C1}`
    }
}
