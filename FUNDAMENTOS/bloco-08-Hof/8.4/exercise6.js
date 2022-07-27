const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = students.map((element, index) => {
   let estudante = {};
   estudante.name = element
   estudante.average = grades[index].reduce((acc, curr, ind) => {
     if(ind === grades[index].length - 1){return (acc + curr)/grades[index].length}
     return acc + curr;
   })
   return estudante
});

console.log(expected)