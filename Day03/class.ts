export{}
class Employee{
    public name: string
    // Truy cập bên ngoài đc vào cũng đc thay đổi
    private age: number
    // Ngược lại vs public
    readonly male: boolean
    // Truy cập đc nhưng không thay đổi được
    constructor(n: string, a: number, m: boolean){
        this.name = n
        this.age = a
        this.male = m
    }
    print(){
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}
const dung = new Employee('Dũng', 20, true)
console.log(dung)
console.log(dung.name)
console.log(dung.male)
// console.log(dung.age)
dung.name = "Nam"
console.log(dung.name)
const mai = new Employee('Mai', 20, false)
console.log(mai.print())

class employee{
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ){}
    print(){
        return `Name: ${this.name}, Age: ${this.age}, Male: ${this.male}`
    }
}
const nam = new employee('Nam', 30, true)
console.log(nam.print())

let EMPLOYEE: Employee[] = []
EMPLOYEE.push(dung)
EMPLOYEE.push(mai)
EMPLOYEE.forEach(EMPLOYEE =>console.log(EMPLOYEE.name, EMPLOYEE.male, EMPLOYEE.print()))