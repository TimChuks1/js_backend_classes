// let item1 = "milk";
// let item2 = "milo";
// let item3 = "rice";

// let items = ["milk", "milo", "rice"];

// console.log(items[0]);
// console.log(items.length);

// // Array methods (Higher order array)
// //forEach
// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let names = ["esther", "john", "doe", "jane", "smith"];

// // (declarative function)
// fruits.forEach(function (item) {
//   let result = "I eat " + item;
//   console.log(result);
// });

// // (arrow function)
// names.forEach((item) => {
//   let result1 = "TECH_CRUSH_2026_COHORT_6 " + item;
//   console.log(result1);
// });

// // map method
// let scores = [90, 80, 70, 60, 50];
// let newScores = scores.map((score) => score + 5);
// console.log(newScores);

// let newScores1 = scores.map((x) => {
//   console.log("as a good teacher, I decided to add 5 marks to all my students");
//   return x + 5;
// });
// console.log(newScores1);

// let students = ["esther", "john", "doe", "jane", "smith"];

// let nameTag = students.map((tag) => {
//   return "TECH_CRUSH_2026_COHORT_6 " + tag;
// });
// console.log(nameTag);

// // filter()
// let jambScores = [200, 250, 300, 150, 180, 280, 290, 100];

// let passed = jambScores.filter((score) => {
//   return score >= 200;
// });
// console.log(passed);

// let failed = jambScores.filter((score) => {
//   return score < 200;
// });
// console.log(failed);

// let ages = [18, 25, 30, 15, 20, 35, 40];
// let adults = ages.filter(function (age) {
//   return age >= 18;
// });
// console.log(adults);

// // find()
// const studentsNames = ["John", "Ada", "Doe", "Jane", "Smith", "Bola", "John"];
// const found = studentsNames.find((name) => {
//   return name === "John";
// });
// console.log(found);

// // reduce
// const cartPrices = [1500, 800, 2200, 450, 1000];
// const total = cartPrices.reduce(function (accumulatedTotal, currentPrice) {
//   return accumulatedTotal + currentPrice;
// }, 0);
// console.log(total);

// const grandTotal = cartPrices.reduce((acc, Price) => acc + Price, 0);
// console.log(total);

// Other array methods
// push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow");
console.log(colors);

let removeEnd = colors.pop();
console.log(colors);
console.log(removeEnd);

let addBeginning = colors.unshift("purple");
console.log(colors);

let removeBeginning = colors.shift();
console.log(colors);
console.log(removeBeginning);
