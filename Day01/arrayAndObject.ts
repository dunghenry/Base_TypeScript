export {};
var x = 1;
console.log(x);
const names = ['dung', 'mai', 'nam'];
console.log(typeof(names))
names.push('hoang');
console.log(names);
console.log(Array.isArray(names));
// names.push(2);
// !Ko thể thêm phần tử bằng kiểu dl number vì arr hiện tại là string
let numbers = [1, 2, 3, 4];
numbers.unshift(7);
// Thêm phần tử đầu mảng
console.log(numbers)
numbers.shift()
// ! Xóa phần tử đầu mảng
console.log(numbers)
numbers.pop();
// Xóa phần tử cuối mảng
console.log(numbers)
let mixed = [1, 'dung', true];
mixed[3] = false;
console.log(mixed)
let person = {
    name: 'Dung',
    age: 20,
    isStudent: false
}
person.name = "hoang"
// person.hobbies = "readbook"
// ! Không thể thêm prototy
console.log(person)
person = {
    name: "Dung",
    age: 30,
    isStudent: false,
    // skillss: 'JS'
}
