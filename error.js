// try {
//   let result = 10 / 0;
//   console.log(result);
//   undefinedFunction(); // This will cause an error!
//   console.log("This line will NOT run.");
// } catch (error) {
//   // This runs ONLY if something goes wrong
//   console.log("An error occurred: " + error.name + " " + error.message);
// }
// console.log("This program continues here.");

// try {
//   let age = 25;
//   console.log(age.length());
// } catch (error) {
//   console.log("An error occurred: " + error.name, error.message, error.stack);
// }

// try {
//   let;
// } catch (error) {
//   console.log("This is error");
//   console.log(error.name);
//   console.log(error.message);
//   // console.log(error.stack);
// }

// console.log("I can still run");

function loadingUserData(userId) {
  console.log("Starting to load data...");
  try {
    if (userId <= 0) {
      throw new Error("User ID must be greater than 0");
    }
    console.log("Data loaded for user: " + userId);
  } catch (error) {
    console.log("Failed: " + error.message);
  } finally {
    console.log("Loading complete. Closing connection.");
  }
}
// loadingUserData(5);
// loadingUserData(-1);

// Throw and Error keyword
// A comment
function registerStudent(name, age) {
  try {
    if (!name || name.trim() === "") {
      throw new Error("Name cannot be empty!");
    }
    if (age < 16 || age > 60) {
      throw new Error("Age must be between 16 and 60. Got: " + age);
    }
    console.log("Student registered: " + name + ", Age: " + age);
  } catch (error) {
    console.log("Registration failed: " + error.message);
  }
}
registerStudent("Chuks Tim", 22);
registerStudent("", 22);
registerStudent("Kemi", 12);
