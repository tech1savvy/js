# Documentation: CSS Styling

The styling for the FAQ accordion is located in `style.css`. It covers the layout, visual appearance, and animations.

## General Styling

-   **`body`**: Basic styles for font, background color, and padding are set on the body to create a pleasant viewing area.
-   **`.faq-container`**: This class styles the main component wrapper, giving it a maximum width, centered alignment, a border, and a subtle box shadow to make it stand out from the page.

## FAQ Item Styling

-   **`.faq-item`**: Each item has a bottom border to visually separate it from the next.
-   **`.faq-question`**:
    -   Uses Flexbox (`display: flex`) to align the question text and the `+/–` toggle on opposite ends.
    -   A `cursor: pointer` is used to indicate it's a clickable element.
    -   `:hover` and `:focus` pseudo-classes provide visual feedback by changing the background color.
-   **`.faq-toggle`**: The `+/–` indicator is styled to be large and bold for clear visibility.

## Accordion Animation

The smooth expand/collapse animation is a core feature and is achieved with the following CSS:

```css
.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #fafafa;
}
```

-   **`max-height: 0`**: By default, the answer container has a `max-height` of `0`, effectively hiding it.
-   **`overflow: hidden`**: This is crucial. It ensures that the content inside the answer container is clipped and not visible when the `max-height` is `0`.
-   **`transition: max-height 0.3s ease-in-out`**: This property tells the browser to animate the change in the `max-height` property over 0.3 seconds.

When a question is clicked, the JavaScript calculates the full height of the answer's content (`scrollHeight`) and sets the `max-height` to that value as an inline style. The CSS transition then creates the smooth opening animation. When closing, the `max-height` is set back to `null` (or `0`), and the transition animates it shut.
