import { users } from "./data.js";

const onlyFemales = users.map((users) =>
  users.gender.female 
    ?  "female"
    : users.name.title + " " + users.name.first + " " + users.name.last
);

console.log(onlyFemales);
