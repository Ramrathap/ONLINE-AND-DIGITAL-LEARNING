function startQuiz() {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("lesson").style.display = "none";
}

function checkAnswers() {
    var score = 0;
    var totalQuestions = 2;

    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "A") {
        score++;
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "A") {
        score++;
    }

    // Show results
    var resultMessage = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById("quizResult").innerText = resultMessage;
}