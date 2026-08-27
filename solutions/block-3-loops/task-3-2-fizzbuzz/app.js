// ============================================================
// TASK 3.2 — FizzBuzz (The Classic Interview Question!)
// BLOCK 3: The Loop Labyrinth
// ============================================================
// CONCEPTS: for loop, modulo (%), if/else, continue
// ============================================================
// RULES:
//   Divisible by 3          → print "Fizz"
//   Divisible by 5          → print "Buzz"
//   Divisible by BOTH 3 & 5 → print "FizzBuzz"
//   Otherwise               → print the number
// ============================================================

console.log("🎮 FizzBuzz — Numbers 1 to 50\n");

for (let i = 1; i <= 50; i++) {
  // IMPORTANT: Check divisible-by-both FIRST, before checking individually
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} → FizzBuzz 🎉`);
  } else if (i % 3 === 0) {
    console.log(`${i} → Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} → Buzz`);
  } else {
    console.log(i);
  }
}

// --- Bonus: Collect results into an array for display ---
console.log("\n--- Bonus: Compact Version ---");
const results = [];

for (let i = 1; i <= 50; i++) {
  if (i % 15 === 0) results.push("FizzBuzz");      // 15 = 3 × 5
  else if (i % 3 === 0) results.push("Fizz");
  else if (i % 5 === 0) results.push("Buzz");
  else results.push(String(i));
}

console.log(results.join(" | "));

// ✅ What to try next:
//   - Add a 4th rule: divisible by 7 → "Jazz"
//   - Ask the user what number to count up to instead of hardcoding 50
//   - Count how many Fizz, Buzz, and FizzBuzz appeared
