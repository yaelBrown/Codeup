// multiply by 2

var count = 0;
var temp = 1;

while (count < 16) {
  temp = temp * 2;
  console.log(temp);
  count++;
}

// ice cream sale

var allCones = Math.floor(Math.random() * 50) + 50;

do {
  var conesPurchased = Math.floor(Math.random() * 5) + 1;
  console.log(conesPurchased + "cones sold...");
  allCones = allCones - conesPurchased;
} while (conesPurchased < allCones);

if (allCones < conesPurchased) {
  console.log("Cannot sell you " + conesPurchased + " cones, I only have " + allCones + " ...");
}

console.log("Yay! I sold them all!");