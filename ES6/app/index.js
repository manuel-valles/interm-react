// GENERATORS
// Ex1
function* letterMaker(){
	yield 'a';
	yield 'b';
	yield 'c';
}
let letterGen = letterMaker();
console.log(letterGen.next().value);	// a
console.log(letterGen.next().value);	// b
console.log(letterGen.next().value);	// c
console.log(letterGen.next().value); 	// undefined

// Ex2
function* countMaker(){
	let count=0;
	while(count<4){
		yield count++;
	}
}
let countGen = countMaker();
console.log(countGen.next().value);	// 0
console.log(countGen.next().value);	// 1
console.log(countGen.next().value);	// 2
console.log(countGen.next().value);	// 3

// Controlling Flow With Generators
function* evens(){
	let count = 0;
	while(true){
		count+=2;
		let reset = yield count;
		if(reset){
			count = 0;
		}
	}
}

let sequence = evens();
console.log('Flow starts here:');
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);

// GENERATOR VS ITERATOR
const arrayIterator = (array) => {
	let index = 0;

	return {
		next: () => {
			if (index < array.length){
				let next = array[index];
				index++;
				return next;
			}
		}
	}
}

let it = arrayIterator([1,2,3]);
console.log('Iterator starts here:');
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// More effective Iterator with a Generator
function* arrayGenerator(){
	yield arguments;
}

let gen = arrayGenerator(1,2,3);
console.log(gen.next().value);

// One for each argument
function* arrayGenerator2(){
	for(let arg of arguments){
		yield arg;
	}
}
let gen2 = arrayGenerator2(1,2,3);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

// A shorter version:
function* arrayGenerator3(){
	yield* arguments;
}
let gen3 = arrayGenerator3(1,2,3);
console.log(gen3.next().value);
console.log(gen3.next().value);
console.log(gen3.next().value);
console.log(gen3.next().value);
