//! Type basic
var Name = 'Dung';
var age = 20;
export{}
let square = (side: number) => side * side
console.log(square(2))
let a: Function
a = () => console.log("Hello world")
a();
const add = (b: number, c: number, d?:number | string) => {
    console.log(b + c);
    console.log(d)
}
add(10, 15, 1);
add(1, 2, 'dung')
// ? là không bắt buộc
const adDefault = (x: number, y: number, z:number | string = 10)=>{
    console.log("Sum la:", x + y);
    console.log(z);
}
adDefault(1, 2);
const minus = (k: number, l: number): number => k + l
minus(1, 2);




