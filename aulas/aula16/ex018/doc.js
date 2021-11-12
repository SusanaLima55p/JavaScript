
    var nu = document.getElementById('nu')
    var val = []

function adi(){
    var numeros = document.getElementById('numeros')
    var nu1 = nu.value
    function bus (nu1){
            res = val.indexOf(nu1)
            return res 
        }
    if(nu.value.length == 0){
        alert('Digite um número!')
    } else if(nu1 >= 1 && nu1 < 100) {
        bus(nu1)
        if(res == -1){
            val.push(nu1)
            numeros.innerHTML += `<option value="">Número ${nu1} adicionado</option>`
            
        } else {
            alert(`O número ${nu1} já foi adicionado`)
        }
  } else{
      alert('escreva um número entre 1 e 100')
  } 
  
}

var inf = document.getElementById('inf')
function fim(){
    val.sort()
    inf.innerHTML = `<p>Ao todo, temos ${val.length} números cadastrados</p>`
    inf.innerHTML += `<p>O maior número</p>`
    inf.innerHTML += `<p>O menor número informado foi ${val[0]}</p>`
     
    val.value
    
    inf.innerHTML += `Somando todos os valores temos ${soma}`
}