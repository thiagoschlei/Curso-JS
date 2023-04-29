let num = [5,8,4]
num[3] = 6
num.push(7)

for (let pos=0; pos < num.length ; pos++){
    console.log('A posição '+pos+' tem o valor '+ num[pos])
}
/*
for (let pos in num)
    console.log('A posição '+pos+' tem o valor '+ num[pos])
*/