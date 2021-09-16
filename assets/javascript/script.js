var startButton = document.querySelector(".start-btn button");
var cardQuestions = document.querySelector(".card");
var nextButton = document.querySelector(".next-btn");
var optionList = document.querySelector(".option-list");
var timeLeft = document.querySelector(".seconds-left");
var resultBox = document.querySelector(".result");
var submitButton = resultBox.querySelector(".submit .submit-btn");


var highScore = 0;
var questionNumber = 0;
var questionPosition = 1;
var counter = 0;

function clickStart() {
    startButton.style.display = "none";
    cardQuestions.style.visibility = "visible";
    resultBox.style.visibility = "hidden";
}
 
startButton.addEventListener("click", function() {
    clickStart();
    showQuestions(0);
    startTimer(120)
    
});

nextButton.addEventListener("click", function() {
    if (questionNumber < questions.length - 1) {
        questionNumber++;
        questionPosition++;
        showQuestions(questionNumber);
    }
    else {
        console.log("Finished");
        results();
    }
        
});


function showQuestions(index) {
    var quest = document.querySelector(".question-text");
    
    var questionTag = "<span>"+ questions[index].question + "</span";
    var optionTag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                        + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                        + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    quest.innerHTML = questionTag;
    optionList.innerHTML = optionTag;

    var option = optionList.querySelectorAll(".option")
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

function optionSelected(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionNumber].answer;
    var allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add("correct")
        console.log("Correct");
        highScore += 10;
    }
    else {
        answer.classList.add("incorrect");
        console.log("Incorrect");
                
    }
    for (var i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled");
        
    }
    
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    
    function timer() {
        timeLeft.textContent = time;
        time--;
    }
    if (time < 0) {
        clearInterval(counter);
        timeLeft.textContent = "00";
    }
}

function results() {
    cardQuestions.style.visibility = "hidden";
    resultBox.style.visibility = "visible";
    var scoreText = resultBox.querySelector(".score");
    var scoreTag = "<span>Your Score was: " + highScore + "</span>";
    scoreText.innerHTML = scoreTag;
}

submitButton.addEventListener("click", function() {
    submitResults();
    window.location.href = "highscore.html";
    
});

function submitResults() {

}