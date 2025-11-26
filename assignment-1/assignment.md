# Assignment 1: Interactive Onboarding Quiz App

You’ve joined the Internal Platforms Team at TechNova Solutions, and your first assignment is to build a self-service onboarding quiz tool that will be embedded within the company’s employee portal. This quiz aims to help new employees review key company values, benefits, security policies, and best practices - while making the experience engaging and interactive.

Your task is to build a modular, interactive JavaScript-powered web app that allows users to take a 5-question quiz, track their score, view feedback after each answer, and receive a custom message at the end based on performance.

This project will test your understanding of JavaScript variables, data types, operators, functions, control flow, arrays, and basic DOM manipulation.

## Project Objectives & Technical Requirements

### A. Application Behavior

The quiz must meet the following functional requirements:

1.  **Welcome Screen:**
    *   Display a welcome message and a `Start Quiz` button.
    *   Clicking the button should transition to the first question.

2.  **Quiz Flow:**
    *   Questions are displayed one at a time with multiple choices.
    *   After each answer is selected:
        *   Display whether the answer was correct or incorrect.
        *   Show a brief explanation (e.g., “Correct! TechNova offers health insurance from day one.”).
        *   Wait 2 seconds before moving to the next question (use `setTimeout`).
    *   Track and display the user’s score as the quiz progresses.

3.  **Completion Screen:**
    *   Show the total score (e.g., "You scored 4 out of 5.").
    *   Display a custom message based on performance:
        *   5/5: “Excellent! You’re off to a great start.”
        *   3–4/5: “Nice job! Review our documentation to improve.”
        *   <3: “Don’t worry — visit our onboarding resources again.”
    *   Include a `Retake Quiz` button.

### B. Data Structure

Store all questions in a JavaScript Array of Object literals, each object representing one question:

```javascript
{
    question: "Which of the following is a core TechNova value?",
    options: ["Speed", "Sustainability", "Security", "Style"],
    correctAnswer: 2,
    explanation: "Security is a core value at TechNova due to our enterprise clients."
}
```

*   Use array indexing and iteration (e.g., `for`, `forEach`, `while`) to traverse questions.

### C. JavaScript Functionality Requirements

You must use the following constructs:

**JavaScript Basics:**
*   `let`, `const` for variables
*   Primitive data types: `string`, `number`, `boolean`
*   Logical and comparison operators (e.g., `===`, `!==`, `&&`, `||`, ternary)

**Control Flow:**
*   Use functions for:
    *   Rendering a question
    *   Checking an answer
    *   Transitioning to next question
    *   Ending the quiz
*   Use conditional statements and loops

**DOM Interaction:**
*   Dynamically render question content and options using:
    *   `document.getElementById` or `document.querySelector`
    *   `innerHTML`, `textContent`, `classList.add/remove`

**UX Enhancements:**
*   Use basic CSS transitions or classes to indicate:
    *   Correct/incorrect answers (e.g., color change, icon)
    *   Loading/transition states between questions

### D. UX/UI Requirements

*   Responsive layout (min-width 320px to 1024px+)
*   Visually distinct sections: welcome, quiz, result
*   Disable answer buttons briefly after selection to prevent double-clicking
*   Use keyboard-accessible controls (tab, enter, space)
*   Clear visual cues for selected answers

### E. Stretch Goals (Optional)

1.  Shuffle questions or answers using array shuffling (e.g., Fisher–Yates algorithm)
2.  Add a progress bar showing how far along the user is
3.  Add sound feedback (correct/wrong) using `<audio>` tags and `play()`
4.  Track and display time taken to complete the quiz

## Project Structure

```
/onboarding-quiz/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── sounds/ (optional)
└── README.md
```

## README.md Must Include

*   Project description and purpose
*   JS concepts used
*   Instructions to run
*   Screenshots (optional)

## Evaluation Criteria

| Category                      | Weight |
| ----------------------------- | ------ |
| JavaScript Logic & Structure  | 25%    |
| DOM Manipulation              | 20%    |
| Control Flow & Functions      | 20%    |
| UI/UX Design                  | 15%    |
| Code Clarity & Reusability    | 10%    |
| Creativity & Stretch Goals    | 10%    |