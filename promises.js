// var promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("nothing")
//     }, 5000);
// });

// console.log(promise)

// promise.then(function(value){
//     console.log(value)
// })

// promise.catch(function(error){
//     console.log(error)
// })




// const cart = ["shoes", "pants", "kurta"];
// const promise = createOrder(cart) //orderId
// console.log(promise)

// promise.then(function(orderId){
//     console.log(orderId);
// });

// //producer
// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         //logic for createOrder
//         const orderId = '12345';
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             }, 5000);
//         }
//     })

//     return pr;
// };


// function validateCart(cart){
//     return true;
// }




// //promise chain
// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo)
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })


// //producer
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         //logic for createOrder
//         const orderId = '12345';
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     })

//     return pr;
// };

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve(orderId + " Payment Successful");
//     });
// }

// function validateCart(cart) {
//     return true;
// }





// //producer code
// function fun() {
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("hello i am promise");
//         }, 4000);
//     })
//     return promise;
// }

// function anotherfun(x) {
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             reject(x + " hello i am another rejected promise");
//         }, 6000);
//     })
//     return promise;
// }


// //consumer code
// fun()
// .then(function (x) {
//     console.log(x);
//     return x;
// })
// .then(function(y){
//     return anotherfun(y);
// })
// .catch(function(y){
//     console.log(y)
// })
// .then(function(){
//     console.log("Hello i will always run")
// })






// // https://promiviz.vercel.app/  : visualization

// //when promises are dependent on each other then Promise.all(array) is useful because it reject all promises
// //when promises are not dependent on each other then Promise.allSettled(array) is useful because it fullfills all other promises

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "resolved");
// }); //will be resolved after 300ms

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "resolved3");
// }); // will be resolved after 100ms

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "resolved4");
// }); // will be resolved after 100ms

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "resolved5");
// }); // will be resolved after 100ms

// Promise.all([promise1, promise3, promise4, promise5])
// .then((values) => {
//     console.log(values);
// })
// .catch((err) => {
//     console.log(err);
// });




//using async-await

async function fun(){
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "resolved");
    }); //will be resolved after 300ms

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, "resolved3");
    }); // will be resolved after 100ms

    const promise4 = new Promise((resolve, reject) => {
        setTimeout(resolve, 4000, "resolved4");
    }); // will be resolved after 100ms

    const promise5 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "resolved5");
    }); // will be resolved after 100ms

    
    try{
        let response = await Promise.all([promise1, promise3, promise4, promise5]);
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
}

fun();