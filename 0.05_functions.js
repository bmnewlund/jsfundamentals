// Functions


function greeting() {
	console.log("Good Morning!")
}




// Parenthesis invokes our function so that it runs the code inside of it.
greeting();

// Challenge: Create a function that says "Day 4 feeling great!" then call that function

function day_Feeling() {
	console.log("Day 4 feeling great!")
}

day_Feeling();


// Functions with parameters

function greeting2(name) {
	console.log("Time to start coding " + name);
}

greeting2("Brett")


function sum(num1, num2) {
	console.log(num1 + num2)
}

sum(2, 4)

// scope

var fname = "Aj";

function hello() {
	console.log(fname)
}

hello();
// ---------------------

var fname = "Aj";

function hello(fname) {
	lname = "Hephner";
	console.log(fname + " " + lname)
}

console.log(lname);



// the var will not stay local without the "let" keyword. it can be used in place of var so that it is not sent global
// to the rest of the code.


if ( 1 == 1 ) {
	let sum = 1 + 1 
	console.log(sum);
}

console.log(sum);



// Challenge: create a function called capitalize() and use a for Loop we created yesterday
// to  capitalize names.



function capitalize(studentName) {
	var capSN = "";
	for ( var l in studentName) {
		if(l == 0) {
			capSN = studentName[l].toUpperCase();
		} else {
			capSN += studentName[l];
		}
	}
console.log(capSN);
}

var name="brett";
capitalize("name")

// when you tell the computer to "run" capitalize as a function it will take whatever is in the parentheses and use 
// whatever is in the parentheses next to the capitalize first function right now. So in this case it would be "studentName"
// and "name"

// this next bit is showing how a return functions
// function capitalize(studentName) {
// 	var capSN = "";
// 	for ( var l in studentName) {
// 		if(l == 0) {
// 			capSN = studentName[l].toUpperCase();
// 		} else {
// 			capSN += studentName[l];
// 		}
// 	}
// return capSN;
// }

// var name = 'josh'
// console.log(capitalize("brett"))


// Void Functions











