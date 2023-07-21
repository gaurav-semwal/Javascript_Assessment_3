# Question No.5  Rewrite the code below to use array destructuring instead of assigning each value to a variable.

let item = ["Egg", 0.25, 12]; 
let name = item[0]; 
let price = item[1]; 
let quantity = item[2]; 
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); console.log();

Answer :
let item = ["Egg", 0.25, 12]; 
let [ name, price, quantity ] = item;
console.log(`item: ${name}, price: ${price}, quantity: ${quantity}`);

// item: Egg, price: 0.25, quantity: 12 //
__________________________________________________________________________________________________________________________________________________________

# Question No.6  Using Array Destructuring get all of the names from this Nested Array

const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
// Write your code here 
const [] = moreStudents; 
console.log(student1, student2, student3, student4, student5);

Answer :
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
const [student1, [student2, student3], [student4, student5]] = moreStudents;
console.log(student1, student2, student3, student4, student5);

// Chris Ahmad Antigoni Toby Sam //
________________________________________________________________________________________________________________________________________________________

# Question No.7  Fix the code to make it work.

let map = new Map(); 
map.set("key", "value"); 
let keys = map.keys();
keys.push("more");

Answer : 
let map = new Map(); 
map.set("key", "value"); 

let keys = map.keys();
let sem = [...keys];  // By using spread operator the sem array has now all the properties of  from the map object and by using push() method it
                         will add a new element "more" to the sem. //
sem.push("more");
console.log(sem);

// [ 'key', 'more' ] //
________________________________________________________________________________________________________________________________________________________


