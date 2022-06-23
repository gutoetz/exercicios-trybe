function primo(num){
    let div = 0;
    for(let i = 2; i <= num; i++){
       if(num % i === 0){div++}
    }
    if(div > 2){return "não é primo"}
    else{return "é primo"}
}
console.log(primo(11))