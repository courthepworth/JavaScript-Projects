// Took a couple of hours. Hard time preventing same color twice in a row. That is what took up most of the time. 4-5-21

"use strict";

let colorArray = [
  "#e6d27d",
  "#8887de",
  "#deb887",
  "#60b347",
  "#f37c0d",
  "#bd2fcf",
]; // Array of hex colors

let numberOfColors = colorArray.length;
let randomColor;
let randomNumber;
let previousColor = colorArray[0];

let numProducer = function () {
  return Math.trunc(Math.random() * numberOfColors);
}; // Produce random number that matches array length

// changing background color function
let mainFunc = function () {
  randomNumber = numProducer();
  randomColor = colorArray[randomNumber];

  // to prevent same color twice in a row
  if (randomColor !== previousColor) {
    document.querySelector("body").style.backgroundColor = randomColor;
    previousColor = randomColor;
  } else {
    mainFunc();
  }
};

document.querySelector(".clickMe").addEventListener("click", function () {
  return mainFunc();
});
