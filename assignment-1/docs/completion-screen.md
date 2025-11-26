# Completion Screen

The Completion Screen is the final view of the application. It displays the user's final score and a message based on their performance. It also provides a way to restart the quiz.

## Components

*   **Results Heading:** An `<h2>` with the ID `results-heading`.
*   **Final Score:** A `<p>` tag with the ID `final-score` to display the total score.
*   **Final Message:** A `<p>` tag with the ID `final-message` to display the performance-based message.
*   **Retake Quiz Button:** A `<button>` with the ID `retake-btn` that allows the user to take the quiz again.

## Development Process

1.  **HTML Structure:** The `completion-screen` div was created in `index.html` and was initially hidden.
2.  **CSS Styling:** Basic styling was applied to the text elements and the "Retake Quiz" button.
3.  **JavaScript Interaction:**
    *   **`endQuiz()` Function:** This function is called after the last question has been answered. It hides the quiz screen, shows the completion screen, and calculates which message to display based on the final score.
    *   **Retake Button Event Listener:** An event listener on the `retake-btn` resets the quiz state (`currentQuestionIndex` and `score`) and transitions the user back to the welcome screen.

## JavaScript Concepts Used

*   **DOM Manipulation:** `textContent` is used to update the final score and message. `classList` is used to hide and show the relevant screens.
*   **Conditional Logic (`if/else if/else`):** Used in the `endQuiz` function to determine which of the three performance messages to display based on the user's score.
*   **State Reset:** The event listener for the retake button demonstrates how to reset the application's state in JavaScript to allow for a clean restart without a page reload. This is a more modern approach than simply reloading the page.
