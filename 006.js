/*
Exercise 6: Check if a variable is empty (falsy)
✅ Variables, types, operators

Task:  
Create a function `isEmpty(value)` that returns true if the value is falsy:  
null, undefined, 0, "", false, NaN, or empty array/object.

🔎 Explanation:  
Falsy values convert to false in Boolean context.

🔗 Angular:  
Validators ensure inputs are not empty.
*/
function isEmpty(value) {
  if (value == null) return true; // null or undefined
  if (typeof value === "boolean") return !value;
  if (typeof value === "number") return isNaN(value) || value === 0;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(0)); // true
console.log(isEmpty("")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty(false)); // true
console.log(isEmpty("hello")); // false
console.log(isEmpty([1, 2])); // false
