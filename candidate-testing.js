const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Question 1. \nWho was the first American woman in space?\n", "Question 2. \nTrue or false: 5 kilometer == 5000 meters?\n", "Question 3. \n(5 + 3)/2 * 10 = ?\n", "Question 4. \nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n", "Question 5. \nWhat is the minimum crew size for the ISS?\n"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name, astronaut?: ");
}

function askQuestion() {
   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question("\n" + questions[i] + ": ")
  ;
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log("\n\n- - Calculating your final test score - -\n\nTEST RESULTS")
  if (candidateAnswers[0] === correctAnswers[0]) {
    console.log("\n" + questions[0] + "You answered " + '"' + candidateAnswers[0] + '"\nCORRECT!')
  } else {
    console.log("\n" + questions[0] + "You answered " + '"' + candidateAnswers[0] + '"\nIncorrect...')
  }

  if (candidateAnswers[1] === correctAnswers[1]) {
    console.log("\n" + questions[1] + "You answered " + '"' + candidateAnswers[1] + '"\nCORRECT!')
  } else {
    console.log("\n" + questions[1] + "You answered " + '"' + candidateAnswers[1] + '"\nIncorrect...')
  }

    if (candidateAnswers[2] === correctAnswers[2]) {
    console.log("\n" + questions[2] + "You answered " + '"' + candidateAnswers[2] + '"\nCORRECT!')
  } else {
    console.log("\n" + questions[2] + "You answered " + '"' + candidateAnswers[2] + '"\nIncorrect...')
  }

    if (candidateAnswers[3] === correctAnswers[3]) {
    console.log("\n" + questions[3] + "You answered " + '"' + candidateAnswers[3] + '"\nCORRECT!')
  } else {
    console.log("\n" + questions[3] + "You answered " + '"' + candidateAnswers[3] + '"\nIncorrect...')
  }

    if (candidateAnswers[4] === correctAnswers[4]) {
    console.log("\n" + questions[1] + "You answered " + '"' + candidateAnswers[4] + '"\nCORRECT!')
  } else {
    console.log("\n" + questions[4] + "You answered " + '"' + candidateAnswers[4] + '"\nIncorrect...')
  }

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nHello " + candidateName + ".\n" + "Looking good today!\n\nPrepare for your test...\n\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};