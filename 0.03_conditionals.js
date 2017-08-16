// Conditionals

/*

	Chaining conditional operators
	------------------------------
	&&


	*/

var name = "Brett";

if ( "Brett" == name) {
	console.log( "Hey your name is " + name);
} else {
	console.log("What is your name?");
};

// Challenge: Create an if statement that checks if the users name does not have a capital letter,
// Rebuild their name with the lowercased letter capitalized


var name = "brett";

if ( name[0] == name[0].toUpperCase() ) {
	console.log(name);
} else {
	console.log(name[0].toUpperCase() + name.slice(1));
}



var age = 16
if (age >= 18) {
	console.log("Yay you can vote!");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >= 25) {
	console.log("Yay your rates on your rental car go down!")
} else {
	console.log("sorry too young to do anything!")
}




