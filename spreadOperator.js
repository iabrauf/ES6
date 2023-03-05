let args =[1,2,3];
let args2 = [4,5,6];
function test(){
    console.log(args);
}
function test2(){
    console.log(args+' '+args2);
}
//test.apply (null,args);   //In ES5
test(...args);   //In ES6
test2(...args,...args2); 