# React fisrt steps

## SWC

Speedy Web Compiler
reemplace Babel.

## Strict mode

What is the strict mode?
are you sure if yor applications works fine

## Diferences between div and fragment

```html
<div>
  does render in the DOM A
  <div>
    creates a real HTML element.
    <div>
      <p>Hello</p>
    </div>
  </div>
</div>
```

DOM output:

```html
<div>
  <p>Hello</p>
</div>
```

Useful when you need styling, classes, layout, flexbox, grid, etc. But it adds an extra DOM node.

`<Fragment>` does NOT render in the DOM
A Fragment does not create an actual HTML element.
It's just a logical wrapper to group elements in JSX.

```html
<>
  <p>Hello</p>
</>
```

DOM output:

```html
<p>Hello</p>
```

Great for grouping children without adding extra markup to the DOM.

**Main differences**
| Feature | `<div>` | `<Fragment>` / `<>` |
| -------------------------------- | ----------------------------------- | ------------------- |
| Appears in DOM? | ✔️ Yes | ❌ No |
| Affects layout? | ✔️ Yes | ❌ No |
| Can have classes, styles, props? | ✔️ Yes (`className`, `style`, etc.) | ❌ No |
| Groups children? | ✔️ Yes | ✔️ Yes |
| Used to avoid extra nodes? | ❌ No | ✔️ Yes |
| Can manage layout (flex/grid)? | ✔️ Yes | ❌ No |

```html
<div>
  <header />
  <content />
</div>
```

**Using a Fragment**

Cleaner and produces no extra DOM:

```html
<>

  <Header />
  <Content />
</>
```

When you should NOT use Fragment
Use a real element like `<div>` when you need:

- styling (className, style)
- layout containers (flex, grid)
- attributes (id, onClick, etc.)
- A visible wrapper in the DOM

**When Fragment is the best choice**

- To avoid “extra divs” (a.k.a. div soup)
- When components must return a single parent element
- When rendering multiple siblings inside a .map()

Example:

```html
<>
{items.map(item => (
<React.Fragment key={item.id}>

<h2>{item.title}</h2>
<p>{item.description}</p>
</React.Fragment>
))}
</>
```

**Simple conclusion**

`<div>` = visible container, affects DOM and layout.

`<Fragment>` = invisible wrapper, avoids extra DOM nodes.

If you want, I can show examples of when extra `<div>s` cause layout bugs — a very common React pitfall.

## Important Data

¿Why if I had an valid js array, when I print it in a component `<p>{somearr}</p>` React show it like a string?

Because React renders arrays by joining their items into a string.

Example:

```ts
const arr = [1, 2, 3];
<p>{arr}</p>;
```

React takes that array and outputs:

1,2,3

**Why?**

If the array contains primitive values (numbers, strings), React will convert them to strings and concatenate them.

If the array contains React elements, then React renders them correctly.

So the rule is:

React only renders arrays as a list of children. If items are primitives, you get a primitive string result.

---

¿Why react dont show booleans like `<p>{isActive}<p>`?

React intentionally NEVER renders booleans.

These values:

- true
- false
- null
- undefined

are ignored in JSX output.

Example:

```ts
<p>{true}</p>
```

Will render as:

(p tag with nothing inside)

Why?
Because React treats booleans as control values, not as UI.

This prevents bugs like:

```ts
<div>{items.length && "You have items"}</div>
```

If items.length is 0, it prevents React from rendering 0 on screen.

---

**Why constants are recommended to be outside the component**

1. To avoid recreating them on every render

When you place constants inside a React component:

```ts
function MyComponent() {
  const MY_CONST = [1, 2, 3];
  return <div>{MY_CONST}</div>;
}
```

Every time the component re-renders, the constant is re-created in memory. If the constant contains:

-large data

- functions
- objects
- arrays

…it becomes inefficient.

2. Prevents unnecessary re-renders of child components

Example:

```ts
function Parent() {
  const config = { theme: "dark" };
  return <Child config={config} />;
}
```

config is a new object on every render, so React thinks it changed → Child re-renders, even if the parent state didn’t change.

If you move it outside:

```ts
const config = { theme: "dark" }; // stays the same reference forever

function Parent() {
  return <Child config={config} />;
}
```

Now Child only re-renders when it truly has to.

3. Constants do not depend on component state or props

If the value does not depend on:

- props
- state
- context

→ it should NOT live inside the component.

4. Better for readability and organization

It keeps the component "clean" and makes the constant available for reuse.

Place constants outside the component to avoid re-creation on each render, prevent unnecessary re-renders, and improve performance and readability.

## Hooks

Why must hooks go at the top of a component?

Because React relies on order, not names.

These calls:

- useState();
- useEffect();
- useMemo();

Must always run in the same order on every render.

If you place a hook inside:

- a condition
- a loop
- a nested function

React would not know which hook corresponds to which previous call, and it breaks.

Example (❌ incorrect):

```ts
if (active) {
  const [count, setCount] = useState(0);
}
```

**React rules:**

Hooks must be called at the top level of a React component, and only inside React components or custom hooks.

## Styles: MyComponent.css vs MyComponent.module.css

| Feature               | `MyComponent.css` | `MyComponent.module.css`  |
| --------------------- | ----------------- | ------------------------- |
| Scope                 | **Global**        | **Local / Scoped**        |
| Class name collisions | ❌ Yes            | ✔️ No                     |
| How classes work      | Normal CSS        | Imported as JS object     |
| Recommended for       | App-wide styles   | Component-specific styles |

Example: Global CSS

```ts
MyComponent.css

.title {
color: red;
}

MyComponent.jsx

import "./MyComponent.css";

<p className="title">Hello</p>
```

⚠️ Any component using .title will also be red (global leakage).

Example: CSS Modules

```ts
MyComponent.module.css

.title {
color: red;
}

MyComponent.jsx

import styles from "./MyComponent.module.css";

<p className={styles.title}>Hello</p>
```

styles.title becomes something like:

- title**MyComponent**3fadk
- unique and scoped to the component

### Quick Summary

- Constants outside the component
- Avoid recreation on each render
- Avoid unnecessary re-renders

### Cleaner code

- Hooks rules
- Must be at top level
- Must not be inside conditions or loops

Order matters

**CSS vs CSS Modules**

- MyComponent.css → global, may conflict

- MyComponent.module.css → local, safe, recommended for components
