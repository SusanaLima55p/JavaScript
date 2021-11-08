var botao = window.document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    
    var pro = prompt('Qual é o produto que você está comprando?')
    var preco = Number(prompt(`Qual o preço de ${pro}?`))
    var des = (preco * 10) / 100
    var total = preco - des
    var res = document.getElementById('res')
    

    res.innerHTML = `<p>O preço original era ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${des.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}, no produto ${pro}.</p>`

}