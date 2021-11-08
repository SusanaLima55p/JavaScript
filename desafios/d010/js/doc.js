var botao = window.document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))
    var del = b **2 - 4 * 3 * 2
    var res = document.getElementById('res')

    res.innerHTML = `<h2><strong>Resolvendo Bhaskara</strong></h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `O calculo será <strong>Δ = ${b}² - 4 . 3 .2</strong>`
    res.innerHTML += `<p>O valor calculado foi <strong><mark>Δ = ${del}</mark></strong></p>`
}