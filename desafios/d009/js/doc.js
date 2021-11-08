var botao =  document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var fu = prompt('Qual o nome do funcionário?')
    var sal = Number(prompt(`Qual o salário de ${fu}?`))
    var por = Number(prompt(`O salário de ${fu} vai ser reajustado em qual porcentagem?`))
    var des = (sal * por) / 100
    var total = sal + des
    var res = document.getElementById('res')

    res.innerHTML = `<h2><strong>${fu} recebeu um aumento salarial!</strong></h2>`
    res.innerHTML += `<p>O salário atual era de ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Com um aumento de ${por}%, o salário vai aumentar ${des.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `E a partir daí, ${fu} vai passar a ganhar ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`

}