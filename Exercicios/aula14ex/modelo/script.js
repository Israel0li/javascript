function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = window.document.getElementById('dia')
    var dataatt = new Date()
    var hora = dataatt.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        dia.innerText = 'Bom Dia!'
        img.src = 'manha2.png'
        document.body.style.background = '#c17f4f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        
        dia.innerText = 'Boa Tarde!'
        img.src = 'tarde2.png'
        document.body.style.background = '##91bce6'
    } else {
        //BOA NOITE!
        dia.innerText = 'Boa Noite!'
        img.src = 'noite250px.png'
        document.body.style.background = '#30596e'
    }
}

