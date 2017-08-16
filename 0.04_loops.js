// Loops

/*


Lcv = Loop control

for Loop
-----------------------------------

While Loop
----------------------------------

for in Loop
-----------------------------------


do while Loop
-------------------------------------
runs at least once


*/

// For Loop

// initialize var, have a boolen expression, and find a way to step through the look
for ( var i= 0; i < 10; i= i + 1){
	console.log(i)
}

// Challenge: Using a for loop, count to 20 by 2's

for ( var i = 0; i < 21; i= i + 2) {
	console.log(i)
}


// While Loops they will also return to the correct # if console.log is after the cstep through the loop
// initialize variable:
var j = 0
// boolean expression:
while (j < 5) {

	// step through the loop:
	j = j + 1

	console.log(j)
}

// while(true) {
// 	console.log("runs once");
// 	//return false;
// }


// Challenge: Create a while loop that counts to 100 by 10's

var p = 0;

while (p < 100) {
	p = p + 10;

	console.log(p);
}


// for in loop
// var studentName = "smita";
// //    LCV       collection
// for ( var l in studentName) {
// 	console.log(studentName[l])
// }

// Challenge: Capitalize the first letter and rebuild the string

var studentName = "smita";
var capSN = "";
//    LCV       collection
for ( var l in studentName) {
	if(l == 0) {
		capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
}

console.log(capSN)
// console.log(name[0].toUpperCase() + name.slice(1))