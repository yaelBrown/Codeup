"use strict";
var random;

do {
  random = Math.floor((Math.random()*50)+1);
} while (random % 2 == 0);
   console.log("Your random odd number is: " + random);
   for (var i = 1; i <= 50; i ++) {
       if (i % 2 == 0) {
           continue;
       } else if (i == random) {
           console.log("Yikes! Skipping number: " + i);
           continue;
       }
       console.log("Here is an odd number: " + i);
   }