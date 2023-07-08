var questionOne = {
    question: "Commonly used data types DO NOT include:",
    answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2
}

function showQuestion() {
    console.log("Showing Questions")
}

var button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    showQuestion();
    console.log("click");

});











// var questionTwo = {
//     question: "Commonly used data types DO NOT include:",
//     answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     correctAnswer: 2
// }

// var questionsThree = {
//     question: "Commonly used data types DO NOT include:",
//     answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     correctAnswer: 2
// }

// var questionFour = {
//     question: "Commonly used data types DO NOT include:",
//     answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     correctAnswer: 2
// }