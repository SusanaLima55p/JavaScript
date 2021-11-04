function somar(){
    var nu1 = window.document.getElementById('txtn1')
    var nu2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(nu1.value)
    var n2 = Number(nu2.value)
    var s = n1+n2
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${s}</strong>.`
}