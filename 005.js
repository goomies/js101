/*
Exercise 5: Basic Calculator Functions
✅ Variables, types, operators

Task:  
Create four functions: add, subtract, multiply, divide.  
Each takes two numbers and returns the result.

🔎 Explanation:  
Use basic arithmetic operators +, -, *, /.

🔗 Angular:  
Logic in services for reusability.
*/
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "Error: Division by zero";
}

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 5)); // 2
console.log(divide(10, 0)); // Error: Division by zero
