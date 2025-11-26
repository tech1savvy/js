const faqs = [
    {
        question: "How do I create an account with TechNova Solutions?",
        answer: "You can create an account by clicking the 'Sign Up' button on our homepage and filling out the registration form. You will receive a confirmation email to verify your account."
    },
    {
        question: "What are the system requirements for TechNova products?",
        answer: "Our products are cloud-based and accessible through any modern web browser. For optimal performance, we recommend using the latest version of Chrome, Firefox, or Safari."
    },
    {
        question: "How can I update my payment information?",
        answer: "To update your payment information, log into your account, navigate to the 'Billing' section, and click on 'Update Payment Method'. Follow the prompts to enter your new details."
    },
    {
        question: "Where can I find the user manual for your products?",
        answer: "All user manuals are available in our online Help Center. You can search for a specific product manual or browse by product category to find the documentation you need."
    },
    {
        question: "I'm having trouble with installation, what should I do?",
        answer: "Since our products are cloud-based, no installation is required. If you are having trouble accessing our services, please check your internet connection or contact our support team for assistance."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-container');

    function renderFAQs() {
        faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';

            const faqQuestion = document.createElement('div');
            faqQuestion.className = 'faq-question';
            faqQuestion.setAttribute('role', 'button');
            faqQuestion.setAttribute('tabindex', '0');
            faqQuestion.setAttribute('aria-expanded', 'false');
            faqQuestion.setAttribute('aria-controls', `faq-answer-${index}`);
            faqQuestion.innerHTML = `
                <h3>${faq.question}</h3>
                <span class="faq-toggle">+</span>
            `;

            const faqAnswer = document.createElement('div');
            faqAnswer.className = 'faq-answer';
            faqAnswer.id = `faq-answer-${index}`;
            faqAnswer.innerHTML = `<p>${faq.answer}</p>`;

            faqItem.appendChild(faqQuestion);
            faqItem.appendChild(faqAnswer);
            faqContainer.appendChild(faqItem);

            faqQuestion.addEventListener('click', () => toggleFAQ(index));
            faqQuestion.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                }
            });
        });
    }

    function openFAQ(item) {
        item.classList.add('active');
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        toggle.textContent = '–';
    }

    function closeFAQ(item) {
        item.classList.remove('active');
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
        toggle.textContent = '+';
    }

    function closeAllFAQs() {
        document.querySelectorAll('.faq-item.active').forEach(item => closeFAQ(item));
    }

    function toggleFAQ(index) {
        const faqItems = document.querySelectorAll('.faq-item');
        const clickedItem = faqItems[index];
        const isExpanded = clickedItem.classList.contains('active');

        closeAllFAQs();

        if (!isExpanded) {
            openFAQ(clickedItem);
        }
    }

    renderFAQs();
});
