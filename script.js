const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const result = document.querySelector('.result');
const btnCalculate = document.querySelector('.calculate');
const btnReset = document.querySelector('.reset');

let bmi;

const calcBmi = () => {
	bmi = Math.round((weight.value / Math.pow(height.value, 2)) * 10000);
	// bmi = bmiBefore * 10000;
	if (bmi < 18.5) {
		result.textContent = `Your BMI is ${bmi}. You are in the underweight range.`;
	} else if (bmi > 18.5 && bmi < 24.9) {
		result.textContent = `Your BMI is ${bmi}. You are in the healthy weight range.`;
	} else if (bmi > 25 && bmi < 29.9) {
		result.textContent = `Your BMI is ${bmi}. You are in the overweight range.`;
	} else {
		result.textContent = `Your BMI is ${bmi}. You are in the obese range.`;
	}
};

const resetInp = () => {
	weight.value = '';
	height.value = '';
	result.textContent = '';
};

btnCalculate.addEventListener('click', calcBmi);
btnReset.addEventListener('click', resetInp);
