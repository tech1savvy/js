### Project Setup
- [x] Create `index.html`
- [x] Create `styles.css`
- [x] Create `script.js`
- [x] Create `assets` directory
- [x] Create `README.md`

### A. Application Behavior
- **Welcome Screen:**
    - [x] Display a welcome message "Welcome to the TechNova Onboarding Quiz! This short quiz will help you review key company values and policies. Click "Start Quiz" to begin.".
    - [x] Display a `Start Quiz` button.
    - [x] Clicking `Start Quiz` transitions to the first question.
- **Quiz Flow:**
    - [x] Display questions one at a time.
    - [x] Display multiple-choice options for each question.
    - [x] After an answer is selected:
        - [x] Display if the answer was correct or incorrect.
        - [x] Show a brief explanation.
        - [x] Wait 2 seconds before showing the next question.
    - [x] Track and display the user's score in the top-right corner.
- **Completion Screen:**
    - [x] Show the total score.
    - [x] Display a custom message based on performance.
    - [x] Include a `Retake Quiz` button that resets the quiz in JavaScript without a page refresh.

### B. Data Structure
- [x] Store 5 questions specific to the company description in a JavaScript array of objects.
- [x] Each question object has `question`, `options`, `correctAnswer`, and `explanation`.
- [x] Use array iteration to go through questions.

### C. JavaScript Functionality
- **JavaScript Basics:**
    - [x] Use `let` and `const`.
    - [x] Use `string`, `number`, and `boolean` data types.
    - [x] Use logical and comparison operators.
- **Control Flow:**
    - [x] Use functions for rendering, checking answers, transitioning, and ending the quiz.
    - [x] Use conditional statements and loops.
- **DOM Interaction:**
    - [x] Use `document.getElementById` or `document.querySelector`.
    - [x] Use `innerHTML`, `textContent`, `classList.add/remove`.
- **UX Enhancements:**
    - [x] Use CSS to indicate correct/incorrect answers.
    - [x] Use CSS for loading/transition states.

### D. UX/UI Requirements
- [x] Use a clean, modern, and generic design with high-contrast colors and system-default fonts. On mobile, options will stack vertically.
- [x] Visually distinct sections for welcome, quiz, and result.
- [x] Disable answer buttons after selection.
- [x] Manage focus for improved keyboard accessibility.
- [x] Clear visual cues for selected answers (background color, border, and icon).
- [x] Use a simple fade-in/fade-out transition between questions.
- [x] Format the score as "3/5".
- [x] Add a "Your Results" heading on the completion screen.

### README.md
- [x] Include a project description and purpose.
- [x] List the JS concepts used.
- [x] Provide instructions to run the project.