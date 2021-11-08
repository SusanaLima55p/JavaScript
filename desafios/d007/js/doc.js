var cota = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

var botao = window.document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var real = Number(prompt('Quantos R$ você tem na carteira?'))
    var resd = window.document.getElementById('resd')
    var resr = window.document.getElementById('resr')
    var dol = (real / cota)
    resr.innerHTML = `Você tem ${real.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} reias.`

    resd.innerHTML += `Pode comprar hoje  ${dol.toLocaleString('en', {style: 'currency', currency:'USD'})} dólares!`

}