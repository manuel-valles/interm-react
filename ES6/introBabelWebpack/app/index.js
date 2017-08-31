// CLASSES
import Animal from './Animal';

// New instance
let king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();

// INHERITING CLASSES
class Lion extends Animal {
	constructor(name, height, color){
		super(name, height);
		this.color = color;
	}
	hello(){
		console.log(`Hi! I'm ${this.name} from Pride Rock!`)
	}
}

let son = new Lion("Simba", 2, "golden");
console.log(son);
son.hello();

// STATIC METHODS
class Calculator{
	static multiply(a,b){
		return a*b;
	}
	static add(a,b){
		return a+b;
	}
}

let a = Calculator.multiply(5,7);
let b = Calculator.add(5,7);
console.log(a, b);

// PROTOTYPES
function Wizard(name, house, pet){
	this.name = name;
	this.house = house;
	this.pet = pet;

	this.greet = ()=>`I'm ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;
Wizard.prototype.info= function (){
	return `I have a ${this.pet} named ${this.pet_name}`;
}
let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name="Hewdwig";
console.log(harry);
console.log(harry.greet());
console.log(harry.info());

