var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var question = document.querySelector(".quiz_header");
var options = document.querySelectorAll(".option");
var timer = document.querySelector("#timer");
var correct = document.querySelector("#Correct");
var saveScore = document.querySelector("#save-user-score")
quizContainer.style.display = "none";
resultsContainer.style.display = "none";
var input = document.querySelector("#input");
var timerObj;
var timerCount = 60;
var score = 0;
var currentQ = 0;
for (let i = 0; i < 4; i++) {
  options[i].addEventListener("click", evaluateResults);
}

function showQuestions() {
  question.innerText = myQuestions[currentQ].question;
  for (let i = 0; i < 4; i++) {
    options[i].textContent = myQuestions[currentQ].answers[i];
  }
}

function evaluateResults(event) {
  console.log(event.target.textContent);
  if (event.target.textContent == myQuestions[currentQ].correctAnswer) {
    score += 5;
    correct.textContent = "Correct";
  } else {
    timerCount -= 5;
    correct.textContent = "Wrong";
  }
  if (currentQ < myQuestions.length - 1) {
    currentQ++;
    showQuestions();
  } else {
    showResults();
  }
}

// show the questions

var myQuestions = [
  {
    question: "Which one is a coding language?",
    answers: ["JavaScript", "JavaCoffee", "JavaSchool", "JavaPuzzle"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is NOT a coding language?",
    answers: ["HTML", "C++", "PDQ", "Python"],

    correctAnswer: "PDQ",
  },
  {
    question: "What does DRY stand for in coding?",
    answers: [
      "Develop, Rejoice, Yay",
      "Do not Repeat Yourself",
      "Do Required Yoga",
      "Do Reach Yup",
    ],

    correctAnswer: "Do not Repeat Yourself",
  },
  {
    question: "What is line height?",
    answers: [
      "Height between lines",
      "Height of line text",
      "Height of header",
      "Height of body",
    ],
    correctAnswer: "Height between lines",
  },
  {
    question: "What is a sudo class?",
    answers: ["Judo class", "Fake class", "Special class", "Art class"],
    correctAnswer: "Fake class",
  },
  {
    question: "What does <p> mean?",
    answers: [
      "Paragraph element",
      "Page element",
      "Parentheses element",
      "Parent element",
    ],
    correctAnswer: "Paragraph element",
  },
];

submitButton.onclick = function (event) {
  event.preventDefault();
  quizContainer.style.display = "block";
  submitButton.style.display = "none";
  timerObj = setInterval(function () {
    timer.textContent = timerCount;
    if (timerCount > 1) {
      timerCount--;
    } else {
      showResults();
    }
  }, 1000);
  showQuestions();
};

function showResults() {
quizContainer.style.display = "none";
clearInterval(timerObj);
resultsContainer.style.display = "block";
//   console.log(timer);
  var user = input.value;

//   console.log(user);
//   score.push({
 //    initials: user,
  //   score: timer,
  // });
}
saveScore.addEventListener("click", function(){
console.log(input.value)
})

localStorage.setItem("score",saveScore)
console.localStorage
//function showResults()
// console.log(timer)
// var user= input.value
// console.log(user)
// highScore.push({
//     initials:user,
//     score:timer
//})
