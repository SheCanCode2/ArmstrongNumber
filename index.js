let resultTag = document.getElementById('result')
const isArmstrong = () =>{
	let userInput = document.getElementById('input').value
	let digits = userInput.split('').map(digit => parseInt(digit))
	let digtsCube = digits.map( digit => Math.pow(digit, 3))
	let sum = 0
	for(let digit of digtsCube){
		sum += digit
	}
	if(sum.toString() === userInput){
		resultTag.innerHTML = `${userInput} is an armstrong value`
	} else {
		resultTag.innerHTML = `${userInput} is not armstrong value`
	}
}

const onUserInput = (element) =>{
	let value = element.value
	let button = document.getElementById('check')
	resultTag.innerHTML = ''
	if(value.length != 3){
		return button.disabled = true
	}
	return button.disabled = false
}