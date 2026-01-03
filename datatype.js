//Q no 1
let string = "Ayumi";
console.log("Value:", string);
console.log("Type:", typeof string);
let number = 20;
console.log("Value:", number);
console.log("Type:", typeof number);
let bool = true;
console.log("Value:", bool);
console.log("Type:", typeof bool);
let Undefined;
console.log("Value:", undefined);
console.log("Type:", typeof undefined);
//Q no 2 
let num= 6;
let str= "4";
console.log (num+str);
//Q no 3
let fruits = ["Apple","Litchi","Mango","Orange","Banana"];
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
//Q no 4
let student = {
    name: "Ayumi",
    age:20,
    grade: "A"
};
console.log  ("student's name is", student.name);
console.log  ("student's age is", student.age);
console.log  ("student's grade is", student.grade);
//Q no 5
let numbers = [20, 30, 40, 50]; // Array because it is inside []
let city = "Chitwan";  //  Not an array, just a string
console.log(Array.isArray(numbers)); 
console.log(Array.isArray(city));