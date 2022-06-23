let n = 3
let nbase = 5;
let nas = (nbase-1)/2
let as = 1
if(nbase > 5){n = (nbase - n)/2 + n}
for(let i = 0; i < n; i += 1){
let ast = " ".repeat(nas) + "*".repeat(as) + " ".repeat(nas)
nas -= 1
as +=2
console.log(ast)
}