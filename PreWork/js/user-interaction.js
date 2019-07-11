"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name = prompt("What is your name?");
var pizza;

while (name == null || name == "") {
    name = prompt("I am sorry, I didn't catch that... What is your name?");
};

// TODO: Show an alert message that welcomes the user based on their input.
alert("Hello " + name + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizza = prompt("Do you like pizza?");
while (pizza == "yes") {
    alert("Wow! Me too!");
    break;
}