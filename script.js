document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
        let answer = this.nextElementSibling; // Get the answer div

        // Close all other answers before opening the clicked one
        document.querySelectorAll(".faq-answer").forEach((ans) => {
            if (ans !== answer) {
                ans.style.display = "none";
                ans.previousElementSibling.querySelector(".plus").textContent = "+";
            }
        });

        // Toggle answer visibility
        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.querySelector(".plus").textContent = "+";
        } else {
            answer.style.display = "block";
            this.querySelector(".plus").textContent = "−"; // Change + to − when opened
        }
    });
});


