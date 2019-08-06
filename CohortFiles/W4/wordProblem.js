"use strict";

/* 
  HOW would you solve this word problem?
  Justin eats 20 apples a year. How many apples does Justin eat on average per month? There are 12 months in a year.
*/

// Facts
var applesAtePerYear = 20;
var months = 12; 

// How many are consumed per month? (Average)
var applesConsumedPerMonth = applesAtePerYear / months;

// Output answer in complete sentence.
console.log("Justin eats " + applesConsumedPerMonth + " apples per month." );

// round answer.
var consumedRoundedUp = Math.ceil(applesConsumedPerMonth); // using Math.ceil() rounds float to largest whole number.

// Output rounded answer
console.log("In other words, Justin eats " + consumedRoundedUp + " apples per month.");