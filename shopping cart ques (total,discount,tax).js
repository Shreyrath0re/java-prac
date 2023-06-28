const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];
console.log("total number of items = ",cartItems.length);
let totalCartValue = 0;
for (const item of cartItems){
    totalCartValue += item.price * item.count;
}
console.log("total value of cart = ", totalCartValue);
let totalDiscountedValue = 0
for (const item of cartItems){
    totalDiscountedValue += item.discount;
}
console.log("total discount value = ", totalDiscountedValue);
const totalTaxValue = totalCartValue * 0.18;
console.log("total value of tax applied = ", totalTaxValue);