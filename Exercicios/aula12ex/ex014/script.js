function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade == 0) {
                //Feto
                img.setAttribute('src', 'feto.png')
            } else if (idade >=0 && idade < 10) {   
                // Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto-m2.png')
            } else if (idade < 102) {
                // Idoso
                img.setAttribute('src', 'idoso-m3.png')
            } else {
                // Alma penada
                img.setAttribute('src', 'dead.png')
            } 
         } else {
            gênero = 'Mulher'
            if (idade == 0) {
                //Feto
                img.setAttribute('src', 'feto.png')
            } else if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'jovem-f2.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto-f.png')
            } else if (idade < 102) {
                // Idoso
                img.setAttribute('src', 'idoso-f2.png')
            } else {
                // Alma penada 
                img.setAttribute('src', 'dead.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Você é ${gênero} com ${idade} anos de idade.`
         res.appendChild(img)
    }
}
