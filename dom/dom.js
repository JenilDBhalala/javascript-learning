// const parent = document.querySelector('#parent');

// //works for adding new elementnode
// const child = document.createElement('div');
// parent.append(child);

// // // child.innerHTML = "Hello I am new added textnode"

// //works for adding new textnode also
// child.append("Hello I am new added textnode")


// //works for adding new elementnode only
// const newchild = document.createElement('div');
// child.appendChild(newchild)

// // //not works for adding new textnode throws type error
// // child.appendChild('Hello I am new added textnode');




// // <!-- beforebegin -->
// // <p>
// //   <!-- afterbegin -->
// //   foo
// //   <!-- beforeend -->
// // </p>
// // <!-- afterend -->

// const parent = document.querySelector('#parent');

// parent.insertAdjacentHTML('afterbegin', "<p id='first-child'>i am first-child p</p>");
// parent.insertAdjacentHTML('beforeend', "<div id='last-child'>i am last-child div</div>");

// const lastchild = document.querySelector('#last-child');
// lastchild.insertAdjacentHTML('afterbegin', 'Hello World');

// const child = document.createElement('div');
// lastchild.insertAdjacentElement('afterbegin', child);





// //matches, contains and closest functions
// let parent = document.getElementById('parent');
// let child1 = document.getElementById('child1');
// let hello1 = document.getElementById('hello1');
// let hello2 = document.getElementById('hello2');

// //matches function  : ele.matches(selector)
// console.log(child1.matches('.child1-class'))
// console.log(parent.matches('.child1-class'))


// //contains function : ele.contains(ele)
// console.log(parent.contains(child1));
// console.log(parent.contains(hello1));
// console.log(parent.contains(hello2));
// console.log(child2.contains(hello1));


// //closest function : ele.closest(selector)
// console.log(hello1.closest('.hello1-class'))
// console.log(hello1.closest('.parent-class'))
// console.log(hello1.closest('.child1-class'))
// console.log(hello1.closest('.child2-class'))  //null