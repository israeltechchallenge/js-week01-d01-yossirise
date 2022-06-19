function modulo(num1, num2) {
  let comparisonResult, moduloResult;

  if (num1 < num2) {
    comparisonResult = "less than";
  } else if (num1 > num2) {
    comparisonResult = "bigger than";
    moduloResult = num1 % num2;
  } else {
    comparisonResult = "equal to";
  }

  console.log(`The number ${num1} is ${comparisonResult} ${num2}`);
  if (moduloResult) {
    console.log(`The modulo of ${num1} % ${num2} is ${moduloResult}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };
