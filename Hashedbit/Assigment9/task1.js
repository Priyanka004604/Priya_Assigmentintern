function scopeTest() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a, b, c);
}
scopeTest();