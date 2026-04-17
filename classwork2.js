// 1. create a new array where each number is doubled
const numbers = [1, 2, 3, 4, 5];
let numberDoubled = numbers.map((number) => {
  return number * 2;
});
console.log(numberDoubled);

// 2. return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];
let newScores = scores.filter((score) => score >= 300);
console.log(newScores);

const scores1 = [250, 300, 350, 200, 400, 180, 160];
let newScores1 = scores.map((score) => score >= 300);
console.log(newScores1);

// 3. get me sum of all items in the array
const sum = [2000, 3000, 400, 100, 600];
let total = sum.reduce((acc, price) => acc + price, 0);
console.log(total);

// 4. add "green" to the end of the array and remove "red" from the array
const colors = ["blue", "yellow", "red"];
let addGreen = colors.push("green");
console.log(colors);

const colors1 = ["blue", "yellow", "red"];
let removeRed = colors1.pop();
console.log(colors1);
