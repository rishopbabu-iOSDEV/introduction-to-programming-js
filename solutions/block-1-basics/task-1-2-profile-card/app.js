// ============================================================
// TASK 1.2 — Student Profile Card
// BLOCK 1: The Starting Zone
// ============================================================
// CONCEPTS: const, let, template literals, console.log
// ============================================================

// --- Store student information in variables ---
// Use 'const' because these values won't change
const studentName = "Priya Nair";
const studentAge = 19;
const courseName = "Business Analytics";
const favouriteHobby = "Photography";
const university = "City University";

// --- Build and display the profile card ---
// Template literals use backticks (`) and ${} to insert variables
console.log("================================");
console.log("🎮 STUDENT PROFILE CARD");
console.log("================================");
console.log(`Name       : ${studentName}`);
console.log(`Age        : ${studentAge}`);
console.log(`Course     : ${courseName}`);
console.log(`Hobby      : ${favouriteHobby}`);
console.log(`University : ${university}`);
console.log("================================");

// --- Bonus: Using typeof to check data types ---
console.log("\n📌 Data Types Check:");
console.log(`typeof studentName  → ${typeof studentName}`);   // string
console.log(`typeof studentAge   → ${typeof studentAge}`);    // number
console.log(`typeof courseName   → ${typeof courseName}`);    // string

// ✅ What to try next:
//   - Add more fields: city, favourite subject, year of study
//   - Try using 'let' for age and change it to a different value below
//   - What happens if you do: const studentName = "New Name" again? (Error!)
