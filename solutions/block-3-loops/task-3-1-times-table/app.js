// ============================================================
// TASK 3.1 — Times Table Generator
// BLOCK 3: The Loop Labyrinth
// ============================================================
// CONCEPTS: for loop, Number(), template literals
// ============================================================

const number = Number(prompt("🔢 Which times table do you want?\nEnter a number:"));

if (isNaN(number) || number <= 0) {
  alert("Please enter a positive number!");
} else {
  console.log(`\n📊 Times Table for ${number}`);
  console.log("=".repeat(20));

  for (let i = 1; i <= 12; i++) {
    const result = number * i;
    // padStart(2) makes "1" → " 1" so columns line up neatly
    console.log(`${number} × ${String(i).padStart(2)} = ${result}`);
  }

  console.log("=".repeat(20));
  alert(`Times table for ${number} is ready in your Console! (Press F12)`);
}

// ✅ What to try next:
//   - Change it to print up to 20 instead of 12
//   - Ask the user for both the number AND how far to go (e.g. 1 to 20)
//   - Print two tables side by side using nested loops
