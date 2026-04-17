let students = ["Amara", "Bola", "Chidi", "Dara"];
for (let student of students) {
  console.log("Welcome, " + student + "!");
}

let scores = [92, 75, 58, 88, 43];
for (let score of scores) {
  if (score >= 90) {
    console.log(score + " -> Grade A");
  } else if (score >= 70) {
    console.log(score + " -> Grade B");
  } else if (score >= 50) {
    console.log(score + " -> Grade C");
  } else {
    console.log(score + " -> FAIL");
  }
}
