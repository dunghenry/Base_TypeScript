export{}

let greet: Function
greet = () => console.log("Hello world")
greet()

let greets : (a: string, b: string) => void
greets = (name: string, greeting: string) =>
    console.log(`${name} says ${greeting}`);
greets('Dung', 'hello')

let caculate : (a: number, b: number, c: string) => void
caculate = (numOne: number, numTwo: number, action: string) => action === 'add' ? numOne + numTwo : numOne - numTwo
console.log(caculate(10, 20, 'add'))
console.log(caculate(10, 20, 'abc'))

type Students = {name: string, age: number}
let printStudent : (student: Students) => void
// printStudent = (myStudent: Students) =>{
//     console.log(`${myStudent.name} is ${myStudent.age} years old`)
// }
// ! Cách 1

printStudent = ({name, age}: Students) =>{
    console.log(`${name} is ${age} years old`)
}
// Cách 2
printStudent({name: "Dũng", age: 20})

const nam = {
    name: 'Nam',
    age: 30
}
printStudent(nam)