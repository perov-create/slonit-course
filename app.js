function game() {
	const secretNumber = Math.floor(Math.random() * 100) + 1
	let min = 1
	let max = 100
	let guess
	let attempts = 0

	console.log('Компьютер 1 загадал число: ' + secretNumber)

	while (true) {
		guess = Math.floor((min + max) / 2)
		attempts++

		console.log(`Компьютер 2: Пробую число ${guess}.`)

		if (guess === secretNumber) {
			console.log('Компьютер 1: Угадал!')
			console.log(`Число угадано за ${attempts} попыток.`)
			break
		} else if (guess < secretNumber) {
			console.log('Компьютер 1: Больше.')
			min = guess + 1
		} else {
			console.log('Компьютер 1: Меньше.')
			max = guess - 1
		}
	}
}

game()
