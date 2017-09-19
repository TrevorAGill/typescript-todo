var firstNumber: number = parseInt(prompt('Please enter a number.'));
var secondNumber: number = parseInt(prompt('Enter another number.'));

var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert("The sum of your two numbers is: " + sum);
}

findSum(firstNumber,secondNumber);
