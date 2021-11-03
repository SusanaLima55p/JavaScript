var nome = prompt('Qual é o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiúsculas é <strong>${nome.toUpperCase()}</strong>. <br>`)
document.write(`Seu nome em minúsculas é <strong>${nome.toLowerCase()}</strong>.`)