// SET
let a = new Set();
a.add(5);
a.add(43);
a.add("Woohoo");
a.add({x: 50, y: 200});
console.log(a);

// Properties to get some info from the Set: size; has();
console.log(a.size);
console.log(a.has(5));
console.log(a.has(7));

// Convert an array into a Set
let numbers = [5, 7, 8, 13, 17];
let numSet = new Set(numbers);
console.log(numSet);

// Enhanced For Loop
for(let element of numSet.values()){
	console.log(element);
}

// How to know what the characters are in a string?
// Convert the string into an array, then pass it to a set.

let chars = 'afadeofrjgfgnbxlcjqewtjirwsldfna;ffnvdgbt';
console.log(chars.length);
let chars_arr = chars.split('');
let chars_set = new Set(chars_arr);
console.log(chars_set);

// MAPS
let b = new Map();
let key_1 = "string Key";
let key_2 = {a: 'key'};
let key_3 = function(){};
b.set(key_1, 'return value for a string key');
b.set(key_2, 'return value for an object key');
b.set(key_3, 'return value for a function key');
console.log(b);

//  Array into a Map
let numArr = [[1, 'one'],[2,'two'],[3,'three']];
let valMap = new Map(numArr);
console.log(valMap);

// Iterate
for(let [key, value] of valMap.entries()){
	console.log(`${key} points to ${value}`);
}

// Example before but counting how many we have for each letter.
let string = 'adepforjfekjdvkgjrwptpwoejrq;elckdafpoefoefjrprgerg';
let letters = new Map();
for(let i=0; i<string.length; i++){
	let letter = string[i];
	if(!letters.has(letter)){
		letters.set(letter, 1);
	} else{
		letters.set(letter, letters.get(letter)+1);
	}
}

console.log(letters);

// Now using a function
let string2 = 'supercalifragilisticexpialidocious';
const countLetter = (word, orig_letter) => {
  let letter = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};
let a_count = countLetter(string2, 'a');
let x_count = countLetter(string2, 'x');
console.log(a_count, x_count);