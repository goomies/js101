# ✅ Global Plan: 100 JavaScript Exercises + Angular Context

## 🧩 Structure:

- 🟢 **Level 1: Fundamentals (Beginner)** – 30 exercises
- 🟠 **Level 2: Intermediate** – 40 exercises
- 🔴 **Level 3: Advanced / Expert** – 30 exercises

> 💡 **Angular Note**: Angular (v20) will be referenced whenever a JavaScript concept has a direct implication or needs a specific adaptation in Angular.

---

## 🟢 Level 1 — JavaScript Fundamentals (30 exercises)

### 🔹 Variables, Types, Operators (6)

- [001.](./001.js) Declare variables using `var`, `let`, `const`.
- [002.](./002.js) Create a function to identify the type of a variable.
- [003.](./003.js) Perform explicit conversions (`parseInt`, `Number`, etc.).
- [004.](./004.js) Handle booleans, `null`, `undefined`.
- [005.](./005.js) Build a basic calculator (`add`, `sub`, `mult`, `div`).
- [006.](./006.js) Check if a variable is empty (`null`, `undefined`, `0`, `""`, `[]`, { }`).

### 🔹 Conditions and Loops (6)

- [007.](./007.js) Create a function `isAdult(age)` that returns `true` or `false`.
- [008.](./008.js) `for` loop to display numbers from 1 to 10.
- [009.](./009.js) Display even values from an array.
- [010.](./010.js) Classic FizzBuzz challenge.
- [011.](./011.js) Use `while` to count down.
- [012.](./012.js) Count vowels in a string.

### 🔹 Functions (7)

- [013.](./013.js) Write an arrow function and a regular function doing the same task.
- [014.](./014.js) Use default parameters.
- [015.](./015.js) Create a function that returns another function.
- [016.](./016.js) Implement `repeat(fn, n)` that calls `fn` `n` times.
- [017.](./017.js) Simple closure: a counter that remembers its value.
- [018.](./018.js) Currying: `sum(1)(2)(3)`
- [019.](./019.js) Create a function that accepts a callback (simple callback hell).

### 🔹 Arrays and Objects (6)

- [020.](./020.js) Filter numbers > 10 from an array.
- [021.](./021.js) Map an array of names to uppercase.
- [022.](./022.js) Sum an array using `.reduce`.
- [023.](./023.js) Sort an array of objects by age.
- [024.](./024.js) Extract a property from an object using destructuring.
- [025.](./025.js) Merge two objects (`{...a, ...b}`).

### 🔹 DOM & JS in the Browser (5)

- [026.](./026.js) Create a button that changes the background color.
- [027.](./027.js) Add an `<li>` element to a list.
- [028.](./028.js) Remove a DOM element on click.
- [029.](./029.js) Show an alert after 3 seconds (`setTimeout`).
- [030.](./030.js) Display current time in real-time (`setInterval`).

> ⚠️ **Angular Note**: Direct DOM manipulation is forbidden in Angular. Use the renderer, directives, or data binding (`[property]`, `(event)`).

---

## 🟠 Level 2 — Intermediate (40 exercises)

### 🔸 Advanced Array/Object Manipulation (7)

- [031.](./031.js) Deep clone an object (without `structuredClone`).
- [032.](./032.js) Implement `Object.entries()` manually.
- [033.](./033.js) Create a unique array using `Set`.
- [034.](./034.js) Build a dictionary using `Map`.
- [035.](./035.js) Remove falsy values from an object.
- [036.](./036.js) Merge arrays without duplicates.
- [037.](./037.js) Nested destructuring (object within object).

### 🔸 Strings and RegEx (5)

- [038.](./038.js) Reverse a string.
- [039.](./039.js) Count words in a sentence.
- [040.](./040.js) Validate an email with RegEx.
- [041.](./041.js) Find dates in a text.
- [042.](./042.js) Mask part of a credit card number (e.g., `****1234`).

### 🔸 Advanced Functions (6)

- [043.](./043.js) Recursion: factorial.
- [044.](./044.js) Recursion: sum values in a nested array.
- [045.](./045.js) Custom `debounce` function.
- [046.](./046.js) `throttle` function.
- [047.](./047.js) Memoization function (caching results).
- [048.](./048.js) Execute a series of promises in sequence.

> ℹ️ **Angular Note**: `debounce`, `throttle` are especially useful with RxJS `debounceTime`, `throttleTime`.

### 🔸 Asynchronous (8)

- [049.](./049.js) Manually create a promise.
- [050.](./050.js) Simulate an API request with `setTimeout`.
- [051.](./051.js) Use `Promise.all`, `Promise.race` with multiple timeouts.
- [052.](./052.js) `async/await`: retrieve data sequentially.
- [053.](./053.js) Handle errors with `try/catch`.
- [054.](./054.js) Create a loader that waits 2 seconds before displaying.
- [055.](./055.js) Simulate an API request with loading/success/error states.
- [056.](./056.js) Call a public API (e.g., weather API).

> ⚠️ **Angular Note**: In Angular, you use `HttpClient` with `Observable`. Never use `fetch`, but understanding it is crucial.

### 🔸 Forms and Storage (6)

- [057.](./057.js) Build an HTML+JS form to capture a name.
- [058.](./058.js) Store the value in `localStorage`.
- [059.](./059.js) Retrieve stored data on page reload.
- [060.](./060.js) Clear input fields after submission.
- [061.](./061.js) Show an error if the input is empty.
- [062.](./062.js) Validate an email address and minimum length.

> 💡 **Angular Note**: In Angular, forms are handled with `ReactiveFormsModule` or `FormControl`. Still, vanilla JS helps you understand the fundamentals.

### 🔸 Modules and Structure (4)

- [063.](./063.js) Create two JS files: one exports a function, the other imports it.
- [064.](./064.js) Use `export default` vs `export const`.
- [065.](./065.js) Create a module with utility functions (`utils.js`).
- [066.](./066.js) Organize code like an Angular module (no framework).

---

## 🔴 Level 3 — Advanced / Expert (30 exercises)

### 🔴 Advanced JS / Design Patterns (8)

- [067.](./067.js) Simple observer pattern (`event emitter`).
- [068.](./068.js) Singleton pattern using closures.
- [069.](./069.js) Factory function to create user objects.
- [070.](./070.js) Encapsulation using `Symbol` or `WeakMap`.
- [071.](./071.js) Validate object properties using `Proxy`.
- [072.](./072.js) Use `Object.defineProperty`.
- [073.](./073.js) Create a plugin system in JS.
- [074.](./074.js) Observe multiple events with a subscribe system.

> 💡 **Angular Note**: Angular heavily uses the **Observer** pattern (RxJS) and **Dependency Injection** — understanding them is key.

### 🔴 Generators, Symbols, Iterators (5)

- [075.](./075.js) Manually create an iterator for a collection.
- [076.](./076.js) Use `function*` to generate unique IDs.
- [077.](./077.js) Create a pausable function using `yield`.
- [078.](./078.js) Redefine `for...of` behavior.
- [079.](./079.js) Add a custom `Symbol.iterator` to an object.

### 🔴 Browser, Performance, Security (6)

- [080.](./080.js) Use `window.performance.now()` to measure time.
- [081.](./081.js) Analyze and optimize a blocking task.
- [082.](./082.js) Break up heavy tasks using `setTimeout(0)` (microtasks).
- [083.](./083.js) XSS: inject HTML into an unprotected area.
- [084.](./084.js) Sanitize input to protect from injection.
- [085.](./085.js) Limit button spam clicks.

### 🔴 Modern Web APIs (5)

- [086.](./086.js) Use `IntersectionObserver` for lazy loading.
- [087.](./087.js) Use `MutationObserver` to detect DOM changes.
- [088.](./088.js) Use `Clipboard API` to copy text.
- [089.](./089.js) Use `Notification API` to trigger system alerts.
- [090.](./090.js) Store a file in `IndexedDB`.

> 💡 **Angular Note**: Angular may offer wrappers for these APIs, but knowing the raw JS APIs is essential.

### 🔴 Angular-Specific JavaScript (10)

- [091.](./091.js) Understand how Angular handles reactivity with **Zone.js**.
- [092.](./092.js) How Angular detects changes (Change Detection).
- [093.](./093.js) Why you shouldn't manipulate the DOM directly in Angular.
- [094.](./094.js) Create a custom directive and inject `ElementRef`.
- [095.](./095.js) Create an Angular service and inject it into a component.
- [096.](./096.js) Observe a `FormControl` using `valueChanges`.
- [097.](./097.js) Difference between `ngOnInit` and a constructor.
- [098.](./098.js) Use `setTimeout` in Angular — good or bad practice?
- [099.](./099.js) Bind an `@Input()` with a custom setter.
- [100.](./100.js) Create a pure JS function that could become an Angular pipe.
