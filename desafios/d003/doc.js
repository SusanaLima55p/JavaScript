var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)

function clicar(){
    var nu1 = Number.parseInt(window.prompt('Digite um número inteiro qualquer'))
    var nu2 = nu1-1
    var nu0 = nu1+1
    alert(`Antes de ${nu1}, temos o número ${nu2}.
Depois de ${nu1}, temos o número ${nu0}.`)
}