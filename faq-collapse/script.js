const questions = [
    {
        question: "Why shouldn't we trust atoms?",
        answer: 'They make up everything'
    },
    {
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows.'
    },
    {
        question: "What's the object-oriented way to become wealthy?",
        answer: 'Inheritance.'
    }, 
    {
        question: 'How many tickles does it take to tickle an octopus?',
        answer: 'Ten-tickles!'
    },
    {
        question: 'What is: 1 + 1?',
        answer: 'Depends on who are you asking.'
    }
];

const containerEl = document.querySelector(".container");

loadQuestions();

function loadQuestions() {
    questions.forEach((question) => {
        const questionEl = document.createElement("div");
        questionEl.classList.add("box");
        questionEl.innerHTML = `
            <div class="content">
                <h4>${question.question}</h4>
                <p>${question.answer}</p>
            </div>
            <button class="btn">
                <i class="fas fa-arrow-down"></i>
            </button>
        `;

        containerEl.appendChild(questionEl);

        const btnEl = questionEl.querySelector(".btn");
        btnEl.addEventListener("click", () => {
            questionEl.classList.toggle("active");
            if (questionEl.classList.contains("active")) {
                btnEl.innerHTML = `
                    <i class="fas fa-times"></i>
                `;
            }
            else {
                btnEl.innerHTML = `
                    <i class="fas fa-arrow-down"></i>
                `;
            }
        })
    })
}
