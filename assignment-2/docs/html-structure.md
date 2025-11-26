# Documentation: HTML Structure

The HTML for the FAQ accordion is located in `index.html`. It provides the basic page structure and the main container for the component.

## Boilerplate

The file starts with a standard HTML5 boilerplate.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Accordion</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ... -->
    <script src="script.js"></script>
</body>
</html>
```
-   **`<meta name="viewport">`**: Ensures the layout is responsive on mobile devices.
-   **`<link rel="stylesheet" href="style.css">`**: Links the external stylesheet for styling.
-   **`<script src="script.js">`**: Links the JavaScript file just before the closing `</body>` tag to ensure the DOM is parsed before the script runs.

## Main Component Container

The core of the HTML is a single `<div>` which acts as the root element for the FAQ component.

```html
<div class="faq-container">
    <h2>Frequently Asked Questions</h2>
</div>
```

-   **`<div class="faq-container">`**: This is the main container. The JavaScript (`script.js`) targets this element to dynamically inject the FAQ items.
-   **`<h2>`**: A static heading for the FAQ section.

## Dynamic Content

All the individual FAQ items (`.faq-item`, `.faq-question`, `.faq-answer`) are **not** hardcoded in the HTML. They are generated dynamically by the `renderFAQs()` function in `script.js` based on the `faqs` data array. This makes the component reusable and easy to update.
