//what is the purpose for using this set and map instead of regular arrays and objects ?
// Sets only allow for unique values of different data type to be in them, allowing you to avoid duplicates. Maps you can easily get the size,  insertion order is maintained, and the keys can be any value.

"use strict"
let arr = [1,2,3,4];
let mySet = new Set(arr);


mySet.add("100");     //Set(4) { 1, 2, 4, '100' } store elements opf different type
mySet.delete (3);
mySet.add({name: 'rauf', number: 18}); //store an object in set.
// mySet.clear();   clear the set


//for printing all the value of Set
mySet.forEach(function(val){
    console.log(val);
})

//for printing all the value of array
arr.forEach(function(val){
    console.log(val);
})

let carWeakSet = new WeakSet();
let car1 ={
    make : 'Honda',
    model : 'Civic'
}
carWeakSet.add(car1);
let car2 ={
    make : 'toyota',
    model : 'Camry'
}
carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet);


