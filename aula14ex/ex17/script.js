function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeMenino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemHomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoHomem.png')
            } else {
                img.setAttribute('src', 'imagens/velhoHomem.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeMenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemMulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoMulher.png')
            } else {
                img.setAttribute('src', 'imagens/velhoMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}