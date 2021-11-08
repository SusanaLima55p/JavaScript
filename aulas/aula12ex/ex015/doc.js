function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano ){
    alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 25){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50){
                //adolto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.innerHTML = `Detequitamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}