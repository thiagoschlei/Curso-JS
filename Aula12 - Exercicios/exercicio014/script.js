function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horario = window.document.getElementById('horario')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#fba85a'
        horario.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#f89240'
        horario.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#06274f'
        horario.innerHTML = 'Boa noite!'
    }  
}
