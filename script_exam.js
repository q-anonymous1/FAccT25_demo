// Call the countdown function
window.onload = function() {
    countdown_question_instructions();
};

// countdown function for the question boxes, which forces users to look at the review first
function countdown_question_instructions() {
    let count = 20; // Set the countdown time in seconds
    var countdownTimer = setInterval(function() {
        count--;
        document.getElementById("countdown").innerHTML = "Please read the review carefully!<br>Questions will be shown here in " + count + " seconds...";
        if (count <= 0) {
            clearInterval(countdownTimer);
            // remove the instructions div and show questions for users to answer
            document.getElementById("div_questions_instuctions").style.display = "none";
            document.getElementById("div_questions").style.display = "block";
        }
    }, 1000);
}