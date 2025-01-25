const operations = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	multiply: (a, b) => a * b,
	divide: (a, b) => a / b,
}

function calculate(a, b, operation) {
	return operation(a, b)
}

const selectedOperation = 'multiply'
console.log(calculate(6, 3, operations[selectedOperation]))
