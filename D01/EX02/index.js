function isBiggerThan(num) {
  let compareTo4;

  if (num < 4) {
    compareTo4 = "less than";
  } else if (num > 4) {
    compareTo4 = "bigger than";
  } else {
    compareTo4 = "equal to";
  }

  console.log(`The number ${num} is ${compareTo4} 4`);
}

// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
