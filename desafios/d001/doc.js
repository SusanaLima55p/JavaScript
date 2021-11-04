var b1 = window.document.getElementById('b1')
var b2 = window.document.getElementById('b2')
var b3 = window.document.getElementById('b3')

b1.addEventListener('click', clicar1)
b2.addEventListener('click', clicar2)
b3.addEventListener('click', clicar3)

function clicar1(){
    var b1 = alert('Você clicou o 1º botão!')
}

function clicar2(){
    var b2 = alert('Você clicou o 2º botão!')
}

function clicar3(){
    var b3 = alert('Você clicou o 3º botão!')
}