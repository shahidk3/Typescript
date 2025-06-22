"use strict";
const a = 3344;
console.log(a);
// use tsc sample.tsc -w this is watcher and helps to continuously watch over ts file and not compile everytime
let b = "{23}";
let nambo = 343;
let namee = "Shahid";
//union data types
let surname;
surname = 12;
surname = "khan";
//arrays
const arr = [1, 2, 3, 4, 5];
const arr2 = ["Hello", "world"];
// another and better way to declare array 
const arr3 = [];
const arr1 = ["Hello", 123];
;
const obj = {
    height: 179,
    weight: 70,
    gender: "Male",
};
//optional parameter
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
//default parameter
const func1 = (n, m, l = 20) => {
    return n * m * l;
};
func1(22, 30);
//funcations with objects 
const getData = (product) => {
    console.log(product);
};
