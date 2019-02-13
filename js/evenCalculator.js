function evenCalc(number1) {
  return number1%2;
}
  var rem = evenCalc(parseInt(prompt("Enter a number: ")));

  if (rem == 0) {
  alert("The number is even");
  }
  else {
  alert("This number is not even");
}
