// ============================================================
// BLOCK 3 BOSS CHALLENGE — Number Guessing Game
// ============================================================
// CONCEPTS: while loop, Math.random(), Math.floor(),
//           Number(), if/else, attempt counter
// ============================================================

// --- Generate a random number between 1 and 100 ---
// Math.random() gives a decimal between 0 and 0.999...
// Multiply by 100 → 0 to 99.99
// Math.floor() rounds DOWN → 0 to 99
// Add 1 → 1 to 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let hasWon = false;

console.log("🎮 Number Guessing Game Started!");
console.log("I'm thinking of a number between 1 and 100...\n");

// Keep looping until the player wins
while (!hasWon) {
  const input = prompt(
    `🎯 Guess a number (1–100)\nAttempts so far: ${attempts}`
  );

  // Handle if user clicks Cancel
  if (input === null) {
    console.log(`🏳️ You gave up! The number was ${secretNumber}.`);
    alert(`You gave up! The number was ${secretNumber}. Better luck next time!`);
    break;
  }

  const guess = Number(input);
  attempts++;

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("⚠️ Please enter a number between 1 and 100.");
    attempts--; // Don't count invalid guesses
    continue;
  }

  console.log(`Attempt ${attempts}: Guessed ${guess}`);

  if (guess < secretNumber) {
    alert(`📉 Too low! Try a higher number. (Attempts: ${attempts})`);
    console.log("→ Too low");

  } else if (guess > secretNumber) {
    alert(`📈 Too high! Try a lower number. (Attempts: ${attempts})`);
    console.log("→ Too high");

  } else {
    // Correct!
    hasWon = true;
    console.log(`\n✅ CORRECT! The number was ${secretNumber}`);
    console.log(`Total attempts: ${attempts}`);

    // Feedback based on number of attempts
    let performanceFeedback;
    if (attempts <= 4) {
      performanceFeedback = "You're a mind reader! 🧠 Incredible!";
    } else if (attempts <= 7) {
      performanceFeedback = "Nice work! 👍 You've got good instincts!";
    } else if (attempts <= 10) {
      performanceFeedback = "Good job! Keep practising your strategy. 😊";
    } else {
      performanceFeedback = "You got there! Keep practising — you'll get faster! 💪";
    }

    alert(
      `🎉 CORRECT!\n\nThe number was ${secretNumber}.\nYou got it in ${attempts} attempts!\n\n${performanceFeedback}`
    );
  }
}

// ✅ What to try next:
//   - Add a maximum of 10 attempts before Game Over
//   - Show a "Getting warmer / colder" hint based on how close the guess is
//   - Let the player choose difficulty: Easy (1–20), Medium (1–100), Hard (1–500)
