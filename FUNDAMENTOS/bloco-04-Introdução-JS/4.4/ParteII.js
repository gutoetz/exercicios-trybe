// ex 1 

function palindromo(palavra){
    if(palavra === palavra.split("").reverse().join("")){
    return true
    } else {
        return false
    }
} console.log(palindromo("cansado"))

//ex 2

function indic(arr){
    let ind = 0;
    let numa = arr[0];
    for(num of arr){
        if(arr[num] >= numa){
            ind = num;
            numa = arr[num];
        }
    }
    return ind+1
} console.log(indic([2, 3, 6, 7, 10, 1,555]))

// ex3

function indic(arr){
    let ind = 0;
    let numa = arr[0];
    for(num of arr){
        if(arr[num] <= numa){
            ind = num;
            numa = arr[num];
        }
        console.log(num)
        console.log(arr[num])
    }

    return ind
} console.log(indic([2, -3221, 6, 7, 10, 1,555,-1]))


// ex 4

function maiorNome(arr){
    let letras = 0;
    let maior = ""
    for(nome in arr){
        if(arr[nome].length > letras){
            maior = arr[nome]
            letras = arr[nome].length
        }
    }
    return maior
} console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
// ex 5
function maior(array) {
  let mais = 0;
  let numero = 0;
  for (let i = 0; i < array.length; i++) {
    let contador = 0;
    for (let i2 = 0; i2 < array.length; i2++) {
      if (array[i] === array[i2]) {
        contador += 1;
      }
    }
    if (contador > mais) {
      numero = array[i];
      mais = contador;
    }
  }
  return numero;
}
console.log(maior([2, 3, 2, 5, 8, 2, 3]));

// ex 6
function somaFatorial(numero) {
  let sum = 0;
  for (let i = 1; i <= numero; i++) {
    sum += i;
  }
  return sum;
}
console.log(somaFatorial(5));

// ex 7

function string(stringWord,stringEnd){
if(stringEnd === stringWord.slice(-stringEnd.length)){return true}
else{return false}
}
console.log(string("xxxxxxxxxxxxxxxxxxxxxxxxxxytwfdsadfa","dfa"))
