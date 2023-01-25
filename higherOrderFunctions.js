
// //map function

// const arr = [10, 4, 5, 3];

// //double the array
// let output = arr.map(x => x*2) //higher order functions

// // function double(x){
// //     return x*2;
// // }

// console.log(output)


// //binary of array
// output = arr.map(convertToBinary);

// function convertToBinary(x){
//     return x.toString(2);
// }

// console.log(output)




// //filter function

// const arr = [10, 2, 5, 6];
// const output = arr.filter(x => x%2==0);

// // function isEven(x){
// //     return x%2==0
// // }

// console.log(output)





//reduce function : iterate over all array elements and reduce to single value

// //normal way
// const arr = [10, 3, 6, 7, 8, 1];

// function sumOf(){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }

//     return sum;
// }

// console.log(sumOf())


// //using reduce function
// const arr = [10, 3, 6, 7, 8, 1];

// const output = arr.reduce(function(max, curr){
//     if(max < curr){
//         max = curr;
//     }
//     return max;
// }, 0)

// console.log(output);





// //exmples
// const users = [
//     {firstName: "Jenil", lastName: "Bhalala", age: 21},
//     {firstName: "Donald", lastName: "Trump", age: 75},
//     {firstName: "Elon", lastName: "Musk", age: 50},
//     {firstName: "Bhavin", lastName: "Babariya", age: 21},
// ];

// //age < 30 users name
// const output = users.filter(x => x.age <= 21).map(x => x.firstName);
// console.log(output);



// const users = [
//     {firstName: "Jenil", lastName: "Bhalala", age: 21},
//     {firstName: "Donald", lastName: "Trump", age: 75},
//     {firstName: "Elon", lastName: "Musk", age: 50},
//     {firstName: "Bhavin", lastName: "Babariya", age: 21},
// ];

// //age < 30 users name using reduce function
// const output = users.reduce(function(acc, curr){
//     if(curr.age <= 21){
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, [])

// console.log(output);