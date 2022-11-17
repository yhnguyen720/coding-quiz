//set up array for quiz questions and answer choices
var questionBank = [
    
    {
        question: "What does HTML stand for?",
        choices: ["<HighText Machine Language>", "<HyperText and Links Markup Language>", "<HyperText Markup Language>", "<None of these>"],
        answer: "<HyperText Markup Language>"
    },

   {
        question: "What is the correct sequence of HTML tags for starting a webpage?",
        choices: ["<Head, Title, HTML, body>", "<HTML, Body, Title, Head>", "<HTML, Head, Title, Body>", "<HTML, Head, Title, Body>"],
        answer: "<HTML, Head, Title, Body>"
    },

    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        choices: ["<<pre>>", "<<a>>", "<<b>>", "<<br>>"],
        answer: "<<b>>"
    },

    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        choices: ["<<h3>>", "<<h1>>", "<<h5>>", "<<h6>>"],
        answer: "<<h1>>"
    },

    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        choices: ["<<br>>", "<<a>>", "<<pre>>", "<<b>>"],
        answer: "<<br>>"
    },

    {
        question: "How to create an unordered list in HTML?",
        choices: ["<<ul>>", "<<ol>>", "<<li>>", "<<i>>"],
        answer: "<<ul>>"
    },

    {
        question: "How to create an ordered list in HTML?",
        choices: ["<<ul>>", "<<ol>>", "<<li>>", "<<i>>"],
        answer: "<<ol>>"
    },

    {
        question: "Which of the following element is responsible for making the text italic in HTML?",
        choices: ["<<i>>", "<<italic>>", "<<it>>", "<<pre>>"],
        answer: "<<i>>"
    },  
];

//select DOM elements and create variables
var questionAskedEl = document.querySelector("#questionAsked");
var answerChoiceA = document.querySelector("#answerChoiceA");
var answerChoiceB = document.querySelector("#answerChoiceB");
var answerChoiceC = document.querySelector("#answerChoiceC");
var answerChoiceD = document.querySelector("#answerChoiceD");
var rightWrongEl = document.querySelector("#rightWrong");

var scoreFinalEl = document.querySelector("#scoreFinal");
var timerEl = document.querySelector("#timer");
var nameEl = document.querySelector("#name");
var highscoresListEl = document.querySelector("#highscoresList");

var startBtn = document.querySelector("#startButton");
var submitInitialsBtn = document.querySelector("#submitInitials");
var clearHighscoresBtn = document.querySelector("#clearHighscores");
var restartQuizBtn = document.querySelector("#restartQuiz");
var nextQuestionBtn = document.querySelector("#nextQuestion");

var startingPageEl = document.querySelector("#startingPage");
var quizPageEl = document.querySelector("#quizPage");
var resultPageEl = document.querySelector("#resultPage");
var highscoresPageEl = document.querySelector("#highscoresPage");

var questionIndex = 0;
var correctNum = 0;
var totalTime = 30;
var scoreResult;

//start quiz and change from starting page to quiz page
function startQuiz(){
   startingPageEl.setAttribute("class", "hide");
   quizPageEl.removeAttribute("class");
   displayQuestion();

    //set timer and rule for ending game when timer runs out
    var timer = setInterval(function(){
        totalTime--;
        timerEl.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(timer);
            gameOver();
        }},1000);

}   

//display questions and answer choices from question bank
function displayQuestion(){
    questionAskedEl.textContent = questionBank[questionIndex].question;
    answerChoiceA.textContent = questionBank[questionIndex].choices[0];
    answerChoiceB.textContent = questionBank[questionIndex].choices[1];
    answerChoiceC.textContent = questionBank[questionIndex].choices[2];
    answerChoiceD.textContent = questionBank[questionIndex].choices[3];
}

//check answer and display right or wrong
function checkAnswer(answer){
    if (questionBank[questionIndex].answer === questionBank[questionIndex].choices[answer]) {
        correctNum++;
        alert("Correct!");
    } else {
        totalTime -= 5;
        alert("Wrong");
    }

     //repeat for next questions until questions or time run out
     questionIndex++;
     if (questionIndex < questionBank.length){
        displayQuestion();
     } else {
         gameOver();
     } 
}

//display result page when time or questions run out
function gameOver(){
    quizPageEl.setAttribute("class", "hide");
    resultPageEl.removeAttribute("class");
    scoreFinalEl.textContent = correctNum;
}

function highScore() {
    if (nameEl.value === "") {
        alert("Please enter your initials");
        return;
    }
    resultPageEl.setAttribute("class", "hide");
    highscoresPageEl.removeAttribute("class");
}

//functions to check answer when you click on an answer button
function selectA() {checkAnswer(0);}
function selectB() {checkAnswer(1);}
function selectC() {checkAnswer(2);}
function selectD() {checkAnswer(3);}

//functions called on click
startBtn.addEventListener("click", startQuiz);
answerChoiceA.addEventListener("click", selectA);
answerChoiceB.addEventListener("click", selectB);
answerChoiceC.addEventListener("click", selectC);
answerChoiceD.addEventListener("click", selectD);
submitInitialsBtn.addEventListener("click", highScore);
