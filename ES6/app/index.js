// ES7 FEATURES
// Power
let a=Math.pow(2,5);
console.log(a);
// New feature **
let b=2**5;
console.log(b);

// Includes
let c = "wonderful".includes("butter");
console.log(c);
// New feature - Also with arrays:
let d = [2,3,4,5,6].includes(4);
console.log(d);

// ES8 PROPOSALS

let obj = {a: 'one', b: 'two', c: 'three'};
let keys = Object.keys(obj);
console.log(keys);
// Values(obj) proposal
let values = Object.values(obj);
console.log(values);
// Entries(obj) proposal
let entries = Object.entries(obj);
console.log(entries);
for (let entry of entries){
	console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

// Async keyword
async function async_one(){
	return "one";
}

async_one().then(response=>console.log(response));

async function async_two(){
	throw new Error('Issue with async!')
}

async_two().then(response=>console.log(response))
	.catch(error=>console.log(error));

async function async_three(){
	return "three";
}
// Await keyword:
/*tells an async function to wait for a resolved value 
before continuing to execute code*/
async function async_four(){
	const one = await async_one();
	console.log(one);
	const three = await async_three();
	console.log(three);
}

async_four();

async function async_five(){
	const [res_one, res_three] = await Promise.all(
		[async_one(), async_three()]
	)
	console.log(res_one, res_three);
}

async_five();
