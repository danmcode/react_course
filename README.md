# React Basics – Beginner-Friendly Guide

## What is React?

React is a **JavaScript library** used to build **user interfaces (UIs)**.  
It works like **LEGO blocks**: you build complex interfaces by combining small, reusable pieces called **components**.

### Why React?

Before React (with plain JS or jQuery), developers had to:

- Manually manipulate the DOM (hard to maintain)
- Manage state in scattered places
- Work without a clear structure
- Build everything by hand

React solves these issues by offering:

- A structured way to build UI components
- A declarative way to manage state
- Reusable components
- A virtual DOM system for faster updates

---

## What is a Prop?

**Props** (properties) are how components receive data.  
Think of props like arguments passed to a function.  
They help components stay reusable and predictable.

---

## Framework vs Library

**React is a library**, meaning:

- It focuses on UI only.
- It doesn’t force you into a specific folder structure.
- It doesn’t include routing, data fetching, or state management by default—you choose the tools.

**A framework** (e.g., Next.js, Angular) provides:

- Routing
- File structure rules
- Data fetching solutions
- Built‑in conventions

---

## DOM vs Virtual DOM

### What is the DOM?

The **DOM (Document Object Model)** represents the structure of a webpage (buttons, inputs, divs, etc.).

### What is the Virtual DOM?

React creates a **virtual copy of the DOM** in memory.  
When something changes, React:

1. Compares the virtual DOM with the real DOM.
2. Updates only what is necessary.  
   This makes React fast and efficient.

---

## What is a Component?

A **component** is a reusable piece of UI.  
It can be a function that returns JSX.  
JSX looks like HTML, but it's actually JavaScript.

### Component Rules

- Must return **one parent element**
- Anything inside `{}` is JavaScript
- Use `props` to receive data
- Use **hooks** to manage state or logic

### Example (TypeScript):

```tsx
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0); // Hook

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Clicked {count}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
```

---

## What is a Hook?

A **hook** is a special function that lets you use React features (like state).  
Examples:

- `useState`
- `useEffect`
- `useContext`

Hooks help reuse logic between components.

---

## Why is React Popular?

- Easy to start with
- Large community
- Huge ecosystem of tools
- Very stable (rare breaking changes)
- Used by many companies

---

# Important React Points

- It’s a **library**, not a framework
- It solves one problem well: **UI rendering**
- You choose tools for:
  - Routing
  - Data fetching
  - State management

### Common Choices

- Routing: **React Router**
- Data fetching: **React Query**
- Build tools: **Vite**
- Framework option: **Next.js**

---

## SSR – Server-Side Rendering

SSR means generating the HTML **on the server**, not in the browser.  
Frameworks like Next.js make SSR easy.  
React alone does not handle SSR—you need extra tools.

---

## TypeScript (TS)

TypeScript is a **typed superset of JavaScript**.

### Benefits

- Autocomplete and better developer tools
- More scalable projects
- Fewer runtime errors

### Cons

- Requires setup
- Slight learning curve
- Slower to write at first

---

## What is Hydration?

Hydration is when React takes server‑rendered HTML and **attaches event listeners and React logic** to it so it becomes interactive on the client.

Think of it as:

> “HTML is already visible, now React wakes it up.”

---

## Summary

React gives you:

- Reusable components
- Fast rendering with a virtual DOM
- Hooks for managing logic
- Freedom to choose your tools

Great for beginners and powerful for big applications.
