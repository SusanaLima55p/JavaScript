function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    //campo vazio
    if ( ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    
    } else {
        //campos preenchidos
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        //passo 0
        if ( p <= 0 ){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if( i < f){
            //contagem crescente
            for( var c = i; c <= f; c += p ){
                res.innerHTML += ` ${c}👉  ` 
            }
       
        } else {
            //contagem regressiva
            for( var c = i; c >= f; c -= p ){
                res.innerHTML += ` ${c}👉  `
            }
        }
         res.innerHTML += `🏁`
        
    }
}
