// ============================================================
// BLOCK 5 BOSS CHALLENGE — Student Report System
// ============================================================
// CONCEPTS: arrays of objects, map, filter, reduce,
//           functions, template literals, Math.max
// ============================================================

// --- DATA: Array of student objects ---
const students = [
  {
    name: "Arjun Sharma",
    rollNo: "2024001",
    marks: { maths: 88, english: 76, science: 91, history: 70 },
    attendance: 92
  },
  {
    name: "Priya Nair",
    rollNo: "2024002",
    marks: { maths: 55, english: 82, science: 60, history: 78 },
    attendance: 68
  },
  {
    name: "Karan Mehta",
    rollNo: "2024003",
    marks: { maths: 45, english: 50, science: 38, history: 42 },
    attendance: 80
  },
  {
    name: "Aisha Khan",
    rollNo: "2024004",
    marks: { maths: 95, english: 90, science: 88, history: 93 },
    attendance: 97
  },
  {
    name: "Ravi Patel",
    rollNo: "2024005",
    marks: { maths: 72, english: 65, science: 70, history: 60 },
    attendance: 71
  }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Get the average of a student's marks
const getAverage = (student) => {
  const values = Object.values(student.marks); // [88, 76, 91, 70]
  const sum = values.reduce((total, mark) => total + mark, 0);
  return parseFloat((sum / values.length).toFixed(1));
};

// Assign a grade based on average
const getGrade = (average) => {
  if (average >= 90) return "A+";
  if (average >= 75) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  return "F";
};

// Get pass/fail status for each subject
const getFailedSubjects = (student) => {
  return Object.entries(student.marks)
    .filter(([subject, mark]) => mark < 50)
    .map(([subject]) => subject);
};

// ============================================================
// REPORT GENERATION
// ============================================================

console.log("=".repeat(55));
console.log("         🎓 STUDENT PROGRESS REPORT SYSTEM");
console.log("=".repeat(55));

// Process each student and add computed fields
const processedStudents = students.map(student => ({
  ...student,                              // spread — copy all fields
  average: getAverage(student),
  grade: getGrade(getAverage(student)),
  failedSubjects: getFailedSubjects(student)
}));

// Print individual reports
processedStudents.forEach(s => {
  console.log(`\n📄 Student: ${s.name}  |  Roll No: ${s.rollNo}`);
  console.log("-".repeat(45));
  console.log(`   Maths    : ${s.marks.maths}/100`);
  console.log(`   English  : ${s.marks.english}/100`);
  console.log(`   Science  : ${s.marks.science}/100`);
  console.log(`   History  : ${s.marks.history}/100`);
  console.log(`   Average  : ${s.average}%`);
  console.log(`   Grade    : ${s.grade}`);
  console.log(`   Attendance: ${s.attendance}%${s.attendance < 75 ? " ⚠️ LOW" : " ✅"}`);

  if (s.failedSubjects.length > 0) {
    console.log(`   Failed in: ${s.failedSubjects.join(", ")} ❌`);
  }
});

// --- FIND THE TOPPER ---
const topper = processedStudents.reduce((best, current) =>
  current.average > best.average ? current : best
);

console.log("\n" + "=".repeat(55));
console.log(`🏆 CLASS TOPPER: ${topper.name} (Average: ${topper.average}%, Grade: ${topper.grade})`);

// --- STUDENTS WITH LOW ATTENDANCE ---
const lowAttendance = processedStudents.filter(s => s.attendance < 75);

if (lowAttendance.length > 0) {
  console.log("\n⚠️  Students with Attendance Below 75%:");
  lowAttendance.forEach(s => {
    console.log(`   → ${s.name} (${s.attendance}%)`);
  });
}

// --- CLASS SUMMARY ---
const classAverage = (
  processedStudents.reduce((sum, s) => sum + s.average, 0) /
  processedStudents.length
).toFixed(1);

const passCount = processedStudents.filter(s => s.grade !== "F").length;

console.log("\n📊 CLASS SUMMARY:");
console.log(`   Total Students : ${students.length}`);
console.log(`   Class Average  : ${classAverage}%`);
console.log(`   Passed         : ${passCount}/${students.length}`);
console.log(`   Failed         : ${students.length - passCount}/${students.length}`);
console.log("=".repeat(55));

// ✅ What to try next:
//   - Sort students by average (highest first) using .sort()
//   - Add a method that checks if a student needs improvement in a specific subject
//   - Build an HTML page that displays this as a proper table (Block 6 preview!)
