let str = "Coding is fun";

let word = str.slice(0, 6);
console.log(word);

let word1 = str.slice(10, 13);
console.log(word);

let word2 = str.substring(7, 9);
console.log(word1);

const colors = "red, green, blue";
let comma = colors.split(",");
console.log(comma);

const joined = comma.join(" -");
console.log(joined);

console.log("Chuks Tim Lea".split(" ").join(" - "));

const url = "/api/v1/users";
const slash = url.split("/");
console.log(slash[2]);

const email = "test@school.edu";
const get = email.split("@");
console.log(get[0]);
if (email.endsWith(".edu")) {
  console.log("true");
}
const replaceText = email.replace("@", "AT");
console.log(replaceText);

function addition(a, b) {
  return a + b;
}
let result = addition(4, 6);
console.log(result);
