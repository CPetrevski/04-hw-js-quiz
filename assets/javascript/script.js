var startButton = document.querySelector(".start-btn button");
var cardQuestions = document.querySelector(".card");
var nextButton = document.querySelector(".next-btn");
var option_list = document.querySelector(".option_list");


var highScore = 0;
var questionNumber = 0;
var questionPosition = 1;

function clickStart() {
    startButton.style.display = "none";
    cardQuestions.style.visibility = "visible";
}
 
startButton.addEventListener("click", function() {
    clickStart();
    showQuestions(0);
    
});

nextButton.addEventListener("click", function() {
    if (questionNumber < questions.length - 1) {
        questionNumber++;
        questionPosition++;
        showQuestions(questionNumber);
    }
    else {
        console.log("Finished");
    }
        
});


function showQuestions(index) {
    var quest = document.querySelector(".question-text");
    var optionList = document.querySelector(".option-list");
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
}