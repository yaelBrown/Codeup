/*
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
*/

var littleMermaid = 3;    // littleMermaidDaysRented
var brotherBear = 5;    // brotherBearDaysRented
var hercules = 1;   // herculesDayRented
var moviesPrice = 3;    // pricePerDayDollars
var moviesSum = ((littleMermaid + brotherBear + hercules) * moviesPrice);

console.log("Price of movies is $" + moviesSum + ".00");
console.log("\n");


// semantics. littleMermaid assumes its a object. Rename to littleMermaidDaysRented.

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

var googHrs = 6;
var googRateDollars = 400;
var amzHrs = 4;
var amzRateDollars = 380;
var fbHrs = 10;
var fbRateDollars = 350;
var weekPay = ((googHrs * googRateDollars) + (amzHrs * amzRateDollars) + (fbHrs + fbRateDollars));

console.log("The weekly contractor pay will be $" + weekPay + ".00");
console.log("\n");


/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
*/

var classFull = false;
var scheduleConflict = false;

var isEnrolled = (!classFull && !scheduleConflict); 

if (isEnrolled === true) {
  console.log("Student is enrolled.");
} else {
  console.log("Student is not enrolled.");
}

console.log("\n");

/* 
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/

var premiumMember = false;
var itemsPurchased = 2;
var offerExpired = false; 
var canApplyOffer = ((itemsPurchased >= 2 && offerExpired == false) && (offerExpired == false));

if (canApplyOffer === true) {
  console.log("Can apply offer");
} else {
  console.log("Cannot apply offer");
}


// ==========
console.log("\n");

var username = '    codeup     ';
var password = '             notastrongpassword     ';

console.log("usr is: '" + username + "'");
console.log("pwd is: '" + password + "'");

const passwordGtrThan5 = password.length >= 5;
var passwordContainsUsername = username === password;
const usernameLessThan20 = username.length <= 20;

// trim whitespace
username = username.trim();
password = password.trim();

console.log("usr is: '" + username + "'");
console.log("pwd is: '" + password + "'");
console.log("password greater than 5 is: " + passwordGtrThan5);
console.log("password contains username: " + passwordContainsUsername);
console.log("username less than 20: " + usernameLessThan20);