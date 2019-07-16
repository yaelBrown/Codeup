"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
//var color = "red";

var colorTypeof = typeof color;


switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
    case (color = "red"):
        console.log("Apples are red " + colorTypeof);
        break;
    case (color = "orange"):
        console.log("Oranges are orange " + colorTypeof);
        break;
    case (color = "yellow"):
        console.log("Lemons are yellow " + colorTypeof);
        break;
    case (color = "green"):
        console.log("Lettuce is green " + colorTypeof);
        break;
    case (color = "blue"):
        console.log("Water is suppose to be blue " + colorTypeof);
        break;
    default:
        console.log("I do not know anything by that color.");
        break;
}
