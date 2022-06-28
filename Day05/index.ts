import { Invoice, Payment } from './classImplementsInterface';
import { hasPrint } from './interfaceForClass';
const documentOne: hasPrint = new Invoice("Vinamik", "drink milk", 200000)
const documentTwo: hasPrint = new Payment("Vietnam Airlines", 'fly', 2000000)
const allDocument: hasPrint[] = []
allDocument.push(documentOne, documentTwo)
console.log(allDocument)