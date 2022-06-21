function venda(custo,venda){
    if(custo <= 0 || venda <= 0){return "valor negativo não"}
    let cT = custo * 1.2;
    let lucro = venda - cT;
    return "lucro de ", lucro
}
console.log(venda(30,90))