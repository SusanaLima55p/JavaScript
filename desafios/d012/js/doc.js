var botao = document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var pan = Number(prompt('Qual era o preço anterior do produto?'))
    var pat = Number(prompt('Qual é o preço atual do produto?'))
    var res = document.getElementById('res')
    if (pan > pat){
        res.innerHTML = `<h2><strong>Analisando os valores informados.</strong></h2>`
        res.innerHTML += `<p>O produto custava ${pan.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} e agora custa ${pat.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        var des = pan - pat
        var conta = (pat * 100) / pan
        var por = 100 - conta
        res.innerHTML += `<p>O preço caiu ${des.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} em relação ao preço anterio.</p>`
        
        res.innerHTML += `<p>Uma variação de ${por.toFixed(2)}% para baixo.</p>`


    } else {
        res.innerHTML = `<h2><strong>Analisando os valores informados.</strong></h2>`
        res.innerHTML += `<p>O produto custava ${pan.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} e agora custa ${pat.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        var des = pan + pat
        var conta = (pat * 100) / pan
        var por = conta -100
        res.innerHTML += `<p>O preço subiu ${des.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} em relação ao preço anterio.</p>`
        
        res.innerHTML += `<p>Uma variação de ${por.toFixed(2)}% para cima.</p>`
    }
}