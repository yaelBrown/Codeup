"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

// actions
function isEven(num) {
  let temp;
  let ans;
  
  temp = (num % 2 === 0);
  if (temp) {
    ans = "Number is even";
  } else {
    ans = "Number is odd";
  }
  return ans;
}

function addHundo(num) {
  return num + 100;
}

function isPositive(num) {
  let temp;
  if (num > 0) {
    temp = "Number is positive";
  } else if (num === 0) {
    temp = "Number is 0";
  } else if (num < 0) {
    temp = "Number is negative";
  } else {
    temp = "I don't understand what that number is."
  }
  return temp;
}

function numberWasEntered(num) {
  alert(isEven(num));
  alert(addHundo(num));
  alert(isPositive(num));
}

function ifNumberWasEntered(numEntered) {
  if (typeof numEntered == "number") {
    numberWasEntered(num);
  } else {
    alert("You did not enter a number snarf snarf!");
  }
}

// prompting
var isWantingToEnterNum = confirm("Would you like to enter a number?");

if (isWantingToEnterNum == true) {
  var num = Number(prompt("Enter a number"));  
  ifNumberWasEntered(num);
} else {
  alert("you did not enter a number!");
}

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var promptForColor = prompt("Please enter a color.");

function analyzeColor(str) {
  switch (str) {
    case "red":
      return "Strawberries are red";
    case "orange":
      return "Oranges are orange. Pun intended!";
    case "yellow":
      return "Lemons are yellow!";
    case "green":
      return "Grass is green!";
    case "blue":
      return "Sky is blue!";
    case "indigo":
      return "I dont know what is indigo";
    case "violet":
      return "Grapes are violet";
    default:
      return "I don't know anything that is that color.";
  }
}

console.log(analyzeColor(promptForColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

var luckyNum = Math.trunc(Math.random() * 6);

function calcDiscount(total, discount) {
  let temp;
  
  if (discount > 0.01) {
    temp = (total * discount) - total;
    temp = Math.abs(temp);
  } else {
    temp = total;
  }
  
  return temp;
}

function calculateTotal(luckyNum, total) {
  let discount;
  let ans;
  
  switch (luckyNum) {
    case 1:
      discount = .10;
      break;
    case 2:
      discount = .25;
      break;
    case 3: 
      discount = .35;
      break;
    case 4:
      discount = .5;
      break;
    case 5:
      discount = 1;
      break;
    default: 
      discount = 0;
      break;
  }
  
   ans = calcDiscount(total, discount);
   return ans;
}