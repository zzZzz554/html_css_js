// break ใน loop ทำงานเมื่อไหร่จบเลย
// continue ใน loop ทำงานเมื่อไหร่ ถือว่าจบรอบนั้นไปรอบต่อไป

for (let i = 1; i < 5; i++) {
    console.log("Hello...");
}
for (let i = 1; i < 5; i++) {
    if(i==3) {break};
    console.log("Hello...");

}

