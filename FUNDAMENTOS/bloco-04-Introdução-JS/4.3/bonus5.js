let camadas = 10;
let nBase = camadas*2 - 1;
let esp = (nBase - 1)/2
let espm = 1
for(let i = 0; i < camadas; i++){
   if(i === 0){ast = " ".repeat(esp) + "*" + " ".repeat(esp)
   esp = esp - 1}
   else if(i > 0 && i < camadas-1){ast = " ".repeat(esp) + "*" + " ".repeat(espm) + "*" + " ".repeat(esp)
   esp = esp -1
   espm = espm + 2}
   else if(i === camadas-1){ast = "*".repeat(nBase)}
   console.log(ast)
}
