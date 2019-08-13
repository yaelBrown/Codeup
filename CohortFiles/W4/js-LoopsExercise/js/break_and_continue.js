var randomNumber = prompt("Pick a number 1 and 50");
num = parseInt(randomNumber);


for (var i = 0; i < 50; i++) {
  if (i === num) {
    console.log("Yikes! Skipping number: " + num);
  }
  
  if (i % 2 === 1) {
    console.log("Here is an odd number:" + i)
  } else {
    continue;
  }
  
}
