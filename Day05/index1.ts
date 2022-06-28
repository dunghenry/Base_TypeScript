import { KhachHang, DiaChi } from './classInterFace';
import { Print } from './interFaceForClass1';

const KhachHangA: Print = new KhachHang("Dũng", 20, "Nam")
const DiaChiKhachHangA: Print = new DiaChi("Như Hòa", "Kim Sơn", "Ninh Bình")
const Arr: Print[] = []
Arr.push(KhachHangA, DiaChiKhachHangA)
console.log(Arr)