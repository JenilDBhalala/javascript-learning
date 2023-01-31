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