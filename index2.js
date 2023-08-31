import { users } from "./data.js";

const onlyFemales = users
.filter((users) => users.gender === "female")
.map((users) => users.name);
// ? male
// : users.name.title + " " + users.name.first + " " + users.name.last

console.log(onlyFemales);
