// //Promises work as synchronous but javascript not wait for anything(aynschronous)
// function returnPromises() {
//     return newPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promise Executed...");
//             resolve("Sample Data");
//         }, 3000);
//     });
// }

// function ExecuteFunction() {
//     var newData = "Jenil";
//     var getPromise = returnPromises();

//     console.log(getPromise)
//     console.log(newData);
// }

// ExecuteFunction();




// function returnPromises() {
//     return newPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promise Executed...");
//             resolve("Sample Data");
//         }, 3000);
//     });
// }

// function ExecuteFunction() {
//     var newData = "Jenil";
//     var getPromise = returnPromises();

//     getPromise.then(function(){
//         console.log(getPromise)
//         console.log(newData);
//     })
// }

// ExecuteFunction();




// //so we can give synchronous behaviour through async-await

// function returnPromises() {
//     return newPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promise Executed...");
//             resolve("Sample Data");
//         }, 3000);
//     });
// }

// async function ExecuteFunction() {
//     var newData = "Jenil";
//     var getPromise = await returnPromises();
//     console.log(getPromise)
//     console.log(newData);
// }

// ExecuteFunction();





//not-blocking main thread

// async function fun() {
//     console.log("waiting for response");

//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//     let response = await fetch(url);

//     console.log("converting to json");

//     let user = await response.json();
//     console.log(user);

//     console.log("response got")
// }

// fun();
// fun();
// console.log("hello")

