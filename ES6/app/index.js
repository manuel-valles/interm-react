// PROMISES
let p = new Promise((resolve, reject)=>{
	// resolve('Resolve promise data');
	// reject('Reject promise data');
	setTimeout(()=>resolve('Resolved promise data'), 3000);
});

p.then(response => console.log(response))
	.catch(error => console.log(error));

console.log('After promise consumption');

// FETCH METHOD
// Ex1
const root = 'http://jsonplaceholder.typicode.com/posts/1';

fetch(root, {method: "GET"})
	.then(response=>response.json())
	.then(json=>console.log(json));

// Ex2
const root2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root2, {method: "GET"})
	.then(response=>response.json())
	.then(json=>console.log(json));