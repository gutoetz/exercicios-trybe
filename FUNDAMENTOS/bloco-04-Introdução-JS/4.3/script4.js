let mP = 2
for(let i = 2; i < 50; i++){
    let count = 0
 for(let i2 = 1; i2 <= i; i2++){
    if(i % i2 === 0){count++}
 }
 if(count === 2){
    if(i > mP){mP = i}
 }
}
console.log(mP)