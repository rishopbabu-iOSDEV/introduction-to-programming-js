// ============================================================
// BLOCK 4 BOSS CHALLENGE — Quiz Engine
// ============================================================
// CONCEPTS: functions, arrays of objects, loops,
//           return values, Date.now() for timing
// ============================================================

// --- FUNCTION 1: Create a question object ---
// Takes question text, options array, and the correct answer
const createQuestion = (question, options, correctAnswer) => {
  return {
    question,
    options,
    correctAnswer: correctAnswer.toLowerCase().trim()
  };
};

// --- FUNCTION 2: Display a question and get user answer ---
const askQuestion = (questionObj, questionNumber, total) => {
  const optionsList = questionObj.options
    .map((opt, i) => `  ${i + 1}. ${opt}`)
    .join("\n");

  const userInput = prompt(
    `Question ${questionNumber} of ${total}\n\n` +
    `❓ ${questionObj.question}\n\n${optionsList}\n\n` +
    `Type your answer:`
  );

  return userInput !== null ? userInput.toLowerCase().trim() : "";
};

// --- FUNCTION 3: Check if an answer is correct ---
const checkAnswer = (userAnswer, correctAnswer) => {
  return userAnswer === correctAnswer;
};

// --- FUNCTION 4: Calculate final score as a percentage ---
const calculateScore = (correct, total) => {
  return Math.round((correct / total) * 100);
};

// --- FUNCTION 5: Display final feedback based on score ---
const showResult = (score, timeTaken, totalQuestions) => {
  let emoji, feedback;

  if (score >= 80) {
    emoji = "🏆"; feedback = "Outstanding! You're a JavaScript Wizard!";
  } else if (score >= 60) {
    emoji = "🎉"; feedback = "Great work! You've got solid JS knowledge!";
  } else if (score >= 40) {
    emoji = "👍"; feedback = "Good effort! Review the topics and try again.";
  } else {
    emoji = "💪"; feedback = "Keep going! Every expert was once a beginner.";
  }

  const seconds = Math.round(timeTaken / 1000);
  console.log("\n" + "=".repeat(40));
  console.log(`${emoji} QUIZ COMPLETE!`);
  console.log(`Score: ${score}%`);
  console.log(`Time: ${seconds} seconds`);
  console.log(`${feedback}`);
  console.log("=".repeat(40));

  alert(`${emoji} Quiz Complete!\n\nScore: ${score}% (${totalQuestions} questions)\nTime: ${seconds} seconds\n\n${feedback}`);
};

// ============================================================
// BUILD THE QUIZ — 5 questions about JavaScript basics
// ============================================================
const questions = [
  createQuestion(
    "Which keyword creates a variable that CANNOT be reassigned?",
    ["var", "let", "const", "define"],
    "const"
  ),
  createQuestion(
    "What does console.log() do?",
    ["Creates a popup", "Prints to browser Console", "Saves a file", "Deletes code"],
    "prints to browser console"
  ),
  createQuestion(
    "Which symbol is used for strict equality in JavaScript?",
    ["=", "==", "===", "!=="],
    "==="
  ),
  createQuestion(
    "What does prompt() return if the user clicks Cancel?",
    ["undefined", "false", "0", "null"],
    "null"
  ),
  createQuestion(
    "What will this print? console.log(typeof 42)",
    ["number", "integer", "42", "string"],
    "number"
  )
];

// ============================================================
// RUN THE QUIZ
// ============================================================
const startTime = Date.now(); // Record start time (bonus timing feature)
let correctCount = 0;

console.log("🎮 JavaScript Quest — Knowledge Check Quiz");
console.log(`Total questions: ${questions.length}\n`);

for (let i = 0; i < questions.length; i++) {
  const userAnswer = askQuestion(questions[i], i + 1, questions.length);
  const isCorrect = checkAnswer(userAnswer, questions[i].correctAnswer);

  if (isCorrect) {
    correctCount++;
    console.log(`Q${i + 1}: ✅ Correct!`);
  } else {
    console.log(`Q${i + 1}: ❌ Wrong. Answer was: "${questions[i].correctAnswer}"`);
  }
}

const endTime = Date.now();
const timeTaken = endTime - startTime; // milliseconds
const finalScore = calculateScore(correctCount, questions.length);

showResult(finalScore, timeTaken, questions.length);

// ✅ What to try next:
//   - Add more questions about Blocks 1–3
//   - Shuffle the questions array before the quiz starts
//   - Show the correct answer after each wrong answer
