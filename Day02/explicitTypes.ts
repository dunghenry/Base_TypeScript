export{}
let myName:string = "Mai"
let age: number
let isAuthenticated: boolean
myName = 'Dung'
age = 20
isAuthenticated = false
let students: string[] = ['mai', 'dung', 'hoang']
students.push('Kaka')
console.log(students)
let mixed:(string|number|boolean)[]
mixed = [true, false, 'Dung']
mixed.push('Mai')
mixed.push(3)
console.log(mixed)
let id:string|number
id = 123
id = "123"
let hobby: 'book'|'music'
hobby = 'book'
let person: object
person = {name: 'henry', age: 20}
person = []
console.log(person)
let student:{
    name: string,
    age: number,
    isGood: boolean
}
student = {
    name: "Dũng",
    age: 30,
    isGood: false
}