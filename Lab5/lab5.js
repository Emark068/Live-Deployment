let age = 20;
let major = "Computer Science";

console.log("I am " + age + " years old and my major is " + major + ".");

// 1. Define the function with two parameters (num1 and num2)
function calculateSum(num1, num2) {
    let sum = num1 + num2;
    
    // This will pop up a window in your browser
    console.log("The sum of the two numbers is: " + sum);
}

// 2. Call the function to see it in action
calculateSum(15, 25);


function calculateSum(num1, num2) {
    let sum = num1 + num2;
    
    // Node.js understands console.log, but not alert
    console.log("The sum of the two numbers is: " + sum);
}

let number = number(userInput)

if (number % 2 ===0){
    console.log(number + "is an even number");
    alert(number + "is Even!");
} else{
    console.log(number + "is an odd number.");
    alert(number + " is odd!");
}
    