const person = {
  name: "Om",
  age: 25,
  occupation: "Developer"
};
function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}, I'm ${obj.age} years old and I work as a ${obj.occupation}.`);
}
greetPerson(person);