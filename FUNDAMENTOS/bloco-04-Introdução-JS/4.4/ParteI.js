// Exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem-vinda,",info.personagem)


//Exercicio 2
info['recorrente'] = "sim";
console.log(info)

//Exercicio 3

for(let chaves in info){
    console.log(chaves)
}

//Exercicio 4

for(let chaves in info){
    console.log(info[chaves])
}

//Exercicio 5

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
}

for(let chaves in info){
  if(chaves !== "recorrente"){console.log(info[chaves], "e",info2[chaves])}
  else{console.log("ambos recorrentes")}
}