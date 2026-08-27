// ============================================================
// TASK 6.1 — Dark Mode Toggle
// BLOCK 6: The Web Arena
// ============================================================
// CONCEPTS: querySelector, addEventListener, classList.toggle,
//           reading/changing textContent, DOM manipulation
// ============================================================

// Step 1: Select the elements we need to work with
const toggleBtn = document.querySelector("#toggleBtn");
const body = document.body;

// Step 2: Listen for a click on the button
toggleBtn.addEventListener("click", () => {

  // classList.toggle("dark-mode") does this:
  //   → If body does NOT have class "dark-mode": ADD it → dark
  //   → If body DOES have class "dark-mode": REMOVE it → light
  const isDark = body.classList.toggle("dark-mode");

  // Step 3: Update the button text to reflect current mode
  if (isDark) {
    toggleBtn.textContent = "☀️ Switch to Light Mode";
    console.log("🌙 Dark mode activated");
  } else {
    toggleBtn.textContent = "🌙 Switch to Dark Mode";
    console.log("☀️ Light mode activated");
  }
});

// ✅ What to try next:
//   - Save the user's preference using localStorage so it persists on refresh:
//       localStorage.setItem("theme", isDark ? "dark" : "light");
//   - Read it on page load:
//       if (localStorage.getItem("theme") === "dark") body.classList.add("dark-mode");
//   - Add a smooth fade animation using CSS transitions (already done in style.css!)
