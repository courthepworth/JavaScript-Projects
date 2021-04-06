// About half an hour. 4-5-21

"use strict";

let hexArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let randomNumber;
let hexColor;

let numProducer = function () {
  return Math.trunc(Math.random() * hexArray.length);
};

let hexBackgroundChange = function () {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    randomNumber = numProducer();
    hexColor = hexColor + hexArray[randomNumber];
  }
  document.querySelector("body").style.backgroundColor = hexColor;
  document.querySelector(".hexColor").textContent = hexColor;
};

document.querySelector(".clickMe").addEventListener("click", function () {
  return hexBackgroundChange();
});
