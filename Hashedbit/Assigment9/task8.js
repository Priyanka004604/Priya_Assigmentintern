const person = {
  name: "Om",
  age: 25,
  occupation: "Developer"
};
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getObjectKeys(person));