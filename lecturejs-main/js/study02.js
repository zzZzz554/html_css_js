//   Varuable 
var myData = 'Hello....'; //เป็นแบบ __Global__ ใช้ที่ใหนก็ได้  เปลี่ยนค่าได้
let myData2 = 20; //เป็นแบบ Local ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น เปลี่ยนค่าได้

const myData3 = 'Wow....'; //ไม่สามารถเปลี่ยนค่าได้ เป็นแบบ LOcal  ใช้ได้เฉพาะใน { } หนึ่งๆเท่านั้น

{
    var a = 1
    let b = 2
    const c = 3
    {
     var x = 4
     let y = 5
     const z = 6
     console.log(a,b,c,x,y,z)
    }
    console.log(a,b,c,x)
    // console.log(y,z) ERROR
}
console.log(a,x)
// console.log(b,c,y,z) ERROR
