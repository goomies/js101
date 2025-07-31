/*
Exercise 3: String to Number Conversion
✅ Variables, types, operators

Task:  
Convert the following strings to numbers using `Number()`, `parseInt()`, and `parseFloat()`:
- "42",  
- "3.14",  
- "100px".

Display results and types.

🔎 Explanation:  
parseInt stops parsing at first non-digit, parseFloat handles decimals.

🔗 Angular:  
Use pipes to format numbers in templates.
*/
const str1 = "42";
const str2 = "3.14";
const str3 = "100px";

console.log(Number(str1), typeof Number(str1)); // 42 number
console.log(parseInt(str3), typeof parseInt(str3)); // 100 number
console.log(parseFloat(str2), typeof parseFloat(str2)); // 3.14 number
