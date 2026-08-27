// ============================================================
// TASK 5.1 — Class Manager
// BLOCK 5: The Data Vault
// ============================================================
// CONCEPTS: arrays, forEach, filter, push, shift,
//           find, length, index access
// ============================================================

// --- Starting array of 8 student names ---
let classRoll = [
  "Arjun Sharma",
  "Priya Nair",
  "Ananya Singh",
  "Karan Mehta",
  "Aisha Khan",
  "Ravi Patel",
  "Meera Iyer",
  "Deepak Joshi"
];

// --- TASK 1: Log all names with their position number ---
console.log("📋 Class Roll:");
classRoll.forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});

// --- TASK 2: Filter names that start with 'A' or 'a' ---
const aNames = classRoll.filter(name => name.toLowerCase().startsWith("a"));
console.log("\n🔍 Names starting with 'A':");
aNames.forEach(name => console.log(`  → ${name}`));

// --- TASK 3: Add a new student to the BEGINNING ---
classRoll.unshift("Zara Ahmed");
console.log(`\n➕ Added "Zara Ahmed" to the front.`);
console.log(`Class now has ${classRoll.length} students.`);

// --- TASK 4: Remove the LAST student ---
const removed = classRoll.pop();
console.log(`\n➖ Removed last student: "${removed}"`);
console.log(`Class now has ${classRoll.length} students.`);

// --- TASK 5: Find first name longer than 5 characters ---
// Note: We check just the first name (before the space)
const longName = classRoll.find(name => name.split(" ")[0].length > 5);
console.log(`\n🔎 First name with first-name longer than 5 chars: "${longName}"`);

// --- Final Roll ---
console.log("\n📋 Final Class Roll:");
classRoll.forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});

// ✅ What to try next:
//   - Sort the names alphabetically using .sort()
//   - Count how many names have exactly 2 words (first + last)
//   - Use .map() to create an array of just first names
