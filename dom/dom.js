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







