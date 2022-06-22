let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let imp = []
for(index = 0; index < numbers.length; index++){
    sum+= numbers[index]
    console.log(numbers[index])
    if(numbers[index] % 2 !== 0){imp.push(numbers[index])}
}
let med = sum/numbers.length
console.log("soma = ", sum)
console.log("media aritmetica = ", med)
if(med > 20){console.log("valor maior q 20")}
else {console.log("valor menor q 20")}
let maior = numbers[0]
for(let i = 0; i < numbers.length; i++){
 if(numbers[i] > maior){maior = numbers[i]}
}
console.log(maior)
let menor = numbers[0]
for(let i = 0; i < numbers.length; i++){
 if(numbers[i] < menor){menor = numbers[i]}
}
console.log(menor)
if(imp.length === 0){console.log("nenhum valor impar encontrado")}
else{console.log(imp.length," numeros impares encontrados")}
let arr = []
let arr2 = []
for(let ind = 1; ind <= 25; ind++){
    arr.push(ind)
    arr2.push(ind/2)
}
console.log(arr)
console.log(arr2)