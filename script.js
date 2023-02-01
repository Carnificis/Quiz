var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var question = document.querySelector(".quiz_header")
var options = document.querySelectorAll(".option")
quizContainer.style.display ="none"
resultsContainer.style.display="none"
var currentQ = 0




	function showQuestions(){
		// code will go here
		question.innerText = myQuestions[currentQ].question
		for(let i =0;i<4;i++){
			options[i].textContent = myQuestions[currentQ].answers[i]
		}
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions


var myQuestions = [
	{
		question: "Which one is a coding language?",
		answers: [
			'JavaScript',
			 'JavaCoffee',
			 'JavaSchool',
			 'JavaPuzzle'
		],
		correctAnswer: '0'
	},
	{
		question: "What is NOT a coding language?",
		answers: {
			a: 'HTML',
			b: 'C++',
			c: 'PDQ'
		},
		correctAnswer: 'c'
	},
		{question: "What does DRY stand for in coding?",
		answers: {
			a: 'Develop, Rejoice, Yay',
			b: 'Do not Repeat Yourself',
			c: 'Do Required Yoga'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is line height?",
		answers: {
			a: 'Height between lines',
			b: 'Height of line text',
			c: 'Height of header'
		},
		correctAnswer: 'a'


	},
	{question: "What is a sudo class?",
	answers: {
		a: 'Judo class',
		b: 'Fake class',
		c: 'Special class'
	},
	correctAnswer: 'b'
},
{
	question: "What does <p> mean?",
	answers: {
		a: 'Paragraph element',
		b: 'Page element',
		c: 'Parentheses element'
	},
	correctAnswer: 'a'
}
];
// function showQuestions(questions, quizContainer){
  





// 	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');

//     showQuestions(questions, quizContainer);

//     function showResults(questions, quizContainer, resultsContainer){
	
//         // gather answer containers from our quiz
//         var answerContainers = quizContainer.querySelectorAll('.answers');
        
//         // keep track of user's answers
//         var userAnswer = '';
//         var numCorrect = 0;
        
//         // for each question...
//         for(var i=0; i<questions.length; i++){
    
//             // find selected answer
//             userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
//             // if answer is correct
//             if(userAnswer===questions[i].correctAnswer){
//                 // add to the number of correct answers
//                 numCorrect++;
                
//                 // color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else{
//                 // color the answers red
//                 answerContainers[i].style.color = 'red';
//             }
//         }
    
//         // show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//     }
//}
submitButton.onclick = function(){
	quizContainer.style.display ="block"
	submitButton.style.display ="none"
	showQuestions()
}


