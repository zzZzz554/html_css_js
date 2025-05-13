//  operator ตัวดำเนินการ
//  + - * / % ** ++ --
console.log(10**20);

//  == != === !== > < >= <=
let a = 10;
let b = "10";
console.log(a*b);

console.log(a==b); //ไม่สนใจ type
console.log(a===b);//สนใจ type

console.log(a!=b);//ไม่สนใจ type
console.log(a!==b);//สนใจ type

a = 'Hello...';
console.log(a)
// Ternay Operator
// เงื่อนไข ? ค่าถ้าเป็นจริง : ค่าถ้าเป็นเท็จ
let score = 45;
let grade = score > 55 ? 'A' : 'B';
console.log(grade);

// Nullish Operator
// _____ ?? ____