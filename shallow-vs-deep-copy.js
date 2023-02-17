/*
//problem 

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala"
}

console.log("before obj", obj);

const newObj = obj 
newObj.firstName = "jenil!";

console.log("after obj",obj);  
console.log("after newObj",newObj);
*/




/*
//solution :  shallow copy - Object.assign({}, object)

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala"
}

console.log("before obj", obj);

const newObj = Object.assign({}, obj);  //copy by data 1 level only
newObj.firstName = "jenil!";

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/



/*
//solution : shallow copy - object destructuring

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala"
}

console.log("before obj", obj);

const newObj = {...obj}  //copy by data 1 level only
newObj.firstName = "jenil!";

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/




/*

//new problem : when more than 1 level is there in object

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala",
    marks : [30, 47, 69, 90]
}

console.log("before obj", obj);

const newObj = {...obj}   // marks are copy by reference
newObj.firstName = "jenil!";
newObj.marks[1] = 100;

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/




/*
//solution : deep copy - using JSON.parse(JSON.stringify(obj)) 

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala",
    marks : [30, 47, 69, 90]
}

console.log("before obj", obj);

const newObj = JSON.parse(JSON.stringify(obj)) 
newObj.firstName = "jenil!";
newObj.marks[1] = 100;

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/




/*

//Again one problem : in newObj date will be displayed in new format and functions will be removed.

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala",
    marks : [30, 47, 69, 90],
    date : new Date(),
    display : function (){
        console.log(this.firstName, this.lastName);
    }
}

console.log("before obj", obj); 

const newObj = JSON.parse(JSON.stringify(obj))  
newObj.firstName = "jenil!";
newObj.marks[1] = 100;

// //it will give error
// newObj.display()   

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/




/*

//solution : lodash library

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala",
    marks : [30, 47, 69, 90],
    date : new Date(),
    display : function (){
        console.log(this.firstName, this.lastName);
    }
}

console.log("before obj", obj); 

const newObj = _.cloneDeep(obj) 
newObj.firstName = "jenil!";
newObj.marks[1] = 100;
  

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/




/*

//another example using lodash library

const obj = {
    firstName : "Jenil",
    lastName : "Bhalala",
    marks : [30, 47, 69, 90,[12,34]],
    date : new Date(),
    abc: {
        hello:{
            hii:{
                world:"hii this is jenil"
            }
        }
    },
    display : function (){
        console.log(this.firstName, this.lastName);
    }
}

console.log("before obj", obj); 

const newObj = _.cloneDeep(obj) 
newObj.abc.hello.hii.world = "jenil!";
newObj.display();
newObj.marks[4][1] = 100;
  

console.log("after obj",obj);  
console.log("after newObj",newObj);

*/