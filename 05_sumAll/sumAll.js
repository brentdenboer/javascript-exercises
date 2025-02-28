const sumAll = (val1, val2) => {
  if (
    !isNumberPositive(val1) ||
    !isNumberPositive(val2) ||
    !Number.isInteger(val1) ||
    !Number.isInteger(val2) ||
    Number.isNaN(val1) ||
    Number.isNaN(val2)
  ) {
    return "ERROR";
  }

  let finalSum = 0;

  let start = val1;
  let end = val2;

  if (val1 > val2) {
    start = val2;
    end = val1;
  }

  for (let value = start; value <= end; value++) {
    finalSum += value;
  }

  return finalSum;
};

function isNumberPositive(num) {
  if (num >= 0) {
    return true;
  }
  return false;
}

// Do not edit below this line
module.exports = sumAll;
