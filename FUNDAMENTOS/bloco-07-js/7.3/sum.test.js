// sum.test.js
const sum = require("./script");
const myRemove = require("./script");
const myFizzBuzz = require("./script");
const searchEmployee = require("./script");
// describe("testes sum", () => {
//   test("sums two values", () => {
//     expect(sum(4, 5)).toBe(9);
//     expect(sum(0, 0)).toBe(0);
//   });
//   test("sums two wrong values", () => {
//     expect(() => {
//       sum(4, "5");
//     }).toThrow("parameters must be numbers");
//   });
// });

// describe("testes array", () => {
// test('teste com numeros', () =>{
//     expect(myRemove([1,2,3,4],3)).toEqual([1,2,4])
// });
// test('teste não retorna', ()=> {
//     expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4])
// })
// test('teste 3', ()=> {
//     expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
// })
//   });

// describe("testes fizzbuzz", () => {
//     test('Testando', () => {
//         expect(myFizzBuzz(15)).toEqual('fizzbuzz')
//     })
//     test('Testando2', () => {
//         expect(myFizzBuzz(3)).toEqual('fizz')
//     })
//     test('Testando3', () => {
//         expect(myFizzBuzz(5)).toEqual('buzz')
//     })
//     test('Testando', () => {
//         expect(myFizzBuzz(4)).toEqual(4)
//     })
//     test('Testando', () => {
//         expect(myFizzBuzz('dsadas')).toEqual(false)
//     })
//   });

describe('Testes', () => {
 test('Teste 1', () => {
    expect(searchEmployee('4678-2', 'lastName')).toEqual('Dodds')
 })
 test('teste 2', () => {
    expect( () => searchEmployee('23332', 'lastName')).toThrow('Id Invalido')
 })
 test('teste 2', () => {
    expect( () => searchEmployee('4678-2', 'lsastName')).toThrow('Invalido detail')
 })
})