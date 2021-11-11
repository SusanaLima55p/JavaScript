var num = [8, 1, 7, 4, 2, 9]
num.sort()

//console.log(num) --> fomatação com colchetes mesma linha.

/*
--> cada valor em uma linha própria, porém pouco prático de escrever comando.
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

/*estrutura de repetição para mostrar todos os valores dentro da variável.
Funciona para qualquer número de elementos

for(var pos = 0; num.length; i++){
    console.log(`A possição ${pos} tem o valor ${num[pos]}`)
}

-->foma mais facil
for(var pos in num){
    console.log(`A possição ${pos} tem o valor ${num[pos]}`)
    }    
}*/
var pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

