// Arrays
// Arrays can hold diffrent types of data types

let students = ['Thomes', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(typeof(students));


// Pulling out an individual student
console.log(students[2])

// Challenge: Grab the nested array out of the students array and grab "Perry" 
// then print to the console "Hello Perry"

console.log("Hello " + (students[6][1]))



let arrOfFood = ['Quesadilla', 'Pie', 'Potato', 'CheeseCake', 'Shrimp Pasta'];


// this will print out each name individually with "in"
// if you use of instead it will also give the values (second example)
// for in loops will only return the total amount of the data.
// for(let f in arrOfFood) {
// 	console.log(arrOfFood[f])
// }

// for(let f of arrOfFood) {
// 	console.log([f])
// }




// arrOfFood.push('NY Style Pizza');
// console.log(arrOfFood)


// // splicing: it is the item # and then how many to cut

// arrOfFood.splice(1, 2, 'Blueberry Pie')
// console.log(arrOfFood)

// this is a "forEach" loop which does the same function as a "forOf loop"
// also each area in a for each loop has a attached function. so the first one gives the values, the second
// gives the index numbers, and then the final one gives the full array
arrOfFood.forEach(function(foodItem) {
	console.log(foodItem);
})









