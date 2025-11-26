# FAQ Accordion Component

## Component Purpose

This project is a dynamic, reusable FAQ accordion component built with vanilla HTML, CSS, and JavaScript. It's designed for the Support & Help Center at TechNova Solutions to be easily embedded across multiple product help pages.

## How FAQ Data is Structured and Rendered

The FAQ data is stored in a JavaScript array of objects in `script.js`. Each object has a `question` and an `answer`.

```javascript
const faqs = [
  {
    question: "How do I create an account?",
    answer: "..."
  },
  // ...
];
```

The `renderFAQs` function in `script.js` dynamically generates the HTML for each FAQ item and appends it to the DOM when the page loads.

## JavaScript and Accessibility Techniques Used

- **DOM Manipulation:** `createElement`, `appendChild`, and `innerHTML` are used to build the FAQ list from the data array.
- **Event Handling:** `addEventListener` is used for `click` and `keydown` events to toggle the FAQs.
- **Accessibility:**
  - `role="button"` is used on the question to indicate it's interactive.
  - `aria-expanded` tracks the state (true/false) for screen readers.
  - `aria-controls` links the question to its corresponding answer panel.
  - Keyboard navigation is supported using `Enter` and `Space`.

## How to Embed into Other Projects

1.  **Copy the CSS:** Link the `style.css` file in the `<head>` of your HTML page.
2.  **Copy the HTML:** Place the `<div class="faq-container"></div>` where you want the accordion to appear.
3.  **Copy the JavaScript:**
    -   Include the `<script src="script.js"></script>` tag before your closing `</body>` tag.
    -   Modify the `faqs` array in `script.js` to include your desired questions and answers.
