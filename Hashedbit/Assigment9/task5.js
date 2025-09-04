const numbers = [1, 2, 3, 4, 5];
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers(numbers));