function modifyArray(arr) {
  arr.push("NewElement");
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray(["One", "Two", "Three"]));