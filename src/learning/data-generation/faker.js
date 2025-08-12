// import { faker } from "@faker-js/faker";
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Česká lokalizace - nemusí umět vygenerovat všechno v češtině

const firstName = faker.person.firstName("female");
const lastName = faker.person.lastName("female");

const username = faker.internet.username({
  firstName: firstName,
  lastName: lastName,
});
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});

console.log(firstName);
console.log(lastName);
console.log(username);
console.log(email);
