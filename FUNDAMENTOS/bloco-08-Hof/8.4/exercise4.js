const books= require('../8.4/exercise2');

const longestNamedBook = (acc, curr) => acc.name.length > curr.name.length ? acc : curr
console.log(books.reduce(longestNamedBook))