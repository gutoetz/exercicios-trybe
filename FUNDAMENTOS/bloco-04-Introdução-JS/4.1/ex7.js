function nota(a){
    if(a > 100 || a < 0){return "nota bugada"}
    else if(a >= 90){return "A"}
    else if(a >= 80){return "B"}
    else if(a >= 70){return "C"}
    else if(a >= 60){return "D"}
    else if(a >= 50){return "E"}
    else if(a < 50){return "F"}
    
}
console.log(nota(101))