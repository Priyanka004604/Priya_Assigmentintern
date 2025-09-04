const numArray = [10, 20, 30, 40];
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}
console.log("Sum of array:", sumArray(numArray));