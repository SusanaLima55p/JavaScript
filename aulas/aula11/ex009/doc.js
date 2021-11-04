var botao = window.document.getElementById('botao')

botao.addEventListener('click', verificar)

function verificar(){
    var txtp = window.document.getElementById('txtp')
    var pais = String(txtp.value)

    var res = window.document.getElementById('res')

    res.innerHTML = `<p>Seu país de origem é ${pais} </p>`
    if(pais == 'Brasil'){
        res.innerHTML +='<p>Você é <strong>Brasileiro</strong>!</p>'
    } else {
        res.innerHTML += '<p>Você é <strong>Estrangeiro!</strong></p>'
    }

}