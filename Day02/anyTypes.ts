export{}
// Any types
let age: any = 10
age = {a:"b"}
age = [1, 2, 3]
age = "dung"
let mixed: any[] = []
mixed.push(2)
mixed.push(false)
mixed.push('Kaka')
console.log(mixed)
let person : {name: any, age: any}
person = {
    name: 20,
    age: "dung"
}