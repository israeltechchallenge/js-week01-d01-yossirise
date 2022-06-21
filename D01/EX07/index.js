main();

function main() {
  const number = getRandomInt(100),
    comparer = getRandomInt(100);

  const output = document.querySelector("#output");
  output.textContent = moduloEx7(number, comparer);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function moduloEx7(number, comparer) {
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
