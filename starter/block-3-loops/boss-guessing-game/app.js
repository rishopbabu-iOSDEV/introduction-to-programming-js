// ============================================================
// BLOCK 3 BOSS CHALLENGE — Number Guessing Game
// ============================================================
// CONCEPTS: while loop, Math.random(), Math.floor(),
//           Number(), if/else, attempt counter
// ============================================================
// GOAL: The computer picks a secret number 1–100. The player
//       keeps guessing (with "too high / too low" hints) until
//       they get it. Count the attempts.
// ============================================================

// TODO 1: Generate a secret number from 1 to 100.
//         Hint: Math.floor(Math.random() * 100) + 1


// TODO 2: Set up an attempts counter and a "hasWon" flag.


// TODO 3: Loop while the player hasn't won:
//         - prompt for a guess (convert with Number())
//         - handle Cancel (prompt returns null)
//         - validate the guess is a number 1–100
//         - compare to the secret: tell them too high / too low / correct
//         - when correct, set hasWon = true and show the attempts


// ✅ What to try next:
//   - Add a maximum of 10 attempts before Game Over
//   - Show a "warmer / colder" hint based on distance
//   - Let the player choose a difficulty range
