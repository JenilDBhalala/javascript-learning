/*

types of data type in js

number
bigint
boolean
string
symbol
object
null
undefined

*/




/*

//scopes : block scope, local scope(function scope), global scope

let a = 18;
let c = 16;

console.log(a);
console.log(b);
console.log(c);

{
  let a = 10;
  var b = 15;
  const c = 20;
}

console.log(a);
console.log(b);
console.log(c);

*/




/*

//hoisting

console.log(hoistedFunc) // displays whole function
hoistedFunc(); 

// console.log(a);    //reference error
console.log(b);
// console.log(c);      //reference error
// notHoisted()      //reference error


let a = 10;
var b = 11;
const c = 13;

//normal function
function hoistedFunc(){
  console.log("hello i am hoisted");
}

const notHoisted = () => {
  console.log("hello i am not hoisted")
}

*/


