
var botao = document.querySelector('button')
botao.addEventListener('click', converter)

function converter(){
    var tem = Number(prompt('Digite uma temperatura em °C (celsius)'))
    var res = document.querySelector('article')
    var k = tem + 273.15
    var f = ((tem * 9/5)+32)
    res.innerHTML = `<p><strong>A temperatura de ${tem.toString().replace('.', ',')}°C, corresponde a...</strong></p>`
    res.innerHTML += `<p>${k.toFixed(2).replace('.', ',')}°K (Kelvin)</p>`
    res.innerHTML += `<p>${f.toFixed(2).replace('.', ',')}°F (Fahrenheit)</p>`
    
}