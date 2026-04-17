// .length
// let stringText = "This is a class on string methods";
// console.log(stringText.length);

// let arr = ["Esther", "Hello world!"];
// console.log(arr.length);

// .toUpperCase() AND .toLowerCase()
// let capitalLetter = stringText.toUpperCase();
// let smallLetter = stringText.toLowerCase();
// let capitalLetter1 = stringText.toLocaleUpperCase();
// let smallLetter1 = stringText.toLocaleLowerCase();
// console.log(capitalLetter);
// console.log(smallLetter);
// console.log(capitalLetter1);
// console.log(smallLetter1);
// console.log(stringText);

// .trim()
// let str = "  Hello, World!  ";
// let trimmedStr = str.trim();
// let frontTrimmedStr = str.trimStart();
// let endTrimmedStr = str.trimEnd();

// console.log(trimmedStr);
// console.log(frontTrimmedStr);
// console.log(endTrimmedStr);

// let signupName = " Esther";
// let signinName = "Esther";

// if (signupName === signinName) {
//   console.log("Welcome back, Esther");
// } else {
//   console.log("invalid login information");
// }

// if (signupName.trim() === signinName) {
//   console.log("Welcome back, Esther");
// } else {
//   console.log("invalid login information");
// }

// indexOf and includes
// let user_email = "chukwuka@timothy1@gmail.com";
// let email_index = user_email.indexOf("@");
// let email_index1 = user_email.indexOf("$");
// let email_index2 = user_email.indexOf("a@");
// console.log(email_index);
// console.log(email_index1);
// console.log(email_index2);

// let email_contains_at = user_email.includes("@");
// let email_contains_at1 = user_email.includes("$");
// console.log(email_contains_at);
// console.log(email_contains_at1);

// .startWith() AND .endsWith()
// let userName = "techCrush Chuks 6";
// let starts = userName.startsWith("techCrush");
// console.log(starts);

// let ends = userName.endsWith("6");
// console.log(ends);

// .slice() AND substring()
// let testString = "my name is Esther";
// let slicedString = testString.slice(4, 10);
// let substringString = testString.substring(0, 10);
// let slicedString1 = testString.slice(11);
// let substringString1 = testString.substring(11);
// let slicedString2 = testString.slice(-8);
// let substringString2 = testString.substring(-8);
// console.log(slicedString);
// console.log(substringString);
// console.log(slicedString1);
// console.log(substringString1);
// console.log(slicedString2);
// console.log(substringString2);

// .replace() AND .replaceAll()
// let text = "Esther is a techie. Esther loves coding and Esther loves game";
// let replacedText = text.replace("Esther", "She");
// let replaceAllText = text.replaceAll("Esther", "She");
// console.log(replacedText);
// console.log(replaceAllText);

// .spli()
// const sentence = "LANGUAGES: JavaScript, Python, Java, C++";
// let splitSentence = sentence.split(",");
// let splitSentence1 = sentence.split(" ");
// let splitSentence2 = sentence.split("");
// console.log(splitSentence);
// console.log(splitSentence1);
// console.log(splitSentence2);

// .join()
// const colours = ["red", "green", "blue"];
// const joined = colours.join(" - ");
// console.log(joined);

// console.log(["Chuks", "Tim", "Lea"].join(" - "));

// padStart(), padEnd() AND repeat()
let idNumber = "42";
let idStart = idNumber.padStart(5, "0");
console.log(idStart);
let idEnd = idNumber.padEnd(5, "-");
console.log(idEnd);
