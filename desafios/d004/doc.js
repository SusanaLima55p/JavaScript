var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)

function clicar(){
    var produto = window.prompt('Que produto você está comprando?')

    var preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
   
    var dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    
    var troco = dinheiro - preco

    alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.
Deu ${dinheiro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} de troco.
Volte sempre!`)
}