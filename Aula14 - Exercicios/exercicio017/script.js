function tabuada(){
    let n = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if(n.value.length == 0){
        window.alert('Por favor, digite um número!')
        } else {
            let num = Number(n.value)
            let c = 1
            tab.innerHTML = ''
            while (c<=10){
                let item = document.createElement('option')
                item.text = `${num} x ${c} = ${c*num}`
                tab.appendChild(item)
                c++
            }
    }
}
   
    

