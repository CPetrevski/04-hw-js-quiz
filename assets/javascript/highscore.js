var scoreBox = document.querySelector(".user");
var userScore = document.querySelector(".user_score");



function showHighScore() {
    userScore.textContent = localStorage.getItem("HighScore");
}