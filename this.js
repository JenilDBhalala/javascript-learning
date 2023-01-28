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



// //In forEach second argument is this keyword.
// const user = {
//     firstName: "Jenil",
//     lastName: "Bhalala",
//     age: 21,
//     subs: ['physics', 'chemistry', 'maths'],
//     displaySubjects(){
//         this.subs.forEach(function(sub) {
//             console.log(sub,this.firstName); 
//         }, this)  //this points to user object
//     }
// }

// user.displaySubjects();
