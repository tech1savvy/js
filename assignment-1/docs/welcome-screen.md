# Welcome Screen

The Welcome Screen is the first view that users see when they open the application. It provides a brief introduction to the quiz and a button to start.

## Components

*   **Welcome Message:** An `<h1>` and a `<p>` tag that display the welcome text.
*   **Start Quiz Button:** A `<button>` with the ID `start-btn` that initiates the quiz.

## Development Process

1.  **HTML Structure:** The `welcome-screen` div was created in `index.html` to act as a container for the welcome message and the start button.
2.  **CSS Styling:** Basic styling was applied to center the content and style the button.
3.  **JavaScript Interaction:**
    *   A DOM reference to the `start-btn` was obtained.
    *   An event listener was added to the button to call the `startQuiz()` function when clicked.

## JavaScript Concepts Used

*   **`document.getElementById`:** Used to get a reference to the `welcome-screen` div and the `start-btn` button.
*   **`element.addEventListener`:** Used to listen for a `click` event on the start button.
*   **`element.classList`:** Used in the `startQuiz` function to add the `hidden` class to the welcome screen, effectively hiding it from view.
*   **Functions:** The `startQuiz()` function is a core part of the interaction, responsible for transitioning the user from the welcome screen to the quiz screen.
