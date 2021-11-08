var botao = document.getElementById('bu')
botao.addEventListener('click', clicar)

function clicar(){
    var res = document.getElementById('res')
    var nome = prompt('Qual é o nome do aluno?')
    var nota1 = Number(prompt(`Primeira nota de ${nome}:`))
    var nota2 = Number(prompt(`Segunda nota de ${nome}:`))
    var notat = ((nota1 + nota2) / 2)
    if (notat >= 6){
        //aprovado
        res.innerHTML = `<h2><strong>Analisando a situação de ${nome}</strong></h2>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${notat}</strong></p>`
        res.innerHTML += `Com a média acima de 6,0 o aluno está <mark id="apr">APROVADO</mark>`

    } else if ((notat >= 3) && (notat < 6)){
        //recuperação
        res.innerHTML = `<h2><strong>Analisando a situação de ${nome}</strong></h2>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${notat}</strong></p>`
        res.innerHTML += `Com a média entre 3,0 e 6,0 o aluno está em <mark id="rec">RECUPERAÇÃO</mark>`

    } else {
        //reprovado
        res.innerHTML = `<h2><strong>Analisando a situação de ${nome}</strong></h2>`
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${notat}</strong></p>`
        res.innerHTML += `Com a média abaixo de 3,0 o aluno está <mark id="rep">REPROVADO</mark>`
    }
}