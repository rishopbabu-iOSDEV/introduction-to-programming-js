# 🧑‍🏫 Tutor Handbook — How to Drive *JavaScript Quest*

### A facilitation guide for an experienced programmer who is new to JavaScript

> **You know how to program.** You've written Swift, Java, and Python. You
> understand variables, types, loops, functions, scope, OOP, recursion — all of
> it. What's new for you this week is **one specific language (JavaScript)** and
> **one specific job (teaching absolute beginners)**.
>
> This handbook does two things:
> 1. **Onboards *you* to JS fast** — by mapping every concept to what you already
>    know in Swift/Java/Python, and flagging the traps that will bite you.
> 2. **Shows you how to teach each topic** without it being a dry lecture —
>    real-world hooks, live-coding scripts, and the exact doubts students will
>    raise with ready answers.

---

## 📑 Contents

1. [Your superpower and your trap](#1-your-superpower-and-your-trap)
2. [The teaching model: never lecture for more than 12 minutes](#2-the-teaching-model)
3. [JavaScript for polyglots — your 30-minute onboarding](#3-javascript-for-polyglots)
4. [The golden rules of keeping a coding class awake](#4-golden-rules-of-engagement)
5. [Block-by-block teaching guide](#5-block-by-block-teaching-guide) ← the core
   - [Block 1 — Basics](#block-1--the-starting-zone)
   - [Block 2 — Decisions](#block-2--the-decision-dungeon)
   - [Block 3 — Loops](#block-3--the-loop-labyrinth)
   - [Block 4 — Functions](#block-4--the-function-factory)
   - [Block 5 — Arrays & Objects](#block-5--the-data-vault)
   - [Block 6 — DOM & Events](#block-6--the-web-arena)
   - [Block 7 — Projects](#block-7--the-final-boss)
6. [The Debug Clinic playbook](#6-the-debug-clinic-playbook)
7. [Managing a mixed-pace room](#7-managing-a-mixed-pace-room)
8. [Daily facilitation notes](#8-daily-facilitation-notes)
9. [Pre-flight checklist for the tutor](#9-pre-flight-checklist)

---

## 1. Your superpower and your trap

**Superpower:** You already have the mental model of programming. You'll never be
lost on *what* a loop is. You can answer "why" questions students can't even
phrase yet. Lean on this — every time a student is confused about a JS concept,
you can reach for the same concept in a domain they'll later meet.

**The trap:** *The curse of knowledge.* The things that are obvious to you —
"of course a variable holds a value", "of course the function returns" — are the
exact things beginners trip on. Two rules protect you:

- **Never say "just" or "simply" or "obviously".** These words tell a struggling
  student that they're stupid for not getting it. Ban them from your vocabulary
  this week.
- **Assume nothing transfers.** Your students don't know Java. When you catch
  yourself about to say "it's like a HashMap", stop — that analogy is for *you*,
  not them. Translate it into a real-world object (a locker, a contacts app).

**The second trap (JS-specific):** JavaScript has genuinely weird corners
(`==` vs `===`, `this`, hoisting, `typeof null === "object"`). You will be
tempted to explain *why* they're weird because it's interesting to you. **Don't
go down rabbit holes.** For a one-week beginner course, "here's the rule, always
do it this way" beats "here's the fascinating history of type coercion." Park the
deep dives for the fast finishers (see §7).

---

## 2. The teaching model

**Rule: no theory segment runs longer than ~12 minutes without students touching a keyboard.**

The schedule *looks* like blocks of "Theory" then "Practical", but treat those
theory blocks as **live-coding sessions, not slides**. The rhythm inside every
theory slot should be:

```
HOOK  (30–60s)  →  a real-world question or a "watch this break" moment
SHOW  (3–5 min) →  you type code live on the projector, narrating every line
TURN  (2–3 min) →  "everyone type this and change ONE thing" (micro-practice)
CHECK (1–2 min) →  one question to the room, or one student predicts the output
```

Then repeat for the next sub-topic. This "I do → we do → you do" loop is the
single most important thing in this handbook.

**Type it, don't paste it.** When you paste finished code, students see magic.
When you type it and make a typo and fix it live, they see *process* — and they
learn that errors are normal, not failure. Deliberately make (and fix) one small
mistake per session.

**Predict-before-run.** Before you hit Run/refresh, ask: *"What will this
print?"* Take 2–3 guesses from the room. Then run it. When the output surprises
them, that surprise is the memory hook. This one technique will carry the whole
week.

---

## 3. JavaScript for polyglots

*Your personal cheat sheet. Read this once before Day 1 and you're operational.*
*Do **not** show this table to students — it's your bridge, not theirs.*

### 3.1 The 60-second summary

- Dynamically typed like Python (no type annotations), curly-brace syntax like
  Java/Swift, runs in the browser (and in Node.js).
- Everything async-y and event-driven, but for this course you touch almost none
  of that — it's basically "Python with braces and semicolons" for week one.
- The runtime is the **browser**. `console.log` is your `print`. The **Console
  tab in DevTools (F12)** is your REPL and your stderr.

### 3.2 Concept map

| Concept | Swift | Java | Python | **JavaScript (what you'll teach)** |
|---|---|---|---|---|
| Print/debug | `print()` | `System.out.println()` | `print()` | `console.log()` |
| Immutable binding | `let` | `final` | (convention) | **`const`** |
| Mutable binding | `var` | (default) | (default) | **`let`** (never teach `var`) |
| String interp | `"\(x)"` | `String.format` / `+` | f-strings | **`` `${x}` `` (backticks)** |
| Equality | `==` | `.equals()` | `==` | **`===`** (triple; see gotcha) |
| Null | `nil` | `null` | `None` | `null` **and** `undefined` (two!) |
| Array/List | `Array` | `ArrayList` | `list` | **`Array`** (`[]`, dynamic) |
| Dict/Map | `Dictionary` | `HashMap` | `dict` | **object `{}`** (or `Map`) |
| Lambda | closures `{ }` | lambda `->` | `lambda` | **arrow `=>`** |
| for-each | `for x in xs` | enhanced for | `for x in xs` | `for (const x of xs)` / `.forEach` |
| Optional chaining | `a?.b` | (verbose) | (verbose) | `a?.b` (same!) |

### 3.3 The gotchas that will actually bite you this week

Read these carefully — these are where *you* will be caught off-guard in front
of the class.

1. **`==` does type coercion; `===` does not.** `0 == ""` is `true`,
   `0 == "0"` is `true`, `null == undefined` is `true`. **Teaching rule: always
   `===`. Never explain `==` except to say "don't use it."**
2. **Two kinds of "nothing".** `undefined` = "never given a value" (JS did this).
   `null` = "deliberately empty" (you did this). `typeof null` is `"object"` —
   a famous bug in the language. Don't dwell; just tell students `prompt()`
   returns `null` on Cancel and move on.
3. **`prompt()` / `alert()` are blocking browser popups**, and **`prompt()`
   always returns a string.** `Number(prompt(...))` is the pattern. Students will
   forget the `Number()` and get `"5" + "3" === "53"`. This is a *feature* for
   teaching — see Block 1.
4. **`+` is overloaded: math OR string concatenation.** `"5" + 3 === "53"` but
   `"5" - 3 === 2` (minus forces numbers). This confuses everyone; use it as a
   deliberate demo.
5. **`const` prevents *reassignment*, not *mutation*.** `const a = []; a.push(1)`
   is fine. This surprises Java/Swift folks expecting `final`-like deep
   immutability. You'll need to say this out loud in Block 5.
6. **No block scope with `var`; `let`/`const` are block-scoped** (like you
   expect). Just never write `var` and this never comes up.
7. **Semicolons are mostly optional** (ASI). Teach students to add them anyway —
   consistency beats cleverness. Prettier will handle it.
8. **Loose truthiness.** `0`, `""`, `null`, `undefined`, `NaN` are *falsy*;
   everything else is *truthy*. `if (name)` means "if name isn't empty/null."
   Powerful and dangerous — introduce gently in Block 2.
9. **`this` is a minefield** — and you are **lucky**: this course barely uses it.
   Arrow functions don't rebind `this`. If a student's project hits a `this`
   bug, that's a one-on-one, not a lecture.
10. **`NaN` is a number** (`typeof NaN === "number"`) and `NaN !== NaN`. Students
    hit this when they `Number("hello")`. Teach `isNaN(x)` as the guard.

### 3.4 How to run JS (so you can demo three ways)

- **Browser Console (fastest):** F12 → Console → type any expression, Enter. Use
  this for one-liners and "predict the output" games.
- **HTML + `<script src="app.js">`:** every task folder here has an `index.html`
  runner. Open with **Live Server** → F12 for output. Use this for `prompt`/
  `alert`/DOM work.
- **Node.js (`node app.js`):** works for Blocks 1–5 **except** anything using
  `prompt`/`alert`/`document` (those are browser-only). Good for quick logic
  checks; mention it but default the class to Live Server for consistency.

---

## 4. Golden rules of engagement

1. **Start every topic with a problem, not a definition.** Not "a loop is a
   control structure that…" but "I need to print the 7 times table — do I really
   copy-paste 12 lines? Watch this."
2. **Use their world.** WhatsApp, Instagram likes, Swiggy/Zomato carts, movie
   tickets, attendance, cricket scores, exam grades. Every example in this
   handbook is deliberately from student life.
3. **Make errors on purpose and celebrate them.** "Great, a red error! Let's
   read it — errors are the computer *helping* you." Model calm debugging.
4. **The 10-minute rule for stuck students:** they try alone → then a neighbour →
   then you. Don't rescue too early; struggle is where learning happens. But
   don't let anyone sit stuck and silent past ~10 minutes.
5. **Name and reward.** "Priya just used `.filter()` before I even taught it —
   +30 XP." Public micro-recognition drives the whole gamified system.
6. **Walk the room every 20 minutes** during practicals. Read screens over
   shoulders. A student who won't raise their hand will still let you notice a
   red error on their screen.
7. **Energy check after lunch.** The 14:00 slot is the death zone. Put the most
   *interactive* content there (live-coding they follow along, pair challenges),
   never your longest explanation.
8. **End each block with a 60-second "explain it back."** Ask a student to
   summarise what the block was about in one sentence. If they can't, the block
   isn't done.

---

## 5. Block-by-block teaching guide

> Each block below gives you: the **hook**, the **live-coding beats**, the
> **real-world examples**, the **"coming from another language" notes** (for you),
> and the **doubt bank** (what students ask + how you answer). Times refer to the
> slots in `weekly-schedule/WEEKLY_SCHEDULE.md`.

---

### Block 1 — The Starting Zone
**Topics:** what JS is, `console.log`, variables (`let`/`const`), data types,
`typeof`, operators, template literals, `prompt()`.
**Theory budget:** ~2 hrs across the morning/early afternoon of Day 1.

#### The hook (open here)
Open any website the class knows (their college site, YouTube). Press F12 → go to
the Console → type:
```js
document.body.style.background = "black";
```
The page reacts instantly. **"That's JavaScript. HTML is the skeleton, CSS is the
skin, JavaScript is the muscle and brain. For the next five days, you're building
brains."** You've just proven JS is real and live in 20 seconds.

#### Live-coding beats
1. `console.log("Hello")` in the Console → "this is how we talk to ourselves as
   programmers." Then in a file via Live Server → "and this is how it runs on a
   page."
2. `alert()` vs `console.log()` — one is for the *user*, one is for the
   *developer*. Great distinction to plant early.
3. Variables as **labelled boxes**:
   ```js
   const myName = "Priya";   // a box you sealed shut
   let myScore = 0;          // a box you can refill
   myScore = 10;             // ✅
   ```
   Then try to reassign the `const` live → show the red error → "see, JS protects
   sealed boxes. Use `const` by default; reach for `let` only when the value must
   change."
4. **The `+` demo (do this — it's the money moment):**
   ```js
   console.log(5 + 3);       // 8   (math)
   console.log("5" + 3);     // "53" (glue!)
   console.log("5" - 3);     // 2   (wait, what?)
   ```
   Let them be confused. Then reveal: `+` glues text but does math with numbers;
   `-` only does math so it forces the string into a number. This sets up *why*
   we wrap `prompt()` in `Number()`.
5. Template literals — show the ugly way then the clean way:
   ```js
   console.log("Hi " + name + ", score " + score);      // fragile
   console.log(`Hi ${name}, score ${score}`);            // clean (backticks!)
   ```
   Point at the **backtick** key (top-left, above Tab). Students *will* use normal
   quotes and be confused why `${}` prints literally — pre-empt it.

#### Real-world examples to reach for
- Data types: String = a name tag, Number = a price/score, Boolean = a light
  switch, `null` = an empty box on purpose, `undefined` = a box you forgot to
  fill.
- `typeof`: "ask the box what kind of thing it's holding."

#### Coming from Swift/Java/Python (notes for you)
- `let`/`const` are *inverted* from Swift (`let` immutable there). Don't say
  "`let` is like Swift's `var`" out loud, but know it so you don't confuse
  yourself.
- No types on declarations — resist adding them; JS has none (that's TypeScript).
- Backtick strings = Swift `"\(x)"` / Python f-strings.

#### 🙋 Doubt bank — Block 1
- **"When do I use `let` vs `const`?"** → Default to `const`. If you find
  yourself needing to change the value later, *then* switch that one to `let`.
  90% of your variables will be `const`.
- **"Why is `"5" + 3` equal to `"53"`?"** → Because one side is text. `+` between
  a string and anything glues them into text. That's why we convert input with
  `Number()`.
- **"`${name}` printed literally instead of my name!"** → You used normal quotes.
  `${}` only works inside **backticks** `` ` `` — the key above Tab.
- **"What's the difference between `alert` and `console.log`?"** → `alert` is a
  popup for the *user* and pauses the page. `console.log` is a quiet message for
  *you* the developer, in the F12 Console. In real apps we use `console.log`;
  `alert` is just handy for practice.
- **"Nothing happened when I ran my file!"** → Two usual causes: (1) your output
  is a `console.log`, so open F12 → Console; (2) you forgot
  `<script src="app.js">` or the filename doesn't match.
- **"Do I need semicolons?"** → JS is forgiving, but add them anyway for good
  habits. Let Prettier auto-format.
- **"Is `const` like a constant in maths — can it never change?"** → It can't be
  *reassigned*. (Save the "but arrays inside const can change" nuance for Block 5;
  don't confuse them now.)

#### Common bugs you'll see on screens
- Curly/smart quotes from copying out of a doc → `SyntaxError`. Tell them to type,
  not paste, and to use straight quotes.
- Filename mismatch (`App.js` vs `app.js`) — case matters on many systems.
- Missing backtick → `${}` shows literally.

---

### Block 2 — The Decision Dungeon
**Topics:** `if / else if / else`, comparison operators, `===` vs `==`, logical
operators (`&&`, `||`, `!`), ternary, `switch`.
**Theory budget:** ~1.5 hrs, Day 1 afternoon/evening.

#### The hook
"Every app you use makes decisions constantly. Instagram: *if* you liked it, show
a filled heart, *else* an empty one. A ticket counter: *if* under 12, free.
Today your code learns to decide."

#### Live-coding beats
1. Build the **movie ticket** logic live (it's their Task 2.1) but with a
   different theme so the task still feels fresh — e.g. a **theme-park ride height
   check**:
   ```js
   const height = 130;
   if (height < 120)      console.log("Too short for this ride 🎢");
   else if (height < 140) console.log("OK with an adult");
   else                   console.log("Ride away! 🎉");
   ```
2. **`===` vs `==` — do the scary demo once:**
   ```js
   console.log(0 == "");      // true  😱
   console.log(0 == "0");     // true  😱
   console.log(0 === "");     // false ✅
   ```
   Then the rule, big and simple: **"Always use `===`. Three equals. Every time.
   Forget two-equals exists."** Don't explain coercion rules — just outlaw `==`.
3. Logical operators with a real gate: `if (age >= 18 && hasID)` → "both must be
   true, like needing *both* a ticket *and* ID." `||` = "either works." `!` =
   "flip it."
4. **Truthiness, gently:** `const name = prompt("Name?") || "Guest";` → "if they
   type nothing, use 'Guest'." Don't over-explain; just show the pattern.
5. `switch` as "a cleaner `if` ladder when you're checking one thing against many
   fixed options" — build the **day planner** (Task 2.2) shape live. **Stress
   `break`** — forget it and cases "fall through". Demo the fall-through bug once
   so they recognise it.

#### Real-world examples
- Grading (their Boss): marks → A+/A/B/C/F.
- Login: `if (password === saved)`.
- Traffic light state machine (great `switch` example).

#### Coming from other languages (notes for you)
- No `switch` on ranges — cases are exact matches only (unlike Swift's rich
  `switch`). If students want ranges, that's `if/else`, not `switch`.
- Ternary is identical to Java/Swift: `cond ? a : b`.
- Truthiness is looser than Python's and *much* looser than Java's `boolean`.

#### 🙋 Doubt bank — Block 2
- **"When `if/else` vs `switch`?"** → `switch` when you're comparing **one
  variable** against **many exact values** (a day name, a menu choice). `if/else`
  for ranges and complex conditions (`age > 18 && hasID`).
- **"Why did all my switch cases run?"** → You forgot `break;`. Without it,
  execution "falls through" into the next case. One `break` per case.
- **"`=` vs `==` vs `===`?"** → `=` *assigns* (puts a value in a box). `===`
  *compares* (asks "are these equal?"). Ignore `==` entirely.
- **"My `if` always runs even when it shouldn't."** → Usually `=` instead of
  `===` inside the condition (that assigns and is truthy), or comparing a string
  to a number (`"18" === 18` is false — convert with `Number()` first).
- **"What does `!` do?"** → Flips true/false. `!isRaining` = "if it is NOT
  raining."
- **"Can I have `else if` many times?"** → Yes, as many as you like; the first
  true one wins and the rest are skipped.
- **"What's truthy/falsy?"** → Empty string, `0`, `null`, `undefined`, `NaN`
  count as "false-ish"; almost everything else is "true-ish". Handy for
  `if (name)` = "if name isn't empty."

---

### Block 3 — The Loop Labyrinth
**Topics:** `for`, `while`, `do…while`, `break`, `continue`, nested loops,
modulo `%`, `Math.random()`, `Math.floor()`.
**Theory budget:** ~1.25 hrs, Day 2 morning.

#### The hook
"I want to print 'Round 1' to 'Round 100'. Do I write 100 `console.log`s?" (pause,
let someone say "no"). "Right. Loops are how programmers stay lazy in the *good*
way — say it once, run it many times."

#### Live-coding beats
1. Anatomy of a `for` loop, narrated as three jobs:
   ```js
   for (let i = 1; i <= 5; i++) {
     //     ↑ start   ↑ keep going while  ↑ step each time
     console.log(`Round ${i}`);
   }
   ```
   Change `<= 5` to `<= 10` live. Change `i++` to `i += 2` live. Let them *see*
   the loop bend to your will.
2. **`while` = "loop until a condition changes"**, when you *don't* know the
   count: keep asking for a password until correct. This directly sets up the
   Boss (guessing game).
3. **Modulo `%` — the "is it divisible?" operator.** `n % 2 === 0` → even.
   `i % 3 === 0` → multiple of 3. This is the whole trick behind FizzBuzz (Task
   3.2). Demo `10 % 3 === 1` and explain "remainder after division."
4. **`break` vs `continue`:** `break` = leave the building; `continue` = skip to
   the next person in the queue. Show both in one loop.
5. **The infinite loop — show it, then how to survive it.** Write
   `while (true) {}` mentally (don't actually freeze the class machine on the
   projector — describe it) and explain: "if your browser tab freezes, you made
   an infinite loop — the condition never becomes false. Close the tab, fix the
   exit condition." Pre-empting this saves you ten panicked hands later.
6. Random number recipe for the Boss:
   ```js
   Math.floor(Math.random() * 100) + 1   // 1..100
   ```
   Walk it slowly: `Math.random()` gives 0–0.999…, `×100` scales it, `Math.floor`
   drops the decimals, `+1` shifts the range. This *looks* like magic to
   beginners — decode it digit by digit.

#### Real-world examples
- Loading 50 posts in a feed. Sending a reminder to every student in a list.
  Counting down a timer. Dealing cards.

#### Coming from other languages (notes for you)
- `for…of` iterates values (like Python's `for x in xs`); `for…in` iterates
  **keys/indices** — a classic footgun. For arrays, teach `for…of` or `.forEach`,
  **not** `for…in`.
- No `range()`; the C-style `for` is standard.
- `do…while` exists and behaves as expected (runs once before checking).

#### 🙋 Doubt bank — Block 3
- **"`for` vs `while`?"** → `for` when you know how many times (1 to 12). `while`
  when you loop until *something happens* (until the user guesses right).
- **"My browser froze!"** → Infinite loop — your condition never becomes false.
  Close the tab, then make sure the loop variable actually changes toward the
  exit (`i++`, or the flag eventually flips).
- **"What does `%` actually do?"** → Gives the **remainder**. `7 % 3` is 1
  because 3 goes into 7 twice with 1 left over. `x % 2 === 0` is the standard
  "is x even?" check.
- **"Why start `i` at 0 sometimes and 1 other times?"** → Depends on the goal.
  Counting rounds for humans → start at 1. Indexing into an array → start at 0
  (arrays begin at 0). We'll see 0-based indexing in Block 5.
- **"`break` vs `continue`?"** → `break` stops the *whole* loop. `continue` skips
  just the *current* turn and moves to the next.
- **"Off-by-one: I got 11 rows instead of 10."** → Check `<=` vs `<`.
  `i <= 10` runs for 10; `i < 10` runs for 9 (from 1) — draw the number line.
- **"Nested loops confuse me."** → Outer loop = rows, inner loop = columns. The
  inner loop finishes completely for *each single* step of the outer. Use a times
  table grid on the whiteboard.

---

### Block 4 — The Function Factory
**Topics:** function declarations, parameters, arguments, `return`, arrow
functions, scope (global vs local), functions calling functions.
**Theory budget:** ~1.25 hrs, Day 2 afternoon.

#### The hook
"You've been repeating yourself. Every time you wanted an average you rewrote the
maths. A function is a **recipe you write once and reuse forever** — name it, feed
it ingredients, get a dish back."

#### Live-coding beats
1. Declaration → call, with the recipe metaphor:
   ```js
   function greet(name) {      // recipe named "greet", ingredient "name"
     return `Hello, ${name}!`; // the dish it hands back
   }
   console.log(greet("Priya")); // order a dish
   console.log(greet("Arjun")); // order another — same recipe
   ```
2. **`return` vs `console.log` — the #1 confusion of the whole course.** Do this
   explicitly:
   ```js
   function addWrong(a, b) { console.log(a + b); } // shows it, gives nothing back
   function addRight(a, b) { return a + b; }        // hands the value back
   const total = addRight(2, 3) * 10;  // 50 — you can USE a returned value
   ```
   Hammer it: **"`console.log` shows a value to a human. `return` hands a value
   back to your program so more code can use it. They are not the same."**
3. Parameters vs arguments: the recipe *says* "flour" (parameter); when you cook
   you use *this* flour (argument). Light touch, but name the difference.
4. Arrow functions as "the same recipe, written shorter":
   ```js
   const greet = (name) => `Hello, ${name}!`;
   ```
   Introduce arrows *after* regular functions so they see it's the same idea, not
   a new concept. Their Boss (Quiz Engine) uses arrows throughout.
5. **Scope** with the box metaphor: a variable made *inside* a function lives and
   dies inside it. Demo the `ReferenceError` when you try to use a local variable
   outside. "What happens in the function stays in the function."

#### Real-world examples
- A "calculate delivery fee" function used on every product. A "format currency"
  helper. `isEven`, `calculateBMI`, `convertTemperature` (their Task 4.1).
- Functions calling functions: `getBMICategory(calculateBMI(w, h))` — a small
  assembly line.

#### Coming from other languages (notes for you)
- Functions are **first-class values** — you can store them in variables, pass
  them around. This underpins `.map`/`.filter` in Block 5, so plant the seed:
  "a function is just another kind of value."
- No overloading, no default-type checking. Default params exist:
  `function f(x = 10) {}`.
- Arrow functions differ on `this`, but you won't hit that here — don't raise it
  unless a project forces it.

#### 🙋 Doubt bank — Block 4
- **"My function 'doesn't work' — nothing shows."** → You probably `return`ed but
  never `console.log`ed the call, *or* you `console.log`ed inside and expected to
  use the value outside. Decide: are you *showing* (log) or *using* (return)?
- **"Do I need `return`?"** → If the function *computes an answer you'll use
  later*, yes. If it just *does* something (prints, changes the page), no.
- **"Difference between the parameter and the argument?"** → Parameter = the name
  in the recipe (`function greet(name)`). Argument = the real value you pass in
  (`greet("Priya")`).
- **"Why can't I see my variable outside the function?"** → It's *local* — born
  and gone inside the function. Move it outside, or `return` it.
- **"Regular function vs arrow function — which do I use?"** → For this week they
  do the same job. Arrow is shorter; use whichever your task shows. (Avoid the
  `this` tangent.)
- **"Can a function call another function?"** → Yes, all the time — that's how we
  build bigger things from small tested pieces.
- **"Can a function have no parameters?"** → Yes: `function roll() { return
  Math.floor(Math.random()*6)+1; }`.

---

### Block 5 — The Data Vault
**Topics:** arrays (`push`/`pop`/`shift`/`unshift`, indexing, `.length`),
`forEach`/`filter`/`map`/`find`/`reduce`, objects (dot vs bracket), arrays of
objects, JSON shape.
**Theory budget:** ~3.75 hrs — the biggest theory day. **Pace yourself; break it
up with two live-coding builds** (shopping list, product catalog) as the schedule
shows.

#### The hook
"So far each variable held **one** thing. But real apps hold *lists* — 50 posts,
30 students, 6 products in a cart. Today you learn to hold *many* things and do
powerful things to all of them at once."

#### Live-coding beats
1. Array basics as a **numbered shelf**:
   ```js
   const fruits = ["Apple", "Banana", "Mango"];
   fruits[0];        // "Apple"  — shelves start at slot 0!
   fruits.length;    // 3
   fruits.push("Kiwi"); // add to the end
   fruits.pop();        // remove from the end
   ```
   Draw the shelf on the board with slot numbers 0,1,2. **0-based indexing is a
   real stumbling block** — spend a minute here.
2. **The power trio — teach them as sentences, not syntax:**
   - `.forEach` = "do this **for each** item." (a loop, prettier)
   - `.filter` = "**keep only** the items that match." → returns a *smaller*
     array.
   - `.map` = "**transform every** item." → returns a *same-size* array.
   ```js
   const marks = [45, 82, 37, 91, 55];
   marks.filter(m => m >= 40);  // [45, 82, 91, 55]  — the passers
   marks.map(m => m + 5);       // [50, 87, 42, 96, 60] — graced by 5
   ```
   Here's where Block 4 pays off: **the thing inside the brackets is a
   function.** "Remember functions are values? You're handing `.filter` a little
   function that answers yes/no for each item."
3. `.find` = "get me the **first** match" (one item, not an array). `.reduce` is
   the hard one — introduce it only as "boil the whole list down to one value,
   like a total":
   ```js
   const total = marks.reduce((sum, m) => sum + m, 0);
   ```
   Don't belabour `.reduce`; show the sum pattern and let the Boss reinforce it.
4. **Objects as a profile card / contact:**
   ```js
   const student = { name: "Priya", age: 19, course: "Analytics" };
   student.name;        // dot notation
   student["age"];      // bracket notation (when the key is dynamic)
   student.city = "Mumbai";  // add a field anytime
   ```
5. **Arrays of objects = a spreadsheet** — the shape of essentially all real
   data (a product list, a class list, an API response). Build the product
   catalog live and `.filter`/`.map` over it. Then reveal: "this is JSON — the
   language the whole web uses to send data." Big motivating moment.
6. **`const` + mutation caveat (now is the time):** `const cart = []; cart.push(x)`
   works because you're not *reassigning* `cart`, just changing its contents.
   Java/Swift instincts scream here — address it in one clean sentence.

#### Real-world examples
- A shopping cart (their Block 7 project). A class attendance list. Filtering
  products under ₹500. Mapping a list of prices to prices-with-tax. A leaderboard
  (sort by score).

#### Coming from other languages (notes for you)
- Objects are the all-purpose map/record — there's no separate "class instance"
  needed for this course. `Object.keys/values/entries` mirror Python's
  `dict.keys()` etc.
- `.map/.filter/.reduce` = Python comprehensions / Java Streams / Swift's
  `map/filter/reduce`. If your students later learn those, tell *them* nothing now
  — but you'll teach these fluently.
- Arrays are heterogeneous and dynamic (no fixed size/type). No tuples.
- `sort()` sorts **as strings by default** — `[10,2,1].sort()` → `[1,10,2]`. Warn
  fast finishers who try sorting numbers: pass a comparator
  `sort((a,b) => a-b)`.

#### 🙋 Doubt bank — Block 5
- **"Why does the array start at 0?"** → Index = "how far from the start." The
  first item is 0 steps from the start. It feels odd for a week, then it's
  natural. The last index is always `length - 1`.
- **"`push` vs `unshift` / `pop` vs `shift`?"** → `push`/`pop` work at the **end**
  (fast, common). `unshift`/`shift` work at the **front**. Mnemonic: "**p**ush/
  **p**op = back **p**orch."
- **"`filter` vs `map`?"** → `filter` **keeps some** items (size shrinks or
  stays). `map` **changes every** item (size stays the same). If you're deciding
  yes/no per item → filter. If you're transforming each item → map.
- **"`forEach` vs `for` loop?"** → Same result. `forEach` is cleaner for "do
  something to each item"; a plain `for` gives you the index and lets you `break`.
- **"Nothing came back from my `.map`/`.filter`."** → These **return a new
  array** — you must capture it: `const passed = marks.filter(...)`. They don't
  change the original.
- **"Dot vs bracket on objects?"** → `student.name` when you know the key.
  `student["name"]` when the key is in a variable (`student[field]`). Same result.
- **"I did `const` but I could still change the array — bug?"** → Not a bug.
  `const` stops you *reassigning* the variable to a whole new array. Editing the
  contents (`push`, changing an object field) is allowed.
- **"`student.city` is `undefined`."** → That key doesn't exist (yet). Either you
  mistyped it, or you need to set it first.
- **"How do I loop an object's keys?"** → `Object.keys(obj)`,
  `Object.values(obj)`, or `Object.entries(obj)` (used in the Boss).

---

### Block 6 — The Web Arena
**Topics:** the DOM, `querySelector`/`querySelectorAll`, `textContent`/
`innerHTML`, `.style`, `classList` (`add`/`remove`/`toggle`), `addEventListener`
(`click`, `input`, `keydown`), the event object, `createElement`/`appendChild`/
`remove`.
**Theory budget:** ~3.25 hrs, Day 4 — but *hugely* visual, so it never drags if
you keep the browser on the projector.

#### The hook
"Everything until now printed to a hidden Console only *you* saw. Today your code
finally touches the **actual page** — buttons that respond, text that changes,
things that appear and vanish. This is where it starts to feel like real web
development."

#### Live-coding beats
1. **What the DOM is:** open any page, F12 → Elements tab. "The browser turned
   your HTML into a **tree of objects**. JavaScript can grab any branch and change
   it." Draw the tree: `html → body → div → button`.
2. **Select → change**, live, on a tiny page:
   ```js
   const title = document.querySelector("#mainTitle");
   title.textContent = "Changed by JS!";
   title.style.color = "crimson";
   title.classList.add("highlight");
   ```
   `querySelector` uses **CSS selectors they already know** — `#id`, `.class`,
   `button`. Lean on their existing CSS knowledge hard here; it's your biggest
   accelerator this day.
3. **`classList.toggle` is the whole Dark Mode task** (6.1) — show it flip a class
   on `<body>` and let the CSS do the visual work. "JS doesn't do the styling; it
   just *switches which CSS applies*." Elegant and motivating.
4. **Events = "run this function WHEN X happens":**
   ```js
   button.addEventListener("click", () => {
     console.log("clicked!");
   });
   ```
   Names to distinguish: `click`, `input` (fires on every keystroke — the char
   counter, 6.2), `keydown` (Enter to add a todo). Show the **event object**:
   `(event) => console.log(event.key)`.
5. **Building elements from nothing** (the Todo Boss):
   ```js
   const li = document.createElement("li");
   li.textContent = taskText;
   document.querySelector("#list").appendChild(li);
   ```
   "You just created HTML with JavaScript and stuck it on the page. That's how
   feeds, carts, and todo lists actually work."
6. **`textContent` vs `innerHTML`** — teach `textContent` as the default and
   safe one. Mention `innerHTML` renders HTML tags (powerful) but is a security
   risk with user input. One sentence; don't lecture on XSS, just "prefer
   `textContent` for user text."

#### Real-world examples
- Instagram like button (toggle a class + change a count). A live search that
  filters as you type (`input` event). A "characters remaining" counter (Twitter/
  X). Adding items to a cart or todo list.

#### Coming from other languages (notes for you)
- This is the part with no Swift/Java/Python analogue for most students — it's
  browser-specific. Your transferable skill here is **event-driven thinking**
  (callbacks/handlers), which you know from UI frameworks. Frame events as
  "delegates/listeners" *in your own head*.
- `querySelectorAll` returns a **NodeList**, not a real array — `.forEach` works,
  but `.map/.filter` don't directly. If a fast finisher hits this, `Array.from(...)`
  converts it.
- DOM updates are synchronous here; no need to mention the render loop.

#### 🙋 Doubt bank — Block 6
- **"`querySelector` returns `null` / 'cannot read property of null'."** → The
  selector didn't match anything. Check: right `#id`/`.class`? Is the `<script>`
  at the **bottom** of `<body>` (or the element doesn't exist yet when the script
  runs)? This is the day's #1 error — see the Debug Clinic.
- **"My button does nothing."** → Three checks: (1) did `querySelector` actually
  find it (log it)? (2) is the event name spelled right (`"click"`)? (3) is the
  listener attached to the button, not to something else?
- **"`textContent` vs `innerHTML`?"** → `textContent` sets plain text (safe).
  `innerHTML` interprets HTML tags. Use `textContent` unless you specifically need
  to insert HTML.
- **"Difference between `.style` and `classList`?"** → `.style.color = "red"` sets
  one inline style. `classList.add("active")` applies a whole CSS rule you wrote —
  cleaner and preferred. Toggle classes, don't hand-set dozens of styles.
- **"What is that `event` / `e` thing in the arrow function?"** → The browser hands
  your function a details object about what happened — which key, which element,
  mouse position. `event.key`, `event.target`.
- **"My new element appears but the old ones duplicate / pile up."** → You're
  appending without clearing. Either clear the container first
  (`list.innerHTML = ""`) and re-render, or only append the single new item.
- **"How do I get what the user typed?"** → `inputElement.value` (for the current
  text). `.value.length` for the count.
- **"Where do I put my `<script>` tag?"** → At the **end of `<body>`**, so the
  HTML elements exist before your JS tries to find them. (All our task pages
  already do this.)

---

### Block 7 — The Final Boss
**Topics:** none new — synthesis. Students pick one of four projects (Quiz,
Shopping Cart, Word Game, Expense Tracker) and build it.
**Your role shifts** from teacher to **coach/tech-lead.**

#### How to run project day without chaos
1. **Force a 1-page plan before any code** (the schedule's 09:30 slot). Problem,
   feature list (must-have vs nice-to-have), a rough sketch. Approve each in 60
   seconds. This prevents the "I don't know where to start" freeze and the
   "I bit off too much" collapse.
2. **Scope discipline is your main job.** Beginners over-reach. Push everyone to a
   *working ugly* version first, polish later. "A working boring app beats a
   beautiful broken one."
3. **Milestone check-ins** at the end of each build sprint: "show me it running,
   even if half-done." Catches the student who's been stuck silently for an hour.
4. **The reference solutions** in `solutions/block-7-projects/` are for *you* and
   for *stuck* students — but coach them to read and adapt, not copy wholesale.
   A student who copies learns nothing; a student who reads one function and
   adapts it learns a lot.
5. **Common project blockers & your quick answers:**
   - *"How do I keep score across questions?"* → a variable outside the function
     that you `+1` on correct (state lives outside, not inside the handler).
   - *"My cart total doesn't update."* → you changed the data but didn't
     re-render. Call your render function after every change.
   - *"How do I show/hide screens?"* → toggle a CSS class (`.active`) — same
     `classList` trick as Dark Mode.
   - *"Random word repeats."* → that's fine for v1; picking-without-repeat is a
     bonus, not a blocker.
6. **Demos:** keep them to 2 minutes, celebrate *effort and working features*,
   not polish. Every student demoing something that runs is the goal.

---

## 6. The Debug Clinic playbook

The schedule has explicit "Debug Clinic" slots. Run them as a **spectator sport**:
put a real student bug on the projector (with permission) and think aloud as you
fix it. Teaching debugging is more valuable than teaching syntax.

**Your standing method (teach the students to do this, every time):**
1. **Read the error.** Out loud. It names the *type*, the *message*, and the
   *line*. Beginners' eyes slide off red text — train them to actually read it.
2. **Go to the line.** Look one line above too (errors often surface late).
3. **`console.log` around the suspect.** "Is the value what I think it is here?"
4. **Isolate.** Comment out half. Does the error persist? Binary-search the bug.
5. **Search the exact message.** MDN / the message in quotes. Normalise Googling.

**The error dictionary (memorise these five — they're 90% of week one):**

| Error message | What it really means | First thing to check |
|---|---|---|
| `Uncaught SyntaxError: ...` | Typo — bracket, quote, comma | The line + the one above; matching `()`/`{}`/`` ` `` |
| `... is not defined` (ReferenceError) | Using a name that doesn't exist | Spelling/case of the variable; is it in scope? |
| `Cannot read properties of null (reading '...')` | `querySelector` found nothing | The `#id`/`.class`; script placement (bottom of body) |
| `... is not a function` (TypeError) | Calling something that isn't callable | Typo in method (`.pus` vs `.push`); is it the type you think? |
| `NaN` in the output | Math on a non-number | Did you `Number(prompt(...))`? Is a value `undefined`? |

**Say this often:** *"Errors are not the computer being angry at you. They're the
computer telling you exactly where it got confused. Read the note it left you."*

---

## 7. Managing a mixed-pace room

In any beginner class you'll have a 5× spread between fastest and slowest. Plan
for it:

**For fast finishers** — never let them idle (bored fast students become
disruptive). Every task file ends with a `✅ What to try next:` section — point
them there. Extra levers:
- Award **helper XP** for pairing them with a stuck classmate (teaching cements
  their own learning).
- Hand them a "stretch" from *your* deeper JS knowledge: "sort the leaderboard",
  "handle the empty-input case", "make it work for negative numbers too."
- The `==` vs `===`, truthiness, and `sort` numeric-comparator nuances you parked
  earlier are perfect stretch material — feed them one-on-one, not to the room.

**For struggling students:**
- **Pair before you rescue** (10-minute rule). A peer explanation is often better
  than yours, and it frees you.
- **Shrink the task.** "Forget the whole calculator — just get it to add two
  numbers first." Small wins rebuild confidence.
- **Sit at their level, hands off their keyboard.** Guide with questions
  ("what do you think this line does?"), don't type for them. If you take the
  keyboard, they learn that you can code, not that they can.
- Watch for the **silent stuck** student — the one not asking. Walking the room is
  how you find them.

**Whole-room energy:**
- The gamified XP/leaderboard is your friend — use it to inject urgency and fun,
  not pressure. Celebrate the bottom of the leaderboard for *effort*, not just the
  top for speed.
- Physical resets after lunch: a 60-second stand-up, a quick "predict the output"
  game, a partner swap.

---

## 8. Daily facilitation notes

*Read the matching day in `weekly-schedule/WEEKLY_SCHEDULE.md` alongside this.*

**Day 1 (Blocks 1+2) — the make-or-break day.** Your one job: everyone leaves
having run code and made a commit. Setup will eat time and go wrong (installs,
paths, GitHub auth) — budget patience, pair the stuck with the sorted. The `+`
string/number demo and the `===` demo are your two anchor moments. End on the
Grade Calculator Boss so they feel powerful.

**Day 2 (Blocks 3+4).** Loops in the morning while brains are fresh (the
guessing-game Boss is meaty). Functions after lunch — and spend real time on
`return` vs `console.log`; if they don't get it today, Block 5's `.map/.filter`
will collapse. The Debug Clinic slot is gold — use a real bug.

**Day 3 (Block 5) — the heaviest theory.** Nearly 4 theory hours; you *must*
break it with the two live-coding builds (shopping list, product catalog) or
you'll lose the room. Arrays before lunch, objects + arrays-of-objects after.
The "arrays of objects = a spreadsheet = JSON = how the web moves data" reveal is
the emotional peak — land it well.

**Day 4 (Block 6) — the most fun, least draggy.** Keep the browser on the
projector the entire time; everything is visual. Lean on the CSS they already
know for `querySelector`. The `null` from `querySelector` error will appear a
dozen times — teach the fix once, publicly, then point to it. End with the Final
Project briefing so they sleep on their choice.

**Day 5 (Block 7) — you're a coach now.** Plan-before-code, scope discipline,
milestone check-ins, celebrate working demos. Protect the last 45 minutes for
demos and the badge ceremony — don't let build time eat the celebration; the
send-off matters for how they remember the week.

---

## 9. Pre-flight checklist

**Before the week (do this once):**
- [ ] Read §3 (JS for polyglots) and run every code snippet in this handbook
      yourself in a browser Console — feel the language in your hands once.
- [ ] Open every file in `solutions/` and **run each one** — no surprises live.
- [ ] Do the four `solutions/block-7-projects/` apps yourself so you can coach any
      choice.
- [ ] Skim `student-handout/STUDENT_HANDOUT.md` so you use the *same words and
      metaphors* students are reading (traffic light, labelled boxes, recipes,
      numbered shelves — stay consistent).

**Before each day:**
- [ ] Re-run the day's live-coding examples on the actual classroom machine.
- [ ] Projector font ≥ 18px, high-contrast theme, Console visible.
- [ ] Answer keys ready but **closed** — reveal only after attempts.
- [ ] Leaderboard updated from yesterday.

**Your daily mantras:**
> - I start with a problem, not a definition.
> - I make one deliberate mistake and fix it live.
> - I ask "what will this print?" before I hit run.
> - I ban "just", "simply", and "obviously".
> - I pair the stuck before I rescue them.
> - Errors are helpful notes, and I read them out loud.

---

*Tutor Handbook · Introduction to Programming (JavaScript) · One-Week Intensive*
*You know how to program. This week you're teaching people to fall in love with it. 🚀*
