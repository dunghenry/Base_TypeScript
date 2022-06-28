export{}
const add = (a: number, b ?:number) => (b ? a + b : a)
// Nếu có b thì trả về a+b ngược lại thì trả về a
console.log(add(1, 2))
console.log(3)
const addNonNull = (a: number, b ?: number) => a + b!
// ! b! là bắt buộc phải truyền vào b ko thì làm như cách bên trên
console.log(addNonNull(2, 3))
console.log(addNonNull(2))