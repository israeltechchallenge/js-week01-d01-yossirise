function moduloEx5(num1, num2) {
  let comparisonResult, moduloResult, loggedString;

  if (num1 < num2) {
    comparisonResult = "less than";
  } else if (num1 > num2) {
    comparisonResult = "bigger than";
    moduloResult = num1 % num2;
  } else {
    comparisonResult = "equal to";
  }

  loggedString = `The number ${num1} is ${comparisonResult} ${num2}`;
  if (moduloResult) {
    loggedString += `. But the modulo of ${num1} % ${num2} is ${moduloResult}`;
  }

  console.log(loggedString);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
