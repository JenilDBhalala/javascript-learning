// map
const map = new Map();
map.set("hello", 4)
map.set("jenil", 3)

for(const [key, value] of map){
  console.log(key, value)
}



// set
const set = new Set();
set.add(2);
set.add(3);
set.add(4);
set.add(2);
set.add(3);

for(const value of set){
  console.log(value)
}