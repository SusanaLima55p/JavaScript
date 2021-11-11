function criar(){
    var nu = document.getElementById('nu')
    var tabu = document.getElementById('tabu')

    if (nu.value == 0 || nu.value.length == 0){
        alert('O número escolhido não pode ser zero ou vazio!')
    } else {
        var n = Number(nu.value)
        tabu.innerHTML = ''
        tabu.innerHTML += `<option value="">Tabuada de ${n}</option>`
        tabu.innerHTML += `<option value="">${n} x 0 = 0 </option>`
        var f = 0

        for(var c = n; c <= n * 10; c += n){
            f +=1
            tabu.innerHTML += `<option value="tab${c}">${n} x ${f} = ${c}</option>`
            
        }
    }
}