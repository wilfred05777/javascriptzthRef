
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!


var firstNumber = prompt("Enter your first Number");
var secondNumber = prompt("Enter your second Number");
var sum = Number(firstNumber) + Number(secondNumber);
var subtract = Number(firstNumber) - Number(secondNumber);

alert("The sum of the number: " + sum);
alert("The Subtraction of the number: " + subtract);

alert("The Addition of: ", sum); // undefined
alert("The Subtraction of:", subtract); // undifined

alert("The Addition of: ", Number(firstNumber)+Number(secondNumber)); 
alert("The Subtraction of:", Number(firstNumber)-Number(secondNumber));

alert(result);

alert(Number(firstNumber)+Number(secondNumber));