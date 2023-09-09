var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("questions");
var answerButtonsElement = document.getElementById("answer-buttons");
var correctText = document.getElementById("text-correct");
var counting = document.getElementById("timer");


let shuffledQuestions, currentQuestionsIndex

//Add Countdown
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME ${min} : ${sec}`;
        }
    }, 1000)
};
//start button event listeners
startButton.addEventListener("click", startGame)
startButton.addEventListener("click", startCountdown)
nextButton.addEventListener("click" , () => {
    currentQuestionsIndex++
    setNextQuestion()
})
//startgame function that will start off the game
function startGame() {
startButton.classList.add("hide");
shuffledQuestions = question.sort(() => Math.random() - .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove("hide")
setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach( answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
        })
}
//selecting the answers that were provided and hiding/adding classes when needed. 
function selectAnswer(i) {
    var selectedButton = i.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Show HighScores"
        startButton.classList.remove("hide")
    }
}
//adding correct and incorrect classes when a button is selected. 
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {  // Else remove time from the timer that you are going to create
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
//questions for the quiz. 
var question = [
    {
        question: "Javascript is an _______ language?",
        answers: [
            {text: "Object Oriented", correct: true }, 
            {text: "Object Based", correct: false},
            {text: "Procedural", correct: false}, 
            {text: "None of the Above", correct: false}  
        ]
    }, 
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            {text: "var", correct: false }, 
            {text: "let", correct: false},
            {text: "Both A and B", correct: true}, 
            {text: "None of the Above", correct: false}  
        ]
    },     
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            {text: "document.write", correct: false }, 
            {text: "console.log", correct: false},
            {text: "window.alert", correct: false}, 
            {text: "All of the Above", correct: true}  
        ]
    },     
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
            {text: "getElementbyId()", correct: false }, 
            {text: "getElementByClassName()", correct: false},
            {text: "Both A and B", correct: true}, 
            {text: "None of the Above", correct: false}  
        ]
    }   
]
