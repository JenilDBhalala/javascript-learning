// //spread operator

// //concat one array with another array
// const series = ["squidgame", "aliceinborderland", "moneyheist"];
// const anotherseries = [...series, "wednesday", "strangerthings"];
// console.log(anotherseries);

// //convert array to object
// const seriesobj = { ...anotherseries };
// console.log(seriesobj);



// //obejct inside object or array inside object is reference when using spread operator
// const obj = {
//     name : 'jenil',
//     age : 21,
//     marks : [16, 28, 28, 34, 47],
//     sub : {
//         maths : 100,
//         science : 96,
//         computer : 100
//     }
// }

// //marks and sub are reference 
// const newObj = {...obj}
// newObj.sub.physics = 90;
// console.log(obj)
// console.log(newObj);


// //now marks is not reference because we created new array inside newObj
// const newObj = {...obj}
// newObj.marks = [...obj.marks]
// newObj.marks.push(100)
// console.log(newObj);
// console.log(obj);




//rest operator

// //destructuring an array
// const series = ["moneyheist", "squidgame", "aliceinborderland"];

// // const [koreanseries, japaneseseries, spanishseries] = series;
// // console.log(koreanseries, japaneseseries, spanishseries);

// const [spanishseries, ...gameseries] = series;
// console.log(gameseries);



// //destructuring an object
// const seriesobj = {
//   zero: "squidgame",
//   one: "aliceinborderland",
//   two: "moneyheist",
//   three: "wednesday",
//   four: "strangerthings",
// };

// //by default we can use key while destructuring but we can rename it
// const {zero:zeroval, ...gameseries} = seriesobj;

// //zero is undefined now and zeroval is new name instead of zero
// console.log(zeroval)


// //object of object destructuring
// const seriesobj = {
//     gameseries : {
//         zero: "squidgame",
//         one: "aliceinborderland",
//     },
 
//     two: "moneyheist",
//     three: "wednesday",
//     four: "strangerthings"
// };

// const {gameseries : {...favseries}, two, ...anotherseries} = seriesobj;
// console.log(favseries)

