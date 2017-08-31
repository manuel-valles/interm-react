// CLOSURES
let call = () => {
	let secret = 'ES6 rocks!';
	let reveal = () => {
		console.log(secret);
	}
	reveal();
}

call();

// Lexical Scoping
let call2 = () => {
	let secret = 'ES6 rocks!';
	let reveal = () => {
		console.log(secret);
	}
	return reveal;
}

let unveil = call2();
unveil();

// FUNCTION FACTORIES
// Ex1
const addSuffix = (x) =>{
	const concat = (y) =>{
		return y+x;
	}
	return concat;
}

let add_ness = addSuffix('ness');
console.log(add_ness);
let h = add_ness('happi');
console.log(h);

let add_full =  addSuffix('ful');
let f = add_full('fruit');
console.log(f);

// Ex2 - Numbers - Shorter way:
const product = x => y => y*x;

let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(9));

// DATA ENCAPSULATION & PRIVATE METHOD
const budget = () => {
	// private data:
	let balance = 0;
	// private method:
	let changeBal = (val) => {
		return balance += val;
	}
	// closure to give the user ways to manipulate this private balance data:
	const deposit20 = () => changeBal(20);
	const withdraw20 = () => changeBal(-20);
	const check = () => balance;
	// return an object to have access to it
	return{deposit20, withdraw20, check}
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());
console.log(wallet.balance);