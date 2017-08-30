// FUNCTION DECLARATION
function cheer(){
	console.log("Woohoo!");
}
cheer();

// (ANONYMOUS) FUNCTION EXPRESSION
var cheer = function(){
	console.log("Sup!");
}
cheer();

setTimeout(function(){
	console.log("Hey there!");
}, 3000);

// ARRAY FUNCTION
setTimeout(()=>{console.log("Hellooo!");}, 3000);
var cheer = ()=>{console.log("What's up!");}

cheer();

// BUILT-IN HELPER METHODS
// MAP method
let values = [20, 30, 40];
let double = (n)=>{
	return n*2;
}
let doubled = values.map(double);
console.log(doubled);
// Shorter option:
let values2 = [20, 30, 40];
let doubled2 = values2.map((n)=>n*2);
console.log(doubled2);

// FILTER method
// Ex: Points scored for every basketball player during a game
let points = [7,16,21,4,3,22,5];
// I want to know those who has exceed 15 points
let best = points.filter((p)=>p>15);
console.log(best);

// STRING.REPEAT
// Returns a new string of concatenated copies.
let b = "wooh" + "oo".repeat(50);
console.log(b);

let c = `wooh${" ".repeat(50)}oo`;
console.log(c);

// SEARCHING (startWith,...)
console.log("butterfly".startsWith("butter"));

// CHECKING NUMBERS
const addToCart = (item, number)=>{
	// return Number.isFinite(number);
	return Number.isSafeInteger(number);
}

console.log(addToCart('shirt', 5));
console.log(addToCart('shirt', Infinity));
console.log(addToCart('shirt', Math.pow(2, 54)));

import{fellowship, total} from './fellowship';
import {add} from './math';
import multiply from './math';
console.log(fellowship, total);
console.log(add(2,7), multiply(2,7));