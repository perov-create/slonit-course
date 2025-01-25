function calculateTotalPurchaseAmount(purchases) {
	let totalAmount = 0
	purchases.forEach(purchase => {
		totalAmount += purchase
	})
	return totalAmount
}

let topThreeCustomersPurchases = [10000, 20000, 30000]
console.log(calculateTotalPurchaseAmount(topThreeCustomersPurchases))
