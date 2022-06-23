//se aumentar o valor de x, aumenta a piramide
let x = 5
let n = 3 + x
let nbase = 5 + x*2;
let nas = (nbase-1)/2
let as = 1
for(let i = 0; i < n; i += 1){
let ast = " ".repeat(nas) + "*".repeat(as) + " ".repeat(nas)
nas -= 1
as +=2
console.log(ast)
}

