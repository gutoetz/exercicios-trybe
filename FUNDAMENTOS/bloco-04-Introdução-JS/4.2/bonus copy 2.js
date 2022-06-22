let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = []
for(let i = 0; i < array.length; i++){
  if(i < array.length-1){arr.push(array[i]*array[i+1])}
  else{arr.push(array[i]*2)}
}
console.log(arr)
