# 🎮 JavaScript Quest
## Your One-Week Adventure into Web Programming
### Student Handout

> *"Every expert was once a beginner. Let's begin."*

---

## 👋 Welcome!

This week you're going to learn **JavaScript** — the programming language that makes websites come alive. By Friday, you'll build your very own interactive web project from scratch.

You already know HTML and CSS. Think of this week as adding the **brain** to the skeleton and skin you already know how to build.

---

## 🗓️ Your Week at a Glance

| Day | What You'll Learn | Blocks |
|---|---|---|
| **Monday** | Variables, logic, decisions | Block 1 + Block 2 |
| **Tuesday** | Loops, functions | Block 3 + Block 4 |
| **Wednesday** | Lists and data (Arrays & Objects) | Block 5 |
| **Thursday** | Making web pages interactive | Block 6 |
| **Friday** | Build your own project! | Block 7 |

---

## 🎖️ How the XP System Works

This course works like a game. You earn **XP (Experience Points)** for everything you do:

| Activity | XP Earned |
|---|---|
| Completing a Mini Task | +75 to +100 XP |
| Completing a Block Boss Challenge | +200 to +250 XP |
| Final Project | Up to +1000 XP |
| Regular GitHub commits | +100 XP bonus |
| Being first to finish a task correctly | +30 XP |
| Helping a classmate | +50 XP |

### 🏅 Your Level Ladder

| XP | Your Level |
|---|---|
| 0 – 499 | 🥚 Rookie Coder |
| 500 – 999 | 🌱 Code Sprouter |
| 1000 – 1599 | ⚡ Debug Warrior |
| 1600 – 2299 | 🔥 Function Master |
| 2300 – 2999 | 💎 DOM Wizard |
| 3000 – 3900 | 🚀 JavaScript Champion |

**Maximum XP this week: 3900**

---

## 🛠️ What You Need to Set Up (Day 1 Morning)

### Software to Install Before Day 1 (or during Day 1 morning)

| What | Where to Get It |
|---|---|
| **VS Code** (your code editor) | https://code.visualstudio.com |
| **Node.js** (LTS version) | https://nodejs.org |
| **Git** | https://git-scm.com |
| **Google Chrome** | https://www.google.com/chrome |
| **GitHub account** (free) | https://github.com |

### VS Code Extensions to Install
Open VS Code → click the 4-squares icon on the left → search and install each:
1. **Live Server**
2. **Prettier – Code formatter**
3. **ESLint**
4. **GitLens**
5. **JavaScript (ES6) code snippets**

---

## 💾 GitHub: Your Code Diary

Git is like a **save checkpoint system** for your code. GitHub is the cloud where all your checkpoints live.

### One-Time Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Daily Habit (do this every time you finish something!)
```bash
git add .
git commit -m "Completed Task 1.1 - Hello World"
git push
```

### Your Folder Structure
```
js-quest-coursework/
├── block-1-basics/
├── block-2-decisions/
├── block-3-loops/
├── block-4-functions/
├── block-5-data/
├── block-6-dom/
├── block-7-projects/
└── README.md
```

---

## 📖 Block 1 — The Starting Zone
### Basics: Variables, Data, Operators

---

### What is JavaScript?

JavaScript is a programming language that runs **inside your browser**. It's the only programming language browsers understand natively.

> 🚦 **Think of it this way:** Your website is like a traffic light.
> - HTML = the pole and the lights (structure)
> - CSS = the red, yellow, green colors (style)
> - JavaScript = the controller that decides *when* to switch (behaviour)

### Your First Program

**hello-world.html**
```html
<!DOCTYPE html>
<html>
  <head><title>Hello World</title></head>
  <body>
    <h1>My First JavaScript Page</h1>
    <script src="app.js"></script>
  </body>
</html>
```

**app.js**
```javascript
console.log("Hello, World! 🌍");
alert("Welcome to JavaScript Quest!");
```

To see `console.log` output: Press **F12** → click the **Console** tab.

---

### Variables — Storing Information

A variable is like a **labelled box**. You put something in it and refer to it by name later.

```javascript
const myName = "Priya";       // const = won't change
let myAge = 19;                // let = can change later
myAge = 20;                    // ✅ Allowed — age changed!
```

> ⚠️ **Rule:** Use `const` by default. Switch to `let` only if the value needs to change. Never use `var`.

### Data Types

| Type | Example | Real-World Equivalent |
|---|---|---|
| String (text) | `"Hello"` | A name tag |
| Number | `42`, `3.14` | A price, a score |
| Boolean | `true` / `false` | A light switch |
| Null | `null` | An empty box (on purpose) |
| Undefined | `undefined` | A box not filled yet |

### Template Literals — The Clean Way to Mix Text

```javascript
const name = "Karan";
const score = 95;

// Old messy way:
console.log("Hello " + name + ", your score is " + score);

// New clean way ✅ (use backticks, not quotes):
console.log(`Hello ${name}, your score is ${score}`);
```

---

### ⚔️ Your Tasks — Block 1

**Task 1.1 — Hello World** (+50 XP)
- Create `hello-world.html` and `app.js`
- Show "Hello, [Your Name]! Welcome to JavaScript Quest." using both `alert()` and `console.log()`

**Task 1.2 — Student Profile Card** (+75 XP)
- Store your name, age, course, and hobby in variables
- Log a formatted profile to the console using template literals

**Task 1.3 — Interactive Greeting** (+75 XP)
- Ask user for name and favourite city using `prompt()`
- Display a personalised message

**🏆 Boss: Simple Calculator** (+200 XP, +50 bonus)
- Ask for two numbers and an operation (+, -, *, /)
- Show the result
- Bonus: Handle division by zero

---

## 📖 Block 2 — The Decision Dungeon
### Logic, Conditions, Decisions

---

### if / else — Your Code Makes Decisions

```javascript
const temperature = 38;

if (temperature > 35) {
  console.log("It's very hot! 🥵");
} else if (temperature > 25) {
  console.log("It's warm. Nice weather! 😊");
} else {
  console.log("Grab a jacket! 🧥");
}
```

### Comparison Operators (Always use `===` not `==`)

| Operator | Meaning |
|---|---|
| `===` | Equal to |
| `!==` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

### Logical Operators

```javascript
// AND — both must be true
if (hasTicket && isAbove18) { ... }

// OR — at least one must be true
if (isStudent || hasCoupon) { ... }

// NOT — flips the condition
if (!isRaining) { ... }
```

### Switch — Cleaner for Multiple Choices

```javascript
switch (day) {
  case "Monday":
    console.log("New week, let's go! 💪");
    break;
  case "Friday":
    console.log("Weekend incoming! 🎉");
    break;
  default:
    console.log("Keep going!");
}
```

---

### ⚔️ Your Tasks — Block 2

**Task 2.1 — Movie Ticket Checker** (+100 XP)
- Under 12 → Free | 12–17 → ₹100 | 18+ student → ₹150 | 18+ → ₹250

**Task 2.2 — Day Planner** (+100 XP)
- Use switch to suggest a daily activity based on day name

**🏆 Boss: Grade Calculator** (+200 XP, +50 bonus)
- Get marks for 5 subjects → calculate average → assign A+/A/B/C/F
- Bonus: List failed subjects

---

## 📖 Block 3 — The Loop Labyrinth
### Loops: Doing Things Repeatedly

---

### for Loop — When You Know How Many Times

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Round ${i}`);
}
// Prints: Round 1, Round 2, Round 3, Round 4, Round 5
```

### while Loop — Keep Going Until a Condition is False

```javascript
let guess = "";
while (guess !== "correct") {
  guess = prompt("Guess the password:");
}
console.log("You're in! ✅");
```

### break and continue

```javascript
// break = exit the loop entirely
// continue = skip this round, go to next
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;        // Stops at 5
  if (i % 2 === 0) continue; // Skips even numbers
  console.log(i);
}
```

---

### ⚔️ Your Tasks — Block 3

**Task 3.1 — Times Table Generator** (+75 XP)
- Ask for a number → print its 1–12 multiplication table

**Task 3.2 — FizzBuzz** (+100 XP)
- Print 1–50: Fizz (÷3), Buzz (÷5), FizzBuzz (÷both), or number

**🏆 Boss: Number Guessing Game** (+200 XP)
- Computer picks random number (1–100)
- Player guesses → "Too high / Too low / Correct!"
- Count attempts, show feedback at end

---

## 📖 Block 4 — The Function Factory
### Functions: Reusable Code Machines

---

### What is a Function?

A function is like a **recipe**. Write it once, use it as many times as you want.

```javascript
// Define the function:
function greet(name) {
  return `Hello, ${name}! Welcome! 👋`;
}

// Use it:
console.log(greet("Priya"));
console.log(greet("Arjun"));
```

### Arrow Functions — The Modern Short Version

```javascript
// Same function, written shorter:
const greet = (name) => `Hello, ${name}! Welcome! 👋`;
```

### Scope — Where Variables Live

```javascript
const globalVar = "Everyone can see me 🌍";

function myFunc() {
  const localVar = "Only I can see me 📦";
  console.log(globalVar);  // ✅ Works
  console.log(localVar);   // ✅ Works
}

console.log(globalVar);    // ✅ Works
console.log(localVar);     // ❌ Error! Outside the function
```

---

### ⚔️ Your Tasks — Block 4

**Task 4.1 — Utility Functions** (+100 XP)
- Write: `convertCelsiusToFahrenheit()`, `calculateBMI()`, `getFullName()`, `isEven()`

**Task 4.2 — Temperature Converter App** (+100 XP)
- Ask direction (C→F or F→C), ask value, use functions, show result

**🏆 Boss: Quiz Engine** (+250 XP, +75 bonus)
- Build a 5-question JS quiz using functions for each part
- Bonus: Track time with `Date.now()`

---

## 📖 Block 5 — The Data Vault
### Arrays & Objects: Organised Data

---

### Arrays — Ordered Lists

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);     // "Apple" (starts at 0!)
console.log(fruits.length); // 3

fruits.push("Grapes");      // Add to end
fruits.pop();               // Remove from end
```

### Power Methods

```javascript
const marks = [45, 82, 37, 91, 55];

// filter — keep only what matches:
const passed = marks.filter(m => m >= 40);

// map — transform every item:
const doubled = marks.map(m => m * 2);

// find — get first matching item:
const firstHigh = marks.find(m => m > 80);  // 82
```

### Objects — Profile Cards for Data

```javascript
const student = {
  name: "Priya",
  age: 19,
  course: "Business Analytics"
};

console.log(student.name);   // "Priya"
student.age = 20;             // Update a value
student.city = "Mumbai";      // Add new field
```

### Arrays of Objects — Real-World Data

```javascript
const products = [
  { name: "Notebook", price: 45 },
  { name: "Pen", price: 20 },
  { name: "Backpack", price: 850 }
];

const cheap = products.filter(p => p.price < 100);
const names = products.map(p => p.name);
```

---

### ⚔️ Your Tasks — Block 5

**Task 5.1 — Class Manager** (+100 XP)
- Array of 8 names: log all with numbers, filter by first letter, add/remove, find by length

**🏆 Boss: Student Report System** (+250 XP)
- Array of 5 students with marks for 4 subjects
- Functions: calculate average, assign grade, find topper, list low-attendance students
- Print a formatted report

---

## 📖 Block 6 — The Web Arena
### DOM & Events: Making Pages Interactive

---

### What is the DOM?

The DOM is JavaScript's **map of your HTML**. Every HTML element is an object JavaScript can find and change.

```javascript
// Find elements:
const title = document.querySelector("#mainTitle");
const allButtons = document.querySelectorAll("button");

// Change content:
title.textContent = "New Title!";

// Change style:
title.style.color = "blue";

// Add/remove CSS classes:
title.classList.add("highlighted");
title.classList.toggle("dark-mode");
```

### Event Listeners — React to What Users Do

```javascript
const button = document.querySelector("#myBtn");

button.addEventListener("click", () => {
  console.log("Button clicked! 🎉");
});

// React to typing:
const input = document.querySelector("#myInput");
input.addEventListener("input", () => {
  console.log(`You typed: ${input.value}`);
});
```

### Create & Remove Elements

```javascript
// Create a new element:
const newItem = document.createElement("li");
newItem.textContent = "New Todo Item";

// Add to the page:
document.querySelector("#myList").appendChild(newItem);

// Remove it:
newItem.remove();
```

---

### ⚔️ Your Tasks — Block 6

**Task 6.1 — Dark Mode Toggle** (+100 XP)
- Button that switches between dark/light mode using classList.toggle()

**Task 6.2 — Live Character Counter** (+100 XP)
- Textarea + live counter that turns red above 80 characters

**🏆 Boss: Interactive Todo List** (+250 XP, +75 bonus)
- Add tasks, mark done, delete, show count remaining
- Bonus: Save to localStorage so tasks survive page refresh

---

## 🏆 Block 7 — The Final Boss
### Your Project (Choose One!)

---

### Project A — Quiz App 🎯
Build a 10-question quiz:
- 4 multiple-choice options per question
- Show correct/wrong feedback instantly
- Progress bar
- Final score screen + Play Again button

### Project B — Shopping Cart 🛒
Build a product listing + cart:
- 6 products with Add to Cart
- Cart shows items, quantities, total
- Remove items
- Promo code for discount

### Project C — Word Game 🎮
Build a word guessing game:
- Computer picks random word from list
- Guess one letter at a time
- Show blanks filling in
- 6 wrong guesses → Game Over

### Project D — Expense Tracker 📊
Build a personal expense tracker:
- Add expenses with category + amount
- Display in table
- Show total per category
- Filter by category
- Delete entries

---

### Project Scoring

| Criteria | Points |
|---|---|
| Code runs without errors | 200 |
| All core features work | 200 |
| Clean, readable code | 150 |
| GitHub commits (5+ meaningful) | 150 |
| Bonus features / creativity | 200 |
| **Total** | **1000** |

---

## 🔧 Useful Things to Remember

### Chrome DevTools (Your Best Friend)
- **Open:** F12 (Windows) or Cmd+Option+I (Mac)
- **Console tab:** See your `console.log()` messages and errors
- **Elements tab:** See your live HTML

### When Your Code Breaks (It Will — That's Normal!)
1. **Read the error message** in the Console — it tells you line number
2. Add `console.log()` before and after the broken part
3. Google the exact error message — someone has had it before
4. Ask a classmate
5. Ask the instructor

### The Golden Rules of Coding
- 💾 **Save often** (Ctrl+S / Cmd+S)
- 📦 **Commit often** (`git add . && git commit -m "message" && git push`)
- 🧪 **Test as you go** — don't write 100 lines then test
- 🔍 **Read error messages** — they're not scary, they're helpful
- 🌐 **Google is allowed** — real developers Google constantly

---

## 📚 Resources to Bookmark Right Now

| Resource | URL | Why Use It |
|---|---|---|
| MDN Web Docs | developer.mozilla.org | Best JavaScript reference |
| JavaScript.info | javascript.info | Best free JS tutorial |
| freeCodeCamp | freecodecamp.org | Extra practice exercises |
| Stack Overflow | stackoverflow.com | Search for your bug here first |
| CodePen | codepen.io | Quick browser experiments |

---

## 🏅 Badges You Can Earn This Week

| Badge | How |
|---|---|
| 🎯 First Blood | Complete your first task |
| 🔥 On Fire | Complete 3 tasks in a row |
| 💡 Bug Squasher | Fix a real error from DevTools |
| 🤝 Team Player | Help a classmate solve a problem |
| 📦 Commit Hero | Make 10+ meaningful GitHub commits |
| 🧠 FizzBuzz Legend | Finish FizzBuzz in under 15 minutes |
| 🏅 Block Master | Complete every task in a block |
| 🚀 Boss Slayer | Get full marks on a Boss Challenge |

---

*JavaScript Quest Student Handout | One-Week Intensive Course*
*Good luck — you've got this! 🚀*
