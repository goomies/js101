# ✅ Global Plan: 100 JavaScript Exercises + Angular Context

## 🧩 Structure:

- 🟢 **Level 1: Fundamentals (Beginner)** – 30 exercises
- 🟠 **Level 2: Intermediate** – 40 exercises
- 🔴 **Level 3: Advanced / Expert** – 30 exercises

> 💡 **Angular Note**: Angular (v20) will be referenced whenever a JavaScript concept has a direct implication or needs a specific adaptation in Angular.

---

## 🟢 Level 1 — JavaScript Fundamentals (30 exercises)

### 🔹 Variables, Types, Operators (6)

- Declare variables using `var`, `let`, `const`.
- Create a function to identify the type of a variable.
- Perform explicit conversions (`parseInt`, `Number`, etc.).
- Handle booleans, `null`, `undefined`.
- Build a basic calculator (`add`, `sub`, `mult`, `div`).
- Check if a variable is empty (`null`, `undefined`, `0`, `""`, `[]`, `{}`).

### 🔹 Conditions and Loops (6)

- Create a function `isAdult(age)` that returns `true` or `false`.
- `for` loop to display numbers from 1 to 10.
- Display even values from an array.
- Classic FizzBuzz challenge.
- Use `while` to count down.
- Count vowels in a string.

### 🔹 Functions (7)

- Write an arrow function and a regular function doing the same task.
- Use default parameters.
- Create a function that returns another function.
- Implement `repeat(fn, n)` that calls `fn` `n` times.
- Simple closure: a counter that remembers its value.
- Currying: `sum(1)(2)(3)`
- Create a function that accepts a callback (simple callback hell).

### 🔹 Arrays and Objects (6)

- Filter numbers > 10 from an array.
- Map an array of names to uppercase.
- Sum an array using `.reduce`.
- Sort an array of objects by age.
- Extract a property from an object using destructuring.
- Merge two objects (`{...a, ...b}`).

### 🔹 DOM & JS in the Browser (5)

- Create a button that changes the background color.
- Add an `<li>` element to a list.
- Remove a DOM element on click.
- Show an alert after 3 seconds (`setTimeout`).
- Display current time in real-time (`setInterval`).

> ⚠️ **Angular Note**: Direct DOM manipulation is forbidden in Angular. Use the renderer, directives, or data binding (`[property]`, `(event)`).

---

## 🟠 Level 2 — Intermediate (40 exercises)

### 🔸 Advanced Array/Object Manipulation (7)

- Deep clone an object (without `structuredClone`).
- Implement `Object.entries()` manually.
- Create a unique array using `Set`.
- Build a dictionary using `Map`.
- Remove falsy values from an object.
- Merge arrays without duplicates.
- Nested destructuring (object within object).

### 🔸 Strings and RegEx (5)

- Reverse a string.
- Count words in a sentence.
- Validate an email with RegEx.
- Find dates in a text.
- Mask part of a credit card number (e.g., `****1234`).

### 🔸 Advanced Functions (6)

- Recursion: factorial.
- Recursion: sum values in a nested array.
- Custom `debounce` function.
- `throttle` function.
- Memoization function (caching results).
- Execute a series of promises in sequence.

> ℹ️ **Angular Note**: `debounce`, `throttle` are especially useful with RxJS `debounceTime`, `throttleTime`.

### 🔸 Asynchronous (8)

- Manually create a promise.
- Simulate an API request with `setTimeout`.
- Use `Promise.all`, `Promise.race` with multiple timeouts.
- `async/await`: retrieve data sequentially.
- Handle errors with `try/catch`.
- Create a loader that waits 2 seconds before displaying.
- Simulate an API request with loading/success/error states.
- Call a public API (e.g., weather API).

> ⚠️ **Angular Note**: In Angular, you use `HttpClient` with `Observable`. Never use `fetch`, but understanding it is crucial.

### 🔸 Forms and Storage (6)

- Build an HTML+JS form to capture a name.
- Store the value in `localStorage`.
- Retrieve stored data on page reload.
- Clear input fields after submission.
- Show an error if the input is empty.
- Validate an email address and minimum length.

> 💡 **Angular Note**: In Angular, forms are handled with `ReactiveFormsModule` or `FormControl`. Still, vanilla JS helps you understand the fundamentals.

### 🔸 Modules and Structure (4)

- Create two JS files: one exports a function, the other imports it.
- Use `export default` vs `export const`.
- Create a module with utility functions (`utils.js`).
- Organize code like an Angular module (no framework).

---

## 🔴 Level 3 — Advanced / Expert (30 exercises)

### 🔴 Advanced JS / Design Patterns (8)

- Simple observer pattern (`event emitter`).
- Singleton pattern using closures.
- Factory function to create user objects.
- Encapsulation using `Symbol` or `WeakMap`.
- Validate object properties using `Proxy`.
- Use `Object.defineProperty`.
- Create a plugin system in JS.
- Observe multiple events with a subscribe system.

> 💡 **Angular Note**: Angular heavily uses the **Observer** pattern (RxJS) and **Dependency Injection** — understanding them is key.

### 🔴 Generators, Symbols, Iterators (5)

- Manually create an iterator for a collection.
- Use `function*` to generate unique IDs.
- Create a pausable function using `yield`.
- Redefine `for...of` behavior.
- Add a custom `Symbol.iterator` to an object.

### 🔴 Browser, Performance, Security (6)

- Use `window.performance.now()` to measure time.
- Analyze and optimize a blocking task.
- Break up heavy tasks using `setTimeout(0)` (microtasks).
- XSS: inject HTML into an unprotected area.
- Sanitize input to protect from injection.
- Limit button spam clicks.

### 🔴 Modern Web APIs (5)

- Use `IntersectionObserver` for lazy loading.
- Use `MutationObserver` to detect DOM changes.
- Use `Clipboard API` to copy text.
- Use `Notification API` to trigger system alerts.
- Store a file in `IndexedDB`.

> 💡 **Angular Note**: Angular may offer wrappers for these APIs, but knowing the raw JS APIs is essential.

### 🔴 Angular-Specific JavaScript (10)

- Understand how Angular handles reactivity with **Zone.js**.
- How Angular detects changes (Change Detection).
- Why you shouldn't manipulate the DOM directly in Angular.
- Create a custom directive and inject `ElementRef`.
- Create an Angular service and inject it into a component.
- Observe a `FormControl` using `valueChanges`.
- Difference between `ngOnInit` and a constructor.
- Use `setTimeout` in Angular — good or bad practice?
- Bind an `@Input()` with a custom setter.
- Create a pure JS function that could become an Angular pipe.
