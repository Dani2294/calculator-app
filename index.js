/* CACHING THE DOM */
const themeToggler = document.getElementById('theme-toggler');
const ballToggler = document.getElementById('ball-toggler');
const body = document.querySelector('body');

/* Caching calculator elements */
const mainScreen = document.getElementById('main-screen');
const supScreen = document.getElementById('sup-screen');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const deleteButton = document.getElementById('delete');
const resetButton = document.getElementById('reset');
const equalButton = document.getElementById('equal');

/* Variables */
let mainScreenValue = '';
let supScreenValue = '';
let operator = '';
let result = '';

/* FUNCTIONS */
function updateScreen() {
	mainScreen.innerText = mainScreenValue;
	supScreen.innerText = supScreenValue;
}

function addNumber(number) {
	if (number === '.' && mainScreenValue.includes('.')) return;
	mainScreenValue += number;
}

function handleOperation(operation) {
	if (mainScreenValue === '') return;
	if (supScreenValue !== '') {
		calc();
	}
	operator = operation;
	operator !== null || operator !== undefined
		? (supScreenValue = `${mainScreenValue} ${operator}`)
		: (supScreenValue = '');
	mainScreenValue = '';
}

function calc() {
	const prevNum = parseFloat(supScreenValue);
	const currNum = parseFloat(mainScreenValue);
	if (isNaN(prevNum) || isNaN(currNum)) return;

	switch (operator) {
		case '+':
			result = prevNum + currNum;
			break;
		case '-':
			result = prevNum - currNum;
			break;
		case 'x':
			result = prevNum * currNum;
			break;
		case '/':
			result = prevNum / currNum;
			break;
		default:
			return;
	}
	mainScreenValue = `= ${result}`;
	supScreenValue = '';
	operator = undefined;
}

function deleteNumber() {
	mainScreenValue = mainScreenValue.toString().slice(0, -1);
}

function reset() {
	mainScreenValue = '';
	supScreenValue = '';
	operator = undefined;
}

/* EVENTS */

/* Theme switcher */
let theme = 1;
themeToggler.addEventListener('click', () => {
	theme++;
	switch (theme) {
		case 2:
			body.classList.add('theme-2');
			ballToggler.classList.add('translate-x-6');
			break;
		case 3:
			body.classList.remove('theme-2');
			body.classList.add('theme-3');
			ballToggler.classList.remove('translate-x-6');
			ballToggler.classList.add('translate-x-12');
			break;
		case 4:
			theme = 1;
			body.classList.remove('theme-3');
			ballToggler.classList.remove('translate-x-12');
			break;
	}
});

/* Calc events */
numberButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		addNumber(e.target.innerText);
		updateScreen();
	});
});

operatorButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		handleOperation(e.target.innerText);
		updateScreen();
	});
});

equalButton.addEventListener('click', () => {
	calc();
	updateScreen();
});

deleteButton.addEventListener('click', () => {
	deleteNumber();
	updateScreen();
});

resetButton.addEventListener('click', () => {
	reset();
	updateScreen();
});
