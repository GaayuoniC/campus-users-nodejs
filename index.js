import { users } from "./data.js";

const FirstLastNames = users.map(
  (users) =>
    users.name.first +
    " " +
    users.name.last +
    " is from " +
    users.location.country
);

console.log(FirstLastNames);
