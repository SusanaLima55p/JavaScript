
    var nu = document.getElementById('nu')
    var val = []

function adi(){
    var numeros = document.getElementById('numeros')
    var nu1 = nu.value
    //buscar o valor no vetor
    function bus (nu1){
            res = val.indexOf(nu1)
            return res 
        }
    //campo vazio
    if(nu.value.length == 0){
        alert('Digite um número!')
    //numero entre 1 e 100
    } else if(nu1 >= 1 && nu1 < 100) {
        bus(nu1)
        //validação de indice
        if(res == -1){
            val.push(nu1)
            numeros.innerHTML += `<option value="">Número ${nu1} adicionado</option>`
        } else {
            alert(`O número ${nu1} já foi adicionado`)}
    //numero que não está entre 1 e 100
    } else{
      alert('escreva um número entre 1 e 100')}
}

var inf = document.getElementById('inf')
function fim(){
    val.sort()

    soma = 0
    for(var pos in val){
        var nu = Number(val[pos])
        var ult = (val[pos])
        soma += nu
    }
    var media = soma / val.length

    inf.innerHTML = `<p>Ao todo, temos ${val.length} números cadastrados</p>`
    inf.innerHTML += `<p>O maior número informado foi ${ult}</p>`
    inf.innerHTML += `<p>O menor número informado foi ${val[0]}</p>`
    inf.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    inf.innerHTML +=`<p>A média dos valores é ${media.toFixed(2)}</p>`
}