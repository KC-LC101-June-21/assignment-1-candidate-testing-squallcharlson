const input = require('readline-sync');

let candidateName = "";
let questions = ["Question 1. \nWho was the first American woman in space?\n", "Question 2. \nTrue or false: 5 kilometer == 5000 meters?\n", "Question 3. \n(5 + 3)/2 * 10 = ?\n", "Question 4. \nGiven the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n", "Question 5. \nWhat is the minimum crew size for the ISS?\n"];
let correctAnswers = ["sally ride", "true", "40", "trajectory", "3"];
let candidateAnswers = [];
let yesNo = "";

function askForName() {
  candidateName = input.question(`
░░░░░██╗░█████╗░██╗░░██╗░█████╗░
░░░░░██║██╔══██╗╚██╗██╔╝██╔══██╗
░░░░░██║███████║░╚███╔╝░███████║
██╗░░██║██╔══██║░██╔██╗░██╔══██║
╚█████╔╝██║░░██║██╔╝╚██╗██║░░██║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝
Japan Aerospace Exploration Agency 
Official Candidate Quiz 


What is your name, astronaut?: `);
}

function yesOrNo() {
  yesNo = input.question(`( Y / N ): `).toLowerCase();
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question(`${questions[i]}: `).toLowerCase();
   console.clear();
  }
}

function gradeQuiz(candidateAnswersFix) {

  console.log(`░░░░░██╗░█████╗░██╗░░██╗░█████╗░
░░░░░██║██╔══██╗╚██╗██╔╝██╔══██╗
░░░░░██║███████║░╚███╔╝░███████║
██╗░░██║██╔══██║░██╔██╗░██╔══██║
╚█████╔╝██║░░██║██╔╝╚██╗██║░░██║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝
Japan Aerospace Exploration Agency 
Official Candidate Quiz 

Candidate ${candidateName}, your answers have been logged and graded:\n\n`)

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    console.log(`> ${questions[i]}You answered ${candidateAnswers[i]}`);
      if (candidateAnswers[i] === correctAnswers[i]) {
    console.log("CORRECT!\n\n")
    score++
     } else {
    console.log(`Incorrect... The correct answer was: ${correctAnswers[i]}\n\n`);
     }
  }
  let grade;

  console.log(`\n>>> FINAL RESULTS <<<\nYou scored ${score/questions.length*100}% (${score} of ${questions.length} responses correct)`);

  if (score >= 4) {
    console.log(`>>> Satus: PASSED <<<`);
  } else {
    console.log(`>>> Satus: FAILED <<<`)
  }

  return grade;
}


function runProgram() {
  askForName();
  console.clear();
  console.log(`░░░░░██╗░█████╗░██╗░░██╗░█████╗░
░░░░░██║██╔══██╗╚██╗██╔╝██╔══██╗
░░░░░██║███████║░╚███╔╝░███████║
██╗░░██║██╔══██║░██╔██╗░██╔══██║
╚█████╔╝██║░░██║██╔╝╚██╗██║░░██║
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝
Japan Aerospace Exploration Agency 
Official Candidate Quiz 

Hello ${candidateName}
Looking good today!
  
>>> Are you ready for your test? <<<\n\n`);
  yesOrNo();
    if (yesNo === "n" || yesNo === "no") {
      console.clear();
      console.log(`Being an astronaut isn't for everyone.\n\nWe look forward to having you try again in the future ${candidateName}!\n\n───█───▄▀█▀▀█▀▄▄───▐█──────▄▀█▀▀█▀▄▄
──█───▀─▐▌──▐▌─▀▀──▐█─────▀─▐▌──▐▌─█▀
─▐▌──────▀▄▄▀──────▐█▄▄──────▀▄▄▀──▐▌
─█────────────────────▀█────────────█
▐█─────────────────────█▌───────────█
▐█─────────────────────█▌───────────█
─█───────────────█▄───▄█────────────█
─▐▌───────────────▀███▀────────────▐▌
──█──────────▀▄───────────▄▀───────█
───█───────────▀▄▄▄▄▄▄▄▄▄▀────────█
`);
    } else {
      console.clear();
      askQuestion();
     console.clear();
     gradeQuiz(this.candidateAnswers);
    }

}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};