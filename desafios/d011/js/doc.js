var botao = document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var ano = Number(prompt('Qual é o ano que você quer verificar?'))
    var res = document.getElementById('res')
    if ((ano % 4) == 0){
        res.innerHTML = `<h2><strong>Analisando o ano de ${ano}...</strong></h2>`
        res.innerHTML += `<p id="s">O ano de ${ano} <mark>É BISSEXTO</mark> ✔️.</p>`
    } else {
        res.innerHTML = `<h2><strong>Analisando o ano de ${ano}...</strong></h2>`
        res.innerHTML += `<p id="n">O ano de ${ano} <mark >NAO É BISSEXTO</mark> ❌.</p>`
    }
}