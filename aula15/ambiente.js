let num = [8, 5, 6, 3]
num[4] = 9
num.push(1)

console.log(`Números no meu vetor: ${num.sort()}`)
console.log(`Quantidade de posições no meu vetor: ${num.length}`)
console.log(`Qual a posição do numero 9: ${num.indexOf(9)}`)
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/


//Forma atual

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}