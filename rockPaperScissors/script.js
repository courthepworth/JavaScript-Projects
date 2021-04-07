// 4-6-21 About an hour to an hour and a half

"use strict";

let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computersPick;
let usersPick;
let textMessage;
let score = [0, 0];

// Event listeners for the buttons
document.querySelector(".rockButton").addEventListener("click", function () {
  usersPick = rockPaperScissors[0];
  randomPick();
  textMessage = `You picked ${usersPick}. The computer picked ${computersPick}. ${winner()}!`;
  document.querySelector(".userMessage").textContent = textMessage;
  document.querySelector(
    ".score"
  ).textContent = `Your score: ${score[0]}. Computer score: ${score[1]}.`;
});

document.querySelector(".paperButton").addEventListener("click", function () {
  usersPick = rockPaperScissors[1];
  randomPick();
  textMessage = `You picked ${usersPick}. The computer picked ${computersPick}. ${winner()}!`;
  document.querySelector(".userMessage").textContent = textMessage;
  document.querySelector(
    ".score"
  ).textContent = `Your score: ${score[0]}. Computer score: ${score[1]}.`;
});

document
  .querySelector(".scissorsButton")
  .addEventListener("click", function () {
    usersPick = rockPaperScissors[2];
    randomPick();
    textMessage = `You picked ${usersPick}. The computer picked ${computersPick}. ${winner()}!`;
    document.querySelector(".userMessage").textContent = textMessage;
    document.querySelector(
      ".score"
    ).textContent = `Your score: ${score[0]}. Computer score: ${score[1]}.`;
  });

// Random number 1, 2, or 3
let randomNumber = function () {
  return Math.trunc(Math.random() * 3);
};

let randomPick = function () {
  computersPick = rockPaperScissors[randomNumber()];
};

// // Determine what wins function
// let winner = function () {
//   if (usersPick === computersPick) {
//     return "It's a tie";
//   }

//   if (
//     // begin rock scenarios
//     usersPick === rockPaperScissors[0] &&
//     computersPick === rockPaperScissors[2]
//   ) {
//     score[0]++;
//     return "You win";
//   } else {
//     score[1]++;
//     return "You lose";
//   } // End rock

//   if (
//     // begin paper scenarios
//     usersPick === rockPaperScissors[1] &&
//     computersPick === rockPaperScissors[0]
//   ) {
//     score[0]++;
//     return "You win";
//   } else {
//     score[1]++;
//     return "You lose";
//   } // End paper

//   if (
//     // begin scissors scenario
//     usersPick === rockPaperScissors[2] &&
//     computersPick === rockPaperScissors[1]
//   ) {
//     score[0]++;
//     return "You win";
//   } else {
//     score[1]++;
//     return "You lose";
//   } // End scissors
// };

let winner = function () {
  if (usersPick === computersPick) {
    return "It's a tie";
  } else if (
    // begin rock scenarios
    usersPick === rockPaperScissors[0] &&
    computersPick !== rockPaperScissors[1]
  ) {
    score[0]++;
    return "You win";
  } else if (
    usersPick === rockPaperScissors[0] &&
    computersPick === rockPaperScissors[1]
  ) {
    score[1]++;
    return "You lose";
  } // End rock
  else if (
    // begin paper scenarios
    usersPick === rockPaperScissors[1] &&
    computersPick === rockPaperScissors[0]
  ) {
    score[0]++;
    return "You win";
  } else if (
    usersPick === rockPaperScissors[1] &&
    computersPick === rockPaperScissors[2]
  ) {
    score[1]++;
    return "You lose";
  } // End paper
  else if (
    // begin scissors scenario
    usersPick === rockPaperScissors[2] &&
    computersPick !== rockPaperScissors[0]
  ) {
    score[0]++;
    return "You win";
  } else if (
    usersPick === rockPaperScissors[2] &&
    computersPick === rockPaperScissors[0]
  ) {
    score[1]++;
    return "You lose";
  } // End scissors
};
