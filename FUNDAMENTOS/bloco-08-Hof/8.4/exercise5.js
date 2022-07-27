const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const containsA = (acc, curr) =>{
    for(let index = 0; index < curr.length; index +=1){
       if(curr[index].toLowerCase() === 'a'){acc += 1};
    } return acc
  }

  console.log(names.reduce(containsA, 0))