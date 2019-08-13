console.log("for_loops.js");

// show multiplication table

function showMultiplicationTable(a) {
  let multiplicand = a;
  let multiplier = 1;
  let product;

  for (var i = 0; i < 11; i++) {
    product = multiplicand * multiplier;
    console.log(multiplicand + " x " + multiplier + " = " + product);
    multiplier++;
  }
  
}

// odd or even

function randomOddOrEven() {
  let num;
  let oddOrEven;
        
  for (var i = 0; i < 10; i++) {
    num = Math.floor((Math.random() * (200 - 20) + 20));
    oddOrEven = (num % 2 === 0) ? "even" : "odd";
    console.log(num + " is " + oddOrEven);
  }
}

// number triangle

var num = '';
var x;
var y;
for(x = 1; x < 10; x++) {
    for (y = 0; y < x; y++) num += x;
    console.log(num);
    num = ''
}

// minus5

var temp = 100;

for (var i = 0; i < 20; i++) {
    console.log(temp);
    temp = temp - 5;
}