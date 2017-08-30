// ASSIGMENT
// Let
let limit = 100;
limit=200;
console.log(limit);
// Const
const limit2 = 120;
// limit2 +=100;7  //This gives us a read-only error
console.log(limit2);

const emails = ['frodo@email.com', 'samwise@email.com', 'marry@email.com'];
// emails = []; //This gives us a read-only error
emails.push('pippin@email.com'); //Otherwise this will run fine.
console.log(emails);

// BLOCK SCOPING
// Let - Const has the same behavior here, since it's global/local scope
let limit3 = 200;
{
	let limit3 = 10;
	console.log('backstage limit=', limit3);
}
console.log('overal venue limit=', limit3);

// Var
var limit4 = 200;
{
	var limit4 = 10;
	console.log('backstage limit=', limit4);
}
console.log('overal venue limit=', limit4);

// TEMPLATE LITERAL
let a=`good`;
let greeting =`${a} morning`;
console.log(a);
console.log(greeting);

// SPREAD OPERATOR
let b=[20,30,40];
let c=[10,...b,50];
console.log(c);

let d=['Dana', 'Erik', 'Frank'];
let e=['Alice', 'Bob', 'Carl', ...d];
console.log(e);

function collect(...a){
	console.log(a);
}
collect(1,2,3,4,5);

// DESTRUCTING ASSIGNMENTS 
let f = [4,5,6];
/*let four = f[0];
let five = f[1];*/
let [four, five] = f;
console.log(four, five);

let animals = ['Simba', 'Zazu', 'Ed'];
let [lion, bird] = animals;
console.log(lion, bird);

let king = {name: 'Mufasa', kids:1};
/*let name = king.name;
let kids = king.kids;*/
let {name, kids}= king;
console.log(name, kids);

let son = {name2: 'Simba', parents:2};
let name2, parents;
({name2, parents} = son);
console.log(name2, parents);