"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemaider() {
  let remainder = 5 % 4;
  remainderElement.innerHTML = remainder;
}

function checkIfEven() {
  let remainder = 5 % 4;
  let isEven = remainder === 0;
  checkIfEvenElement.innerHTML = isEven;
}
function getTheFourthElement() {
  let fourthElement = lostNumbers[3];
  lostNumbersElement.innerHTML = fourthElement;
}

function render() {
  // Call the created functions

  returnTheRemaider();
  checkIfEven();
  getTheFourthElement();
}
submissionBtn.addEventListener("click", function () {
  render();
});
