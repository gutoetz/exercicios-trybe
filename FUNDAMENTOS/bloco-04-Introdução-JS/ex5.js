function triangulo(a,b,c){
    if(a <= 0 || b <= 0 || c <= 0){return "Ângulo invalido"}
    else if (a+b+c !== 180){return false}
    else {return true}
}
console.log(triangulo(50,50,80))