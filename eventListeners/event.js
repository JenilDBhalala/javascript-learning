// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');


// //capturing happens first then bubbling happens

// //when we click on child element then all parent events also called from bottom to top manner, this is known as bubbling.
// document.addEventListener('click', e => {
//     console.log("Document")
// })

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent-1")
// })

// parent.addEventListener('click', e => {
//     console.log("Parent-1")
//     // //imediately stop the bubbling or capturing propagation
//     // e.stopPropagation()
// })

// child.addEventListener('click', e => {
//     console.log("Child-1")
// })



// //when we click on child element then all parent events also called from top to bottom manner, this is known as capturing.
// document.addEventListener('click', e => {
//     console.log("Document")
// }, {capture : true})

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent-1")
// }, {capture : true})

// parent.addEventListener('click', e => {
//     console.log("Parent-1")
// }, {capture : true})

// child.addEventListener('click', e => {
//     console.log("Child-1")
//     console.log()
// }, {capture : true})





// document.addEventListener('click', e => {
//     console.log("Document")
// })

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent-1")
// })

// //run only once
// parent.addEventListener('click', e => {
//     console.log("Parent-1")
// }, {once : true})

// child.addEventListener('click', e => {
//     console.log("Child-1")
// })





// document.addEventListener('click', e => {
//     console.log("Document")
// })

// grandparent.addEventListener('click', e => {
//     console.log("Grandparent-1")
// })

// parent.addEventListener('click', displayHello)

// child.addEventListener('click', e => {
//     console.log("Child-1")
// })

// function displayHello(){
//     console.log("Hello")
// }

// //remove this event after 3 seconds but function must be same
// setTimeout(()=>{
//     parent.removeEventListener('click', displayHello)
// },3000)



// //understanding event-delegation

// const divs = document.querySelectorAll("div");

// divs.forEach((div) => {
//     div.addEventListener('click', e => {
//         console.log("hiii");
//     })
// })

// const newdiv = document.createElement('div');
// newdiv.style.height = "200px";
// newdiv.style.width = "200px";
// newdiv.style.backgroundColor = "yellow";

// //if we click on new div then it will not print hii now
// document.body.append(newdiv)





// //event delegation example : give event to parent if every child elements want that event
// const div = document.querySelector(".container");
// div.addEventListener('click', e => {
//     console.log("hiii");
// })

// const newdiv = document.createElement('div');
// newdiv.style.height = "200px";
// newdiv.style.width = "200px";
// newdiv.style.backgroundColor = "yellow";

// //if we click on new div then it will not print hii now
// div.append(newdiv)
