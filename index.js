var readlineSync = require('readline-sync')
var userName = readlineSync.question("What's Your Name? ");
console.log("Welcome", userName, "to DO YOU KNOW yash.. \n")

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question)

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log("You Are Right ")
    score += 1;
  }
  else {
    console.log("You Are Wrong ")
  }
  console.log("Current Score : ", score)
  console.log("_______________________")

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
  }
]

for (var i = 0; i < qAn.length; i++) {
  currQue = qAn[i];
  play(currQue.question, currQue.answer)
}
// play(qAn[1].question, qAn[1].answer)

if (score > 0) {
  console.log("Congratulation You Scored💥🤩 : " + score + "/5")
} else {
  console.log("You Need To Know Me More Your Score Is : " + score + "/5")
}