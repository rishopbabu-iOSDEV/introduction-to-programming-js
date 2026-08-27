// ============================================================
// BLOCK 5 BOSS CHALLENGE — Student Report System
// ============================================================
// CONCEPTS: arrays of objects, map, filter, reduce,
//           Object.values / Object.entries, functions
// ============================================================
// GOAL: Turn raw student data into a full progress report.
// ============================================================

// The dataset is provided — build the report logic below.
const students = [
  { name: "Arjun Sharma", rollNo: "2024001", marks: { maths: 88, english: 76, science: 91, history: 70 }, attendance: 92 },
  { name: "Priya Nair",   rollNo: "2024002", marks: { maths: 55, english: 82, science: 60, history: 78 }, attendance: 68 },
  { name: "Karan Mehta",  rollNo: "2024003", marks: { maths: 45, english: 50, science: 38, history: 42 }, attendance: 80 },
  { name: "Aisha Khan",   rollNo: "2024004", marks: { maths: 95, english: 90, science: 88, history: 93 }, attendance: 97 },
  { name: "Ravi Patel",   rollNo: "2024005", marks: { maths: 72, english: 65, science: 70, history: 60 }, attendance: 71 },
];

// TODO 1: getAverage(student) — average of the marks object.
//         Hint: Object.values(student.marks) then .reduce() to sum.


// TODO 2: getGrade(average) — A+/A/B/C/F from the average.


// TODO 3: getFailedSubjects(student) — subjects with mark < 50.
//         Hint: Object.entries(student.marks).filter(...).map(...)


// TODO 4: Use .map() to build processedStudents with average, grade,
//         and failedSubjects added to each student (use the spread operator).


// TODO 5: Print each student's report to the Console.


// TODO 6: Find the class topper with .reduce(), list low-attendance
//         students (< 75) with .filter(), and print a class summary.


// ✅ What to try next:
//   - Sort students by average (highest first) with .sort()
//   - Build an HTML table of this data (Block 6 preview!)
