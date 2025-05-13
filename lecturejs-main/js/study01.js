// data type
console.log("object");
// data number
console.log(123456);
// data boolean
console.log(true);
// data Array
console.log([1,2,3]);
// data object
console.log({Fullname:"Wong",a:1,b:2});
// data null
console.log(null);
// data undefined
console.log(undefined);

var a = 10;
var b = 20;
var c = a + b;
const PI = 3.14;
console.log(c);

var aa = 10; //เป็นแบบ __Global__ ใช้ที่ใหนก็ได้
let bb = 20; //เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น
const P45 = 3.14; //ไม่สามารถเปลี่ยนค่าได้ เป็นแบบ LOcal  ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น

let data01 ="wow";
let data02 =123456;
//เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log("aaa"+555+data01+data02);
console.log(`aaa${555}${data01}${data02}bbb`);