function calculateDiscount(price, discountRate = 0.1) {
	let discount = price * discountRate;
	let finalPrice = price - discount;
	console.log(`Discount: ${discount}`);
	console.log(`Final Price: ${finalPrice}`);
}

// calculateDiscount(100);
// calculateDiscount(200, 0.2);

function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
	let discount = (price * 100) / (discountRate * 100);
	let finalPrice = price * 100 - discount;
	let tax = finalPrice / (taxRate * 100);

	console.log(`Original Price: $${price.toFixed(2)}`);
	console.log(`Discount: $${(discount / 100).toFixed(2)}`);
	console.log(`Tax $${(tax / 100).toFixed(2)}`);
	console.log(`Final Price: $${(finalPrice / 100).toFixed(2)}`);
}

calculateFinalPrice(100);
calculateFinalPrice(200, 0.2, 0.1);

let username = "admin";
let password = "password123";

if (username === "admin") {
	if (password === "password123") {
		console.log("Access Granted!");
	} else {
		console.log("Incorrect password.");
	}
} else {
	console.log("Unknown user.");
}

if (username === "admin" && password === "password123") {
	console.log("Access Granted!");
} else {
	console.log("Access denied.");
}

function canDrive(age, hasLicense) {
	if (age >= 18 && hasLicense) {
		console.log("You can drive");
	} else if (age >= 18 && !hasLicense) {
		console.log("You need a license to drive");
	} else {
		console.log("You are not old enough to drive.");
	}
}

canDrive(21, true);
canDrive(17, false);
canDrive(22, true);

function square(number) {
	let total = number * number;
	console.log(total);
}

square(5);
square(7);
square(10);

function offWork(isWeekend, isHoliday) {
	if (isWeekend || isHoliday) {
		console.log("No Work!!!");
	} else {
		console.log("Go to work bum!");
	}
}

offWork(true, true);
offWork(true, false);
offWork(false, true);
offWork(false, false);

function greet(name) {
	console.log(`Hello, ${name}! Welcome to JavaScript class.`);
}

greet("Shawn");
