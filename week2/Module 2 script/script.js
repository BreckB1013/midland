let number = 10;
if (number > 0) {
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}
let age = 15; 
if (age >= 16) {
    console.log("Can drive");
} else {
    console.log("Cannot drive");
}
let grade = 7; 
if (grade >= 1 && grade <= 5) {
    console.log("Elementary");
} else if (grade >= 6 && grade <= 8) {
    console.log("Middle");
} else if (grade >= 9 && grade <= 12) {
    console.log("High");
} else {
    console.log("Invalid grade");
}
let purchaseAmount = 60;
if (purchaseAmount > 50) {
    let discount = purchaseAmount * 0.1;
    console.log(`Discount is $${discount.toFixed(2)}`);
} else {
    console.log("No discount available");}