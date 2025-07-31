/*
Exercise 2: Check variable types including arrays
✅ Variables, types, operators

Task:  
Create a function `checkType(variable)` that returns:  
- "array" if the variable is an array,  
- otherwise returns typeof result.

🔎 Explanation:  
typeof returns "object" for arrays; use Array.isArray() to detect arrays.

🔗 Angular:  
TypeScript interfaces help avoid type confusion.
*/
function checkType(variable) {
  if (Array.isArray(variable)) {
    return "array";
  }
  return typeof variable;
}

console.log(checkType([1, 2, 3])); // array
console.log(checkType(123)); // number
console.log(checkType("hello")); // string
console.log(checkType({})); // object
