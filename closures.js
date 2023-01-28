// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);

// z();



// function z(){
//     var b = 10;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a);
//         }
//         a = 67;
//         return y;
//     }

//     var abc = x();
//     abc();
//     console.log(b);
// }
// z();



// function x(){
//     //var is global scope that's why
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Hello Javascript")
// }

// x();



// function x(){
//     //let is block scope that's why
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Hello Javascript")
// }

// x();



// function x() {
//     var i = 1;

//     for (var i = 1; i <= 5; i++) {
//         function z(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         z(i);
//     }
//     console.log("Hello Javascript")
// }

// x();



// //we have write sub function in block that's why it is undefined first
// function sum() {
//     let a = 10;
//     {
//         {
//             function sub() {
//                 var a = 17;
//                 console.log(a);
//             }
//         }
//     }
//     sub();
//     console.log(a)
// }

// sum();



// //we can call like this also
// function a(){
//     var x = 5;
//     function b(){
//         function c(){
//             console.log(x);
//             return x;
//         }
//         return c;
//     }
//     return b;
// }

// console.log(a()()())