const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById("answer-buttons")
var correctText = document.getElementById("text-correct")

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click" , () => {
    currentQuestionsIndex++
    setNextQuestion()
})

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
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
        })
}

function selectAnswer(i) {
    const selectedButton = i.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide");
}

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

const question = [
    {
        question: "Javascript is an _______ language?",
        answers: [
            {text: "Object Oriented", correct: true }, 
            {text: "Object Based", correct: false},
            {text: "Procedural", correct: false}, 
            {text: "None of the Above", correct: false}  
        ]
    }
]