const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
const flattened = (acc, curr) => [...acc, curr];
console.log(arrays.reduce(flattened))