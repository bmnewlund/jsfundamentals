// Objects


// let food = {
// 	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
// 	getPies: function() {
// 		return this.pies; //food object
// 	}
// }

// console.log(food.pies[0] + " pie");

// Challenge: iterate over the pie array and print out each pie, and add
// 'pie' to them using the forEach() method



// food.pies is now a iterable object that can be used in a forEach loop
// food.pies.forEach(function(foodList) {
// 	console.log(foodList + " pie");
// })


// console.log(food.getPies())


// Challenge: Create a  method inside of the object food that appends ' pie'
// to the list
// also push items into a new array, I named it piesNew


let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	piesNew: [],
	getPies: function() {
		food.pies.forEach(function(getPies) {
			console.log(getPies + " pie")
		})
		// return this.pies; //food object	
		},
	addPies: function() {
		food.pies.forEach(function(flavor) {
			food.piesNew.push(flavor + ' pie')
		})
	}
}
// food.pies.forEach(function(getPies) {
// 	console.log(getPies + " pie");
//  	})

// piesNew.push("Chess");
// console.log(food.getPies())
// console.log(food.piesNew)
food.addPies()
console.log(food.piesNew)





