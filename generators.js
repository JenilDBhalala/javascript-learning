/*
function* generatorFunction(){
  yield;
  foo(yield "i am useless");
}

function foo(x){
  console.log("arguments" , x)
}

var generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next());
*/


/*
function* generatorFunction(i){
  console.log(i);
  const j = 5*(yield (i*10));
  console.log(j);
  const k = yield(2*j/4);
  console.log(k);
  return i+j+k;
}

var generator = generatorFunction(10);

console.log(generator.next(20));
console.log(generator.next(10));
console.log(generator.next(5));
*/

console.log(4)