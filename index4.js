import { users } from "./data.js";

const onlyMaleUsers = users
  .filter((users) => users.gender === "male")
  .map(
    (users) =>
      users.name.first + " " + users.name.last + " is " + users.dob.age + " old"
  );
// ? male
// : users.name.title + " " + users.name.first + " " + users.name.last

console.log(onlyMaleUsers);
