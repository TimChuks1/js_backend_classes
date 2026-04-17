const msg = "   Hello, WORLD!   ";

// 1
let trimmedmsg1 = msg.trim();
console.log(trimmedmsg1);

// 2
if (msg.startsWith("Hello")) {
  console.log("true");
} else {
  console.log("false");
}

// 3
if (msg.endsWith("WORLD!")) {
  console.log("true");
} else {
  console.log("false");
}

// 4
let lowercaseMsg = msg.toLowerCase();
console.log(lowercaseMsg);

// 5
let position = msg.indexOf("WORLD");
console.log(position);

// 6
let replacedWorld = msg.replace("WORLD", "Nigeria");
console.log(replacedWorld);

// 7
let replacedAllL = msg.replaceAll("L", "1");
console.log(replacedAllL);

// 8
let getText = msg.slice(3, 9);
console.log(getText);
