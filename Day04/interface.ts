export{}
interface Person{
    name: string
    age: number
    speak(lang: string): void
    spend(amout: number): number
}
let dung: Person
dung = {
    name: "Dung",
    age: 20,
    speak(text: string):void{
        console.log(text)
    },
    spend(amt: number): number{
        return amt;
    }
}
console.log(dung)
const helloPerson = (onePerson: Person) =>{
    console.log(`Hello ${onePerson.name}`)
}
helloPerson(dung)