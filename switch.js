let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("New week, fresh start!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It is the weekend! Rest up.");
    break;
  default:
    console.log("Keep going, midweek grind!");
}

let role = "viewer";

switch (role) {
  case "Admin":
    console.log("Full Access");
    break;
  case "Editor":
    console.log("You can edit");
    break;
  default:
    console.log("Oops!");
}
