# TS BASES

## Create a project

```bash
npm create vite
```

- Give a project name
- Select the framework
- Select the language

Install deps and run the program

```bash
npm i && npm run dev
```

---

## Project file system

.
├── README.md
├── README.md
├── node_modules -> dependencies files only upload dependencies
├── package-lock.json -> How node module was built
├── package.json -> project dependencies, important scripts
├── public
│   └── vite.svg
├── src -> Our app files
│   ├── bases
│   │   ├── 01-const-let.ts
│   │   ├── 02-template-string.ts
│   │   ├── 03-object-literal.ts
│   │   ├── 04-arrays.ts
│   │   ├── 05-functions.ts
│   │   ├── 06-obj-destructuring.ts
│   │   ├── 07-array-destructuring.ts
│   │   ├── 08-imp-exp.ts
│   │   ├── 09-promises.ts
│   │   ├── 10-fetch-api.ts
│   │   └── 11-async-await.ts
│   ├── data
│   │   ├── giphy.response.ts
│   │   └── heroes.data.ts
│   ├── main.ts
│   ├── style.css
│   └── vite-env.d.ts
└── tsconfig.json -> TS configurations, how we want TS works in our project

### package.json scripts

dependencies and generalities

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
```

## const let scope variables

const is light because is not mutable.

### What is the scope

**What is “Scope”?**

Scope answers one question:

“Where in the code can I use this variable?”

Imagine your code is a house:
Some variables live in the whole house → you can use them anywhere.

Some variables live only inside a room → you can’t use them outside that room.

Rooms = blocks ({ }), functions, loops, etc.

- var, let, and const

These are the 3 ways to create variables in Ts.

Let’s understand them like personalities.

var → The “old-school” variable

It is function-scoped, not block-scoped.

It ignores { } blocks.

It allows redeclaration (declaring again without error).

Example:

```ts
if (true) {
  var x = 10;
}

console.log(x); // 10 ← leaks outside the block
```

var escapes the block—this is why it causes bugs.

let → The “normal, modern” variable

It is block-scoped → stays inside { }

You cannot redeclare it in the same scope

You can change its value

Example:

```ts
if (true) {
  let y = 20;
}

console.log(y); //!ERROR: y is not defined
```

let stays inside its room
const → The “constant”

- It is block-scoped (like let)
- You cannot redeclare
- You cannot reassign the variable

But!

You can modify the inside of objects or arrays.

Example:

```ts
const z = 5;
z = 10; // ERROR: cannot reassign

With objects:
const person = { name: "Ana" };
person.name = "Luis"; // allowed
```

const protects the variable reference, not the data inside.

**Summary (super simple)**

| Keyword | Scope    | Can Change Value? | Can Redeclare? | Notes                     |
| ------- | -------- | ----------------- | -------------- | ------------------------- |
| var     | Function | Yes               | Yes            | Old, avoid                |
| let     | Block    | Yes               | No             | Most common               |
| const   | Block    | No                | No             | Use for constants/objects |

---

## Types

These are the fundamental building blocks of values.
They are simple, not objects, and are stored directly in memory.

The core primitive types in TypeScript are string, number, boolean, null, undefined, bigint, and symbol.

**Quick Memory Trick**

Here's a simple phrase to remember the primitive types:
“S N B N U B S”

S → string
N → number
B → boolean
N → null
U → undefined
B → bigint
S → symbol

Bonus: Non-primitive but very important in TS object
Anything that is not a primitive.

```ts
let user: object = { name: "Ana" };
```

- #### any

  Turns off type checking.
  (Not recommended for beginners.)

- #### unknown
  Safer alternative to any.

## Template string

A template string (also called template literal) is a special way to create strings in Ts using backticks instead of quotes.

We can to insert variables in to string:

```ts
const name = "Daniel";
console.log(`Hello, ${name}!`);
```

- Show variables inside strings
- Multiline
- Can I do expressions

## Literal Objects

An Object Literal is the simplest and most common way to create an object in TS.

It’s called “literal” because you literally write the properties directly in the code.

ideally create with a const.

**What is an Object?**

An object is a collection of key–value pairs.

Example of a real-world object:
A person has:

- name
- age
- country

In TS, we write it like this:

```ts
const person = {
  name: "Ana",
  age: 25,
  country: "Spain",
};
```

This is an object literal.

No classes, no constructors—just { }.

objets in ts, ever pass as references. Whaaat means:

Objects in TypeScript don’t get copied — the variable only holds a reference to the real object. So if you modify the object through any reference, you modify the original one.

### Spread operator:

The spread operator (...) expands arrays or objects into their individual elements, making it easier to copy, merge, and pass data.

```ts
const spiderman = { ...person }; // create a 'copy'
```

Breaks references to first level if the obj has multileves dont works.

to do a deep obj copy use

```ts
const spiderman = structuredClone(ironman);
```

## Interfaces

An interface in TypeScript is a way to describe the shape of an object — what properties it has and what types those properties must be.

Think of it like a blueprint or a contract that objects must follow.

when transpilations (pass ts code to js code) occur, the interfaces dont exists in a js code, finally the navigator only use a js code

use UpperCameCase

### Simple definition

An interface defines the structure of an object so TypeScript can check that your data matches that structure.

## Functions

The functions has two ways to declare

```ts
function greet(name: string): string {
  return `Hola ${name}`;
}
```

- **It is hoisted**: You can call it before it is written in the code.

**What is Hoisting?**

Hoisting means:

JavaScript moves some declarations to the top of the code before it runs.

This means you can use a function before you write it — but only with function declarations.

```ts
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

- **Has its own this**: Function declarations create their own this context.
- Better when you want named functions.
  -Good for clarity and debugging.

--

```ts
const greet2 = (name: string) => `Hola ${name}`;
```

- NOT hoisted like function declarations
- Arrow functions do NOT have their own this
- Assigned to a variable
- Great for callbacks, events, and simple functions.

--

Use function when you need hoisting or its own this.

Use arrow functions for short, modern, predictable behavior (most common today, especially in React).

## Object destructuring

Destructuring is a way to quickly extract values from arrays or properties from objects and assign them to variables.

order values dont matter on objects

```ts
const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { key, name: ironmanName, age } = person;
```

## Array destructuring

Array destructuring is a fast way to extract values from arrays using their position, making your code shorter and easier to read.

```ts
const characterNames = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = characterNames;

console.log({ trunks });
```

the order is important.

| Feature          | Array Destructuring                | Object Destructuring           |
| ---------------- | ---------------------------------- | ------------------------------ |
| Based on         | **Position**                       | **Property name**              |
| Skip values      | ✔ Yes                              | No (you must name them)        |
| Rename variables | No                                 | ✔ Yes (`name: newName`)        |
| Rest operator    | ✔ Yes (`...rest`)                  | ✔ Yes (`...rest`)              |
| Common use       | Arrays, return values, React state | Objects, props, config objects |

## Interface and enums

- Interfaces

Definition: A blueprint that describes the shape of an object (what properties and methods it must have).
Usage: Used to type-check objects, functions, classes, and React props.

- Types

Definition: A more flexible way to create your own custom types.
Usage: Can describe objects, unions, primitives, function signatures, and more.

Interfaces = mostly for objects
Types = can describe anything

- Enums

Definition: A special type that represents a set of named constant values.
Usage: Used when you need predefined options like roles, states, or modes.

Example: "admin" | "user"
→ with enum → enum Role { Admin, User }

- Classes

Definition: A blueprint for creating objects with properties and methods, similar to OOP in other languages.
Usage: Used to build reusable structures, create instances (objects), and combine with interfaces.

| Feature                | Interface | Type | Enum | Class            |
| ---------------------- | --------- | ---- | ---- | ---------------- |
| Describes object shape | ✔         | ✔    | ❌   | ✔ (via instance) |
| Can hold unions        | ❌        | ✔    | ❌   | ❌               |
| Can create instances   | ❌        | ❌   | ❌   | ✔                |
| Runtime presence       | ❌        | ❌   | ✔    | ✔                |
| Good for React props   | ✔         | ✔    | ❌   | ❌               |

Interface → “Shape of an object.”

Type → “Custom type for anything.”

Enum → “Named constants.”

Class → “Blueprint to create objects.”

## Import export

```TS
import { heroes, type Hero, Owner } from '../data/heroes.data';
```

type means that only use like a interface, to do faster the transpilation proccess.

1. Why do we use imports and exports?

Because modern JS/TS splits code into small files (modules).
To use something from another file, you must export it there and import it here.

Think of it like:

“This file shares something → another file takes it.”

2. Two kinds of exports in JS & TS

There are only two real export types:

- **Named Exports**

Export several things from a file, each with a name.

Example:

```ts
export const age = 20;
export function greet() {}
export class Person {}

Importing named exports:
import { age, greet, Person } from "./file";
```

**Names must match exactly**
(You can rename with as.)

```ts
import { greet as sayHi } from "./file";
```

- **Default Export**

A file can export only ONE default item.
This is the “main thing” the file provides.

Example:

```ts
export default function greet() {
  return "Hello";
}
```

Importing a default export:

```ts
import greet from "./file";
```

💡 The name does NOT need to match the original.

```ts
import hola from "./file";
```

- Works because it's a default import.
- You can name it whatever you want.

A file can mix both

```ts
export const age = 20;
export default function greet() {}
```

Importing:

```ts
import greet, { age } from "./file";
```

### Key Differences Between JS and TS Imports

- TypeScript adds “type-only” imports
  These do NOT exist in JavaScript.

```ts
import type { Person } from "./types";
```

Used so the TS compiler knows a type exists, but it won't become JS code.

- TypeScript can export types and interfaces

Also not possible in JS.

export interface User {
name: string;
}

export type ID = string | number;

In JS, these concepts don’t exist.

- TypeScript compiles down to JS imports

Depending on config (module, target), TS outputs:

import (ESM)
require() (CommonJS)

#### When to use each?

- Use default export when:

The file has ONE main purpose
Example: one component per file in React

```ts
export default function Button() {}
```

- Use named export when:

The file has multiple things to export

Example: utility functions

```ts
export function sum() {}
export function subtract() {}
```

Named exports: Use { }, names must match
Default export: One per file, no { }, name can be anything
TS adds types and interfaces as exports, plus import type

## Promises

**What is a Promise?**

A Promise is a JavaScript object that represents a value that will arrive in the future. It’s used for async operations like fetching data, reading files, timers, etc.

The 3 states of a Promise

A Promise can be in one of these:

1. pending → still waiting
2. fulfilled → finished successfully
3. rejected → failed (error)

**Why do Promises exist?**

Because JavaScript is asynchronous and we don’t want "callback hell." Promises help us manage code that takes time without blocking everything.

- Example (basic)

```ts
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
```

- Using .then() and .catch()

```ts
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

```ts
⭐ Using async/await (easier)
async function run() {
const result = await promise;
console.log(result);
}
run();
```

A Promise is a placeholder for a value that you’ll get later.

## async await

**What is async and await?**

async/await is just a cleaner, easier way to work with Promises.

async → tells JS that a function returns a Promise
await → waits for a Promise to finish (without blocking the app)

It makes async code look like normal synchronous code.

Regular Promises (then, catch, finally)

This is the old, original way to handle async logic.

Example:

```ts
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finished");
  });
```

Characteristics:
Uses chaining.
Good but becomes hard to read if things get complex.

Error handling is separate in .catch().

- async/await version (same example)

```ts
async function run() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Finished");
  }
}
run();
```

Characteristics:

Looks like normal code.
Uses try/catch for errors → super readable.
Perfect for complex flows.

| Feature        | Promises (`then`) | async/await                      |
| -------------- | ----------------- | -------------------------------- |
| Syntax         | Chaining          | Regular, clean, readable         |
| Error handling | `.catch()`        | `try/catch`                      |
| Flow           | Harder to follow  | Easier to follow                 |
| Async behavior | Same              | Same (just nicer syntax)         |
| Best for       | Simple chains     | Complex logic, loops, conditions |

Promises are the system; async/await is just a nicer way to write them.
