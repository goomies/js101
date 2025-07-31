/*
Exercise 1: Declaration and Variable Types
✅ Variables, types, operators (1–6)

Task:  
Declare three variables:  
- a constant firstName,  
- a variable age,  
- a constant array of favorite colors.  
Display their types using typeof.

🔎 Explanation:  
typeof returns "object" for arrays because in JS, arrays are objects except for primitives.

🔗 Angular:  
Avoid var, prefer const and let (like in TypeScript).
*/
const firstName = "Lucas";
let age = 25;
const colors = ["blue", "red", "green"];

console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof colors); // object
