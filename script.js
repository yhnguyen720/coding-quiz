//set up array for quiz questions and answer choices
var questionBank = [
    {
        prompt: "What does HTML stand for?",
        options: ["<HighText Machine Language>", "<HyperText and Links Markup Language>", "<HyperText Markup Language>", "<None of these>"],
        answer: "<HyperText Markup Language>"
    },

    {
        prompt: "What is the correct sequence of HTML tags for starting a webpage?",
        options: ["<Head, Title, HTML, body>", "<HTML, Body, Title, Head>", "<HTML, Head, Title, Body>", "<HTML, Head, Title, Body>"],
        answer: "<HTML, Head, Title, Body>"
    },

    {
        prompt: "Which of the following element is responsible for making the text bold in HTML?",
        options: ["<<pre>>", "<<a>>", "<<b>>", "<<br>>"],
        answer: "<<b>>"
    },

    {
        prompt: "Which of the following tag is used for inserting the largest heading in HTML?",
        options: ["<<h3>>", "<<h1>>", "<<h5>>", "<<h6>>"],
        answer: "<<h1>>"
    },

    {
        prompt: "Which of the following tag is used to insert a line-break in HTML?",
        options: ["<<br>>", "<<a>>", "<<pre>>", "<<b>>"],
        answer: "<<br>>"
    },

    {
        prompt: "How to create an unordered list in HTML?",
        options: ["<<ul>>", "<<ol>>", "<<li>>", "<<i>>"],
        answer: "<<ul>>"
    },

    {
        prompt: "How to create an ordered list in HTML?",
        options: ["<<ul>>", "<<ol>>", "<<li>>", "<<i>>"],
        answer: "<<ol>>"
    },

    {
        prompt: "Which of the following element is responsible for making the text italic in HTML?",
        options: ["<<i>>", "<<italic>>", "<<it>>", "<<pre>>"],
        answer: "<<i>>"
    },  
];

//select DOM elements
var timerEl = document.querySelector("#timer");
var questionAskedEl = document.querySelector("#questionAsked");
var answerChoicesEl = document.querySelector("#answerChoices");
var rightWrongEl = document.querySelector("#rightWrong");
var scoreFinalEl = document.querySelector("#scoreFinal");
var nameEl = document.querySelector("#name");
var displayHighscoresEl = document.querySelector("#displayHighscores");
var highscoresListEl = document.querySelector("#highscoresList");
var startBtn = document.querySelector("#startButton");
var submitInitialsBtn = document.querySelector("#submitInitials");
var goBackBtn = document.querySelector("#goBack");
var clearHighscoresBtn = document.querySelector("#clearHighscores");
var restartQuizBtn = document.querySelector("#restartQuiz");
var startingPageEl = document.querySelector("#startingPage");
var quizPageEl = document.querySelector("#quizPage");
var resultPageEl = document.querySelector("#resultPage");
var highscoresPageEl = document.querySelector("#highscoresPage");

//start quiz and change from starting page to quiz page
function startQuiz(){
   startingPageEl.setAttribute("class", "hide");
   quizPageEl.removeAttribute("class");
}

//display questions and answer choices from question bank
function displayQuestion(){
   

}

startBtn.addEventListener("click", startQuiz);
