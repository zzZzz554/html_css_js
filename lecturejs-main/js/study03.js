let data1 ='Hello....';
let data2 =20;
let data3 = true;

let data5 = {
    Fullname:"Wong",
    age :20,
    state :true,
    color :["black","white"],
    address :{
        no : "10/5",
        province:"Chonburi",
        city:"Chonburi",
        subdistrict:"Chonburi"
    }}

// Index number 0 1  2   3
let data4 = [  10,20,30,40];

console.log(data1,data2,data3);
console.log(data4[2]);
console.log(data4[3]);
data4[2] = 333;
console.log(data4[2]);

// เข้่าถึงข้อมูลทุกตัวของ _array
data4.forEach((value) => {
    console.log(value); 
})

console.log(data5.Fullname);
console.log(data5.age);
console.log(data5.color[0]);
console.log(data5.color[1]);
console.log(data5.address.no);
console.log(data5.address.province);
console.log(data5.address.city);
console.log(data5.address.subdistrict);