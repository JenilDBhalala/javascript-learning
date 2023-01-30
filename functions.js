// //function statement aka function declaration
// a();
// function a(){
//     console.log("hello javascript");
// }



// //function expression - hoisting difference
// b();
// var b = function (){
//     console.log("hello js");
// }


// //anonymous function - used in function expression
// function (){

// }



// //named function expression
// var b = function hello(){
//     console.log(hello);
// }

// b();
// hello();

//first class functions(first class citizens) : ability to pass function as value and return function as value are known as first class functions




//arguments are passed by values

// let a = 10;

// function change(a){
//     console.log(a);
//     a=17;
// }

// change(a)

// console.log(a)


// //objects are passed by reference

// let obj = {name : "Jenil Bhalala", age : 21};

// function change(obj){
//     console.log(obj.name)
//     obj.name = "xyz";
// }

// change(obj)

// console.log(obj)




//function borrowing using call method

// let _name = {
//     firstName : "Jenil",
//     lastName : "Bhalala",
//     printFullName : function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// _name.printFullName();

// let name2 = {
//     firstName : "Hello",
//     lastName : "World",
// }

// _name.printFullName.call(name2)




// let _name = {
//     firstName : "Jenil",
//     lastName : "Bhalala",
// }

// var printFullName = function(city, state){
//     console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
// }

// printFullName.call(_name, "Surat", "Gujarat");


// let name2 = {
//     firstName : "Hello",
//     lastName : "World",
// }

// // printFullName.call(name2, "Vadodara", "Gujarat")

// // printFullName.apply(name2, ["Vadodara", "Gujarat"])

// let print = printFullName.bind(name2, "Vadodara", "Gujarat")
// print()




//normal function vs arrow function difference

// const users = {
//     x : 30,
//     f:function (){
//         let y=30;
//         console.log("hello world" , JSON.stringify(this.x));
//     }
// }

// users.f();




// const users2 = {
//     x : 30,
//     abc:{
//         G:234,
//         f : () => {
//             console.log("hello world" , this);
//         }
//     }
// }

// users2.abc.f()




// //same argument works in normal function
// function sum(x, y, x, y) {
//   return x + y + x + y;
// }

// console.log(sum(2, 7, 9, 8));  //34





// //it's give error because always put semicolon before IIFE function
// console.log("hello")

// (function (){
//     console.log("hello");
// })();