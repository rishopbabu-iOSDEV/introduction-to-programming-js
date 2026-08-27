// ============================================================
// TASK 6.2 — Live Character Counter
// BLOCK 6: The Web Arena
// ============================================================
// CONCEPTS: addEventListener("input"), .value.length,
//           textContent, classList, style.width
// ============================================================
// The HTML/CSS are ready: a textarea (#messageInput), a counter
// label (#counter), and a progress bar fill (#progressBar).
// ============================================================

const MAX_CHARS = 100;

// TODO 1: Select #messageInput, #counter, and #progressBar.


// TODO 2: Listen for the "input" event on the textarea (fires on every
//         keystroke, paste, or delete).


// TODO 3: Inside the handler:
//         - read the current length (textarea.value.length)
//         - update the counter text: `${length} / ${MAX_CHARS} characters`
//         - set the progress bar width as a percentage
//         - change the colour/class as it approaches the limit (e.g. 60%, 80%, 100%)


// ✅ What to try next:
//   - Show "characters remaining" instead of used
//   - Add a Clear button that resets everything
//   - Also count the number of words
