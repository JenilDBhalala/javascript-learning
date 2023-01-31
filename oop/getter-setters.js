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
