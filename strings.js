function capitalizeFirstLetter(str) {
	if (str.length === 0) return str
	return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalizeFirstLetter('hello'))

function truncateString(str, maxLength) {
	if (str.length <= maxLength) return str

	let truncated = str.slice(0, maxLength)
	const lastSpaceOrPunctuation = truncated.search(/[\s,.!?;:)]/g)

	if (lastSpaceOrPunctuation !== -1) {
		truncated = truncated.slice(0, lastSpaceOrPunctuation)
	}

	return truncated + '...'
}

console.log(
	truncateString(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		40
	)
)
console.log(truncateString('Hello world', 20))

function isSubstring(str1, str2) {
	return str1.includes(str2) || str2.includes(str1)
}

console.log(isSubstring('hello', 'ell'))
