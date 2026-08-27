// ============================================================
// BLOCK 1 BOSS CHALLENGE — Simple Calculator
// ============================================================
// CONCEPTS: prompt(), Number(), template literals,
//           basic arithmetic, console.log
// ============================================================

// Step 1: Get two numbers from the user
// IMPORTANT: prompt() always returns a STRING, not a number
// We use Number() to convert the string to an actual number
const num1 = Number(prompt("🔢 Enter the first number:"));
const num2 = Number(prompt("🔢 Enter the second number:"));

// Step 2: Ask which operation they want
const operation = prompt("➕ Which operation? Type: + or - or * or /");

// Step 3: Calculate the result
let result;
let equation;

if (operation === "+") {
  result = num1 + num2;
  equation = `${num1} + ${num2} = ${result}`;

} else if (operation === "-") {
  result = num1 - num2;
  equation = `${num1} - ${num2} = ${result}`;

} else if (operation === "*") {
  result = num1 * num2;
  equation = `${num1} × ${num2} = ${result}`;

} else if (operation === "/") {
  // ✅ BONUS: Handle division by zero
  if (num2 === 0) {
    equation = `${num1} ÷ 0 = ❌ Cannot divide by zero!`;
    result = "undefined";
  } else {
    result = num1 / num2;
    // toFixed(2) rounds to 2 decimal places
    equation = `${num1} ÷ ${num2} = ${result.toFixed(2)}`;
  }

} else {
  equation = `"${operation}" is not a valid operation. Please use +, -, *, or /`;
  result = "error";
}

// Step 4: Show the result
alert(`🧮 Result:\n${equation}`);
console.log(`Calculator result: ${equation}`);

// ✅ What to try next:
//   - Add support for % (modulo) operation
//   - Add a square root option using Math.sqrt()
//   - Wrap it all in a loop so the user can do multiple calculations
