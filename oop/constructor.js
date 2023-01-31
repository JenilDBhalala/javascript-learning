// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

/*

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jenil = new Person("Jenil", 2001);
console.log(jenil);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(jenil instanceof Person);


///////////////////////////////////////
// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log((new Date().getFullYear()) - this.birthYear);
};

console.log(Person.prototype);
console.log(jenil)


jenil.calcAge();  //22
matilda.calcAge();  //6

console.log(jenil.__proto__);
console.log(jenil.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jenil));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));



Person.prototype.species = 'Homo Sapiens';

console.log(jenil.species, matilda.species);
console.log(jenil.hasOwnProperty('firstName'));
console.log(jenil.hasOwnProperty('species'));



// /////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(jenil.__proto__);
// Object.prototype (top of prototype chain)
console.log(jenil.__proto__.__proto__)
//null
console.log(jenil.__proto__.__proto__.__proto__)
console.dir(Person.prototype.constructor);


const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);


Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());


const h1 = document.querySelector('h1'); 
console.dir(h1);

console.dir(x => x + 1);

*/




///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

/*
const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();

mercedes.brake();
mercedes.brake();

bmw.accelerate();

*/



///////////////////////////////////////
// ES6 Classes

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode


// Class expression
// const PersonCl = class {}


// Class declaration

/*
class PersonCl {

  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

const jenil = new PersonCl('Jenil Bhalala', 2001);
console.log(jenil);
jenil.calcAge();

console.log(jenil.__proto__ === PersonCl.prototype);

// //we can also do this like constructor functions
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jenil.greet();

*/



///////////////////////////////////////
// Setters and Getters
/*

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1)[0];
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//use getter setter as properties not methods
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

*/



//ES6 Classes getter setters

/*
class PersonCl {

  constructor(fullName, birthYear) {
    //this fullName will call setter method
    this.fullName = fullName;

    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  //getter setters
  get age(){
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name){
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jenil = new PersonCl('Jenil Bhalala', 2001);
console.log(jenil);

jenil.calcAge();
console.log(jenil.age);

*/



// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };


// Person.hey = function(){
//   console.log("hey brother...");
// }

// console.dir(Person)

// const jenil = new Person("Jenil Bhalala", 2001)


