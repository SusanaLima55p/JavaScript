var botao = window.document.getElementById('botao')
var txtv = window.document.getElementById('txtvel')
botao.addEventListener('click', calcular)

function calcular(){
    var res = window.document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong>.</p>`
    if (vel > 60){
        res.innerHTML += '<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>'
    } else {
        res.innerHTML += '<p>Você não foi multado.</p>'
    }
    res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'

}