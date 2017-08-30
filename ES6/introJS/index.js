//INTRO
console.log(document);
document.getElementById('example').innerHTML='JavaScript';

// FUNCTIONS
function print(){
	console.log("A working funcion!");
}
print();

var print = function(a,b,c){
	console.log(a+b+c);
}
print("One ", "Two ", "Three.");

var multiply = function(a,b){
	return a*b;
}
var product= multiply(5,10);
console.log(product);

// OBJECTS
var dog={
	name: 'Buddy',
	breed: 'Golden Retriever',
	weight: 60,
	bark: function(){
		console.log("Woof!");
	}
};
console.log(dog);
console.log(dog.name);
console.log(dog["breed"]);
dog.bark();

// ARRAYS
var points = [25, 26, 7, 9, 31];
points.push(8);
var first = points[0];
var last = points.pop();
console.log(points, first, last, points.length);

// BOOLEANS
var a=false;
console.log(typeof a);
var b= 5==6;
console.log(b);

// IF STATEMENT
var x=10;
if(8>x){
	console.log("8 is greater!");
} else if(15>x){
	console.log("15 is greater!");
}else{
	console.log("8 is not greater");
}

// SWITCH
var x=13;
switch(x){
	case 1: 
		console.log("The number is one!");
		break;
	case 2: 
		console.log("The number is two!");
		break;
	case 3: console.log("The number is three!");
		break;
	default:
		console.log("The number is " + x);
		break;
}

// LOOPS
// For loop
for(var i= 1; i<4; i++){
	console.log(i);
}
var names=["Frodo", "Sam", "Merry", "Pippin"];
for(var i=0; i<names.length; i++){
	console.log(names[i]);
}

// While loop
var j=0;
while(j<names.length){
	console.log(names[j]);
	j++;
}

// DoWhile loop
var m=0;
do {
	console.log(names[m]);
	m++;
} while(m<0);