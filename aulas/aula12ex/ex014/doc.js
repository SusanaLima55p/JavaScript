function carregar(){

    var tex = window.document.getElementById('tex')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    tex.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12){
        //BOM DIA! 
        imagem.src = 'imagens/manha-p.png'
        document.body.style.background = '#f6cb9e'
        
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        imagem.src = 'imagens/tarde-p.png'
        document.body.style.background = '#e8947a'
    } else {
        //BOA NOITE!
        imagem.src = 'imagens/noite-p.png'
        document.body.style.background = '#607678'

    }

}