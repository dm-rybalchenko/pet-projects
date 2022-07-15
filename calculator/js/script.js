/* Calculator starts */
"use strict"
const calculator = document.querySelector('.calculator__body');
const display = document.querySelector('.calculator__body input');

/* Function for entering data starts */
calculator.addEventListener("mousedown", enterValue);
document.addEventListener("keydown", enterValue);
// Prohibition pasting
calculator.addEventListener("paste", (event) => {event.preventDefault();});

function enterValue (event){
	let displayData = display.value;

	// Prohibition repeating
	if(event.repeat) {event.preventDefault();}

	// Clearing whole display
	if (event.target.closest('.button-c') || event.key == "Escape" || event.key == "Delete"){
		display.value = "";

	// Clearing display with "backspase"
	} else if (event.target.closest('.button-backspase') || event.key == "Backspace"){
		event.preventDefault();
		display.value = displayData.substring(0, display.value.length - 1);

	// Exepting buttons html
	} else if (event.target.closest('.button-equal') || event.target.closest('.button-plusminus')) {
		return;

	// Entering data whith buttons html
	} else if (event.target.closest('.calculator__button')) {
		display.value += event.target.textContent;

	// Entering data whith keyboard (Prohibition entering letters and wrong symbols, changing a comma whith a dot)
	} else if (+event.key !== +event.key){
		if (event.key === ","){display.value += "."}
		if (!(event.key === "*" || event.key === "/" || event.key === "-" || event.key === "+" || event.key === ".")){
			event.preventDefault();
		}
	}
}
/* Function for entering data ends */


/* Function for checking entered data and counting starts */
calculator.addEventListener("mouseup", checkValue);
document.addEventListener("keyup", checkValue);

	// Variables for clearing display after counting
	let clearDispay;
	let previousAnswer;

function checkValue (event){
	let displayData = display.value;
	let lastNumber = displayData.slice(-1);
	let penultNumber = displayData.slice(-2,-1);
	let displayDataArr = displayData.split('');

	// Unicluding this cases whith minus...
	if ((penultNumber === "*" || penultNumber === "/") && lastNumber === "-"){
	// ...prohibition entering all operators twice
	} else if (isNaN(lastNumber) && isNaN(penultNumber)){
	 	display.value = displayData.slice(0,-2) + lastNumber;
	}

	// Prohibition starting an expression whith operators /, +, *, .
	if (displayData === "/" || displayData === "*" || displayData === "+" || displayData === ".") {
		display.value = "";
	}

	// Prohibition using in the same operand more than one dot 
	if (lastNumber === "."){
		for (let i = displayDataArr.length - 2, number = displayDataArr[i]; +number === +number; i--){
			number = displayDataArr[i];
			if (number === "."){
				display.value = displayData.substring(0, displayData.length - 1);
				return;
			}
		}
	}
	// Prohibition  many zeros before operands
	let indexCut;
	for (let i = 0, number = displayDataArr[i]; +number === 0 && i < displayDataArr.length; i++){
		number = displayDataArr[i];
		indexCut = i;
	}
	if (indexCut > 1 && isNaN(lastNumber)){
		display.value = displayData.substring(indexCut - 1, displayData.length);
	} else if (indexCut > 1 && +lastNumber !== 0){
		display.value = displayData.substring(indexCut, displayData.length);
	}

	// Changing a sing of a number
	let indexSplit;
	if (event.target.closest('.button-plusminus')){
		for (let i = displayDataArr.length - 1, number = displayDataArr[i]; +number === +number || number === "."; i--){
			number = displayDataArr[i];
			indexSplit = i;
		}
		// Adding minus
		let lastOperand = displayData.slice(indexSplit + 1, displayData.length);
		let restExpression = displayData.slice(0,indexSplit + 1);
		if (displayDataArr[indexSplit] === "*" || displayDataArr[indexSplit] === "/"){
			display.value = `${restExpression}${-lastOperand}`;
		} else {
			display.value = `${restExpression.slice(0,-1)}${-lastOperand}`;
		}
	}

	// Clearing display after counting result
	if (clearDispay && +lastNumber === +lastNumber){
		display.value = displayData.substring(previousAnswer.length, displayData.length);
		clearDispay = false;
	} else {clearDispay = false;}

	// Counting result ("Equal" function)
	if (event.target.closest('.button-equal') || event.key === "Enter" || event.key === "="){
		// Deleting "tail of operand"
		if (isNaN(lastNumber)){
			displayData = displayData.slice(displayData.lenght,-1);
		}
		// Counting
		display.value = eval(displayData);
		// Updating variables for clearing display after counting
		clearDispay = true;
		previousAnswer = display.value;
	}

	// Keeping focus on display
	display.focus();
}
/* Function for checking entered data and counting ends */

/* Calculator ends */