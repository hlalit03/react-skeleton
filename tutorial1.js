var readline = require('readline-sync');

var number1 = readline.question("Please enter a number ?");
var number2 = readline.question("Please enter another number ?");
var operator = readline.question("Please enter an operator ?");

var result = 0;
switch(operator){
	case "+":
		result = parseInt(number1) + parseInt(number2);
		break;
	case "-":
		result = parseInt(number1) - parseInt(number2);
		break;
	case "*":
		result = parseInt(number1) * parseInt(number2);
		break;
	case "/":
		result = parseInt(number1) / parseInt(number2);
		break;
	case "%":
		result = parseInt(number1) % parseInt(number2);
		break;
}
console.log("Result of " + number1 + " " + operator + " " + number2 + "equals : " + result);