
# DevPlayground

 Welcome to DevPlayground! This repository serves as a comprehensive coding workspace where I practice my skills in various programming languages and frameworks.

## Content

- [CSS Cheat Sheet](README.md/#CSS-Cheat-Sheet)
  - [Selectors](README.md/#Selectors)
  - [Box Model](README.md/#CSS-Cheat-Sheet)
  - [Text and Font](README.md/#CSS-Cheat-Sheet)
  - [Background](README.md/#CSS-Cheat-Sheet)
  - [Display and Positioning](README.md/#Display-and-Positioning)
  - [Flexbox](README.md/#Flexbox)
  - [Grid](README.md/#Grid)
  - [Animation and Transitions](README.md/#Animation-and-Transitions)
  - [Miscellaneous](README.md/#Miscellaneous)
- [JS Cheat Sheet](README.md/#JS-Cheat-Sheet)
  - [Array Methods](README.md/#Array-Methods)
  - [ES6 (Destructuring)](README.md/#ES6-(Destructuring))
  - [DOM & Events](README.md/#DOM-&-Events)
  - [Semantics & Accessibility](README.md/#Semantics-&-Accessibility)
  - [Synchrony & Asynchrony](README.md/#Synchrony-&-Asynchrony)
  - [Classes](README.md/#Classes)
- [SQL Cheat Sheet](README.md/#SQL-Cheat-Sheet)
- [React Cheat Sheet](README.md/#React-Cheat-Sheet)
  - [Intro to React](README.md/#Intro-to-React)
  - [JSX](README.md/#JSX)
  - [Class Components](README.md/#Class-Components)
  - [Functional Components](README.md/#Functional-Components)
  - [CSS Styling in React](README.md/#CSS-Styling-in-React)
  - [Hooks and useState](README.md/#Hooks-and-useState)
  - [Hooks and useEffect](README.md/#Hooks-and-useEffect)
  - [Conditional Rendering](README.md/#Conditional-Rendering)
  - [Ternary Operators and &&](README.md/#Ternary-Operators-and-&&)
  - [Lists and Maps](README.md/#Lists-and-Maps)
- [Python Cheat Sheet](/Python-Developer.ipynb)

## CSS Cheat Sheet

### Selectors

- `*`: Universal selector
- `element`: Type selector (e.g., `p`, `h1`)
- `.class`: Class selector (e.g., `.container`)
- `#id`: ID selector (e.g., `#main`)
- `element, element`: Grouping selector (e.g., `h1, h2, h3`)
- `element element`: Descendant selector (e.g., `ul li`)
- `element > element`: Child selector (e.g., `div > p`)
- `element + element`: Adjacent sibling selector (e.g., `h1 + p`)
- `element ~ element`: General sibling selector (e.g., `h1 ~ p`)
- `[attribute]`: Attribute selector (e.g., `[type="text"]`)

### Box Model

- `width`: Width of the element
- `height`: Height of the element
- `padding`: Space inside the element, around content
  - `padding-top`
  - `padding-right`
  - `padding-bottom`
  - `padding-left`
- `margin`: Space outside the element, around border
  - `margin-top`
  - `margin-right`
  - `margin-bottom`
  - `margin-left`
- `border`: Border around the element
  - `border-width`
  - `border-style`: solid, dashed, dotted, etc.
  - `border-color`

### Text and Font

- `color`: Text color
- `font-family`: Font family (e.g., `Arial, sans-serif`)
- `font-size`: Font size (e.g., `16px`, `1em`)
- `font-weight`: Font weight (e.g., `bold`, `normal`, `700`)
- `line-height`: Line height
- `text-align`: Text alignment (e.g., `left`, `center`, `right`, `justify`)
- `text-decoration`: Text decoration (e.g., `none`, `underline`, `line-through`)
- `text-transform`: Text transformation (e.g., `uppercase`, `lowercase`, `capitalize`)
- `letter-spacing`: Space between letters
- `word-spacing`: Space between words

### Background

- `background-color`: Background color
- `background-image`: Background image (e.g., `url('image.jpg')`)
- `background-repeat`: Repeat behavior (e.g., `no-repeat`, `repeat-x`, `repeat-y`)
- `background-position`: Position of background image (e.g., `center`, `top right`)
- `background-size`: Size of background image (e.g., `cover`, `contain`)
- `background-attachment`: Attachment behavior (e.g., `scroll`, `fixed`)

### Display and Positioning

- `display`: Display type (e.g., `block`, `inline`, `inline-block`, `flex`, `grid`, `none`)
- `position`: Position type (e.g., `static`, `relative`, `absolute`, `fixed`, `sticky`)
- `top`, `right`, `bottom`, `left`: Offset properties for positioned elements
- `z-index`: Stack order of an element

### Flexbox

- `display: flex`: Enables flexbox layout
- `flex-direction`: Direction of flex items (e.g., `row`, `column`)
- `justify-content`: Alignment along the main axis (e.g., `flex-start`, `center`, `space-between`, `space-around`)
- `align-items`: Alignment along the cross axis (e.g., `flex-start`, `center`, `stretch`)
- `flex-wrap`: Wrapping behavior (e.g., `nowrap`, `wrap`, `wrap-reverse`)
- `flex`: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`

### Grid

- `display: grid`: Enables grid layout
- `grid-template-columns`: Defines columns (e.g., `repeat(3, 1fr)`, `200px 1fr`)
- `grid-template-rows`: Defines rows (e.g., `repeat(3, 100px)`, `auto 1fr`)
- `gap`: Space between grid items
- `grid-column`: Shorthand for `grid-column-start` and `grid-column-end`
- `grid-row`: Shorthand for `grid-row-start` and `grid-row-end`

### Animation and Transitions

- `transition`: Shorthand for transition properties (e.g., `all 0.3s ease`)
  - `transition-property`: Property to transition
  - `transition-duration`: Duration of transition
  - `transition-timing-function`: Timing function (e.g., `ease`, `linear`)
  - `transition-delay`: Delay before starting
- `animation`: Shorthand for animation properties (e.g., `name duration timing-function delay iteration-count direction fill-mode`)
  - `@keyframes`: Define animation (e.g., `@keyframes slide { 0% { left: 0 } 100% { left: 100% } }`)

### Miscellaneous

- `overflow`: Handling of overflow content (e.g., `visible`, `hidden`, `scroll`, `auto`)
- `opacity`: Opacity level (e.g., `1`, `0.5`)
- `cursor`: Mouse cursor style (e.g., `pointer`, `default`)
- `visibility`: Visibility of an element (e.g., `visible`, `hidden`)

## JS Cheat Sheet

### Array Methods

**`map()`**
 method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let newArray = array.map(function(currentValue, index, arr), thisValue)

/*
- `currentValue`        : The current element being processed in the array.
- `index` (Optional)    : The index of the current element being processed in the array.
- `arr` (Optional)      : The array `map` was called upon.
- `thisValue` (Optional): Value to use as `this` when executing the callback.
*/
```

**`filter()`** method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let newArray = array.filter(function(currentValue, index, arr), thisValue)

/*
- `currentValue`        : The current element being processed in the array.
- `index` (Optional)    : The index of the current element being processed in the array.
- `arr` (Optional)      : The array `filter` was called upon.
- `thisValue` (Optional): Value to use as `this` when executing the callback.
*/
```

**`reduce()`** method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
let value = array.reduce(function(accumulator, currentValue, index, arr), initialValue)

/*
- `accumulator`             : The accumulator accumulates the callback's return values it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
currentValue                : The current element being processed in the array.
- `index` (Optional)        : The index of the current element being processed in the array.
- `arr` (Optional)          : The array `reduce` was called upon.
- `initialValue` (Optional) : A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped.
*/
```

### ES6 (Destructuring)
```javascript
// Array Destructuring
const [a, b] = [1, 2]
const [a, , b] = [1, 2, 3]
const [a = 1, b = 2] = [undefined, 3]
const [a, ...rest] = [1, 2, 3, 4]

// Object Destructuring
const {a, b} = {a: 1, b: 2}
const {a: x, b: y} = {a: 1, b: 2}
const {a = 10, b = 5} = {a: 3}

// Combine Destructuring
const props = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'}
]

const [{name: name1}, {name: name2}] = props
```

### DOM & Events

**HTML document's tree**
```
Document  ->  document
└── html
    ├── head  ->  document.head
    │   └── title
    │       └── "Example"
    └── body  ->  document.body
        ├── h1  ->  document.body.children[0] | document.body.firstElementChild
        │   └── "Hello, World!"
        ├── p   ->  document.body.children[1]
        │   └── "This is an example."
        └── div ->  document.body.children[2]
            └── p
                └── "Another paragraph inside a div."
```

```javascript
const paragraph = document.createElement('p') // New Element
const span = document.createElement('span')
document.body.appendChild(paragraph)          // Append Element
paragraph.appendChild(span)
paragraph.removeChild(span)                   // Remove Element

let count = 0
const printCount = (element) => {
  count++
  element.innerHTML = count
}

paragraph.onclick = printCount                // Set event properties
paragraph.addEventListener("dbclick", () => {this.innerHTML = "Double Clicked!"}) // Also can remove event with `element.removeEventListener(event, callback)`

// For more event see MDN Docs -> https://developer.mozilla.org/en-US/docs/Web/API/Element#events
```

### Semantics & Accessibility

In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
More detials – [Here](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

WAI-ARIA Roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object.
More detials – [Here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

### Synchrony & Asynchrony

- **Synchrony** is a term we use to talk about code instructions that execute one after another.
- **Asynchrony**  doesn't wait for the previous instruction to finish.

**Synchronous code:**

```javascript
const arr = [1, 2, 3, 4, 5]

function callback(num) {
 console.log(num * 2)
}
const newArray = arr.map(callback)
console.log("This code is synchronous.")
```

**Console output:**

```bash
2
4
6
8
10
This code is synchronous.
```

**Asynchronous code:**

```javascript
function callbackFunc() {
 console.log("Executed last because we're using asynchronous code.")
}
setTimeout(callbackFunc, 1500)
console.log('Executed first')
console.log('Executed second')
```

**Console output:**

```bash
Executed first
The string reversed is: "alone"
Executed last because we're using asynchronous code.
```

**Traditional Promise**

```javascript
let beverages = ['tea', 'coffee', 'apple cider']

function pickRandomBeverage() {
 return new Promise(function(resolve, reject) {
  let randomIndex = Math.floor(Math.random() * beverages.length)
  let selectedBeverage = beverages[randomIndex]
  setTimeout(function() {
   console.log(`${selectedBeverage} selected`)
   resolve(selectedBeverage)
  }, 1000)
 })
}

function checkIfHotWaterIsReady(isBeverageSelected) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (isBeverageSelected) {
    console.log("Preparing...")
    resolve(isBeverageSelected)
   } else {
    reject("No beverage has been picked up.")
   }
  }, 1000)
 })
}

function prepareDrink(selectedBeverage) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (selectedBeverage) {
    console.log(`Enjoy your ${selectedBeverage} !`)
    resolve(true)
   } else {
    reject("Drink not ready yet...")
   }
  }, 1000)
 })
}

function nativePromiseHandling() {
 const pickedDrink = pickRandomBeverage()
 const handleWaterReadyCheck = function(selectedBeverage) {
  return checkIfHotWaterIsReady(selectedBeverage)
 }
 const handlePrepareDrink = function(isBeverageSelected) {
  return prepareDrink(isBeverageSelected)
 }
 pickedDrink
  .then(
handleWaterReadyCheck
)
  .then(
handlePrepareDrink
)
}
nativePromiseHandling()
```

**Console output:**

```bash
apple cider selected
Preparing...
Enjoy your apple cider !
```

**async & await**

The `async/await` syntax allows us to have more readable code and is usually shorter than a traditional promise.

```javascript
let beverages = ['tea', 'coffee', 'apple cider']

function pickRandomBeverage() {
 return new Promise(function(resolve, reject) {
  let randomIndex = Math.floor(Math.random() * beverages.length)
  let selectedBeverage = beverages[randomIndex]
  setTimeout(function() {
   console.log(`${selectedBeverage} selected`)
   resolve(selectedBeverage)
  }, 1000)
 })
}

function checkIfHotWaterIsReady(isBeverageSelected) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (isBeverageSelected) {
    console.log("Preparing...")
    resolve(isBeverageSelected)
   } else {
    reject("No beverage has been picked up.")
   }
  }, 1000)
 })
}

function prepareDrink(selectedBeverage) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (selectedBeverage) {
    console.log(`Enjoy your ${selectedBeverage} !`)
    resolve(true)
   } else {
    reject("Drink not ready yet...")
   }
  }, 1000)
 })
}

async
 function asyncAwaitPromiseHandling() {
 const pickedDrink = 
await
 pickRandomBeverage()
 const isHotWaterReady = 
await
 checkIfHotWaterIsReady(pickedDrink)
 const isDrinkPrepared = 
await
 prepareDrink(isHotWaterReady)
 return isDrinkPrepared
}

asyncAwaitPromiseHandling()
```

**Console output:**

```bash
apple cider selected
Preparing...
Enjoy your apple cider !
```

**Try-Catch**

To handle rejections, we use the `try-catch` syntax.

```javascript
const stock = {
 sunglasses: {quantity: 0, price: 29.99},
 bags: {quantity: 2, price: 109.99}
}

const purchasePromise = new Promise(function(resolve, reject) {
 if (stock.sunglasses.quantity > 0) {
  resolve("Sunglasses are available. Proceeding with order now.")
 } else {
  reject("Sunglasses are out of stock. Canceling Order.")
 }
})

async function orderSunglasses() {
 
try
 {
  let result = await purchasePromise
  console.log(result)
 } 
catch
(error) {
  console.log(error)
 }
}

orderSunglasses()
```

**Console output:**

```bash
Sunglasses are out of stock. Canceling Order.
```

### Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}

// Creating an instance of Person
const person1 = new Person('Alice', 30)
person1.greet() // Output: Hello, my name is Alice and I am 30 years old.

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age) // Call the parent class constructor
    this.jobTitle = jobTitle
  }

  // Overriding the greet method
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`)
  }
}

const employee1 = new Employee('Bob', 25, 'Software Engineer')
employee1.greet() // Output: Hello, my name is Bob, I am 25 years old and I work as a Software Engineer.
```
## SQL Cheat Sheet

```sql
SELECT * FROM table_name
SELECT column1 AS alias1, column2 FROM table_name
SELECT DISTINCT column1, column2 FROM table_name
SELECT * FROM table_name ORDER BY column1       -- Ascending by default
SELECT * FROM table_name ORDER BY column1 ASC   -- Least -> Most
SELECT * FROM table_name ORDER BY column1 DESC  -- Most -> Least
SELECT * FROM table_name WHERE column1 = value1 AND (column2 != value1 OR column2 != value2) -- =, !=, <>, <, >, <=, >=, AND, OR, NOT

INSERT INTO orders(column1, column2, column3) VALUES(value1, value2, vaue3)
UPDATE table_name SET column1 = value1 WHERE column2 = value2
DELETE FROM table_name WHERE column1 = value1

CREATE TABLE table_name (
  column1 datatype1,
  column2 datatype2,
  column3 datatype3
)

-- Use `ALTER` follow by the opearation to change existing table directly
ALTER TABLE table_name ADD column4 datatype4 -- Add column to existing table without data
ALTER TABLE table_name DROP COLUMN column4 -- Remove column from existing table
ALTER TABLE table_name RENAME column3 TO newColumn3

SELECT * FROM table_name WHERE column1 BETWEEN value1 AND value2

-- `%` call wildcard, it used for pattern conditioning
-- wildcard can use as '%a%', '%a', 'a%' or without wildcard like 'a'
SELECT * FROM table_name WHERE column1 LIKE 'a%' -- Condition by pattern like `table_name` with a `column1` starting with a

SELECT * FROM table_name WHERE column1 IN (value1, value2, ..., value4)

-- Aggregate function MIN, MAX, SUM, AVG, COUNT
SELECT SUM(column1) FROM table_name
SELECT SUM(column1) FROM table_name GROUP BY column2
SELECT column1 FROM table_name GROUP BY column2 HAVING column3 -- Select column1 group by column2 but column 1 must have column3 in result

-- JOIN TABLE
-- `LEFT JOIN` select all row from left table and include matching row from right table
SELECT * FROM table_name1
LEFT JOIN table_name2
ON table_name1.column_name =
table_name2.column_name
-- `RIGHT JOIN` select all row from right table and include matching row from left table
SELECT * FROM table_name1
RIGHT JOIN table_name2
ON table_name1.column_name =
table_name2.column_name
-- `FULL OUTER JOIN` is combination of `LEFT JOIN` and `RIGHT JOIN`. It include both left and right table.
SELECT * FROM table_name1
FULL OUTER JOIN table_name2
ON table_name1.column_name =
table_name2.column_name

-- Sub queries is nested queries, this can use together with another table
SELECT * FROM table_name WHERE column2 > (
  SELECT AVG(column1) FROM table_name
)
SELECT * FROM table_name WHERE column2 IN (
  SELECT column1 FROM table_name
)
```

## React Cheat Sheet

### Intro to React

React is a common JavaScript library to build web apps. A package manager like `npm` will allow you to set up React on your computer.`npm install react`

```javascript
import React from 'react'           // gain access to React's various features
import ReactDOM from 'react-dom'    // allow you to render your content onto a webpage

ReactDOM.render(                    // render content into webpage
    <h1>Hello, world</h1>,          // element that will added to destination
    document.getElementById("root") // destination element
```

### JSX

`JSX` (JavaScript XML) is a markup syntax that combines User Interface (UI) elements and logic. Basically, `JSX` tells the browser what to render and how.

Noticed in `index.html` that the `src` attribute loads the `JSX` file with `index.js`.

This is because `JSX` is just fancy JavaScript code. `React` recognizes both `.jsx` and `.js` files the same.

```html
<!doctype html>
<html>
 <head>
 </head>
 <body>
  <div id="root"></div>
  <script type="module" src="./index.js"></script>
 </body>
</html>
```

`JSX` code allows us to generate `HTML` tags, hence why we can add HTML-like code inside JavaScript.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const header = (
 <h1>
  Hello, Lori Smith
 </h1>
)

ReactDOM.render(
    header,
    document.getElementById("root")
)
```

We can also use `variables` to insert `JSX` into other elements. We do that with the help of embedded expressions.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const header = <h1>Hello, John</h1>
const subheader = <h2>The movie</h2>

const app = (
    <div>
        {header}
        <p>{"My name is Phurin Nararat. :)"}</p>
        {subheader}
    </div>
)

ReactDOM.render(
    app,
    document.getElementById("root")
)
```

### Class Components

React applications are built using building blocks called components, which represent different parts of an app's user interface (UI). There are two types of components in React: **Functional Components** and **Class Components**.

**Class Components** were the primary way of creating components until the introduction of `hooks` in `React 16.8`. They offered additional features such as `state`, which allowed components to hold and manage data that can change over time.


**Class Components** are built with classes, templates for objects that hold onto information that can change over time.

```javascript
import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    // to pass variable to class component, we need to overide `constructor` of the class and pass `props` to `super` method
    constructor(props) {
        super(props)
        this.state = {count: 0}   // `state` hold information overtime
    }
    
    // component-specific function that is called after a component loads
    componentDidMount() {

        // use `this.setState` to update values
        this.setState({count:1})
    }
    
    // after overided `contructor`, we can use passed variable via `props` 
    render() {
        const welcome = this.props.name
        return (
            <div>
                <h1>{welcome}</h1>
                <p>Welcome to my first React component!</p>
                <p>Our count is currently {this.state.count}.</p>
            </div>
        )
    }
}

ReactDOM.render(
    // pass my name to the component
    <App name="Phurin Nararat" />,
    document.getElementById("root")
)
```

Like with JavaScript, React event handlers, update methods can access event information through their first argument, usually named `event` or `e`.

```javascript
import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text:"" }
    }

    handleInput = (event) => {
        const val = event.target.value
        this.setState({text:val})
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <input 
                type="text" 
                placeholder="Type Here"
                value={this.state.text}
                onChange={this.handleInput}
                />
                <p><strong>Your entry is:</strong>{this.state.text}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App name="Phurin Nararat" />,
    document.getElementById("root")
)
```

### Functional Components

**Functional components** are special functions that return `JSX`. We can write functional components with the normal `function()` syntax or the ES6 arrow function `() => {}` syntax.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const App = (props) => {
    // functional component can pass `props` directly as argument
    const name = props.name
    
    return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
    )
}

ReactDOM.render(
    <App name="Phurin Nararat" />,
    document.getElementById("root")
)
```

### CSS Styling in React

We can create object to style in React or by import `css` style by `import "./App.css"` at the top of code.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    const styles = {
    header:{
        textDecoration: "underline"
    },
    paragraph:{
        color: "blue",
        fontWeight: "bold"
    }
}

    return (
        <div>
            <h1 style={styles.header}>Styling in React</h1>
            <p style={styles.paragraph}>This is blue-colored text.</p>
        </div>
    )
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
)
```

### Hooks and useState

As arrival of `React` Hooks (`React 16.8`), `functional components` can have state in React. Hooks offer many benefits such as simplifying code, removing `this`, and separating JavaScript logic from the UI. Additionally, rather than rewriting functional components into class components when we need `state`, we can simply use `useState`.

```javascript
import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = () => {
    const [username, updateUsername] = updateCount("")

    return (
        <div>
            <h1>Enter a username</h1>
            <p>Please, let me know the username you wish to use:</p>
            <input type="text" value={count + 1}  
            onChange={(e) => (e.target.value)}
            />
        </div>
    )
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
```

### Hooks and useEffect

`useEffect` is a hook that is automatically called every time the component renders. It requires a function as its first argument. The method we passed to `useEffect` contains the code the component will run every time it renders.

If `useEffect` updates `useState` variables, it's possible to run infinitely looping code and hamper our app's performance.

One way to prevent this is to add conditional checks in `useEffect`

```javascript
import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"

const App = () => {
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [multiplication, setMultiplication] = useState(null)

    useEffect( ()=>{
        if(multiplication == null) setMultiplication(first * second)
    })

    return (
        <div>
            <h1>Multiply</h1>
            <p>The answer is: {multiplication}!</p>
            <p>Numbers to multiply:</p>
            <input 
            type="number" 
            value={first} 
            onChange={(e)=>{
                setFirst(e.target.value)
                setMultiplication(null)
            }}
        />
        <input 
        type="number" 
        value={second} 
        onChange={(e)=>{
            setSecond(e.target.value)
            setMultiplication(null)
            }}
        />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
```

Dependency `[]` arrays prevent unnecessary `useEffect` calls and also reduce the possibility of infinite loops.

```javascript
useEfefct(() => {}, []) // we can define dependency in `[]` such as `[a, b]` while `a` and `b` is variable
```

`useEffect()` might cause memory leaks if we end up removing a component without calling a cleanup method. If `useEffect()` contains timers or API calls, it's good practice to `return` a cleanup method to end those processes when not needed.

```javascript
import React, { useState, useEffect } from "react"

const Timer = () => {
    const [ time, setTime ] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            const d = new Date()
            setTime(d.toLocaleTimeString())
        },100)
        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div className="centered">
            <h1>Your current time:</h1>
            <h3>{time}</h3>
        </div>
    )
}

export default Timer
```

### Conditional Rendering

`if/else` statements are commonly used in React to introduce JavaScript logic into `JSX`, controlling what is rendered based on some condition.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    const number = 48
    let response
    if(number % 2 === 1) {
        response = <p>This is an odd number.</p>
    } else {
        response = <p>This is an even number.</p>
    }
    return response
}

ReactDOM.render(<App />, document.getElementById("root"))
```

### Ternary Operators and &&

JavaScript offers different ways to write conditional statements, which we can then also use in React. One identifiable difference is that instead of `if` and `else`, they use `?` and `:` respectively. `(<condition>) ? <yes>:<no>`

```javascript
const number = 101
const toPrint = (number % 2 == 1) 
?"This is an odd number." 
:"This is an even number."
console.log(toPrint)
```

**Console output:**
```bash
This is an odd number.
```

Another way to write conditionals is the `&&` operator. Normally, we use it in `if` statements to test two conditions simultaneously.

```javascript
import React from "react"
import ReactDOM from "react-dom"

const App = (props) => {
    return (
        <div>
            <h2>Cloth, Sink, and Below - Household Appliances</h2>
            {
                props.loggedIn && <p>Welcome, dear customer!</p>
            }
        </div>
    )
}

ReactDOM.render(
 <App loggedIn={true} />,
 document.getElementById("root")
)
```

### Lists and Maps

```javascript
const items = [
    "First Item",
    "Second Item",
    "Third Item"
]

const listItems = items.map(message => {
    return <p>{message}</p>
    })
```

Using an item’s array `index` as the `key` is not recommended. If the array order changes, we will end up using the wrong item. If an array item comes with an `id` or other unique identifiers, we can use that as the `key` instead.

```javascript
import React, {useState} from "react"
import ReactDOM from "react-dom"

const App = () => {
    const [tasks] = useState([
        {
            tasks.map:1,
            task:"Get the groceries"
        },
        {},
        {
            tasls.map:2
            task:"Complete my homework"
        }
    ])

    return (
        <ul>
            {
                tasks.map(item => {
                    return <li key={item.tasks.map}>{item.task}</li>
                })
            }
        </ul>
  )
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
)
```