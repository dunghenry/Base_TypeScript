import { Print } from "./interFaceForClass1";
export  class KhachHang implements Print{
    constructor(
        public name: string,
        public age: number,
        public gioitinh: string
    ){}
    print(){
        return `Tôi là ${this.name} năm nay ${this.age} và giới tính của tôi là ${this.gioitinh}`
    }
}
export class DiaChi implements Print{
     constructor(
        public Tinh: string,
        public Huyen: string,
        public Xa: string
    ){}
    print(){
        return `Địa chỉ nhà tôi là: ${this.Xa}-${this.Huyen}-${this.Tinh}`
    }
}