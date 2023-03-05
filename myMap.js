// let myMap = new Map([['a1', 'Hello'],['b2','World']]);
// // console.log(myMap);
// myMap.set('c3','!')
// myMap.delete('b2')
// console.log(myMap);
let carWeakmap = new WeakMap();
let key = {
    id: 1
}
let car1 ={
    make : 'Honda',
    model : 'Civic'
}
carWeakmap.set(key,car1);
console.log(carWeakmap);