function startQuiz() {
    var quizSelect = document.getElementById("quiz-select");
    var selectedQuiz = quizSelect.value;

    if (selectedQuiz === "comptia") {
        // Redirect to the CompTIA A+ Quiz page
        window.location.href = "comptia_quiz.html";
    } else if (selectedQuiz === "microsoft") {
        // Redirect to the Microsoft Security Quiz page
        window.location.href = "microsoft_quiz.html";
    }
}
