document.addEventListener("DOMContentLoaded", () => {
    let questionArray = [
        {
            question: "Who is the Prime Minister of India?",
            choiches: ["Mukesh Ambani", "Narendra Modi", "Ratan Tata", "Mukul Raj"],
            answer: "Narendra Modi"
        },
        {
            question: "Who is the President of India?",
            choiches: ["Mukesh Ambani", "Narendra Modi", "Droupadi Murmu", "Mukul Raj"],
            answer: "Droupadi Murmu"
        }
    ];
    let score = 0;
    let selectedAnswer = "";
    let currentQuestionIndex = 0; // Track the current question index
    let answerArray = [];

    let container = document.getElementById("container");
    let heading = document.getElementById("heading");
    let mainBox = document.getElementById("ul");
    let questionBox = document.getElementById("question");
    let startBtn = document.getElementById("button");
    let nextBtn = document.getElementById("next");

    startBtn.addEventListener("click", () => {
        renderQuestions();
    });

    mainBox.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            // Highlight the selected choice
            let choices = mainBox.querySelectorAll("li");
            choices.forEach(choice => choice.classList.remove("selected"));
            e.target.classList.add("selected");

            selectedAnswer = e.target.textContent;
        }
    });

    nextBtn.addEventListener("click", function () {
        if (selectedAnswer === "") {
            alert("Please select an answer before proceeding.");
            return;
        }

        // Save the selected answer and reset
        answerArray.push(selectedAnswer);
        selectedAnswer = "";

        // Move to the next question
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < questionArray.length) {
            renderQuestions();
        } else {
            // No more questions, display results
            nextBtn.classList.add("hidden");
            mainBox.classList.add("hidden");
            questionBox.textContent = `Quiz completed! Your answers: ${answerArray.join(", ")}`;
        }
    });

    function renderQuestions() {
        startBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        mainBox.classList.remove("hidden");

        // Clear previous choices
        mainBox.textContent = "";

        // Display the current question
        questionBox.textContent = questionArray[currentQuestionIndex].question;

        // Display the choices
        questionArray[currentQuestionIndex].choiches.forEach(choice => {
            let choiceBox = document.createElement("li");
            choiceBox.textContent = choice;
            choiceBox.classList.add("choice");
            mainBox.appendChild(choiceBox);
        });
    }
});
