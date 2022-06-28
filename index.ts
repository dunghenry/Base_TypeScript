import { KhachHang, DiaChi } from './Day05/classInterFace';
import { Print } from './Day05/interFaceForClass1';

const KhachHangA: Print = new KhachHang("Dũng", 20, "Nam")
const DiaChiKhachHangA: Print = new DiaChi("Như Hòa", "Kim Sơn", "Ninh Bình")
const Arr: Print[] = []
Arr.push(KhachHangA, DiaChiKhachHangA)
console.log(Arr)
