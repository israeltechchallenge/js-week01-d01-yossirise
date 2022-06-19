function compareNumbers(compareNum, toNum) {
  let comparisonResult;

  if (compareNum < toNum) {
    comparisonResult = "less than";
  } else if (num > toNum) {
    comparisonResult = "bigger than";
  } else {
    comparisonResult = "equal to";
  }

  console.log(`The number ${compareNum} is ${comparisonResult} ${toNum}`);
}

// Do not remove or change this line, or the tests won't work
export { compareNumbers };
