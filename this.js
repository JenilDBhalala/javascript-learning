// //this points to user object in case of anonymous method
// const user = {
//     firstName: "Jenil",
//     lastName: "Bhalala",
//     age: 21,
//     fullName : function(){
//         console.log(this.firstName,this.lastName);
//     }
// }

// user.fullName();



// //this points to user object in case of anonymous method added to user object
// const user = {
//     firstName: "Jenil",
//     lastName: "Bhalala",
//     age: 21,
// }

// user.fullName = function(){
//     console.log(this.firstName,this.lastName);
// }

// user.fullName();



// //this points to window object in case of normal function
// function user(){
//     console.log(this);
// }

// user();




// //In case of constructor function this creates new empty object {} and points to that object
// function User(firstName, lastName){
//     this.firstName =  firstName;
//     this.lastName = lastName;
//     console.log(this);
// }

// const user = new User("Jenil", "Bhalala");



/*

//In forEach second argument is this keyword.
const user = {
    firstName: "Jenil",
    lastName: "Bhalala",
    age: 21,
    subs: ['physics', 'chemistry', 'maths'],
    displaySubjects(){
        this.subs.forEach(function(sub) {
            console.log(sub,this.firstName);
        }, this)  //this points to user object
    }
}

user.displaySubjects();

*/




/*

//Another solution of above code 
//store this keyword in some variable

const user = {
    firstName: "Jenil",
    lastName: "Bhalala",
    age: 21,
    subs: ['physics', 'chemistry', 'maths'],
    displaySubjects(){
        const that = this;
        this.subs.forEach(function(sub) {
            console.log(sub,that.firstName);
        }) 
    }
}

user.displaySubjects();

*/



/*

//Another solution of above code : using arrow function in forEach loop
//it will take parent context

const user = {
    firstName: "Jenil",
    lastName: "Bhalala",
    age: 21,
    subs: ['physics', 'chemistry', 'maths'],
    displaySubjects() {
        this.subs.forEach((sub) => {
            console.log(sub,this.firstName);
        }) 
    }
}

user.displaySubjects();

*/


/*

//arrow function don't have their own this so, it has it's parent this
const apple = {
    price: 10,

    banana: {
        price: 40,
        getPrice: function () {
            const discount = () => console.log(this.price);  //40
            discount();
        },
    },
};

apple.banana.getPrice();

*/