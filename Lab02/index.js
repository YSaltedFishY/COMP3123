// //npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

// //variable subsitution (using back quote)
// let fN = "HaoYun";
// let lN = "Yang";
// let fullName = `Welcome ${fN} ${lN}!`;
// console.log(fullName);

// //
// let price = 10;
// let Tax = 0.25;
// let total = `Total: ${(price * (1 + Tax)).toFixed(3)}`;
// console.log(total);

// // for...of loop
// const arr = [10,20,30];
// for (let v of arr) {
//     console.log(v);
// }

// // Arrow function
// function myFun(){
//     console.log("1: Hello World!");
// }
// myFun();

// function myFun2(a) { return a+2;}
// var v = myFun2(3);
// console.log(v);

// //Assign function to variable
// var hello = function() {
//     console.log("1: Hello World!");
// }
// hello();
// hello = function(){return "2: Hello World!";}
// console.log(hello());

// // we can't use arrow function non-return function
// //because the value of variable will be undefined
// hello = () => {
//     console.log("temp: hello world");
// }
// console.log(hello());
// hello = () => { 
//     return "3: Hello World!";
// }
// console.log(hello());

// // arrow fun with return value: there is no needs return statement
// hello = () => "4: Hello World!";
// console.log(hello());

// //with parameter
// hello = (val) => "Hello " + val;
// console.log(hello("me!"));

// // Two parameters
// function add(a, b) {return a +b;}
// console.log("adding function: " + add(2, 3));

// // Const arrow function
// const addArrow = (a, b) => a + b;
// console.log("Using arrow function:" + addArrow(2, 3));

// // using subsititution with arrow function
// let currency = n => `$${n}`
// console.log(currency(80));

// // Spread Operator
// // The JavaScript spread operator (...) allows us to quickly
// // Copy all or part of an existing array or object into another array or object
// const arrOne = [1,2,3];
// const arrTwo = [4,5,6];
// const arrComb = [...arrOne,...arrTwo];
// console.log(arrComb);
// // The spread operator is often used in combination with destructring
// const Num = [9,8,3,4,5,6];
// const [v1,v2, ...remain] = Num; // [v1,v2,...remain] is a collection of variables
// console.log(v1,v2,"-",remain);

// // split string
// var s = "hello";
// var arrS=s.split("");
// console.log(arrS);
// //Join Array
// var s2=arrS.join("");//If is .join("$") the output will be h$e$l$l$o
// console.log(s2);

// // //spread operator with functions
// var myArr=[1,8,5,7];
// const addTwoToFirstItem = ([v1,...rem]) => (v1+2);
// console.log("adding to myArr: " + addTwoToFirstItem(myArr));

// function capFC1(s) {return s[0].toUpperCase() + s.slice(1);}
// console.log(capFC1("hello"));
// const capFC2 = ([fl, ...rw]) => fl.toUpperCase() + rw.join("");
// console.log(capFC2("heLLo"));

// //Array.prototype.map
// //The map() method creates a new array by applying
// //a given function to each element of the original array.
// var num = [1,4,9,4,16];
// var newNum1 = num.map((n) => Math.sqrt(n));
// console.log(newNum1);

// const add3 = v => v+3;
// var newNum2 = num.map((n) => add3(n));
// console.log(newNum2);

// //Array.prototype.filter
// //The filter() method creates a new array containing only
// //elements that satisfy a specificed condition
// var num2 = [12,5,8,130,44];
// var f1 = num2.filter((val) => val >= 10);
// var f2 = [12,5,8,130,44].filter((val)=>val>=10);
// console.log(f1);
// console.log(f2);

// //Filter with Function
// function isBig(v){return v>= 10;}
// var f3 = [12,5,8,130,44].filter(isBig);
// console.log(f3);

// var words = ['spray','elite','exuberant','destruction','present'];
// var r = words.filter((word) => word.length >6);
// console.log(r);

// //The Array.prototype.reduce() method is used in an array to return a 
// //Single value from an array executing the callback function (like loop) on each element of the array.
// const arrRed=[10,18,30,41,60];
// const myReducer = (t,e) => t+e;
// //10 + 18 + 30 + 41 + 60
// console.log(arrRed.reduce(myReducer));
// //add initail value for total = 20
// console.log(arrRed.reduce(myReducer, 20));//179

// //Class
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         //console.log("Hi");
//     }

//     setName(n) {this.name=n};
//     getName() {return this.name};

//     setAge(a) {this.age = a;};
//     getAge() {return this.age;};

//     details(){
//         var det = this.name+", "+this.age;
//         return det;
//     }

// }

// const person1 = new Person("Sara",30);
// person1.setName("Jordan");
// console.log(person1.name);
// console.log(person1.age);

// console.log("Details: " + person1.details());

// //Super and subclass
// class Car {
//     constructor(brand){this.brand = brand;}
//     setCarName(){return 'I have a '+this.brand}
// }

// class Model extends Car{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }

//     show(){
//         return this.setCarName() + ', it is a '+ this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

//Exports Modules with functions or variables can be stored in any external file.
// var msg=require("./message.js");

// console.log(msg.name);

var msg=require("./message.js");

console.log(msg.name);
console.log(msg.sum(5,3));
console.log(msg.myCars);
console.log(msg.myCars[1]);
let mycar = new msg.car("Mazda");
console.log(mycar.model());
let myage = new msg.myClass(24);
console.log(myage.Age);