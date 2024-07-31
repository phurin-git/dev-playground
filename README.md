
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
- [Python Cheat Sheet](/Python%20Developer.ipynb)
- [Node.js Cheat Sheet](README.md/#Node.js-Cheat-Sheet)
  - [Intro to Node.js](README.md/#Intro-to-Node.js)
  - [Client vs Servers](README.md/#Client-vs-Servers)
  - [Communicating with an API](README.md/#Communicating-with-an-API)
  - [HTTP Requests](README.md/#HTTP-Requests)
  - [HTTP Request Responses](README.md/#HTTP-Request-Responses)
- [Express.js Cheat Sheet](README.md/#Express.js-Cheat-Sheet)
  - [Introduction-to-ExpressJS](README.md/#Introduction-to-ExpressJS)
  - [Request and Response Objects](README.md/#Request-and-Response-Objects)
  - [ExpressJS Route Parameters](README.md/#ExpressJS-Route-Parameters)
  - [Middleware in Express](README.md/#Middleware-in-Express)
  - [Express Router](README.md/#Express-Router)
  - [Express Error Handling](README.md/#Express-Error-Handling)
  - [Structuring GET Endpoints](README.md/#Structuring-GET-Endpoints)
  - [Structuring POST Endpoints](README.md/#Structuring-POST-Endpoints)
  - [Structuring DELETE Endpoints](README.md/#Structuring-DELETE-Endpoints)
  - [Structuring PUT Endpoints](README.md/#Structuring-PUT-Endpoints)
  - [Connecting to a Database](README.md/#Connecting-to-a-Database)
  - [Database Interactions](README.md/#Database-Interactions)

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

## Node.js Cheat Sheet

### Intro to Node.js

Node.js is an open-source runtime environment that enables developers to create full-stack applications using only JavaScript.

Full-stack applications involve the code that runs in the browser and also the code that runs on the server.

Everything we've done until now focuses on code that runs in the browser, which is called the frontend or client-side.

The frontend receives code sent from a server connected to the internet. We call that the backend or server-side.

For now, we'll only concentrate on utilizing Node.js to support frontend development.

Node.js enables developers to import libraries and other modules into a project without using a separate `script` tag in the HTML.

JavaScript has numerous libraries that assist in the development of applications.

These libraries are typically organized and distributed in packages. We can handle these packages with a package manager.

```bash
npm install moment
```

To create a project using Node we must initialize the project.

A project can be created using the command `npm init` in the terminal.

```bash
npm init react-app <app name>
```

To install packages, type `npm install` or `npm i` followed by the package name.

Installing a package updates the package.json file, which displays a list of all installed packages in the project.

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}

```
### Client vs Servers

**Introduction**
Most complex websites use server-side programming to create dynamic content.

This means writing code that runs on another computer functioning as a server, using a database to store and retrieve information.

Login pages like the one below are almost always created with the help of server-side code.

HTTP stands for **HyperText Transfer Protocol**. It's how the browser communicates with the server when you click on a URL link.

The browser makes a **request** to the server, and the server sends back a **response**. This is how browser and server communication works.

```bash
              Request
┌─────────┐               ┌─────────┐
│ Browser │ ────────────► │ Server  │
└─────────┘               └─────────┘
              Response
┌─────────┐               ┌─────────┐
│ Browser │ ◄──────────── │ Server  │
└─────────┘               └─────────┘
```

**Frontend and Backend Tasks**

Code running the browser is called client-side, or frontend. It also handles interactivity on a page, like hiding or showing an element. Client-side code is written in HTML, CSS, and Javascript.

Server-side code handles the specifics of what content is sent to the browser.

```javascript
const express = require("express")
const bodyParser = require("body-parser")
const db = require('./queries')
const app = express()

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/robot', db.getRobots)
app.get('/robot/:id', db.getRobotsId)
app.post('/robot', db.createRobot)
app.listen(3000)
```

JavaScript is one of the languages that we can use to write both frontend and backend code.

**Static and Dynamic**

Websites that always show the same data are **static websites**. These don't use a server to display dynamically generated content.

```html
<!DOCTYPE html>
<body>
    <h2>About us</h2>
    <p>We're a family business specializing in giving you the most authentic neapolitan pizza experience!</p>
</body>
```

Dynamic websites generate some of their content dynamically, by requesting data from the server and displaying the response. Clients request the content stored in servers' databases. Then, clients update the HTML they display, filling in the new content.

So we don't need to write individual HTML files for each piece of information

Using a database and server-side code means we only need to create one HTML template that we can use for every item in the catalog.

Dynamic websites can return **different content** for a request based on information in the URL or other information stored in the browser.

```url
https://catalog.com/api/products?results=10 // dispaly 10 result
```

### Communicating with an API

**What is an API?**

Application programming interfaces, also known as `API`, facilitate communication between two programs.

`APIs` send requests from a sender program to a receiver program. Then, they send responses from the receiver to the sender program.

Many things in our daily life work like an `API`. One example is a waiter and the kitchen staff.

A waiter, like a sender program, sends an order to the kitchen. Then the kitchen, as a receiver program, sends back the food as a response.

**Why use an API?**

Back-end developers don't need to wait for front-end development to be completed to test their program.

They can test their program by simply sending requests to the `API` and checking if the responses are correct.


**fetch and API tools**

We can send requests to `APIs` using `fetch()` in JavaScript.

```javascript
fetch(url, method: <'GET', 'PUT', 'PATCH', 'DELETE'>, body: <'body'>).then(callback)
```

### HTTP Requests

**Request Line and parameters**

A request is made of different parts, each with a specific role. The **URL** specifies the **location** of the server and the content or **resource**. The **method** of a browser request defines the type of action it should perform. There are a few different methods that browsers can send.

```bash
 GET     https://abc.com    /movies
|___|   |_______________|  |_______|
method   backend location   resource

```

URLs can have **parameters**, like `1010` here that stands for a user's ID.

```bash
format: https://abc.com/users/:id

    GET https://abc.com/users/1010 HTTP/1.1
```

**Query parameters**

The request line URL can also have **query parameters**. These are key-value pairs that appear after a `?` sign.

```bash
GET https://abc.com/users?membership=regular HTTP/1.1
```

URLs can have several query parameters chained through `&`. Here, we're requesting premium users with an active streak.

```bash
GET https://abc.com/users?membership=regular&isactive=true HTTP/1.1
```

Through their labeled nature, query parameters like `id=1010` make the URL more understandable.

```bash
using query parameters:
GET https://abc.com/users?id=1010 HTTP/1.1

using simple parameters:
GET https://abc.com/users/1010 HTTP/1.1
```

**Request body**

Under the request line, a browser request has a series of headers

```bash
GET https://abc.com/movies HTTP/1.1
Host: abc.com
User-Agent: Mozilla/5.0 
Accept: text/html,image/jpeg
Accept-Language: en-us,en
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4
Cache-Control: no-cache
```

### HTTP Request Responses

**Status line**

The status line contains the protocol `HTTP/1.1` followed by the status code `200 OK`. For more information click – [Here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

```bash
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: application/json
Connection: Closed

{
 "item": "jeans",
 "price": 89
}
```

**Response Body**

n case of a successful request, the client will get a `200 OK` response code, along with a **response body** containing the data. One common format for an HTTP response body is JSON, which stands for Javascript Object Notation. The JSON syntax is similar to that of a JavaScript object.

```bash
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: 88
Content-Type: application/json
Connection: Closed

{
  "username": "phurin",
  "name": "Phurin Nararat"
}
```


## Express.js Cheat Sheet

### Introduction to ExpressJS

We know the basics about how the frontend and backend communicate. Now we can start building our web server with Express.

Remember, a web server is responsible for storing, managing, and serving files to web browsers when they're requested.

Express is a popular web framework for Node.js that simplifies the setup, installation, and management of web servers.

It's also a minimalist package, meaning it doesn't require other libraries or plugins to function.

Recall that Node.js is an open-source runtime environment that enables developers to create full-stack applications using only JavaScript.

Full-stack applications handle both the frontend and backend components of a web application.

To install Express in our project, we use the `npm install express` command.

To use Express, we require it in our code using Node's built-in require() function.

We typically assign the output of require() to a variable with the same name as the package we're using.

The `listen()` function takes two parameters. The first parameter specifies the **port number**.

The second parameter is a **callback function** that executes when the server starts.

The port number is a distinctive identifier that tells the server which application should process an incoming request.

Ports allow multiple applications to connect to a server simultaneously with different HTTP requests.

```javascript
const express = require('express')
const app = express()
const port = 8000

app.listen(port, callback)
```

### Request and Response Objects

**The Request Object**

Express' `get()` method defines a specific route that matches incoming HTTP GET requests to a specified path and triggers a callback function.

```javascript
const express = require("express")
const app = express()
const port = 3000

app.get("/", () => {})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})
```

The callback function accepts two arguments: a request object and a response object. These are often written as `req` and `res`.

All endpoints require a path and utilize the `req` and `res` objects as parameters in their callback function.

```javascript
app.get("/", (req, res) => {console.log(req)})
```

The `req` object has properties with useful information that can be used to help manage and respond to requests.

The `req.method` property for example contains information on the type of HTTP request that was sent. (GET, POST, PUT, PATCH, DELETE)

The `req.hostname` identifies the device or server making the request. This can be useful in deciding if a request is approved or denied.

Parameter values can be useful in a wide variety of situations by allowing the response to be more dynamic based on the request.

```javascript
app.get("/flag/:country", (req, res) => {
  console.log(`New request made: ${req.method}`)
  console.log(`Country parameter: ${req.params.country}`)
 // use the parameter to retrieve specific flag data
})
```

**The Response Object**

The requesting client needs to know the final status of its request. We use the `status()` method to set the HTTP status code.

```javascript
app.get("/about", (req, res) => {
  console.log(`New request made: ${req.method}`)
  res.status(200).send("<p>Successful Request</p>")
})
```

`redirect()` can redirect the browser to a page's new URL. It's also used when a page's content has been moved to a new location on the page.

```javascript
app.get("/user", (req, res) => {
  console.log(`New request made: ${req.method}`)
  res.redirect("/userinfo")
  res.send("<h1>User Info Page</h1>")
})
```

### ExpressJS Route Parameters

In Express we use routes to handle incoming requests. A route is a specified URL path and HTTP method.

When a request is mapped to a route, the route processes the request and a response is sent.

In Express the route's path can be a string, a string pattern, or even a regular expression!

Routes can point to directories. For example the `/` path directs users to the root directory, `/movies` path directs to movies directory.

```javascript
const express = require('express')
const app = express()

//path with a string
app.get('/movies', (req, res) => {
  res.send('Hello from the root directory!')
})

//path with a string pattern
app.get('/movies/:id', (req, res) => {
  res.send('Hello from the movies directory!')
})

app.listen(3000, () => console.log('The server is listening on port 3000'))
```

If we want to access a movie with the id `35`? We can add a specific GET route with the path `/movies/35`.

```javascript
app.get('/movies/35', (req, res) => {
  res.send('Hello. I am the movie with the id 35 in the movies directory!')
})
```

But what if we have a lot of movies? That's where Express dynamic path parameters come in.

We `add /:` and the parameter name to the path. Like here with `id`.

```javascript
app.get('/movies/:id', (req, res) => {
  res.send('Hello there. I am a route with a parameter called id!')
})
```

if we want the value of the movie's `id`, we code `req.params.id`

```javascript
app.get('/movies/:id', (req, res) => {
  res.send(`Hello. I am the movie with the id ${req.params.id} in the movies directory!`
  )
})
```

We can add more than one parameter to a route's path, like a `name` parameter for the `movies` directory.

Here a request with path `/movies/35/Aliens` gives the value `35` to the `id` parameter and `Aliens` to the `name` parameter.

```javascript
app.get('/movies/:id/:name', (req, res) => {
  res.send(`Hello. I am the movie with the id ${req.params.id} and the name ${req.params.name} in the movies directory!`)
})
```

We can also use destructuring to access parameter values from the `req.params` object and save them in variables.

Let's destructure the parameters with the syntax `const { id, name } = req.params`

```javascript
app.get('/movies/:id/:name', (req, res) => {
  const {id, name} = req.params
  res.send(`Hello. I am the movie with the id ${id} and the name ${name} in the movies directory!`)
})
```

### Middleware in Express

**Middleware** refers to functions that act as an intermediary layer between the web server and the application.

This intermediary layer allows for more efficient interaction between the server and the app.

Middleware functions can access the request and response in an application's request-response cycle.

You can use middleware for tasks like logging information, parsing requests, authentication, and more.

In Express we add middleware with the `.use()` method.

```javascript
app.use((req, res) => { 
  console.log('Incoming request...') 
  console.log(`Request type: ${req.method}`) 
}) 
```

Express has built-in middleware functions, such as `express.json()`.

`express.json()` parses incoming requests that contain JSON payloads, converting them to a JS object that the server can readily process.

```javascript
const express = require("express") 
const app = express() 

app.use(express.json())

app.get('/', (req, res) => { 
  console.log('The request body JSON is converted to a JS object.') 
}) 

app.listen(3000, () => { 
  console.log('The server is listening on port 3000') 
})
```

We can also create our own custom middleware, that does specific custom actions we've defined such as `authenticate`.

```javascript
function authenticate(req, res) { 
  if (req.body.role === 'Admin') { 
    console.log('Authenticated') 
  } else { 
    console.log('Unauthorized') 
  } 
} 
 
app.use(authenticate) 
```

Third-party middleware can also be used. Morgan is a popular middleware used to log HTTP request details.

```javascript
const express = require('express') 
const morgan = require('morgan') 
const app = express() 
 
// 'tiny' provides logging with minimal output 
app.use(morgan('tiny')) 
 
app.get('/', (req, res) => { 
  res.status(500).send('Request received.') 
}) 

app.listen(3000, () => { 
    console.log('The server is listening on port 3000') 
})
```

**Output :**

```bash
The server is listening on port 3000
GET / 200 150 - 1.650 ms
```

An important thing to remember is that if we apply `.use()` in our code, none of the code after the middleware function will run. In this code GET request is not handled.

```javascript
app.use
((req, res) => { 
  console.log('Incoming request...') 
  console.log('Request type: ' + req.method) 
  console.log('The flow will stop here.') 
}) 
 
app.get('/', (req, res) => { 
   console.log("Did we make it to the `get()` middleware step?") 
})
```

To move on to the next middleware, we use `next()`. We first need to add `next` to the parameters of the middleware.

Then, we call `next()` at the end of the middleware function.

```javascript
app.use((req, res, next) => { 
  console.log('Incoming request...') 
  console.log(`Requesting server: ${req.hostname}`) 
  next() 
}) 
```

### Express Router

**Express Router Basics**

We know that middleware can be bound to all requests that an Express app receives.

But how can we assign specific middleware to particular routes? That’s where Express Router comes in!

Express Router is a module that allows us to bind middleware at the *route* level.

Express Router does this by using a router object that links an HTTP method and path to specific middleware.

We'll start with an instance of an Express app in `index.js`. We've also created JS files for each route.

Creating route files is not mandatory but it helps modularize our code. In each route file, we must `require()` Express.

We need to create an instance of the router object in each of the route files.

In users.js, declare a variable and assign it an instance of the router object by coding `express.Router()`.

**users.js :**

```javascript
const express = require('express')
const router =  express.Router()
```

Now, let's use the router object to create a GET endpoint in `./users.js`.  Use the syntax `router.get()`.

Note that because we'll mount this module to the path `/users` in `index.js`, the path here can simply be `/`.

**users.js :**

```javascript
const express = require('express')
const router =  express.Router()

router.get('/', (req, res) => {
  res.send('Get a list of all users')
})
```

To make the route available for use in the application, you'll need to export the modules.

To do this code `module.exports = router` at the end of the `users.js` file.

```javascript
const express = require('express')
const router =  express.Router()

router.get('/', (req, res) => {
  res.send('Get a list of all users')
})

module.exports = router
```

import them to the main file `index.js` and bind the modules to their respective routes in our Express application with app.use().

**index.js :**

```javascript
const express = require('express')
const usersRouter = require('./users.js')
const app = express()

app.use('/users', usersRouter)

app.listen(4000, () => {
  console.log('The server is listening on port 4000')
})
```

**The Router Object**

The `router.use()` mounts middleware functions to a specific path. When an incoming request's path matches the specified path, the middleware executes.

We can then mount router on the /products path in app.use(). This allows us to modularize routes.

Any incoming requests to /products/clothing will be handled by the middleware function defined in the router.use() method.

```javascript
const express = require('express')
const app = express()
const router = express.Router()

router.use('/clothing', (req, res, nex) => {
  console.log('Router use for /clothing)
})

app.use('/products', router)

app.listen(4000, () => {
  console.log('The server is listening on port 4000')
})
```

The `next()` function at the route level serves the same purpose as `next()` at the app level. `next()` calls the next middleware function that matches the request path. We must include next in the callback function's parameters.

```javascript
const express = require('express')
const app = express()
const router = express.Router()

router.use('/clothing', (req, res, nex) => {
  console.log('Router use for /clothing)
})

router.get('/clothing', (req, res) => {
  res.send('Router is getting all clothing info')
})

app.use('/products', router)

app.listen(4000, () => {
  console.log('The server is listening on port 4000')
})
```

The `router.param()` method binds middleware to a specified parameter. Its final argument is the value of the parameter. Here, when a user accesses a path with the parameter `clothingId` we'll see a console log with the parameter's value.

```javascript
const express = require('express')
const app = express()
const router = express.Router()

router.param('clothingID', (req, res, next, clothingId) => {
  if(clothingId) {
    console.log(`This is a request for the Clothing ID: ${clothingId}`)
  }
  next()
})

router.get('/clothing/:clothingId', (req, res) => {
  res.send('Router is getting the request info')
})

app.use('/products', router)

app.listen(4000, () => {
  console.log('The server is listening on port 4000')
})
```

`router.route()` allows us to handle all HTTP methods for a single route with one function. Here `router.route()` binds `validateAuth` middleware to handle all HTTP methods for `/users/:userId`, and has distinct callbacks for each method.

```javascript
const express = require('express')
const app = express()
const router = express.Router()

const validateAuth = (req, res, next) => {
  if(req.params.userId) {
    console.log('User Identified')
  }
  next()
}

router.route('/user/:userId')
.all(validateAuth)
.get((req, res) => res.send.('Getting the user information'))
.post((req, res) => res.send('Posting the user information'))
.put((req, res) => res.send('Updating the user information'))
.delete((req, res) => res.send('Deleting the user information'))

app.use('/main', router)

app.listen(4000, () => {
  console.log('The server is listening on port 4000')
})
```

### Express Error Handling

Error handling allows us to provide useful feedback to the frontend and helps avoid server crashes. If the frontend sends a request with errors, the server may not be able to fulfill the request. Send the `GET` request the response when we request a user that does not exist will be 404.

```javascript
const express = require('express')
const app = express()

const products = [
  {category: 'electronics', price: 400, title:'phone', id: 1},
  {category: 'electronics', price: 900, title:'phone', id: 2},
  {category: 'electronics', price: 200, title:'phone', id: 3},
]
```
### Structuring GET Endpoints

GET endpoints in Express allow us to send data requested from our server, making it available to manipulate and display on the frontend. In addition to sending data, endpoints enable us to transmit essential information such as HTTP status codes.

For our examples we'll start by using an array of mock data, so we can focus on structuring our endpoints. For `GET` requests, we'll primarily be retrieving data from the array and sending it back to the client.

`.get()` has two arguments. The first argument is the path that the incoming request is matched to. The path must start with a `/`. The second argument is a callback function with arguments for the request and response objects: `req` and `res`.

In the callback function, we use the response object res to set the status code, and then we `.send()` the requested information.

Remember to **access the request parameters** if applicable, **query the requested information**, and **send a response** with a status code and body.

```javascript
const express = require('express')
const app = express()

const products = [
  {category: 'electronics', price: 400, title:'phone', id: 1},
  {category: 'electronics', price: 900, title:'phone', id: 2},
  {category: 'electronics', price: 200, title:'phone', id: 3},
]

app.get('/products/:id', (req, res) => {
  const params = req.params
  const requestedProduct = products.find(product => product.id === Number(params.id))
  if(!requestedProduct){
    res.status(404).send({ message: `The product with the id ${ params.id } does not exist`})
  } else {
    res.status(200).send(requestedProduct)
  }
})

app.listen(3000, () => {
  console.log('The server is listening on port 3000')
})
```

get from sql example

```javascript
app.get('/products/:id', (req, res) => {
  const productID = req.params.id
  connection.query('SELECT * FROM Product WHERE id = ?', productID, (error, results) => {
    if(error) {
      res.status.(500).json(error)
    }
    res.status(200).send(results)
  })
```

### Structuring POST Endpoints

`POST` endpoints in Express allow our server to receive data from the frontend and store it in a database for future retrieval and use.

Like `GET, POST` endpoints start with the instance of the Express application, followed by `.post()`. Like `.get()`, `.post()` has two arguments: the endpoint path and a callback function. The callback has arguments for the `req` and `res` objects.

In the callback function, we first need to process the data in the req object. The req object holds data about the request. The information we'll need is in the `req` object's body. 

After accessing the data, we need to add it to the database. Since we're using an array for our database we'll use `.push()` to add the new data.

Next, we need to send a response to the frontend. We'll use a `201` HTTP status code to signify that the data was saved. However, doing this alone is not a complete solution, and can lead to problems if the data wasn't saved properly.

After we create new data in a database, it's generally best practice to query the data and return it to the client for verification. Here, we'll use the `.find()` method to locate the entry matching our `newProduct` and save the result in a variable.

Finally, let's use a conditional to verify the entry was added and then send an appropriate response: the confirmed data or an error.

Remember to **get the data** from the request body, **add it** to the database, **confirm** that it was added, and **send** a response to the frontend.

```javascript
const express = require('express')
const app = express()

const products = [
  {category: 'electronics', price: 400, title:'phone', id: 1},
  {category: 'electronics', price: 900, title:'phone', id: 2},
  {category: 'electronics', price: 200, title:'phone', id: 3},
]

app.post('/products', (req, res) => {
  console.log('Calling /products endpoint')
  const newProduct = req.body
  products.push(newProduct)
  const confirmEntry = products.find(product => product === newProduct)
  if (confirmedEntry) {
    res.status(201).send(confirmedEntry)
  } else {
    res.status(400).send('Error Creating Product')
  }
})

app.listen(3000, () => {
  console.log('The server is listening on port 3000')
})
```

post to sql example

```javascript
app.post('/products', (req, res) => {
  console.log('Calling /products endpoint')
  const formData = req.body
  connect.query('INSERT INTO Product set ?', formData, (error, results) => {
    if (error) {
      res.status(500).json(error)
    }
    const newProductId = results.insertId
    connection.query('SELECT * FROM Product WHERE id = ?', newProductId, (error, results) => {
      id (error) {
        res.status(500).json(error)
      }
      const newProduct = results[0]
      res.status(201).send(newProduct)
    })
  })
})
```

### Structuring DELETE Endpoints

For a `DELETE` endpoint, our callback function should remove an entry from the database. Below, we update products to only include entries **not** matching the id passed via request parameters.

Then, our DELETE endpoint sends back a copy of the now updated database along with a status code. We also made our endpoint responses robust: if removing an entry fails, the endpoint sends an appropriate status code and response body.

```javascript
const express = require('express')
const app = express()

const products = [
  {category: 'electronics', price: 400, title:'phone', id: 1},
  {category: 'electronics', price: 900, title:'phone', id: 2},
  {category: 'electronics', price: 200, title:'phone', id: 3},
]

app.delete('/products:id', (req, res) => {
  const id = request.params.id
  try {
    products = products.filter(product => product.id !== Number(id))
    response.status(200).send(products)
  } catch (e) {
    response.status(404).send({ message: `the product with the id ${params.id} does not exist`})
  }
})

app.listen(3000, () => {
  console.log('The server is listening on port 3000')
})
```

delete from sql example

```javascript
router.delete('/products/:id', (request, response) => {
	const productId = request.params.id
	connection.query('DELETE FROM Product WHERE id = ?', productId, (error, results) => {
		if (error)
			response.status(500).json(error)
		connection.query('SELECT * FROM Product', productId, (error, results) => {
			if (error)
				res.status(500).json(error)
			const updatedDB = results
			response.status(200).json(updatedDB)
		})
	})
})
```

### Structuring PUT Endpoints

`PUT` endpoints either update an existing entry or insert a new entry if one doesn't exist, so they need to be able to handle both cases.

First, inside the callback function, we need to search for a product with a matching `id`. If we find a product with a matching `id`, our PUT endpoint should update the existing entry. Since our database is an array, we can update the existing entry via its index using bracket syntax.

If we don't find a product with that id, our PUT endpoint should insert a new entry. We'll call `.push()` to add the request body data to the database.

After either updating or inserting an entry, our endpoint should access and save the new data to a variable.

Finally, our endpoint should send a response containing the new entry (the one we saved to a variable) along with a status code.

```javascript
const express = require('express')
const app = express()

const products = [
  {category: 'electronics', price: 400, title:'phone', id: 1},
  {category: 'electronics', price: 900, title:'phone', id: 2},
  {category: 'electronics', price: 200, title:'phone', id: 3},
]

app.put('/products:id', (req, res) => {
  const params = request.params
  const body = request.body
  let index = products.findIndex((product) => product.id === Number(params.id))

  if (index >= 0) {
    products[index] = body
    let confirmedEntry = products[index]
    response.status(200).send(confirmedEntry)
  } else {
    try {
      products.push(body)
      let confirmedEntry = products[products.length - 1]
      response.status(200).send(confirmedEntry)
    } catch(e) {
      response.status(404).send({ message: `update failed`})
    }
  }
})

app.listen(3000, () => {
  console.log('The server is listening on port 3000')
})
```

put to sql example

```javascript
app.put('/products/:id', (request,
	response) => {
	const productId = request.params.id
	const formData = request.body
	connection.query('UPDATE Product SET ? WHERE id = ?',[formData, productId], (error, results) => {
		if (error)
			res.status(500).json(error)
		connection.query('SELECT * FROM Product WHERE id = ?',productId, (error, results) => {
		  if (error)
			  res.status(500).json(error)
		  const updatedProduct = results
			response.status(200).json(updatedProduct)
			})
	})
})
```

### Connecting to a Database

**How to connect to Database**

To connect to a database, we need to import the `mysql` module. The mysql module has functions to help with connecting to a database. One such function is `createConnection()`. We use `createConnection()` to define the connection details like the server, the credentials, and the database name.

```javascript
const mysql = require('mysql)
const connection = mysql.createConnection()
```

To connect to a database, the program needs to know where the database is. The host property of the object defines this information. 

Connecting to a database usually requires credentials. Aside from the host, we should also include the user and password properties.

Multiple databases can share the same host. We can include the database property in the object to define which database to connect to.

```javascript
const mysql = require('mysql)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myUser',
  password: 'myPassword',
  database: 'myDB
})
```

**Test connection with Database**

`createConnection()` only holds the details for the database connection. To connect to the database, we need to use the `connect()` function.
`connection.connect()`

The `connect()` function initiates a connection to the server but will **not** show if the connection was successful. To check the connection, we can add an arrow function as the parameter of `connect()`. The function should take an argument, `error`.
`connection.connect(error => {})`

The function alone is not enough to let us know if there is an error. We need to use an if statement to check if `error` has a value. If `error` has a value, we should `throw` the `error`. Otherwise, we can print a message in the console that says `'Connected!'`.
```javascript
connection.ceonnect(error => {
  if(error) {
    throw error
  }
  console.log("Connected!")
}
```

It's good practice to always end your connection. This ensures that all queries are executed before the database connection is closed. The `mysql` module has an `end()` function that we can use to end the connection.
`connection.end()`

When we try to close a database connection, we might encounter errors. Therefore, like with `connect()`, we'll also need to pass a callback function that checks for errors as an argument for `end()`.

```javascript
connection.end(error => {
  if(error) {
    throw error
  }
  console.log("Connection closed!")
})
```

**Environment Variables**

When establishing a connection, the details like host or password are the same throughout all the web pages. *Environment* variables help us save time when coding because we only need to include these details in one file.

Environment variables are like any other variables, the only difference is that they are usable on a global scope, across multiple files. To use environment variables, we need the dotenv module and its `config()` function.
`require.('dotenv').config()`

Aside from `dotenv`, we also need the `process` module but `process` is a built-in module and does not need to be imported. We can use the `env` property of the `process` module to access the environment variables.

```javascript
require('dotenv').config()

const mysql = require('mysql)
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: 'myUser',
  password: 'myPassword',
  database: 'myDB'
})
```

But where are the environment variables? We can store all the environment variables in a separate `.env` file. We create them like this: `VARIABLE_NAME = 'value'`. Give the value `localhost` to the `HOST` environment variable.
`HOST='localhost'`

To access the environment variables stored in the `.env` file we code `process.env` followed by `.` and the variable name.

```env
HOST='localhost'
DATABASE='myDB'
PASSWORD='myPassword'
USER='myUser'
```
require('dotenv').config()

const mysql = require('mysql)
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})
```javascript
```

### Database Interactions

**Querying Database**

We know `APIs` help us connect front-end and back-end, but how are `APIs` created? Let's create an `API` using `query()` and router!

To execute SQL statements on a MySQL database using Node.js, we can use the `query()` function from the `mysql` module. The `query()` function takes 2 parameters: the SQL statement to be executed and a callback function to process the response.

The callback function used as the 2nd parameter of `query()` only accepts 2 parameters. This is because we only need the first 2 parts which are `error` and `result` but the response could actually have more than 2 parts.

```javascript
const mysql = require('mysql')
const con = mysql.createConnection({
  host: "host",
  user: "user",
  password: "pw",
  database: "db"
})
con.connect(err => {
  if(err) throw err
  con.query("SELECT * FROM customers", (error, result) => {
    if(error) throw error
    console.log(result)
  })
})
```

For `SELECT` statements used as the first parameter of the `query()` function, the result is returned as an array of objects. Logging result will print all columns queried. The syntax to access specific value is `result[index].column_name`.
`console.log(result[index].column_name)`

**Inserting into Database**

We can use `query()` like we do when we retrieve data. However, instead of a `SELECT` statement for the first parameter, we use an `INSERT INTO` statement.

```javascript
const mysql = require('mysql')
const con = mysql.createConnection({
  host: "host",
  user: "user",
  password: "pw",
  database: "db"
})
con.connect(err => {
  if(err) throw err
  con.query("INSERT INTO customers (name) VALUES ('Company ABC')", (error, result) => {
    if(error) throw error
    console.log(result)
  })
})
```

To parameterize a SQL statement, simply add `?` where we would enter values. For our example, that is after `VALUES`.
`con.query("INSERT INTO customers (name) VALUES ?", () => {})`

Next, we need to store the values in a 2-dimensional array. We'll use this array as the 2nd parameter of `query()`. Each row is an array and we store columns as the elements of each row. These row arrays are then all stored in one array.

```javascript
con.query("INSERT INTO customers (name) VALUES ?", 
  [
    ['ABC Company]', '2001'],
    ['DEF Corp', '1998'],
    ['GHI Inc.', '2015']
  ]
,() => {})
```

Unlike `SELECT` statements, `INSERT INTO` statements do not respond with data from the database. We can use the `affectedRows` property of `result` to see the number of new rows added.

```javascript
con.query("INSERT INTO customers (name) VALUES ?", 
  [
    ['ABC Company]', '2001'],
    ['DEF Corp', '1998'],
    ['GHI Inc.', '2015']
  ]
,(error, result) => {
  if(error) throw error
  console.log(result.affectedRows)
})
```

**Integrating with Router**

We learned that an `API` can have different actions based on the HTTP method. Such `APIs` can be created using `router` and `query()`. Now, we'll learn how we can create these `APIs` and how we can allow an `API` to perform different actions.

```javascript
const mysql = require('mysql')
const DB_HOST = 'localhost'
const DB_USER = 'root'
const DB_PASSWORD = 'example_password'
const DATABASE = 'example_db'
const router = express.Router()
const connection =
	mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DATABASE
	})
router.get('/products', (req, res) => {
	connection.query('SELECT * FROM products', (error, results) => {
		if (error) {
			console.log(error)
			res.status(500).send('There is an issue with your request.')
		} else {
			const products = results
			res.status(200).json(products)
		}
	})
})
```

We can use the `post()` function to handle the request with the HTTP POST method. We can also use `query()` in the callback function of `router.post()` to execute an `INSERT INTO` statement on the database to insert data.

```javascript
const mysql = require('mysql')
const DB_HOST = 'localhost'
const DB_USER = 'root'
const DB_PASSWORD = 'example_password'
const DATABASE = 'example_db'
const router = express.Router()
const connection =
	mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DATABASE
	})
router.post('/products', (req, res) => {
	connection.query('INSERT INTO products VALUES (3,"Potted Plant" ,9.90)', (error, results) => {
		if (error) {
			console.log(error)
			res.status(500).send('There is an issue with your request.')
		} else {
			res.status(200).json("{'Rows':" + results.affectedRows + "}")
		}
	})
})
```

We can parameterize the SQL statement, then use the `body` property of the request as the second parameter to insert multiple values.
`connection.query('INSERT INTO products VALUES ?', req.body, () => {})`

We can use the `put()` function to handle the request with the HTTP PUT method. For requests involving identification, we can append `/:id` to the endpoint to be used as reference later.

```javascript
const mysql = require('mysql')
const DB_HOST = 'localhost'
const DB_USER = 'root'
const DB_PASSWORD = 'example_password'
const DATABASE = 'example_db'
const router = express.Router()
const connection =
	mysql.createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		database: DATABASE
	})
router.post('/products/:id', (req, res) => {
	connection.query('UPDATE products SET name = ? WHERE id=' + req.params.id, req.body, (error, results) => {
		if (error) {
			console.log(error)
			res.status(500).send('There is an issue with your request.')
		} else {
			res.status(200).json("{'Rows':" + results.affectedRows + "}")
		}
	})
})
```