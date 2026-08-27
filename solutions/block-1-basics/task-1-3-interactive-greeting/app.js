// ============================================================
// TASK 1.3 — Interactive Greeting
// BLOCK 1: The Starting Zone
// ============================================================
// CONCEPTS: prompt(), alert(), template literals, variables
// NOTE: prompt() returns a STRING — always remember this!
// ============================================================

// Step 1: Ask the user for their name
// prompt() shows a popup with a text input box
// Whatever the user types is returned as a string
const userName = prompt("👋 What is your name?");

// Step 2: Ask for their favourite city
const userCity = prompt(`Nice to meet you, ${userName}! 🌍\nWhat is your favourite city?`);

// Step 3: Build the greeting message
const greeting = `Hello, ${userName}! So you're from ${userCity}? Amazing city! 🏙️`;

// Step 4: Show it in a popup AND in the console
alert(greeting);
console.log(greeting);

// --- Bonus: What if the user clicks Cancel? ---
// prompt() returns null if user presses Cancel
// This is a "safe" version that handles that:
console.log("\n--- Bonus: Null-safe version ---");
const safeName = prompt("Enter your name (try clicking Cancel):") || "Mystery Student";
console.log(`Safe greeting: Hello, ${safeName}!`);
// The || operator means "if the left side is null/empty, use the right side instead"

// ✅ What to try next:
//   - Ask for the user's age and calculate what year they were born
//   - Ask 3 questions and build a short story using all the answers
