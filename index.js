var readlineSync = require('readline-sync');
var chalk = require('chalk');
// console.log(chalk.red("checking chalk"));

var userName = readlineSync.question(chalk.blue.bold("What's Your Name? "));
console.log(chalk.magenta.bold("Welcome", userName, "to DO YOU KNOW yash.. \n"));

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question)

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("You Are Right🤩 "))
    score += 1;
  }
  else {
    console.log(chalk.red.bold("You Are Wrong! "));
  }
  console.log(chalk.yellow.bold("Current Score : ", score));
  console.log("_______________________\n")

}



var qAn = [
  {
    question: "How Old Am I? ",
    answer: "21",
  },
  {
    question: "Where Do I Live? ",
    answer: "parner",
  },
  {
    question: "Which is My Favourive Bike? ",
    answer: "r15",
  },
  {
    question: "Which Company's Phone Am I Using? ",
    answer: "oppo"
  },

  {
    question: "Which Company's laptop Am I Using? ",
    answer: "hp"
  },
  {
    question: "Which is my dream company? ",
    answer: "tcs"
  },
  {
    question: "Which is my favoutite car? ",
    answer: "harrier"
  }, {
    question: " What Am I pursuing? ",
    answer: "bca"
  }
]

for (var i = 0; i < qAn.length; i++) {
  currQue = qAn[i];
  play(currQue.question, currQue.answer)
}

if (score > 0) {
  console.log(chalk.cyan.bold("Congratulation You Scored💥🤩 : " + score + "/8"));
} else {
  console.log(chalk.red.bold("You Need To Know Me More Your Score Is : " + score + "/8"));
}