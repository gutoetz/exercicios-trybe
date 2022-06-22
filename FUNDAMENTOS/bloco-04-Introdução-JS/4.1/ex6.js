function peças(a){
    if(a.toLowerCase() === "bishop"){return "diagonals"}
    else if(a.toLowerCase() === "horse"){return "2 houses to left, rigth, up or down and one to the left or right"}
    else if(a.toLowerCase() === "king"){return "any direction 1 house"}
    else if(a.toLowerCase() === "queen"){return "any direction how much houses she wants, but can't go over other parts"}
    else if(a.toLowerCase() === "tower"){return "how much houses he wants, but only in the 4 directions"}
    else if(a.toLowerCase() === "pawn"){return "1 house forward or 2 in the begining"}
}
console.log(peças("queen"))