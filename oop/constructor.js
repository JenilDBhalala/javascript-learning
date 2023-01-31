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


/*
// Class declaration

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

/*
// Setters and Getters

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




/*

//ES6 Classes getter setters

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


/*
//static methods
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};


Person.hey = function(){
  console.log("hey brother...");
}

Person.hey();

const jenil = new Person("Jenil Bhalala", 2001);

//instance don't have hey() method which is static
console.log(jenil)

*/



/*
//ES6 Classes
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

  static hey(){
    console.log("hey brother...");
  }
}

PersonCl.hey()
const jenil = new PersonCl("Jenil Bhalala", 2001);

//instance don't have hey() method which is static
console.log(jenil)

*/



/*
//Object.create method

const PersonProto = {
  calcAge(){
    console.log(new Date().getFullYear() - this.birthyear);
  },

  init(name, birthyear){
    this.name = name;
    this.birthyear = birthyear;
  }
}

const jenil = Object.create(PersonProto);
console.log(jenil)

jenil.init('Jenil',2001)

console.log(jenil.__proto__ === PersonProto)
jenil.calcAge()

*/



///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

/*
class Car {
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`)
  }
  
  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`)
  }

  get speedUS(){
    return this.speed/1.6;
  }

  set speedUS(speed){
    this.speed = speed*1.6;
  }
}


const mercedes = new Car('mercedes', 120);
mercedes.accelerate();

mercedes.accelerate();
mercedes.brake()

console.log(mercedes.speedUS)
mercedes.speedUS = 200
console.log(mercedes.speed)

const ford = new Car('ford', 100);
console.log(ford.speedUS);

*/




/*

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};


const Student = function (firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;

    //pass this otherwise how Person object knows for which object it has to set the properties
    Person.call(this, firstName, birthYear)
    this.course = course;
}


//link Student.prototype with Person.prototype
//Student.prototype.__proto__ = Person.prototype

//it will link Student.prototype with Person.prototype without using constructor when using Object.create
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jenil = new Student("Jenil", 2001, "Computer Science");
console.log(jenil.__proto__);
console.log(jenil.__proto__.__proto__);
console.log(jenil instanceof Student);
console.log(jenil instanceof Person);
console.log(jenil instanceof Object);

jenil.introduce();
jenil.calcAge();

// console.log(Student.prototype.constructor === Person)
// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor === Student)

*/




///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};


const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};


EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};


EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/



/*

//////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
  }
}


class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

*/



/*

//////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

*/


