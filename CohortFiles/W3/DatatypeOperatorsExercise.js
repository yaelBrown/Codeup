/*
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
*/

var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var moviesPrice = 3;
var moviesSum = ((littleMermaid + brotherBear + hercules) * moviesPrice);

console.log("Price of movies is $" + moviesSum + ".00");

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

var googHrs = 6;
var googRate = 400;
var amzHrs = 4;
var amzRate = 380;
var fbHrs = 10;
var fbRate = 350;
var weekPay = ((googHrs * googRate) + (amzHrs * amzRate) + (fbHrs + fbRate));

console.log("The weekly contractor pay will be $" + weekPay + ".00");

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
*/

var classFull = false;
var scheduleConflict = false;

var isEnrolled = (!classFull && !scheduleConflict); 

if (isEnrolled == true) {
  console.log("Student is enrolled.");
} else {
  console.log("Student is not enrolled.");
}

/* 
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/

var premiumMember = false;
var itemsPurchased = 2;
var offerExpired = false; 
var canApplyOffer = ((itemsPurchased >= 2 && offerExpired == false) && (offerExpired == false));

if (canApplyOffer == true) {
  console.log("Can apply offer");
} else {
  console.log("Cannot apply offer");
}

// ==========

var username = 'codeup ';
var password = 'notastrongpassword';

var passwordGtrThan5 = password.length > 5;
var passwordDoesNotContainUserNAme = username == password;
var usernameLessThan20 = username.length <= 20;

// trim whitespace
username.trim();
password.trim();