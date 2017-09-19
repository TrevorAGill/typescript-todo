var firstNumber = parseInt(prompt('Please enter a number.'));
var secondNumber = parseInt(prompt('Enter another number.'));
var findSum = function (firstValue, secondValue) {
    var sum = firstValue + secondValue;
    alert("The sum of your two numbers is: " + sum);
};
findSum(firstNumber, secondNumber);
