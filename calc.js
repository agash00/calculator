const textDisplay = document.querySelector('#text-display');
text1 = document.createElement('p');
text1.classList.add('text1');

const textDisplayResult = document.querySelector('#text-display-result');
textR = document.createElement('p');
textR.classList.add('textR');

z = 0;
numbers = [];

function clearAll() {
	numbers = [];
	splitNumbers = [];
	solNum = [];
	displayNumbers = '';
	text1.textContent = '';
	textR.textContent = '';
	sign = [];
	z = 0;
}
function addition(num) {
	finalNum = num.map(Number);
	sum = finalNum.reduce((total, amount) => total + amount);
	console.log(sum);
	return sum;
}

function subtraction(num) {
	finalNum = num.map(Number);
	console.log(finalNum);
	diff = finalNum.reduce((total, amount) => total - amount);
	return diff;
}

function multiplication(num) {
	finalNum = num.map(Number);
	console.log(finalNum);
	product = finalNum.reduce((total, amount) => total * amount);
	return product;
}

function division(num) {
	finalNum = num.map(Number);
	console.log(finalNum);
	quotient = finalNum.reduce((total, amount) => total / amount);;
	return quotient;
}

function operate(operator, num) {
	if (operator === '+') {
		return addition(num);
	}
	else if (operator === '-') {
		return subtraction(num);
	}
	else if (operator === '*') {
		return multiplication(num);
	}
	else if (operator === '/') {
		return division(num);
	}
	else {
		return 'be real';
	}
}



function display(displayText) {
	numbers[z] = displayText;
	if (numbers[z] === 'clear') {
		clearAll();
	}
	else if (numbers[z] === 'remove') {
		console.log(numbers);
		numbers.splice(z-1, 2);
		displayNumbers = numbers.join('');
		console.log(numbers);
		text1.textContent = displayNumbers;
		textDisplay.appendChild(text1);
		z--;
	}
	else if (numbers[z] === '=') {
		numbers.splice(-1);
		splitNumbers = displayNumbers.split(/([.\*+-/_])/g);
		for (i = 0; i < splitNumbers.length; i++) {
			if (splitNumbers[i+1] === '.') {
				splitNumbers[i] += splitNumbers[i+1];
				splitNumbers.splice(i+1, 1);
				splitNumbers[i] += splitNumbers[i+1];
				splitNumbers.splice(i+1, 1);
			}
		}
		console.log(splitNumbers);
		for (i = 0; i < splitNumbers.length; i++) {
			if (splitNumbers[i] === '/') {
				solNum = [splitNumbers[i-1], splitNumbers[i+1]];
				splitNumbers[i-1] = operate('/', solNum);
				splitNumbers.splice(i, 2);
				if (splitNumbers[i] === '/') {
					i--;
				}
			}
		}
		for (i = 0; i < splitNumbers.length; i++) {
			if (splitNumbers[i] === '*') {
				solNum = [splitNumbers[i-1], splitNumbers[i+1]];
				splitNumbers[i-1] = operate('*', solNum);
				splitNumbers.splice(i, 2);
				if (splitNumbers[i] === '*') {
					i--;
				}
			}
		}
		for (i = 0; i < splitNumbers.length; i++) {
			if (splitNumbers[i] === '+' || splitNumbers[i] === '-') {
				solNum = [splitNumbers[i-1], splitNumbers[i+1]];
				splitNumbers[i-1] = operate(splitNumbers[i], solNum);
				splitNumbers.splice(i, 2);
				if (splitNumbers[i] === '+' || splitNumbers[i] === '-') {
					i--;
				}
			}
		}
		console.log(splitNumbers);
		textR.textContent = splitNumbers[0];
		textDisplayResult.appendChild(textR);
		z = 0;
		numbers = [];
		numbers[0] = splitNumbers[0];
		z++;
		
	}
	else {
		displayNumbers = numbers.join('');
		console.log(displayNumbers);
		text1.textContent = displayNumbers;
		textDisplay.appendChild(text1);
		z++;
	}
}


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {display('1');});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {display('2');});
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {display('3');});
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {display('4');});
const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {display('5');});
const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {display('6');});
const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {display('7');});
const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {display('8');});
const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {display('9');});
const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {display('0');});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {display(' / ');});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {display(' * ');});
const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {display(' - ');});
const add = document.querySelector('#add');
add.addEventListener('click', () => {display(' + ');});
const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {display('.');});
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {display('=');});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {display('clear');});
const remove = document.querySelector('#remove');
remove.addEventListener('click', () => {display('remove');});