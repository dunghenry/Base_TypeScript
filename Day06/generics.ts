// import { employee } from './Day04/tongHop';
type strArr = Array<string>
type numArr = Array<number>

const last = (arr: numArr)=> arr[arr.length - 1]
const l1 = last([1, 2, 3])
console.log(l1)
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l2 = lastT([1, 2, 4])
console.log(l2)
const l3 = lastT(["a", "aa", "aaa"])
console.log(l3)
const l4 = lastT<string>(['a', 'b', 'c'])
console.log(l4)


const makeArrT = <T>(x: T) =>[x]
const m1 = makeArrT('a')
const makeArrXY = <X, Y>(x: X, y: Y)=>[x, y]
const m2 = makeArrXY(5, 6)
const m3 = makeArrXY('a', 'b')

const makeTuple = <X, Y>(x: X, y: Y):[X, Y] => [x, y]
const m4 = makeTuple('x', 10)
const m5 = makeTuple<string, number>('D', 8)
const m6 = makeTuple<string | null, number>(null, 5)

const makeTupleWidthDefault = <X, Y = number>(x: X, y: Y): [X, Y] =>[x, y]
const m7 = makeTupleWidthDefault<string | null>('a', 5)
console.log(m1, m2, m3, m4, m5, m6, m7)



// const makeFullName = obj =>({
//     ...obj,
//     fullName: `${obj.firstName} ${obj.lastName}`
// })

const makeFullNameConstraint = (obj: {
    firstName: string
    lastName: string
}) =>({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}` 
})

const n1 = makeFullNameConstraint({firstName: "Dũng", lastName:"Trần"})
console.log(n1);

const makeFullNameConstraintWidthGenerics = <T extends {firstName: string, lastName: string}>(obj:T)=>({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}` 
})
const n2 = makeFullNameConstraintWidthGenerics({firstName:"Nam", lastName: "Vũ", age: 20, gender: 'male'})
console.log(n2)

const addNewEmployee = (employee: object)=>{
    const uid =Math.floor(Math.random() * 100)
    return{
        ...employee,
        uid
    }
}
const Epl1 = addNewEmployee({name: "Dũng", age: 20})
console.log(Epl1);

const addNewEmployeeT = <T extends object>(employee: T)=>{
    const uid =Math.floor(Math.random() * 100)
    return{
        ...employee,
        uid
    }
}
const Epl2 = addNewEmployeeT({name: "Nam", age: 30})
console.log(Epl2)
console.log(Epl2.name)

const addNewEmployeeConstraintT = <T extends {name: string}>(employee: T)=>{
    const uid =Math.floor(Math.random() * 100)
    return{
        ...employee,
        uid
    }
}
const Epl3 = addNewEmployeeConstraintT({name: "Mai", age: 20})


interface Resource<T>{
    id: number
    name: string
    data: T
}
const resourceOne : Resource<string> = {
    id: 1,
    name: "Hotel",
    data: "Data 1"
}
console.log(resourceOne)

type NumberResource = Resource<number[]>

const numbers :NumberResource ={
    id: 1,
    name: "Hotel",
    data: [1, 3, 4]
}
console.log(numbers)
