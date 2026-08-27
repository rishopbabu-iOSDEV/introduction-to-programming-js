// ============================================================
// TASK 6.2 — Live Character Counter
// BLOCK 6: The Web Arena
// ============================================================
// CONCEPTS: querySelector, addEventListener("input"),
//           .value.length, textContent, classList,
//           style.width for progress bar
// ============================================================

const MAX_CHARS = 100;

// Select elements
const textarea    = document.querySelector("#messageInput");
const counter     = document.querySelector("#counter");
const progressBar = document.querySelector("#progressBar");

// Listen for every keystroke in the textarea
// "input" event fires whenever the content changes (typing, paste, delete)
textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  const remaining     = MAX_CHARS - currentLength;
  const percentage    = (currentLength / MAX_CHARS) * 100;

  // Update the counter text
  counter.textContent = `${currentLength} / ${MAX_CHARS} characters`;

  // Update the progress bar width
  progressBar.style.width = `${Math.min(percentage, 100)}%`;

  // Clear all colour classes first, then add the right one
  counter.className    = "counter";
  progressBar.className = "progress-bar-fill";

  if (percentage >= 100) {
    // At limit
    counter.classList.add("over");
    progressBar.style.backgroundColor = "#c0392b";
    counter.textContent = `${currentLength} / ${MAX_CHARS} characters — Limit reached! ✋`;

  } else if (percentage >= 80) {
    // Warning zone (80–99%)
    counter.classList.add("danger");
    progressBar.style.backgroundColor = "#e74c3c";

  } else if (percentage >= 60) {
    // Heads-up zone (60–79%)
    counter.classList.add("warning");
    progressBar.style.backgroundColor = "#e67e22";

  } else {
    // All good
    progressBar.style.backgroundColor = "#4a90d9";
  }

  // Log for debugging (open Console to watch in real time!)
  console.log(`Length: ${currentLength} | Remaining: ${remaining} | ${percentage.toFixed(0)}%`);
});

// ✅ What to try next:
//   - Show a "characters remaining" message (not "used")
//   - Add a "Clear" button that resets the textarea and counter
//   - Also count the number of WORDS typed
