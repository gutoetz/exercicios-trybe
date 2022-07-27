const books= require('../8.4/exercise2');

const averageAge = (acc, curr, index, arr) => {
    let currentAge = curr.releaseYear - curr.author.birthYear;
    if(index === arr.length - 1){return (acc+currentAge)/arr.length}
    return (acc+currentAge);
}
 
console.log(books.reduce(averageAge, 0))