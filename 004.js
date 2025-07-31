/*
Exercise 4: Booleans, null, undefined
✅ Variables, types, operators

Task:  
Declare variables with values `true`, `null`, and `undefined`.  
Check their types with typeof and display them.

🔎 Explanation:  
typeof null returns "object" (JS quirk), typeof undefined returns "undefined".

🔗 Angular:  
Use strict null checks in TypeScript.
*/
const isActive = true;
const emptyValue = null;
let notDefined;

console.log(typeof isActive); // boolean
console.log(typeof emptyValue); // object
console.log(typeof notDefined); // undefined
