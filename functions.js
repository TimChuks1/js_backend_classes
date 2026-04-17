// Functions
function greet() {
  console.log("Welcome back, Chuks");
}
greet();

function farewell(name) {
  console.log("see you again" + " " + name);
}

farewell("Chuks");

// static function
function add() {
  let a = 5;
  let b = 10;
  return a + b;
}
console.log(add());

function addition(a, b) {
  return a + b;
}
console.log(addition(10, 3));

function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(16));
console.log(isAdult(18));
