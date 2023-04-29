let num = [5,8,4]
num[3] = 6
num.push(7)

console.log(num)
console.log("O vetor num é composto dos seguintes números: "+ num)
console.log("O vetor num possui "+ num.length +" elementos.")
console.log("O quarto elemento do vetor é o "+ num[3])
console.log("Em ordem crescente, o vetor fica da seguinte maneira: " +num.sort())

let pos = num.indexOf(7)
if (pos == -1){
    console.log('O valor não foi encontrado!') 
} else {
    console.log('O valor está na posição '+pos)
}