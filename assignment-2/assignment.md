# Assignment 2: Dynamic FAQ Accordion Component

You're working with the Customer Experience Engineering Team at TechNova Solutions. The Support & Help Center team needs a dynamic FAQ section that can be embedded across multiple product help pages.

The goal is to design a fully functional, interactive FAQ accordion using HTML, CSS, and vanilla JavaScript — no frameworks. The component should be flexible enough to display any number of FAQs and provide a smooth, user-friendly interaction.

## Project Objectives & Requirements

### A. Application Behavior

Build an interactive accordion-style FAQ list that satisfies the following functional requirements:

#### FAQ Structure:

- Display at least 5 frequently asked questions.
- Each question should be clickable.

#### Clicking a question:

- Expands its corresponding answer.
- Collapses any previously open answer (only one open at a time).
- Uses smooth animation (`max-height` or transitions).

#### User Feedback:

- A visual indicator (+/–, arrow icon, or text) toggles dynamically to indicate expanded/collapsed state.
- Keyboard users can expand/collapse FAQs using `Enter` or `Space`.

#### Reusable FAQ Data:

All FAQ data should be stored in a JavaScript array of objects.

Example structure:

```js
const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Click the 'Forgot Password' link on the login page and follow the instructions."
  },
  // ...
];
```

#### Accessibility & UX:

- Use `aria-expanded`, `aria-controls`, and `role="button"` for screen reader compatibility.
- Ensure heading hierarchy (`h2`, `h3`, etc.) is meaningful and semantic.

### B. JavaScript Requirements

Implement the following JavaScript concepts effectively:

#### DOM Manipulation

- Use `document.querySelector`, `createElement`, `appendChild`, and `innerHTML`.
- Dynamically generate the FAQ list from the `faqs` array.
- Use `classList.add/remove/toggle` to manage state and animations.

#### Events

- Handle `click` events with `addEventListener`.
- Attach event listeners after DOM content is rendered.
- Handle keyboard accessibility (listen for `keydown` events).

#### Logic

- Only one FAQ should be open at a time.
- Track the currently expanded FAQ using a variable or data attribute.
- Use conditional logic (`if/else`) to toggle state.

#### Functions

Write modular functions:

- `renderFAQs()`
- `toggleFAQ(index)`
- `closeAllFAQs()`

### C. Styling (CSS Expectations)

Create visually distinct states:

- **Collapsed:** only question visible
- **Expanded:** question + answer with animation

- Use CSS transitions (`transition`, `max-height`) for smooth toggling.
- Use pseudo-classes (e.g. `:focus`, `:hover`) for better UX.

## Project Structure

```bash
/faq-accordion/
├── index.html
├── style.css
├── script.js
└── README.md
```

#### README.md Must Include:

- Component purpose
- How FAQ data is structured and rendered
- JS and accessibility techniques used
- How to embed it into other projects

## Optional Enhancements (Bonus)

#### Search Functionality:

- Add a search bar that filters FAQs by keywords.

#### Expand All / Collapse All:

- Add buttons to expand or collapse all FAQs at once.

#### Dark Mode Toggle:

- Add a light/dark theme switch using JS + CSS variables.

## Evaluation Criteria

| Category                        | Weight |
| ------------------------------- | ------ |
| DOM Manipulation & Structure    | 25%    |
| Event Handling & Logic          | 25%    |
| Accessibility Implementation    | 20%    |
| Code Organization & Reusability | 15%    |
| Visual Styling & Transitions    | 10%    |
| Bonus Features                  | 5%     |