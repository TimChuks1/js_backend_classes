// let obj = {
//   name: "Chuks Tim",
//   age: 31,
//   profession: "Backend Developer",
//   isStudent: "false",
// };
// console.log(obj.name);
// console.log(obj["name"]);

// let phone = {
//   brand: "Samsung",
//   model: "Galaxy S22",
//   price: 350000,
// };

// // to add to object
// phone.color = "Phantom Black";
// phone.design = "flat";
// console.log(phone);

// // to add to update the existing object
// phone.price = 320000;
// console.log(phone);

// // to delte from object
// delete phone.design;
// console.log(phone);

// // DESTRUCTURING
// let employee = {
//   name: "Tim Chuks",
//   profession: "FrontEnd Developer",
//   salary: "450000",
//   city: "Lagos",
// };

// // either (long way)
// let newName = employee.name;
// let newProfession = employee.profession;

// console.log(newName, newProfession);

// // or (short way)
// const { name, profession, salary, city } = employee;
// console.log(name);
// console.log(profession);
// console.log(salary);
// console.log(city);

// // to rename while destructuring
// const { name: fullName, profession: jobTitle } = employee;
// console.log(fullName, jobTitle);

// // spread
// let updatedEmployee = {
//   ...employee,
//   address: "Awada",
// };
// console.log(updatedEmployee);

// Iterating an object
const user = {
  name: "Chuks",
  age: 31,
  isMale: "true",
  city: "Anambra",
  course: "Backend Engineering",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// 1. for...in: loops through each KEY
for (let key in user) {
  console.log("1: " + key); //gets the keys
  console.log("first: " + user[key]); //gets the values
}
