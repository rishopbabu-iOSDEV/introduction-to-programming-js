// ============================================================
// TASK 2.1 — Movie Ticket Checker
// BLOCK 2: The Decision Dungeon
// ============================================================
// CONCEPTS: if / else if / else, logical operators (&&),
//           Number() conversion, comparison operators
// ============================================================

// Step 1: Get user's age
const age = Number(prompt("🎬 Welcome to CineQuest!\nHow old are you?"));

// Step 2: Ask if they have a student ID (simple yes/no)
// .toLowerCase() converts input to lowercase so "Yes", "YES", "yes" all work
const hasStudentID = prompt("Do you have a Student ID? (yes / no)").toLowerCase();

// Step 3: Determine ticket price based on rules
let ticketPrice;
let category;

if (age < 0 || isNaN(age)) {
  // isNaN = "is Not a Number" — handles bad input like letters
  ticketPrice = "Invalid";
  category = "Please enter a valid age!";

} else if (age < 12) {
  ticketPrice = 0;
  category = "Child (Under 12) — FREE! 🎉";

} else if (age <= 17) {
  ticketPrice = 100;
  category = "Teen (12–17)";

} else if (hasStudentID === "yes") {
  // 18 or older WITH student ID
  ticketPrice = 150;
  category = "Adult with Student ID";

} else {
  // 18 or older WITHOUT student ID
  ticketPrice = 250;
  category = "Adult (Full Price)";
}

// Step 4: Show the result
const message = ticketPrice === 0
  ? `🎟️ ${category}\nYour ticket is FREE! Enjoy the movie! 🍿`
  : `🎟️ ${category}\nYour ticket price: ₹${ticketPrice}`;

alert(message);
console.log(message);

// ✅ What to try next:
//   - Add a "Senior citizen (60+)" category with a 50% discount
//   - Add a weekend surcharge: prices go up by ₹50 on Saturday/Sunday
