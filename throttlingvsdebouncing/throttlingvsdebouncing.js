//debouncing

let counter1 = 0;
const getData1 = () => {
    console.log("Fetching Data...", counter1++);
}

const doSomeMagic1 = function (fn1, d1=300){
    let timer1;
    return function() {
        clearTimeout(timer1);

        timer1 = setTimeout(()=>{
            fn1();
        }, d1);
    }
}

const betterFunction1 = doSomeMagic1(getData1, 300)





//throttling
let counter = 0;
const getData = () => {
    console.log("Fetching Data...", counter++);
}

const doSomeMagic = function (fn, delay){
    let prev = 0;
    return function() {
        let now = new Date().getTime();

        console.log(now-prev, now, prev,delay);

        if(now - prev> delay){
            prev = now;
            fn()
        }
    }
}

const betterFunction = doSomeMagic(getData, 3000)





/*

//throttling

let counter = 0;
const getData = () => {
    console.log("Fetching Data...", counter++);
}

const doSomeMagic = function (fn, d){
    let flag = true;
    return function() {
        if(flag){
            fn()
            flag = false;
        }
        
        setTimeout(()=>{
            flag = true;
        }, d);
    }
}

const betterFunction = doSomeMagic(getData, 3000)

*/