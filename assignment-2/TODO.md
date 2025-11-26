# Assignment 2 Checklist

## Project Structure
- [x] Create `index.html`
- [x] Create `style.css`
- [x] Create `script.js`
- [x] Create `README.md`

## Application Behavior
### FAQ Structure
- [x] Display at least 5 frequently asked questions (content to be generated based on "TechNova Solutions" context).
- [x] Each question should be clickable.

### Clicking a question
- [x] Expands its corresponding answer.
- [x] Collapses any previously open answer (only one open at a time).
- [x] Uses a standard `max-height` transition for smooth animation (e.g., 0.3s).

### User Feedback
- [x] A visual indicator (+/–) toggles dynamically to indicate expanded/collapsed state.
- [x] Keyboard users can expand/collapse FAQs using `Enter` or `Space`.

### Reusable FAQ Data
- [x] All FAQ data should be stored in a JavaScript array of objects.

### Accessibility & UX
- [x] Use `aria-expanded`, `aria-controls`, and `role="button"` for screen reader compatibility.
- [x] Ensure heading hierarchy (`h2`, `h3`, etc.) is meaningful and semantic.

## JavaScript Requirements
### DOM Manipulation
- [x] Use `document.querySelector`, `createElement`, `appendChild`, and `innerHTML`.
- [x] Dynamically generate the FAQ list from the `faqs` array.
- [x] Use `classList.add/remove/toggle` to manage state and animations.

### Events
- [x] Handle `click` events with `addEventListener`.
- [x] Attach event listeners after DOM content is rendered.
- [x] Handle keyboard accessibility (listen for `keydown` events).

### Logic
- [x] Only one FAQ should be open at a time.
- [x] Track the currently expanded FAQ using a variable or data attribute.
- [x] Use conditional logic (`if/else`) to toggle state.

### Functions
- [x] Write modular function `renderFAQs()`
- [x] Write modular function `toggleFAQ(index)`
- [x] Write modular function `closeAllFAQs()`

## Styling (CSS Expectations)
### Visually distinct states
- [x] Collapsed: only question visible
- [x] Expanded: question + answer with animation
- [x] Use CSS transitions (`transition`, `max-height`) for smooth toggling.
- [x] Use pseudo-classes (e.g. `:focus`, `:hover`) for better UX.

## README.md Must Include:
- [x] Component purpose
- [x] How FAQ data is structured and rendered
- [x] JS and accessibility techniques used
- [x] How to embed it into other projects

## Optional Enhancements (Bonus)
- [ ] **Search Functionality:** Add a search bar that filters FAQs by keywords.
- [ ] **Expand All / Collapse All:** Add buttons to expand or collapse all FAQs at once.
- [ ] **Dark Mode Toggle:** Add a light/dark theme switch using JS + CSS variables.