// manage the highlight effects for phenomena
document.addEventListener('DOMContentLoaded', function() {

    // Common function to add or remove highlight effects
    function toggleHighlight(keywordId, addEffect) {
        const keyword = document.getElementById(keywordId);
        if (!keyword) return;

        // Toggle classes for reverse color effect
        if (addEffect) {
            if (keyword.classList.contains("text-primary")){
                keyword.classList.remove('text-primary');
                keyword.classList.add('bg-primary', 'text-white');
            } else if (keyword.classList.contains("text-danger")){
                keyword.classList.remove('text-danger');
                keyword.classList.add('bg-danger', 'text-white');
            }
        } else {
            if (keyword.classList.contains("bg-primary")){
                keyword.classList.add('text-primary');
                keyword.classList.remove('bg-primary', 'text-white');
            } else if (keyword.classList.contains("bg-danger")){
                keyword.classList.add('text-danger');
                keyword.classList.remove('bg-danger', 'text-white');
            }
        }
    }

    // Handle the mouse over effects for keywords
    document.querySelectorAll('.popup-trigger').forEach(function(highlight) {

        highlight.addEventListener('mouseover', function() {
            const phenomenaId = highlight.getAttribute('exp-phenomena');
            const phenomena = document.getElementById(phenomenaId);
            phenomena.classList.add('highlighted');
            toggleHighlight(highlight.id, true); // Apply reverse color effect
        });

        highlight.addEventListener('mouseout', function() {
            const phenomenaId = highlight.getAttribute('exp-phenomena');
            const phenomena = document.getElementById(phenomenaId);
            phenomena.classList.remove('highlighted');
            toggleHighlight(highlight.id, false); // Remove reverse color effect
        });
    });

    // Handle the mouse over effects for phenomena boxes
    document.querySelectorAll('.phenomena').forEach(function(phenomenon) {

        phenomenon.addEventListener('mouseover', function() {
            phenomenon.classList.add('highlighted'); // Enlarge phenomena box
            const keywordIds = phenomenon.getAttribute('data-keyword').split(' ');
            keywordIds.forEach(function(keywordId) {
                toggleHighlight(keywordId, true); // Apply reverse color effect
            });
        });

        phenomenon.addEventListener('mouseout', function() {
            phenomenon.classList.remove('highlighted'); // Remove enlargement
            const keywordIds = phenomenon.getAttribute('data-keyword').split(' ');
            keywordIds.forEach(function(keywordId) {
                toggleHighlight(keywordId, false); // Remove reverse color effect
            });
        });
    });
});

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

// obtain the selected value on the range slider and write this to the hidden field
var q1_judgment_range_slider = document.getElementById('q1_judgment');
var q1_judgment_range_slider_value = parseInt(q1_judgment_range_slider.value);
q1_judgment_range_slider.addEventListener("change", function() {
    q1_judgment_range_slider_value = parseInt(q1_judgment_range_slider.value);
    document.getElementById("q1_judgment_range_slider_value").value = q1_judgment_range_slider_value;
});
