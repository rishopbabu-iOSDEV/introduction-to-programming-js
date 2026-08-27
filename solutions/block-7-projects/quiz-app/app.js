// ============================================================
// PROJECT A — JavaScript Quiz App
// Block 7: The Final Boss
// ============================================================

// ============================================================
// QUESTIONS DATA
// Each question: text, options array, correct index (0-based)
// ============================================================
const questions = [
  {
    text: "Which keyword creates a variable that cannot be reassigned?",
    options: ["var", "let", "const", "define"],
    correct: 2
  },
  {
    text: "What does the modulo operator (%) return?",
    options: ["The quotient", "The remainder after division", "The product", "The difference"],
    correct: 1
  },
  {
    text: "Which method adds an item to the END of an array?",
    options: ["unshift()", "shift()", "pop()", "push()"],
    correct: 3
  },
  {
    text: "What will typeof null return?",
    options: ["null", "undefined", "object", "boolean"],
    correct: 2
  },
  {
    text: "Which is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "# comment", "// comment", "** comment **"],
    correct: 2
  },
  {
    text: "What does DOM stand for?",
    options: ["Data Object Model", "Document Object Model", "Display Output Manager", "Dynamic Object Method"],
    correct: 1
  },
  {
    text: "What will console.log(10 % 3) output?",
    options: ["3", "1", "0.33", "10"],
    correct: 1
  },
  {
    text: "Which array method creates a NEW array with only matching items?",
    options: ["map()", "forEach()", "filter()", "find()"],
    correct: 2
  },
  {
    text: "What does === check that == does NOT?",
    options: ["Value only", "Type and value", "Reference equality", "Length of string"],
    correct: 1
  },
  {
    text: "Which event fires when a user types in an input field?",
    options: ["click", "keyup", "input", "Both B and C"],
    correct: 3
  }
];

// ============================================================
// STATE
// ============================================================
let currentIndex = 0;
let score = 0;
let answered = false;

// ============================================================
// DOM REFERENCES
// ============================================================
const startScreen    = document.querySelector("#startScreen");
const quizScreen     = document.querySelector("#quizScreen");
const resultScreen   = document.querySelector("#resultScreen");
const startBtn       = document.querySelector("#startBtn");
const nextBtn        = document.querySelector("#nextBtn");
const retryBtn       = document.querySelector("#retryBtn");
const progressBar    = document.querySelector("#progressBar");
const questionNum    = document.querySelector("#questionNum");
const questionText   = document.querySelector("#questionText");
const optionsContainer = document.querySelector("#optionsContainer");
const feedback       = document.querySelector("#feedback");
const resultEmoji    = document.querySelector("#resultEmoji");
const resultTitle    = document.querySelector("#resultTitle");
const scoreDisplay   = document.querySelector("#scoreDisplay");
const resultMsg      = document.querySelector("#resultMsg");

// ============================================================
// FUNCTIONS
// ============================================================

const showScreen = (screenEl) => {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screenEl.classList.add("active");
};

const loadQuestion = () => {
  answered = false;
  nextBtn.style.display = "none";
  feedback.textContent = "";
  feedback.className = "feedback";

  const q = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;
  questionNum.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  questionText.textContent = q.text;

  // Build option buttons
  optionsContainer.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(i, btn));
    optionsContainer.appendChild(btn);
  });
};

const handleAnswer = (selectedIndex, selectedBtn) => {
  if (answered) return; // Prevent double clicking
  answered = true;

  const q = questions[currentIndex];
  const allOptions = optionsContainer.querySelectorAll(".option-btn");

  // Disable all buttons
  allOptions.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.correct) {
    score++;
    selectedBtn.classList.add("correct");
    feedback.textContent = "✅ Correct! Well done!";
    feedback.className = "feedback correct-msg";
  } else {
    selectedBtn.classList.add("incorrect");
    allOptions[q.correct].classList.add("correct"); // Show the right answer
    feedback.textContent = `❌ Not quite. The answer was: "${q.options[q.correct]}"`;
    feedback.className = "feedback incorrect-msg";
  }

  nextBtn.style.display = "block";
};

const showResults = () => {
  progressBar.style.width = "100%";
  showScreen(resultScreen);

  const percentage = Math.round((score / questions.length) * 100);
  scoreDisplay.textContent = `${score} / ${questions.length}`;

  let emoji, title, msg;

  if (percentage >= 90) {
    emoji = "🏆"; title = "Incredible!";
    msg = `${percentage}% — You're a JavaScript Champion! 🚀`;
  } else if (percentage >= 70) {
    emoji = "🎉"; title = "Great Work!";
    msg = `${percentage}% — Solid JavaScript knowledge!`;
  } else if (percentage >= 50) {
    emoji = "👍"; title = "Good Effort!";
    msg = `${percentage}% — Review the tricky bits and try again!`;
  } else {
    emoji = "💪"; title = "Keep Going!";
    msg = `${percentage}% — Every attempt makes you stronger. Retry!`;
  }

  resultEmoji.textContent = emoji;
  resultTitle.textContent = title;
  resultMsg.textContent   = msg;
};

const resetQuiz = () => {
  currentIndex = 0;
  score = 0;
  answered = false;
  loadQuestion();
  showScreen(quizScreen);
};

// ============================================================
// EVENT LISTENERS
// ============================================================

startBtn.addEventListener("click", () => {
  showScreen(quizScreen);
  loadQuestion();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

retryBtn.addEventListener("click", resetQuiz);
