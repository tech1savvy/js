// DOM Element References
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const completionScreen = document.getElementById("completion-screen");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackText = document.getElementById("feedback-text");
const finalScore = document.getElementById("final-score");
const finalMessage = document.getElementById("final-message");
const retakeBtn = document.getElementById("retake-btn");
const resultsHeading = document.getElementById("results-heading");

// Quiz Questions
const questions = [
  {
    question: "Which of the following is a core TechNova value?",
    options: ["Speed", "Sustainability", "Security", "Style"],
    correctAnswer: 2,
    explanation:
      "Security is a core value at TechNova due to our enterprise clients.",
  },
  {
    question: "How many days of paid time off (PTO) do new employees receive?",
    options: ["10", "15", "20", "25"],
    correctAnswer: 1,
    explanation: "New employees at TechNova start with 15 days of PTO.",
  },
  {
    question: "What is TechNova's policy on remote work?",
    options: [
      "Fully remote",
      "Hybrid model",
      "In-office only",
      "Depends on the team",
    ],
    correctAnswer: 1,
    explanation:
      "TechNova offers a hybrid work model, balancing in-office collaboration with remote flexibility.",
  },
  {
    question:
      "Which department is responsible for handling IT support requests?",
    options: [
      "Human Resources",
      "Operations",
      "Information Technology",
      "Finance",
    ],
    correctAnswer: 2,
    explanation:
      "The Information Technology (IT) department handles all IT support requests.",
  },
  {
    question: "What is the company's mission?",
    options: [
      "To be the most profitable company",
      "To innovate for a better future",
      "To provide the cheapest solutions",
      "To expand to every continent",
    ],
    correctAnswer: 1,
    explanation:
      "TechNova's mission is to innovate for a better future, creating value for our clients and society.",
  },
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;

// Event Listeners
startBtn.addEventListener("click", startQuiz);

// --- FUNCTION DEFINITIONS ---

/**
 * Starts the quiz by hiding the welcome screen and showing the first question.
 */
function startQuiz() {
  welcomeScreen.classList.add("fade-out");
  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    welcomeScreen.classList.remove("fade-out");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("fade-in");
  }, 500);
  showQuestion();
}

/**
 * Displays the current question and its options.
 */
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });

  scoreDisplay.textContent = `${score}/${questions.length}`;
}

/**
 * Handles the user's answer selection.
 * @param {number} selectedIndex The index of the selected option.
 */
function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correct = selectedIndex === currentQuestion.correctAnswer;

  if (correct) {
    score++;
    feedbackText.textContent = "Correct! " + currentQuestion.explanation;
  } else {
    feedbackText.textContent = "Incorrect. " + currentQuestion.explanation;
  }

  // Visual feedback
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((button, index) => {
    if (index === selectedIndex) {
      button.classList.add(correct ? "correct" : "incorrect");
    }
    button.disabled = true;
  });

  // Move to the next question after a delay
  setTimeout(() => {
    quizScreen.classList.add("fade-out");
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        resetQuestionState();
        showQuestion();
        quizScreen.classList.remove("fade-out");
        quizScreen.classList.add("fade-in");
      } else {
        endQuiz();
        quizScreen.classList.remove("fade-out");
      }
    }, 500);
  }, 2000);
}

/**
 * Resets the state of the question area for the next question.
 */
function resetQuestionState() {
  feedbackText.textContent = "";
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });
}

/**
 * Ends the quiz and displays the completion screen.
 */
function endQuiz() {
  quizScreen.classList.add("hidden");
  completionScreen.classList.remove("hidden");
  completionScreen.classList.add("fade-in");

  finalScore.textContent = `You scored ${score} out of ${questions.length}.`;
  resultsHeading.textContent = "Your Results";

  let message = "";
  if (score === 5) {
    message = "Excellent! You’re off to a great start.";
  } else if (score >= 3) {
    message = "Nice job! Review our documentation to improve.";
  } else {
    message = "Don’t worry — visit our onboarding resources again.";
  }
  finalMessage.textContent = message;
}

// Event listener for the retake button
retakeBtn.addEventListener("click", () => {
  completionScreen.classList.add("fade-out");
  setTimeout(() => {
    completionScreen.classList.add("hidden");
    completionScreen.classList.remove("fade-out");
    welcomeScreen.classList.remove("hidden");
    welcomeScreen.classList.add("fade-in");
    currentQuestionIndex = 0;
    score = 0;
    resetQuestionState();
  }, 500);
});
