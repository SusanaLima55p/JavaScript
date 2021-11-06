var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)

var botao = window.document.getElementById('botao')
botao.addEventListener('click', clicar)
  
function clicar ( )  {
  var me = prompt('Digite uma distância em metros (m)')
  var res = window.document.getElementById('res')
  res.innerHTML  =  `<h2> A distância ${me.replace('.', ',')} metros corresponde a ... </h2>`
  res.innerHTML  +=  `<p> ${ ( me  /  1000 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } milhas (Km). </p> `
  res.innerHTML  +=  `<p> ${ ( me  /  100 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } hectômetros (Hm). </p> `
  res.innerHTML  +=  `<p> ${ ( me  /  10 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } decâmetros (Dam). </p> `
  res.innerHTML  +=  `<p> ${ ( me  *  10 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } decímetros (dm). </p> `
  res.innerHTML  +=  `<p> ${ ( me  *  100 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } centímetro (cm). </p> `
  res.innerHTML  +=  `<p> ${ ( me  *  1000 ) . toLocaleString ( 'pt-br' ,  { style : 'decimal' } ) } milímetros (mm). </p> `

}