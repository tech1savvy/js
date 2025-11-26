# Quiz Screen

The Quiz Screen is the main interactive part of the application where the user answers questions.

## Components

*   **Score Display:** A `<div>` with the ID `score` that shows the user's current score.
*   **Question Container:** A `<div>` that holds the question text (`<h2>` with ID `question`) and the options container.
*   **Options Container:** A `<div>` with the ID `options-container` where the multiple-choice option buttons are dynamically generated.
*   **Feedback Container:** A `<div>` that displays feedback to the user after they select an answer.

## Development Process

1.  **HTML Structure:** The `quiz-screen` div was created in `index.html` and was initially hidden with the `hidden` class.
2.  **CSS Styling:**
    *   The layout of the quiz screen was styled, including the placement of the score.
    *   Styles were created for the question text, option buttons, and feedback container.
    *   `correct` and `incorrect` classes were defined to provide visual feedback on the option buttons.
3.  **JavaScript Logic:**
    *   **State Management:** `currentQuestionIndex` and `score` variables were created to track the quiz state.
    *   **`showQuestion()` Function:** This function is responsible for rendering the current question. It updates the question text and dynamically creates a button for each option. Event listeners are added to each button to call the `selectAnswer()` function.
    *   **`selectAnswer()` Function:** This is the core logic of the quiz. It checks if the selected answer is correct, updates the score, provides feedback, and then uses `setTimeout` to trigger the transition to the next question.
    *   **`resetQuestionState()` Function:** A helper function to clear feedback and reset button states before the next question is displayed.

## JavaScript Concepts Used

*   **Arrays and Objects:** The `questions` array is a fundamental data structure, holding objects that represent each question.
*   **DOM Manipulation:**
    *   `document.createElement('button')`: To create the option buttons dynamically.
    *   `element.textContent`: To set the text of the question and buttons.
    *   `optionsContainer.innerHTML = ''`: To clear the options before rendering new ones.
    *   `optionsContainer.appendChild(button)`: To add the new option buttons to the DOM.
*   **Functions:** The quiz is organized into modular functions (`showQuestion`, `selectAnswer`, `resetQuestionState`) for clarity and reusability.
*   **`forEach` Loop:** Used to iterate over the `options` array to create a button for each option.
*   **Conditional Logic (`if/else`):** Used in `selectAnswer` to check if the answer is correct and to determine which feedback to show.
*   **`setTimeout`:** Used to create a 2-second delay after an answer is selected before moving to the next question, improving the user experience.
*   **Ternary Operator:** Used to conditionally add the `correct` or `incorrect` class to the selected button.
