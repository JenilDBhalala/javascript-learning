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




























