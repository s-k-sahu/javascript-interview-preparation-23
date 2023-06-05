// ? What are the possible ways to create objects in JavaScript
// * we can create object in javascript in 7 ways * //

// ! way -1 using constructor

const obj1 = new Object(); //empty object
// const obj1 = new Object(null)//empty object

console.log(obj1);
console.log(typeof obj1);

// ! way -2 using object method
let obj2 = Object.create({});
// let obj2 = Object.create(null)
console.log(obj2);
console.log(typeof obj2);

// ! way -3 using object literal
// let obj3 = {}
let obj3 = {
  name: "ashok",
};
console.log(obj3);
console.log(typeof obj3);

// ! way -4 using function constructor
function Obj(age) {
  this.age = age;
}
// function obj4() {
//   return true;
// }

const obj4 = new Obj(20);
console.log(obj4);
console.log(typeof obj4);

// ! way -5 using class [ES6]
class Obj5 {
  constructor(age) {
    this.age = age;
  }
  getAge() {
    return this.age + 5;
  }
}

const obj5 = new Obj5(28);
console.log(obj5.age);
console.log(obj5.getAge());
console.log(obj5);
console.log(typeof obj5);

// ! way -6 using optional change (prototype) - prototype inheritance
function Obj6() {}
Obj6.prototype.age = 20
let obj6 = new Obj6()

console.log(obj6)
console.log(typeof obj6)
console.log(obj6.age)

// ! way -7 using singleton pattern
// const obj7 = (function(){
//     // return true
// })()
const obj7 = new (function(){
    this.age = 29
})()

console.log(obj7)
console.log(typeof obj7)

