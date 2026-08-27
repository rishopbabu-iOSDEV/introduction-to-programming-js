// ============================================================
// BLOCK 2 BOSS CHALLENGE — Grade Calculator
// ============================================================
// CONCEPTS: if/else, arrays, loops, template literals,
//           Number(), arithmetic, multiple conditions
// ============================================================

// --- Step 1: Define subjects and get marks ---
const subjects = ["Mathematics", "English", "Science", "History", "Economics"];
const marks = [];

console.log("📝 Grade Calculator — Enter marks for each subject (0–100)\n");

for (let i = 0; i < subjects.length; i++) {
  let mark;

  // Keep asking until a valid mark (0–100) is entered
  do {
    mark = Number(prompt(`Enter marks for ${subjects[i]} (0–100):`));
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("⚠️ Please enter a number between 0 and 100.");
    }
  } while (isNaN(mark) || mark < 0 || mark > 100);

  marks.push(mark);
}

// --- Step 2: Calculate total and percentage ---
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

const average = total / subjects.length;
const percentage = average.toFixed(2);

// --- Step 3: Assign a grade ---
let grade;
let gradeLabel;

if (average >= 90) {
  grade = "A+";
  gradeLabel = "Distinction 🌟";
} else if (average >= 75) {
  grade = "A";
  gradeLabel = "First Class 🏆";
} else if (average >= 60) {
  grade = "B";
  gradeLabel = "Second Class 👍";
} else if (average >= 50) {
  grade = "C";
  gradeLabel = "Pass ✅";
} else {
  grade = "F";
  gradeLabel = "Fail ❌";
}

// --- Step 4: Find failed subjects (BONUS) ---
const failedSubjects = [];
for (let i = 0; i < subjects.length; i++) {
  if (marks[i] < 50) {
    failedSubjects.push(`${subjects[i]} (${marks[i]})`);
  }
}

// --- Step 5: Print the full report card ---
console.log("=".repeat(40));
console.log("         📋 REPORT CARD");
console.log("=".repeat(40));

for (let i = 0; i < subjects.length; i++) {
  // Pad subject name to 15 chars for neat alignment
  const subjectPadded = subjects[i].padEnd(15);
  const status = marks[i] >= 50 ? "✅" : "❌";
  console.log(`${subjectPadded}: ${marks[i]} / 100  ${status}`);
}

console.log("-".repeat(40));
console.log(`Total Score   : ${total} / ${subjects.length * 100}`);
console.log(`Average       : ${percentage}%`);
console.log(`Grade         : ${grade} — ${gradeLabel}`);

if (failedSubjects.length > 0) {
  console.log(`\n⚠️  Failed Subjects:`);
  failedSubjects.forEach(s => console.log(`   → ${s}`));
} else {
  console.log("\n🎉 Passed all subjects!");
}

console.log("=".repeat(40));

// Also show summary as alert
alert(`📋 Report Card Summary\n\nAverage: ${percentage}%\nGrade: ${grade} — ${gradeLabel}\n${failedSubjects.length > 0 ? `Failed: ${failedSubjects.join(", ")}` : "All subjects passed! 🎉"}`);

// ✅ What to try next:
//   - Find the highest and lowest scoring subjects
//   - Add different weightage per subject (e.g. Maths counts 30%)
