var nu = document.getElementById('nu')
var numeros = document.getElementById('numeros')
var inf = document.getElementById('inf')
var val = []

function adi(){
    var nu1 = Number(nu.value)
    //buscar o valor no vetor
    function bus (nu1){
            res = val.indexOf(nu1)
            return res 
        }
    //campo vazio
    if(nu.value.length == 0){
        alert('Digite um número!')
    //numero entre 1 e 100
    } else if(nu1 >= 1 && nu1 <= 100) {
        bus(nu1)
        //validação de indice
        if(res == -1){
            val.push(nu1)
            numeros.innerHTML += `<option value="">Número ${nu1} adicionado</option>`
            inf.innerHTML = ''
        } else {
            alert(`O número ${nu1} já foi adicionado`)
        }
    //numero que não está entre 1 e 100
    } else{
      alert('escreva um número entre 1 e 100')
    }
      nu.value =  ''
      nu.focus()
}


function fim(){
    if(val.length == 0){
        alert('Digite um número!')
    } else{
        var soma = 0
        var maior = val[0]
        var menor = val[0]
        for(var pos in val){
            soma += (val[pos])
            if(val[pos] > maior)
            maior = val[pos]
            if(val[pos] < menor)
            menor = val[pos]
        }
        var media = soma / val.length

        inf.innerHTML = `<p>Ao todo, temos ${val.length} números cadastrados</p>`
        inf.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        inf.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        inf.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        inf.innerHTML +=`<p>A média dos valores é ${media.toFixed(2).replace('.', ',')}</p>`
    }
}