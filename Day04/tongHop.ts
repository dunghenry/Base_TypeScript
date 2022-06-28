export{}
// ! Cách 1
class Employee{
    public name: string
    private age: number
    readonly male: boolean
    constructor(name: string, age: number, male:boolean){
        this.name = name,
        this.age = age,
        this.male = male
    }
    print(){
        return 
    }
}

//? Cách 2
export class employee {
    constructor(
        public name: string,
        public age: number,
        public male: boolean
    ){}
    print(){
        return `${this.name}, ${this.age}, ${this.male}`
    }
}
const dung = new employee('dung', 20, true);
console.log(dung);
const mai = new employee('mai', 30, false)
console.log(mai);
let EMPLOYEE: employee[] = []
EMPLOYEE.push(dung)
EMPLOYEE.unshift(mai)
console.log(EMPLOYEE)
let number : Function
number = () =>{
    console.log("Hello");
}
number();

let sum : Function
sum = (a: number, b: number, c: number) =>{
    return a + b + c
}
console.log(sum(1, 2, 3))


type NumberOrString = number | string
let id: NumberOrString
id = '123'
console.log(id + 123);

type Students = {name: string, age: number, id: NumberOrString}
let sva : (students: Students) =>void
// ! Cách 1
// sva = ({name, age, id} :Students) =>{
//     console.log(`${name}`) 
// }

// ! Cách 2
sva = (myStudent: Students) =>{
    console.log(`${myStudent.name}`) 
}
sva({name: "Dũng", age: 20, id: 123})