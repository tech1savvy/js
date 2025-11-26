# Documentation: JavaScript Logic

The entire interactive logic for the component is contained in `script.js`. It handles data storage, rendering, state management, and event handling.

## Data Structure

The FAQs are stored in an array of objects called `faqs`. This makes the data easy to manage and update without touching the HTML.

```javascript
const faqs = [
    {
        question: "How do I create an account...?",
        answer: "You can create an account by..."
    },
    // ...more faqs
];
```

## Core Functions

The script is wrapped in a `DOMContentLoaded` event listener to ensure it only runs after the page's HTML content has been fully loaded.

### `renderFAQs()`
-   **Purpose**: To dynamically build the HTML for each FAQ item.
-   **Logic**: It iterates over the `faqs` array. For each item, it creates the necessary `div` elements (`.faq-item`, `.faq-question`, `.faq-answer`), sets their classes and accessibility attributes (`role`, `tabindex`, `aria-*`), and injects the question and answer content using `innerHTML`.
-   **Event Listeners**: Crucially, this is also where the `click` and `keydown` event listeners are attached to each `faq-question`.

### `openFAQ(item)`
-   **Purpose**: To open a single FAQ item.
-   **Logic**:
    1.  Adds an `.active` class to the `.faq-item` for state tracking.
    2.  Sets the `aria-expanded` attribute to `true`.
    3.  Changes the toggle indicator text to `–`.
    4.  Calculates the answer's `scrollHeight` and sets the `max-height` style to this value, triggering the CSS opening animation.

### `closeFAQ(item)`
-   **Purpose**: To close a single FAQ item.
-   **Logic**:
    1.  Removes the `.active` class.
    2.  Sets `aria-expanded` to `false`.
    3.  Changes the toggle indicator text to `+`.
    4.  Resets the `max-height` to `null`, triggering the CSS closing animation.

### `closeAllFAQs()`
-   **Purpose**: A helper function to close all currently open FAQs.
-   **Logic**: It selects all items that have the `.active` class and runs the `closeFAQ()` function on each one.

### `toggleFAQ(index)`
-   **Purpose**: The main controller function that is called when a user interacts with a question.
-   **Logic**:
    1.  It first determines if the clicked item is already open by checking for the `.active` class.
    2.  It calls `closeAllFAQs()` to ensure that any other open item is closed, satisfying the "only one open at a time" requirement.
    3.  If the clicked item was **not** already open, it calls `openFAQ()` on it. If it **was** already open, the previous call to `closeAllFAQs()` has already handled closing it.
