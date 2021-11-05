var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)

function clicar(){
    var res = window.document.getElementById('res')

    var nu = Number.parseFloat(prompt('Digite uma distância em metros (m)'))
    
    var c1 = nu / 1000
    var c2 = nu /100
    var c3 = nu /10
    var c4 = nu *10
    res.innerHTML = `<p>A distância de ${nu.toFixed(2).replace('.', ',')} metros, corresponde a...</p>
    <p>${c1.toFixed(3).replace('.', ',')} quilômetros (Km)</p> <p>${c2.toFixed(3).replace('.', ',')} hectômetros (Hm)</p> 
    <p>${c3.toFixed(3).replace('.', ',')} decâmetros (Dam)</p>
    <p>${c4} decímetros (dm)</p>
   ` 
}