main();

function main() {
  const number = 7,
    comparer = 5;

  const output = document.querySelector("#output");
  output.textContent = moduloEx6(number, comparer);
}

function moduloEx6(number, comparer) {
  let comparisonResult, moduloResult, resultString;

  if (number < comparer) {
    comparisonResult = "less than";
  } else if (number > comparer) {
    comparisonResult = "bigger than";
    moduloResult = number % comparer;
  } else {
    comparisonResult = "equal to";
  }

  resultString = `The number ${number} is ${comparisonResult} ${comparer}`;
  if (moduloResult) {
    resultString += `. But the modulo of ${number} % ${comparer} is ${moduloResult}`;
  }

  return resultString;
}
