export{}
type StringOrNumber = string|number
type Students = {
    name: string
    id: StringOrNumber
}
const studentsDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has id ${id}`);
}
studentsDetails(123, "dung");
studentsDetails(456, 'Henry')
const greet = (user: Students) => console.log(`${user.name} width id ${user.id} says hello`)
greet({name: 'Dung', id: 123});