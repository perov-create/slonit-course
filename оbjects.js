function sumNumericFields(obj) {
	let sum = 0

	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			sum += obj[key]
		}
	}

	return sum
}

function getSortedFieldNamesByValue(obj) {
	const entries = Object.entries(obj)

	const numericEntries = entries.filter(
		([key, value]) => typeof value === 'number'
	)

	numericEntries.sort((a, b) => b[1] - a[1])

	return numericEntries.map(([key]) => key)
}

const object = { name: 'Vasya', friends: 5, likes: 19, projects: 7 }
console.log(sumNumericFields(object))
console.log(getSortedFieldNamesByValue(object))
